import { QuickDiagnosticData, QuickDiagnosticResult, DeepDiagnosticResult } from '../types';
import { supabase } from './supabase';

const STORAGE_KEY = 'octopus_diagnostic_result';
const HISTORY_KEY = 'octopus_diagnostic_history';
const LEADS_TABLE = 'diagnosticos_express';

// --- SAVE FUNCTIONS ---

export const saveDiagnosticResult = async (
  result: QuickDiagnosticResult,
  input?: QuickDiagnosticData
) => {
  try {
    // 1. Siempre guardar en LocalStorage (UX inmediata + modo offline)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(result));

    const historyEntry = {
      ...result,
      date: new Date().toISOString(),
      type: 'quick',
    };
    saveToHistory(historyEntry);

    // 2. Intentar guardar en Supabase (tabla diagnosticos_express).
    if (!supabase) return;

    const payload: Record<string, any> = {
      business_name: result.leadData?.business || 'Anónimo',
      contact_name: result.leadData?.name || 'Anónimo',
      contact_email: result.leadData?.email || '',
      contact_phone: result.leadData?.phone || '',
      profile_name: result.profileName,
      status: result.status, // 'Verde' | 'Amarillo' | 'Rojo'
      score_global: result.scoreGlobal,
      score_financial: result.scoreFinancial,
      score_7p: result.score7P,
      cogs_percentage: result.cogsPercentage,
      labor_percentage: result.laborPercentage,
      margin_percentage: result.marginPercentage,
      source: 'web_quick_diagnostic',
      full_data: result,
    };

    // Si tenemos el input original, agregamos contexto adicional.
    if (input) {
      payload.city = input.city || null;
      payload.business_type = input.businessType || null;
      payload.monthly_revenue = input.monthlyRevenue || null;
    }

    const { error } = await supabase.from(LEADS_TABLE).insert([payload]);
    if (error) {
      console.error('[storage] insert diagnóstico falló:', error);
    }
  } catch (error) {
    console.error('Error saving diagnostic', error);
  }
};

export const saveDeepDiagnosticResult = (result: DeepDiagnosticResult) => {
  try {
    const historyEntry = {
      date: new Date().toISOString(),
      monthLabel: result.month,
      monthlyRevenue: result.totalSales,
      cogsPercentage: result.cogsPercentage,
      laborPercentage: result.laborPercentage,
      marginPercentage: result.netResult > 0 ? (result.netResult / result.totalSales) * 100 : 0,
      result: result.netResult > 0 ? (result.netResult / result.totalSales) * 100 : 0,
      type: 'deep',
      full_data: result,
    };
    saveToHistory(historyEntry);
    return true;
  } catch (error) {
    console.error('Error saving deep diagnostic', error);
    return false;
  }
};

// Internal helper
const saveToHistory = (entry: any) => {
  const historyStr = localStorage.getItem(HISTORY_KEY);
  const history = historyStr ? JSON.parse(historyStr) : [];
  const newHistory = [entry, ...history].slice(0, 20); // últimos 20
  localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
};

// --- READ FUNCTIONS ---

export const getLastDiagnostic = (): QuickDiagnosticResult | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

export const getDiagnosticHistory = (): any[] => {
  try {
    const data = localStorage.getItem(HISTORY_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

// --- ADMIN FUNCTIONS ---

export const getAllLeads = async (): Promise<any[]> => {
  let supabaseData: any[] | null = null;

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from(LEADS_TABLE)
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      if (data) {
        supabaseData = data.map((row: any) => ({
          id: row.id,
          date: row.created_at,
          profileName: row.profile_name,
          profileDescription: row.full_data?.profileDescription || '',
          status: row.status,
          crmStatus: row.crm_status,
          scoreGlobal: row.score_global,
          scoreFinancial: row.score_financial,
          score7P: row.score_7p,
          cogsPercentage: row.cogs_percentage,
          laborPercentage: row.labor_percentage,
          marginPercentage: row.margin_percentage,
          city: row.city,
          businessType: row.business_type,
          monthlyRevenue: row.monthly_revenue,
          notasConsultor: row.notas_consultor,
          leadData: {
            business: row.business_name,
            name: row.contact_name,
            email: row.contact_email,
            phone: row.contact_phone,
          },
          ...(row.full_data || {}),
        }));
      }
    } catch (error: any) {
      console.warn('[storage] fetch leads falló, fallback a localStorage:', error?.message);
    }
  }

  if (supabaseData) return supabaseData;

  // Fallback: LocalStorage
  const history = getDiagnosticHistory();
  return history.filter(h => h.type === 'quick' || !h.type);
};

export const clearDiagnostic = () => {
  localStorage.removeItem(STORAGE_KEY);
};
