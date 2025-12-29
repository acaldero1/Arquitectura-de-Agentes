export interface MiniExercise {
  prompt: string;
  expected_answer: string | string[];
}

export interface NodeVisual {
  label: string;
  color: string;
}

export interface VisualFlow {
  background: string;
  nodes: NodeVisual[];
  arrows: string;
}

export interface CaseStudy {
  title: string;
  objective: string;
  components: string[];
  expected_outcome: string;
}

export interface ModuleData {
  module_id: string;
  title: string;
  key_message: string;
  simple_explanation?: string;
  analogy?: string;
  business_example?: string;
  components?: string[];
  decision_cycle?: string[];
  best_practices?: string[];
  case?: CaseStudy;
  mini_exercise: MiniExercise;
  visual_flow_description: VisualFlow;
}

export interface OVAMetadata {
  title: string;
  duration: string;
  competencies: string[];
}

export interface BrandPalette {
  verde_oscuro_principal: string;
  verde_medio_acento: string;
  verde_claro_highlights: string;
  gris_claro_fondos: string;
  blanco: string;
}

export interface BrandGuidelines {
  brand: string;
  palette: BrandPalette;
}

export interface ContentData {
  ova_metadata: OVAMetadata;
  brand_guidelines: BrandGuidelines;
  modules: ModuleData[];
  handoff_next_ova: {
    next_title: string;
    bridge_text: string;
  };
}