import { ContentData } from './types';

export const CONTENT: ContentData = {
  ova_metadata: {
    title: "OVA – Arquitectura Visual de Agentes de IA",
    duration: "30–45 minutos",
    competencies: [
      "Entender qué es (y qué no es) un agente de IA",
      "Identificar los componentes clave de un agente",
      "Diseñar agentes como sistemas visuales",
      "Diferenciar agentes de flujos tradicionales",
      "Preparar agentes para uso empresarial seguro"
    ]
  },
  brand_guidelines: {
    brand: "Líder IA",
    palette: {
      verde_oscuro_principal: "#0F2A24",
      verde_medio_acento: "#1F4D3F",
      verde_claro_highlights: "#6FBF9C",
      gris_claro_fondos: "#F4F6F5",
      blanco: "#FFFFFF"
    }
  },
  modules: [
    {
      module_id: "M1",
      title: "Qué es un agente de IA (visión sistémica)",
      key_message: "Un agente de IA no es un chat: es un sistema con propósito.",
      simple_explanation: "Un agente de IA es una entidad autónoma que recibe un objetivo, interpreta contexto, toma decisiones y ejecuta acciones usando herramientas.",
      analogy: "Un analista junior con acceso a sistemas, reglas claras y un objetivo específico.",
      business_example: "Agente que gestiona tickets: analiza solicitud, consulta base de datos y responde o escala.",
      mini_exercise: {
        prompt: "Indica por qué esto NO es un agente: 'Prompt que responde preguntas'.",
        expected_answer: "Porque no tiene objetivo, memoria, herramientas ni capacidad de acción."
      },
      visual_flow_description: {
        background: "#F4F6F5",
        nodes: [
          { label: "OBJETIVO", color: "#0F2A24" },
          { label: "AGENTE DE IA", color: "#1F4D3F" },
          { label: "RESULTADO", color: "#6FBF9C" }
        ],
        arrows: "Entrada de objetivo hacia el agente y salida de resultado"
      }
    },
    {
      module_id: "M2",
      title: "Componentes fundamentales de un agente",
      key_message: "Todo agente se compone de piezas claramente diferenciadas.",
      components: [
        "Objetivo (qué debe lograr)",
        "Modelo LLM (capacidad cognitiva)",
        "Contexto (información relevante)",
        "Memoria (histórico o estado)",
        "Herramientas (acciones posibles)",
        "Reglas y límites (seguridad)"
      ],
      analogy: "Un empleado con rol, conocimiento, historial, herramientas y políticas internas.",
      business_example: "Agente de ventas con CRM, reglas comerciales y memoria de clientes.",
      mini_exercise: {
        prompt: "Identifica qué componente falta: 'Agente que responde sin recordar conversaciones previas'.",
        expected_answer: "Memoria."
      },
      visual_flow_description: {
        background: "#FFFFFF",
        nodes: [
          { label: "AGENTE (núcleo)", color: "#1F4D3F" },
          { label: "LLM", color: "#6FBF9C" },
          { label: "MEMORIA", color: "#6FBF9C" },
          { label: "HERRAMIENTAS", color: "#6FBF9C" },
          { label: "REGLAS", color: "#6FBF9C" }
        ],
        arrows: "Conexiones bidireccionales entre agente y componentes"
      }
    },
    {
      module_id: "M3",
      title: "Flujo interno de decisión del agente",
      key_message: "El agente sigue un ciclo: percibe, razona, actúa.",
      simple_explanation: "Un agente evalúa una entrada, decide qué hacer y ejecuta una acción, repitiendo el ciclo si es necesario.",
      decision_cycle: [
        "Entrada / estímulo",
        "Análisis con contexto",
        "Decisión",
        "Ejecución de herramienta",
        "Evaluación del resultado"
      ],
      analogy: "Ciclo PDCA aplicado a IA.",
      business_example: "Agente que recibe solicitud, consulta base, responde y valida satisfacción.",
      mini_exercise: {
        prompt: "Ubica la 'decisión' en este ciclo: recibir pedido → consultar stock → elegir acción → responder.",
        expected_answer: "Elegir acción."
      },
      visual_flow_description: {
        background: "#F4F6F5",
        nodes: [
          { label: "ENTRADA", color: "#0F2A24" },
          { label: "ANÁLISIS", color: "#1F4D3F" },
          { label: "DECISIÓN", color: "#1F4D3F" },
          { label: "ACCIÓN", color: "#1F4D3F" },
          { label: "FEEDBACK", color: "#6FBF9C" }
        ],
        arrows: "Flujo cíclico con retroalimentación"
      }
    },
    {
      module_id: "M4",
      title: "Arquitectura visual: cómo dibujar un agente",
      key_message: "Si no puedes dibujarlo, no puedes gobernarlo.",
      simple_explanation: "Un agente debe poder representarse visualmente para entender límites, flujos y responsabilidades.",
      best_practices: [
        "Separar agente de herramientas",
        "Diferenciar entradas humanas y del sistema",
        "Visualizar memoria como repositorio externo",
        "Marcar claramente acciones permitidas"
      ],
      analogy: "Diagrama de arquitectura de sistemas.",
      business_example: "Agente de soporte con límites claros y escalamiento humano.",
      mini_exercise: {
        prompt: "Indica por qué es mala práctica darle acceso ilimitado a herramientas.",
        expected_answer: "Porque aumenta riesgos, errores y comportamientos no controlados."
      },
      visual_flow_description: {
        background: "#FFFFFF",
        nodes: [
          { label: "USUARIO / EVENTO", color: "#0F2A24" },
          { label: "AGENTE IA", color: "#1F4D3F" },
          { label: "MEMORIA", color: "#6FBF9C" },
          { label: "HERRAMIENTAS", color: "#6FBF9C" },
          { label: "SALIDA", color: "#6FBF9C" }
        ],
        arrows: "Entradas a la izquierda, salidas a la derecha, componentes conectados"
      }
    },
    {
      module_id: "M5",
      title: "Caso integrador: agente empresarial",
      key_message: "Un agente bien diseñado es un colaborador digital.",
      case: {
        title: "Agente de atención interna",
        objective: "Responder solicitudes internas y escalar cuando corresponda",
        components: [
          "Objetivo claro",
          "LLM",
          "Memoria en base de datos",
          "Herramientas: CRM, correo",
          "Reglas: seguridad y escalamiento"
        ],
        expected_outcome: "Reducción de carga operativa y respuestas consistentes."
      },
      mini_exercise: {
        prompt: "Dibuja (conceptualmente) el agente indicando entradas, decisiones y acciones.",
        expected_answer: "Entrada: solicitud -> Agente analiza -> Decide responder o escalar -> Ejecuta herramienta."
      },
      visual_flow_description: {
        background: "#F4F6F5",
        nodes: [
          { label: "SOLICITUD", color: "#0F2A24" },
          { label: "AGENTE IA", color: "#1F4D3F" },
          { label: "DECISIÓN", color: "#1F4D3F" },
          { label: "RESPUESTA / ESCALAMIENTO", color: "#6FBF9C" }
        ],
        arrows: "Flujo centralizado con ramificación final"
      }
    }
  ],
  handoff_next_ova: {
    next_title: "OVA – Orquestación de Agentes y Multiagentes",
    bridge_text: "Una vez diseñado un agente, el siguiente nivel es coordinar múltiples agentes trabajando juntos."
  }
};