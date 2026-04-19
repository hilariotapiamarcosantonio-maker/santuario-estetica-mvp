import React from 'react';
import { Brain, TrendingUp, Wallet, CheckCircle2, Clock, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';

export default function ConciergeDashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 p-4 md:p-8 xl:p-12 font-sans selection:bg-emerald-500/30">
      <div className="max-w-[1600px] w-full mx-auto space-y-10 xl:space-y-14">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-light tracking-tight flex items-center gap-3">
              <Brain className="text-[#D4AF37] w-8 h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12" />
              Santuario <span className="font-semibold text-[#D4AF37]">Concierge IA</span>
            </h1>
            <p className="text-zinc-400 mt-1 xl:mt-2 xl:text-lg">Dashboard Privado de Telemetría y Conversión</p>
          </div>
          <div className="flex items-center gap-3 bg-zinc-900/80 px-4 py-2 xl:px-6 xl:py-3 rounded-full border border-zinc-800">
            <span className="relative flex h-3 w-3 xl:h-4 xl:w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 xl:h-4 xl:w-4 bg-emerald-500"></span>
            </span>
            <span className="text-sm xl:text-base font-medium text-emerald-400">Motor IA En Línea</span>
          </div>
        </header>

        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          {/* Card 1 */}
          <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 p-6 xl:p-8 rounded-2xl hover:border-emerald-500/30 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm xl:text-base font-medium text-zinc-400">Leads Calificados este Mes</p>
                <p className="text-4xl xl:text-6xl font-semibold text-zinc-100 mt-2 xl:mt-4">42</p>
              </div>
              <div className="p-3 xl:p-4 bg-emerald-500/10 rounded-xl">
                <MessageSquare className="w-6 h-6 xl:w-8 xl:h-8 text-emerald-400" />
              </div>
            </div>
            <div className="mt-4 xl:mt-6 flex items-center text-sm xl:text-base font-medium text-emerald-400">
              <TrendingUp className="w-4 h-4 xl:w-5 xl:h-5 mr-1" />
              <span>+12% vs mes anterior</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 p-6 xl:p-8 rounded-2xl hover:border-[#D4AF37]/30 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm xl:text-base font-medium text-zinc-400">Tasa de Conversión IA</p>
                <p className="text-4xl xl:text-6xl font-semibold text-zinc-100 mt-2 xl:mt-4">68<span className="text-2xl xl:text-4xl text-zinc-500">%</span></p>
              </div>
              <div className="p-3 xl:p-4 bg-[#D4AF37]/10 rounded-xl">
                <Brain className="w-6 h-6 xl:w-8 xl:h-8 text-[#D4AF37]" />
              </div>
            </div>
            <div className="mt-4 xl:mt-6 flex items-center text-sm xl:text-base font-medium text-emerald-400">
              <TrendingUp className="w-4 h-4 xl:w-5 xl:h-5 mr-1" />
              <span>Optimizando respuestas...</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 p-6 xl:p-8 rounded-2xl hover:border-emerald-500/30 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm xl:text-base font-medium text-zinc-400">Valor en Pipeline</p>
                <p className="text-4xl xl:text-6xl font-semibold text-zinc-100 mt-2 xl:mt-4"><span className="text-2xl xl:text-4xl text-zinc-500">$</span>12,500 <span className="text-xl xl:text-2xl text-zinc-500">USD</span></p>
              </div>
              <div className="p-3 xl:p-4 bg-emerald-500/10 rounded-xl">
                <Wallet className="w-6 h-6 xl:w-8 xl:h-8 text-emerald-400" />
              </div>
            </div>
            <div className="mt-4 xl:mt-6 flex items-center text-sm xl:text-base font-medium text-zinc-400">
              <Clock className="w-4 h-4 xl:w-5 xl:h-5 mr-1" />
              <span>Proyección a cierre de mes</span>
            </div>
          </div>
        </div>

        {/* Kanban Board */}
        <div>
          <h2 className="text-xl xl:text-3xl font-medium mb-6 xl:mb-8 flex items-center gap-2 xl:gap-3">
            <Sparkles className="w-5 h-5 xl:w-7 xl:h-7 text-[#D4AF37]" /> 
            Viaje del Cliente <span className="text-zinc-500 text-sm xl:text-base font-normal ml-2">(Filtrado en Tiempo Real)</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
            
            {/* Column 1 */}
            <div className="bg-zinc-900/30 rounded-2xl p-4 xl:p-6 border border-zinc-800/50 flex flex-col gap-4 xl:gap-5">
              <div className="flex items-center justify-between pb-2 xl:pb-4 border-b border-zinc-800">
                <h3 className="font-medium text-zinc-300 xl:text-lg flex items-center gap-2">
                  <div className="w-2 h-2 xl:w-3 xl:h-3 rounded-full bg-zinc-500"></div> Nuevos Contactos
                </h3>
                <span className="bg-zinc-800 text-xs xl:text-sm px-2 py-1 xl:px-3 xl:py-1.5 rounded-md text-zinc-400">3</span>
              </div>
              <KanbanCard name="Sofía R." interest="Consulta Inicial - Facial" time="Hace 5 min" status="Analizando intención..." />
              <KanbanCard name="Luis M." interest="Tratamiento Láser" time="Hace 12 min" status="Perfilando presupuesto..." />
              <KanbanCard name="Andrea G." interest="Diseño de Cejas" time="Hace 45 min" status="Esperando respuesta..." />
            </div>

            {/* Column 2 */}
            <div className="bg-zinc-900/30 rounded-2xl p-4 xl:p-6 border border-zinc-800/50 flex flex-col gap-4 xl:gap-5">
              <div className="flex items-center justify-between pb-2 xl:pb-4 border-b border-zinc-800">
                <h3 className="font-medium text-zinc-300 xl:text-lg flex items-center gap-2">
                  <div className="w-2 h-2 xl:w-3 xl:h-3 rounded-full bg-[#D4AF37]"></div> Evaluación IA Aprobada
                </h3>
                <span className="bg-[#D4AF37]/10 text-xs xl:text-sm px-2 py-1 xl:px-3 xl:py-1.5 rounded-md text-[#D4AF37]">2</span>
              </div>
              <KanbanCard name="Carmen V." interest="Rejuvenecimiento Integral" time="Hace 2 horas" highlight status="Alta Intención - Generando Link de Pago" />
              <KanbanCard name="Daniela P." interest="Limpieza Profunda" time="Hace 3 horas" status="Enviando opciones de agenda..." />
            </div>

            {/* Column 3 */}
            <div className="bg-zinc-900/30 rounded-2xl p-4 xl:p-6 border border-zinc-800/50 flex flex-col gap-4 xl:gap-5">
              <div className="flex items-center justify-between pb-2 xl:pb-4 border-b border-zinc-800">
                <h3 className="font-medium text-zinc-300 xl:text-lg flex items-center gap-2">
                  <div className="w-2 h-2 xl:w-3 xl:h-3 rounded-full bg-emerald-500"></div> Cita Agendada
                </h3>
                <span className="bg-emerald-500/10 text-xs xl:text-sm px-2 py-1 xl:px-3 xl:py-1.5 rounded-md text-emerald-500">4</span>
              </div>
              <KanbanCard name="María F." interest="Arquitectura Capilar" time="Cita: Mañana 10:00 AM" success status="Depósito Confirmado" />
              <KanbanCard name="Elena S." interest="Masaje Relajante" time="Cita: Viernes 4:00 PM" success status="Pago Completo" />
            </div>

          </div>
        </div>

        {/* Recent Activity Table */}
        <div className="bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-zinc-800/50 overflow-hidden">
          <div className="p-6 xl:p-8 border-b border-zinc-800">
            <h2 className="text-xl xl:text-2xl font-medium flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 xl:w-6 xl:h-6 text-emerald-400" /> Actividad de Sistema Reciente
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-zinc-900/80 text-zinc-400 text-sm xl:text-base border-b border-zinc-800">
                  <th className="p-4 xl:p-6 font-medium pl-6 xl:pl-8">Cliente</th>
                  <th className="p-4 xl:p-6 font-medium">Interés Principal</th>
                  <th className="p-4 xl:p-6 font-medium">Estatus</th>
                  <th className="p-4 xl:p-6 font-medium pr-6 xl:pr-8">Atendido por</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                <TableRow name="María F." interest="Arquitectura Capilar" status="Depósito Pagado" agent="Concierge IA" statusColor="text-emerald-400 bg-emerald-400/10" dotColor="bg-emerald-400"/>
                <TableRow name="Elena S." interest="Masaje Relajante" status="Pago Completo" agent="Concierge IA" statusColor="text-emerald-400 bg-emerald-400/10" dotColor="bg-emerald-400"/>
                <TableRow name="Carmen V." interest="Rejuvenecimiento Integral" status="Evaluación Aprobada" agent="Concierge IA" statusColor="text-[#D4AF37 bg-[#D4AF37]/10" dotColor="bg-[#D4AF37]"/>
                <TableRow name="Daniela P." interest="Limpieza Profunda" status="Negociación" agent="Humano (Traspaso)" statusColor="text-zinc-300 bg-zinc-800" dotColor="bg-zinc-500" isHuman/>
                <TableRow name="Luis M." interest="Tratamiento Láser" status="Perfilando" agent="Concierge IA" statusColor="text-blue-400 bg-blue-400/10" dotColor="bg-blue-400"/>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

function KanbanCard({ name, interest, time, status, highlight = false, success = false }: any) {
  return (
    <div className={`p-4 xl:p-5 rounded-xl border ${success ? 'bg-emerald-950/20 border-emerald-900/50' : highlight ? 'bg-[#D4AF37]/5 border-[#D4AF37]/20 border-solid' : 'bg-zinc-950 border-zinc-800/80'} shadow-sm hover:border-zinc-700 transition-colors`}>
      <div className="flex justify-between items-start mb-2 xl:mb-3">
        <h4 className="font-medium text-zinc-100 xl:text-lg">{name}</h4>
        <span className="text-xs xl:text-sm text-zinc-500 flex items-center gap-1"><Clock className="w-3 h-3 xl:w-4 xl:h-4"/> {time}</span>
      </div>
      <p className="text-sm xl:text-base text-zinc-400 mb-3 xl:mb-4">{interest}</p>
      <div className="flex items-center gap-2">
        {success ? <CheckCircle2 className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-500" /> : <Brain className={`w-4 h-4 xl:w-5 xl:h-5 ${highlight ? 'text-[#D4AF37]' : 'text-zinc-500'}`} />}
        <span className={`text-xs xl:text-sm font-medium ${success ? 'text-emerald-500' : highlight ? 'text-[#D4AF37]' : 'text-zinc-500'}`}>
          {status}
        </span>
      </div>
    </div>
  );
}

function TableRow({ name, interest, status, agent, statusColor, dotColor, isHuman = false }: any) {
  return (
    <tr className="hover:bg-zinc-800/20 transition-colors group">
      <td className="p-4 xl:p-6 pl-6 xl:pl-8">
        <div className="font-medium text-zinc-200 xl:text-lg">{name}</div>
      </td>
      <td className="p-4 xl:p-6 text-zinc-400 xl:text-base">{interest}</td>
      <td className="p-4 xl:p-6">
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 xl:px-3 xl:py-1.5 rounded-full text-xs xl:text-sm font-medium border border-transparent group-hover:border-current/10 transition-colors ${statusColor}`}>
          <span className={`w-1.5 h-1.5 xl:w-2 xl:h-2 rounded-full ${dotColor}`}></span>
          {status}
        </span>
      </td>
      <td className="p-4 xl:p-6 pr-6 xl:pr-8">
        <div className="flex items-center gap-2">
          {isHuman ? <div className="w-4 h-4 xl:w-5 xl:h-5"></div> : <Brain className="w-4 h-4 xl:w-5 xl:h-5 text-[#D4AF37]" />}
          <span className={`text-sm xl:text-base ${isHuman ? 'text-zinc-400' : 'text-[#D4AF37] font-medium'}`}>{agent}</span>
        </div>
      </td>
    </tr>
  );
}
