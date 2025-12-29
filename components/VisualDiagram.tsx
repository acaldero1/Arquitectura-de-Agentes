import React from 'react';
import { ModuleData } from '../types';
import { ArrowRight, Database, Brain, Wrench, Shield, User, MessageSquare } from 'lucide-react';

interface VisualDiagramProps {
  module: ModuleData;
}

const NodeBox: React.FC<{ label: string; color: string; icon?: React.ReactNode; className?: string }> = ({ label, color, icon, className }) => (
  <div 
    className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-lg border-2 transition-transform hover:scale-105 ${className}`}
    style={{ backgroundColor: 'white', borderColor: color }}
  >
    {icon && <div className="mb-2" style={{ color: color }}>{icon}</div>}
    <span className="text-center font-bold text-sm md:text-base leading-tight" style={{ color: color }}>
      {label}
    </span>
  </div>
);

export const VisualDiagram: React.FC<VisualDiagramProps> = ({ module }) => {
  const { module_id, visual_flow_description } = module;
  const nodes = visual_flow_description.nodes;

  const renderContent = () => {
    switch (module_id) {
      case 'M1': // Linear: Input -> Agent -> Output
        return (
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full p-8">
            <NodeBox label={nodes[0].label} color={nodes[0].color} icon={<User size={32} />} />
            <ArrowRight className="text-lider-medium rotate-90 md:rotate-0" size={32} />
            <NodeBox label={nodes[1].label} color={nodes[1].color} icon={<Brain size={40} />} className="scale-110 border-4" />
            <ArrowRight className="text-lider-medium rotate-90 md:rotate-0" size={32} />
            <NodeBox label={nodes[2].label} color={nodes[2].color} icon={<MessageSquare size={32} />} />
          </div>
        );

      case 'M2': // Hub and Spoke: Agent Center, others around
        return (
          <div className="relative w-full max-w-lg aspect-square mx-auto p-4 flex items-center justify-center">
            {/* Center */}
            <div className="z-10 relative">
               <NodeBox label={nodes[0].label} color={nodes[0].color} icon={<Brain size={48} />} className="w-32 h-32 rounded-full border-4" />
            </div>
            
            {/* Satellites */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
                <NodeBox label={nodes[1].label} color={nodes[1].color} icon={<Brain size={20} />} className="w-24 text-xs" />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <NodeBox label={nodes[4].label} color={nodes[4].color} icon={<Shield size={20} />} className="w-24 text-xs" />
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
                <NodeBox label={nodes[2].label} color={nodes[2].color} icon={<Database size={20} />} className="w-24 text-xs" />
            </div>
             <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <NodeBox label={nodes[3].label} color={nodes[3].color} icon={<Wrench size={20} />} className="w-24 text-xs" />
            </div>

            {/* Connecting Lines (Simple SVG overlay) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
               <line x1="50%" y1="20%" x2="50%" y2="40%" stroke="#1F4D3F" strokeWidth="2" strokeDasharray="4"/>
               <line x1="50%" y1="80%" x2="50%" y2="60%" stroke="#1F4D3F" strokeWidth="2" strokeDasharray="4"/>
               <line x1="20%" y1="50%" x2="40%" y2="50%" stroke="#1F4D3F" strokeWidth="2" strokeDasharray="4"/>
               <line x1="80%" y1="50%" x2="60%" y2="50%" stroke="#1F4D3F" strokeWidth="2" strokeDasharray="4"/>
            </svg>
          </div>
        );

      case 'M3': // Cycle: PDCA style
        return (
            <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto p-4">
                 <NodeBox label={nodes[0].label} color={nodes[0].color} icon={<User size={24} />} className="w-full max-w-xs" />
                 <ArrowRight className="text-lider-medium rotate-90" />
                 
                 <div className="grid grid-cols-2 gap-8 border-2 border-dashed border-lider-medium p-8 rounded-full relative">
                    <NodeBox label={nodes[1].label} color={nodes[1].color} className="col-span-2 mx-auto" />
                    <NodeBox label={nodes[2].label} color={nodes[2].color} />
                    <NodeBox label={nodes[3].label} color={nodes[3].color} />
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                         <ArrowRight className="w-32 h-32" />
                    </div>
                 </div>

                 <ArrowRight className="text-lider-medium rotate-90" />
                 <NodeBox label={nodes[4].label} color={nodes[4].color} className="w-full max-w-xs" />
            </div>
        );

      case 'M4': // Architecture Diagram: Left Inputs, Middle Box, Right Outputs
        return (
            <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 w-full p-4 border border-gray-300 bg-white rounded-xl">
                {/* Inputs */}
                <div className="flex flex-col justify-center gap-4 border-r-2 border-dashed border-gray-200 pr-4">
                     <span className="text-xs text-gray-400 font-mono uppercase tracking-widest text-center mb-2">Entrada</span>
                     <NodeBox label={nodes[0].label} color={nodes[0].color} icon={<User size={24} />} />
                </div>

                {/* The System */}
                <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 rounded-xl border border-gray-200 p-6 relative">
                     <span className="absolute top-2 left-4 text-xs font-bold text-lider-medium tracking-widest uppercase">Límites del Agente</span>
                     
                     <div className="flex flex-row items-center gap-4">
                         <NodeBox label={nodes[1].label} color={nodes[1].color} icon={<Brain size={32} />} className="z-10 bg-white" />
                         <div className="flex flex-col gap-2">
                             <NodeBox label={nodes[2].label} color={nodes[2].color} icon={<Database size={16} />} className="scale-75 origin-left" />
                             <NodeBox label={nodes[3].label} color={nodes[3].color} icon={<Wrench size={16} />} className="scale-75 origin-left" />
                         </div>
                     </div>
                </div>

                {/* Outputs */}
                <div className="flex flex-col justify-center gap-4 border-l-2 border-dashed border-gray-200 pl-4">
                    <span className="text-xs text-gray-400 font-mono uppercase tracking-widest text-center mb-2">Salida</span>
                    <NodeBox label={nodes[4].label} color={nodes[4].color} icon={<MessageSquare size={24} />} />
                </div>
            </div>
        );

      case 'M5': // Case Study Flow
      default:
        return (
             <div className="flex flex-col items-center justify-center gap-4 w-full p-8">
                <NodeBox label={nodes[0].label} color={nodes[0].color} className="w-48" />
                <ArrowRight className="text-lider-medium rotate-90" size={24} />
                <div className="p-6 bg-lider-dark/5 rounded-xl border border-lider-medium flex flex-col items-center gap-4">
                    <NodeBox label={nodes[1].label} color={nodes[1].color} icon={<Brain />} />
                    <ArrowRight className="text-lider-medium rotate-90" size={24} />
                    <NodeBox label={nodes[2].label} color={nodes[2].color} />
                </div>
                <ArrowRight className="text-lider-medium rotate-90" size={24} />
                <NodeBox label={nodes[3].label} color={nodes[3].color} className="w-64 bg-lider-light text-white" />
             </div>
        );
    }
  };

  return (
    <div className="w-full my-8 bg-gray-50 rounded-xl overflow-hidden border border-gray-200 shadow-inner">
      <div className="bg-white border-b border-gray-200 px-4 py-2 text-xs font-mono text-gray-500 flex justify-between">
        <span>VISTA DE ARQUITECTURA</span>
        <span>FIG. {module_id}</span>
      </div>
      <div className="p-4 md:p-8 min-h-[300px] flex items-center justify-center">
        {renderContent()}
      </div>
      <div className="bg-lider-dark text-white p-3 text-center text-sm font-light italic">
          {visual_flow_description.arrows}
      </div>
    </div>
  );
};