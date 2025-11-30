import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { getAllLeads } from '../services/storage';
import { WHATSAPP_NUMBER } from '../constants';
import { MessageCircle, Search, Download, User, Calendar, FileText } from 'lucide-react';
import Button from '../components/ui/Button';
import { DiagnosticStatus } from '../types';

const AdminLeads = () => {
  const [leads, setLeads] = useState<any[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Load leads from storage service
    const loadedLeads = getAllLeads();
    setLeads(loadedLeads);
  }, []);

  const filteredLeads = leads.filter(lead => 
    lead.leadData?.business?.toLowerCase().includes(filter.toLowerCase()) ||
    lead.leadData?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  const getStatusBadge = (status: DiagnosticStatus) => {
    switch (status) {
      case DiagnosticStatus.RED: return <span className="bg-red-900/30 text-red-400 px-2 py-1 rounded-full text-xs font-bold border border-red-900/50">Crítico</span>;
      case DiagnosticStatus.YELLOW: return <span className="bg-yellow-900/30 text-yellow-400 px-2 py-1 rounded-full text-xs font-bold border border-yellow-900/50">Riesgo</span>;
      case DiagnosticStatus.GREEN: return <span className="bg-green-900/30 text-green-400 px-2 py-1 rounded-full text-xs font-bold border border-green-900/50">Estable</span>;
      default: return null;
    }
  };

  const generateWhatsappLink = (lead: any) => {
    const phone = lead.leadData?.phone?.replace(/\D/g, '') || '';
    // If phone is not valid, fallback to generic
    const target = phone.length > 8 ? phone : WHATSAPP_NUMBER;
    const name = lead.leadData?.name?.split(' ')[0] || 'Hola';
    
    const text = `Hola ${name}, vi tu diagnóstico de Octopus. Veo que tu perfil dio "${lead.profileName}" y me gustaría darte una mano con esos números. ¿Tenés un minuto?`;
    
    return `https://wa.me/${target}?text=${encodeURIComponent(text)}`;
  };

  return (
    <Layout>
      <div className="bg-slate-950 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Base de Datos de Clientes</h1>
              <p className="text-slate-400">Prospectos capturados desde el Autodiagnóstico.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => alert("Descargando Excel...")}>
                <Download className="w-4 h-4 mr-2" /> Exportar CSV
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Total Leads</p>
              <p className="text-3xl font-bold text-white mt-2">{leads.length}</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Tasa Críticos</p>
              <p className="text-3xl font-bold text-red-400 mt-2">
                {leads.length > 0 ? Math.round((leads.filter(l => l.status === DiagnosticStatus.RED).length / leads.length) * 100) : 0}%
              </p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Oportunidades Hoy</p>
              <p className="text-3xl font-bold text-cyan-400 mt-2">
                 {leads.filter(l => new Date(l.date).toDateString() === new Date().toDateString()).length}
              </p>
            </div>
          </div>

          {/* Table Container */}
          <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-xl">
            {/* Search Bar */}
            <div className="p-4 border-b border-slate-800 bg-slate-900/50 flex items-center">
               <Search className="w-5 h-5 text-slate-500 mr-3" />
               <input 
                 type="text" 
                 placeholder="Buscar por negocio o nombre..." 
                 className="bg-transparent border-none focus:ring-0 text-white w-full placeholder-slate-600"
                 value={filter}
                 onChange={(e) => setFilter(e.target.value)}
               />
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-slate-950/50 text-slate-400 uppercase tracking-wider font-bold text-xs">
                  <tr>
                    <th className="px-6 py-4">Fecha</th>
                    <th className="px-6 py-4">Negocio / Contacto</th>
                    <th className="px-6 py-4">Perfil Diagnóstico</th>
                    <th className="px-6 py-4">Métricas Clave</th>
                    <th className="px-6 py-4">Estado</th>
                    <th className="px-6 py-4 text-right">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {filteredLeads.length > 0 ? filteredLeads.map((lead, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/50 transition-colors group">
                      <td className="px-6 py-4 text-slate-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-slate-600" />
                          {new Date(lead.date).toLocaleDateString('es-AR')}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                           <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-cyan-500 mr-3 font-bold border border-slate-700">
                             {lead.leadData?.business?.charAt(0) || 'N'}
                           </div>
                           <div>
                             <div className="font-bold text-white text-base">{lead.leadData?.business || 'Sin nombre'}</div>
                             <div className="text-slate-500 text-xs flex items-center mt-0.5">
                               <User className="w-3 h-3 mr-1" /> {lead.leadData?.name}
                             </div>
                           </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-slate-300 font-medium">{lead.profileName}</div>
                        <div className="text-xs text-slate-500 truncate max-w-[200px]">{lead.profileDescription}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col gap-1 text-xs">
                          <span className={lead.cogsPercentage > 35 ? 'text-red-400' : 'text-green-400'}>
                            CMV: {lead.cogsPercentage.toFixed(1)}%
                          </span>
                          <span className={lead.marginPercentage < 10 ? 'text-red-400' : 'text-green-400'}>
                            Mg: {lead.marginPercentage.toFixed(1)}%
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {getStatusBadge(lead.status)}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" className="h-8 w-8 p-0 rounded-full" title="Ver detalle">
                            <FileText className="w-4 h-4 text-slate-400 hover:text-white" />
                          </Button>
                          <a href={generateWhatsappLink(lead)} target="_blank" rel="noreferrer">
                            <Button className="bg-green-600 hover:bg-green-500 h-8 px-3 text-xs">
                              <MessageCircle className="w-3 h-3 mr-1" /> WhatsApp
                            </Button>
                          </a>
                        </div>
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                        {leads.length === 0 
                          ? "Aún no hay diagnósticos registrados. Completá uno para probar." 
                          : "No se encontraron resultados con ese filtro."}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            <div className="p-4 border-t border-slate-800 bg-slate-900/50 text-xs text-slate-500 text-center">
              Mostrando {filteredLeads.length} de {leads.length} registros
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default AdminLeads;