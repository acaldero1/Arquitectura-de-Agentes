import React, { useState } from 'react';
import { MiniExercise } from '../types';
import { CheckCircle2, HelpCircle, XCircle, ArrowRight } from 'lucide-react';

interface QuizProps {
  data: MiniExercise;
}

export const Quiz: React.FC<QuizProps> = ({ data }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="mt-8 bg-white rounded-xl shadow-lg border border-lider-light/30 overflow-hidden">
      <div className="bg-lider-medium p-4 flex items-center gap-3">
        <HelpCircle className="text-lider-light" />
        <h3 className="text-white font-semibold tracking-wide">Ejercicio de Concepto</h3>
      </div>
      
      <div className="p-6">
        <p className="text-lg text-lider-dark font-medium mb-6">
          {data.prompt}
        </p>

        {!showAnswer ? (
          <button
            onClick={() => setShowAnswer(true)}
            className="group flex items-center gap-2 px-5 py-2.5 bg-lider-bg text-lider-dark hover:bg-lider-medium hover:text-white rounded-lg transition-all duration-300 font-medium"
          >
            Ver Respuesta Sugerida
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        ) : (
          <div className="animate-fade-in bg-lider-light/10 border-l-4 border-lider-light p-4 rounded-r-lg">
             <div className="flex items-start gap-3">
                <CheckCircle2 className="text-lider-medium shrink-0 mt-1" size={20} />
                <div>
                    <span className="block text-xs uppercase text-lider-medium font-bold mb-1">Respuesta Correcta</span>
                    <p className="text-lider-dark">
                        {Array.isArray(data.expected_answer) 
                            ? (
                                <ul className="list-disc pl-4 space-y-1">
                                    {data.expected_answer.map((ans, i) => <li key={i}>{ans}</li>)}
                                </ul>
                            )
                            : data.expected_answer
                        }
                    </p>
                </div>
             </div>
             <button 
                onClick={() => setShowAnswer(false)}
                className="mt-4 text-xs text-gray-500 hover:text-lider-medium underline"
             >
                Ocultar
             </button>
          </div>
        )}
      </div>
    </div>
  );
};