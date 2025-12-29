import React, { useState, useEffect } from 'react';
import { CONTENT } from './constants';
import { VisualDiagram } from './components/VisualDiagram';
import { Quiz } from './components/Quiz';
import { BookOpen, CheckCircle, ChevronLeft, ChevronRight, Menu, X, Layout, Info } from 'lucide-react';

const App: React.FC = () => {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const [showCompletion, setShowCompletion] = useState(false);

  const currentModule = CONTENT.modules[currentModuleIndex];
  const isLastModule = currentModuleIndex === CONTENT.modules.length - 1;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentModuleIndex]);

  const handleNext = () => {
    if (!completedModules.includes(currentModule.module_id)) {
      setCompletedModules([...completedModules, currentModule.module_id]);
    }

    if (currentModuleIndex < CONTENT.modules.length - 1) {
      setCurrentModuleIndex(prev => prev + 1);
    } else {
      setShowCompletion(true);
    }
  };

  const handlePrev = () => {
    if (currentModuleIndex > 0) {
      setCurrentModuleIndex(prev => prev - 1);
      setShowCompletion(false);
    }
  };

  const navToModule = (index: number) => {
    setCurrentModuleIndex(index);
    setSidebarOpen(false);
    setShowCompletion(false);
  };

  if (showCompletion) {
    return (
      <div className="min-h-screen bg-lider-bg font-sans flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden text-center p-8 md:p-12 animate-fade-in-up">
           <div className="w-20 h-20 bg-lider-light text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={48} />
           </div>
           <h1 className="text-3xl font-bold text-lider-dark mb-4">¡Arquitectura Completada!</h1>
           <p className="text-lg text-gray-600 mb-8">
              Has recorrido los 5 pilares fundamentales de la arquitectura visual de agentes.
           </p>
           
           <div className="bg-lider-bg p-6 rounded-xl border border-gray-200 mb-8 text-left">
              <h3 className="font-bold text-lider-medium mb-3 uppercase text-sm tracking-wider">Siguiente Paso</h3>
              <p className="text-xl font-semibold text-lider-dark mb-2">{CONTENT.handoff_next_ova.next_title}</p>
              <p className="text-gray-600">{CONTENT.handoff_next_ova.bridge_text}</p>
           </div>

           <button 
             onClick={() => navToModule(0)}
             className="px-8 py-3 bg-lider-medium text-white rounded-lg font-semibold hover:bg-lider-dark transition-colors"
           >
             Repasar Conceptos
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-lider-bg font-sans flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-lider-dark text-white p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="font-bold text-xl tracking-tight flex items-center gap-2">
            <Layout className="text-lider-light" />
            LÍDER IA
        </div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed md:sticky md:top-0 top-[60px] bottom-0 left-0 w-64 bg-white border-r border-gray-200 z-40 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 h-[calc(100vh-60px)] md:h-screen overflow-y-auto
      `}>
        <div className="p-6 border-b border-gray-100 hidden md:block">
           <div className="font-bold text-2xl tracking-tight text-lider-dark flex items-center gap-2">
              <Layout className="text-lider-light" />
              LÍDER IA
           </div>
           <p className="text-xs text-gray-500 mt-2 uppercase tracking-wider">Arquitectura de Agentes</p>
        </div>

        <nav className="p-4 space-y-2">
          {CONTENT.modules.map((mod, idx) => {
            const isActive = idx === currentModuleIndex;
            const isCompleted = completedModules.includes(mod.module_id);
            
            return (
              <button
                key={mod.module_id}
                onClick={() => navToModule(idx)}
                className={`w-full text-left p-3 rounded-lg text-sm font-medium transition-all flex items-center justify-between group
                  ${isActive 
                    ? 'bg-lider-dark text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-100'
                  }
                `}
              >
                <div className="flex items-center gap-3">
                   <div className={`
                     w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border
                     ${isActive ? 'border-lider-light text-lider-light' : 'border-gray-300 text-gray-400'}
                   `}>
                     {idx + 1}
                   </div>
                   <span>{mod.module_id}</span>
                </div>
                {isCompleted && !isActive && <CheckCircle size={14} className="text-lider-light" />}
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-full p-4 bg-gray-50 border-t border-gray-200">
           <div className="flex items-center gap-2 text-xs text-gray-500">
              <Info size={14} />
              <span>{CONTENT.ova_metadata.duration}</span>
           </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 lg:p-12 max-w-5xl mx-auto w-full pb-24 md:pb-12">
        {/* Progress Bar */}
        <div className="w-full h-1 bg-gray-200 rounded-full mb-8 overflow-hidden">
          <div 
            className="h-full bg-lider-light transition-all duration-500 ease-out"
            style={{ width: `${((currentModuleIndex + 1) / CONTENT.modules.length) * 100}%` }}
          />
        </div>

        <header className="mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-lider-light/20 text-lider-medium text-xs font-bold tracking-wider uppercase mb-3">
                Módulo {currentModule.module_id}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-lider-dark mb-4 leading-tight">
                {currentModule.title}
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed border-l-4 border-lider-light pl-4 italic">
                "{currentModule.key_message}"
            </p>
        </header>

        <section className="space-y-8 animate-fade-in">
            {/* Simple Explanation */}
            {currentModule.simple_explanation && (
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-lg font-bold text-lider-dark mb-2 flex items-center gap-2">
                        <BookOpen size={20} className="text-lider-medium" />
                        Concepto Clave
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        {currentModule.simple_explanation}
                    </p>
                </div>
            )}

            {/* Components List (If M2) */}
            {currentModule.components && (
                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-lg font-bold text-lider-dark mb-4">Componentes del Sistema</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {currentModule.components.map((c, i) => (
                            <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                                <div className="w-2 h-2 rounded-full bg-lider-light" />
                                <span className="text-gray-700 text-sm">{c}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

             {/* Decision Cycle List (If M3) */}
             {currentModule.decision_cycle && (
                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-lg font-bold text-lider-dark mb-4">El Ciclo de Decisión</h2>
                    <div className="flex flex-col gap-2">
                        {currentModule.decision_cycle.map((c, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-lider-medium text-white flex items-center justify-center font-bold text-sm shrink-0">
                                    {i + 1}
                                </div>
                                <span className="text-gray-700 font-medium border-b border-gray-100 w-full py-2">{c}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
            {/* Visual Flow Diagram */}
            <VisualDiagram module={currentModule} />

            {/* Analogy & Business Example Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#0F2A24] text-white p-6 rounded-xl">
                    <h3 className="text-lider-light text-sm font-bold uppercase tracking-wider mb-2">Analogía</h3>
                    <p className="text-gray-200 font-light text-lg">
                        {currentModule.analogy}
                    </p>
                </div>
                <div className="bg-white border-2 border-dashed border-lider-medium/20 p-6 rounded-xl">
                     <h3 className="text-lider-medium text-sm font-bold uppercase tracking-wider mb-2">Ejemplo Empresarial</h3>
                     {currentModule.case ? (
                         <div>
                             <h4 className="font-bold text-lider-dark mb-1">{currentModule.case.title}</h4>
                             <p className="text-gray-600 mb-2">{currentModule.case.objective}</p>
                             <div className="mt-2 pt-2 border-t border-gray-100">
                                 <span className="text-xs text-gray-400 uppercase">Resultado:</span>
                                 <p className="text-lider-medium font-medium">{currentModule.case.expected_outcome}</p>
                             </div>
                         </div>
                     ) : (
                         <p className="text-gray-700">
                            {currentModule.business_example}
                         </p>
                     )}
                </div>
            </div>

            {/* Quiz Section */}
            <Quiz data={currentModule.mini_exercise} />

        </section>

        {/* Footer Navigation */}
        <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-8">
            <button
                onClick={handlePrev}
                disabled={currentModuleIndex === 0}
                className={`flex items-center gap-2 font-medium transition-colors
                    ${currentModuleIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:text-lider-dark'}
                `}
            >
                <ChevronLeft size={20} />
                Anterior
            </button>
            <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 bg-lider-dark text-white rounded-lg shadow-lg hover:bg-lider-medium transition-all transform hover:-translate-y-0.5"
            >
                {isLastModule ? 'Finalizar OVA' : 'Siguiente Módulo'}
                {!isLastModule && <ChevronRight size={20} />}
            </button>
        </div>
      </main>
    </div>
  );
};

export default App;