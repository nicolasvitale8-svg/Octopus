import { QuickDiagnosticResult } from '../types';

const STORAGE_KEY = 'octopus_diagnostic_result';
const HISTORY_KEY = 'octopus_diagnostic_history';

export const saveDiagnosticResult = (result: QuickDiagnosticResult) => {
  try {
    // Save current result
    localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
    
    // Add to history (simple implementation)
    const historyStr = localStorage.getItem(HISTORY_KEY);
    const history = historyStr ? JSON.parse(historyStr) : [];
    
    // Add timestamp if not present
    const entry = { ...result, date: new Date().toISOString() };
    
    // Save to history (Keep last 20 for better 'database' simulation)
    const newHistory = [entry, ...history].slice(0, 20);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
    
  } catch (error) {
    console.error('Error saving diagnostic', error);
  }
};

export const getLastDiagnostic = (): QuickDiagnosticResult | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    return null;
  }
};

export const getDiagnosticHistory = (): any[] => {
  try {
    const data = localStorage.getItem(HISTORY_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
};

// New helper for admin purposes to "get all leads"
export const getAllLeads = (): any[] => {
  try {
    const history = getDiagnosticHistory();
    // Filter only entries that have lead data
    return history.filter(h => h.leadData);
  } catch (error) {
    return [];
  }
}

export const clearDiagnostic = () => {
  localStorage.removeItem(STORAGE_KEY);
};