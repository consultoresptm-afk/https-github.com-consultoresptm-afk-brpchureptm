export interface ServiceDetail {
  title: string;
  items: string[];
}

export interface SubCategory {
  id: string;
  label: string;
  icon?: string;
  backgroundImage?: string;
  details?: ServiceDetail;
}

export interface MainCategory {
  id: string;
  label: string;
  description: string;
  icon: string;
  subCategories: SubCategory[];
}

export const servicesData: MainCategory[] = [
  {
    id: "consultoria",
    label: "Consultoría",
    description: "Asesoramiento estratégico para el cumplimiento normativo integral.",
    icon: "Briefcase",
    subCategories: [
      {
        id: "ambiental",
        label: "Ambiental",
        backgroundImage: "ambiental",
        details: {
          title: "Consultoría Ambiental",
          items: [
            "Planes de Gestión Ambiental",
            "Estudios de Impacto Ambiental (EIA)",
            "Gestión de Residuos Sólidos y Peligrosos",
            "Permisos y Licencias Ambientales",
            "Planes de Contingencia Ambiental",
            "Informes de Cumplimiento Ambiental (ICA)",
          ],
        },
      },
      {
        id: "sst",
        label: "SST",
        backgroundImage: "sst",
        details: {
          title: "Seguridad y Salud en el Trabajo",
          items: [
            "Diseño e Implementación del SG-SST",
            "Matrices de Identificación de Peligros y Riesgos",
            "Planes de Emergencia y Contingencia",
            "Investigación de Accidentes e Incidentes",
            "Programas de Vigilancia Epidemiológica",
            "Auditorías del Sistema de Gestión SST",
          ],
        },
      },
      {
        id: "calidad",
        label: "Calidad",
        backgroundImage: "calidad",
        details: {
          title: "Consultoría en Calidad",
          items: [
            "Diagnóstico de Sistemas de Gestión de Calidad",
            "Diseño de Procesos y Procedimientos",
            "Control Estadístico de Calidad",
            "Gestión de No Conformidades",
            "Mejora Continua (PDCA / Kaizen)",
            "Preparación para Certificación",
            "Gestión de Riesgos y Oportunidades",
            "Gestión de Inventarios",
            "Estandarización de Procesos",
            "Gestión del Cambio y Trazabilidad",
          ],
        },
      },
      {
        id: "educacion",
        label: "Educación",
        backgroundImage: "educacion",
        details: {
          title: "Consultoría en Educación",
          items: [
            "Diseño Curricular por Competencias",
            "Autoevaluación Institucional",
            "Planes de Mejoramiento Educativo",
            "Registro Calificado y Acreditación",
            "Capacitación y Formación Docente",
            "Sistemas de Gestión Educativa",
            "Plan de Capacitación Sistemas de Gestión",
          ],
        },
      },
      {
        id: "sig",
        label: "Sistemas de Información Geográfica",
        backgroundImage: "sig",
        details: {
          title: "Sistemas de Información Geográfica (SIG)",
          items: [
            "Análisis espacial y georreferenciación",
            "Cartografía temática y mapas de riesgo",
            "Modelamiento de datos geoespaciales",
            "Integración de SIG con sistemas de gestión",
            "Monitoreo ambiental georreferenciado",
            "Visualización de datos territoriales",
          ],
        },
      },
      {
        id: "sostenibilidad",
        label: "Sostenibilidad",
        backgroundImage: "sostenibilidad",
        details: {
          title: "Consultoría en Sostenibilidad",
          items: [
            "Estrategias de desarrollo sostenible",
            "Reportes de sostenibilidad (GRI / ESG)",
            "Huella de carbono y huella hídrica",
            "Economía circular y ecodiseño",
            "ODS y alineación estratégica",
            "Planes de responsabilidad social empresarial",
            "Análisis de Materialidad",
            "Environmental Due Diligence",
            "Soluciones Basadas en la Naturaleza (SbN)",
            "Análisis de Vulnerabilidad Climática",
            "Alineación con TCFD",
          ],
        },
      },
      {
        id: "planeacion-estrategica",
        label: "Planeación Estratégica",
        backgroundImage: "planeacion",
        details: {
          title: "Consultoría en Planeación Estratégica",
          items: [
            "Diagnóstico organizacional y análisis DOFA",
            "Definición de misión, visión y valores corporativos",
            "Formulación de objetivos estratégicos",
            "Diseño de planes de acción e indicadores (KPI)",
            "Balanced Scorecard (Cuadro de Mando Integral)",
            "Gestión del cambio organizacional",
            "Seguimiento y evaluación estratégica",
          ],
        },
      },
    ],
  },
  {
    id: "normas-iso",
    label: "Implementación de Normas ISO",
    description: "Acompañamiento integral en la implementación y certificación de estándares internacionales.",
    icon: "FileCheck",
    subCategories: [
      {
        id: "iso-9001",
        label: "ISO 9001 - Gestión de Calidad",
        backgroundImage: "calidad",
        details: {
          title: "ISO 9001 — Gestión de Calidad",
          items: [
            "Enfoque en la satisfacción del cliente",
            "Estandarización de procesos operativos",
            "Mejora continua del desempeño organizacional",
            "Mayor competitividad en el mercado",
          ],
        },
      },
      {
        id: "iso-14001",
        label: "ISO 14001 - Gestión Ambiental",
        backgroundImage: "ambiental",
        details: {
          title: "ISO 14001 — Gestión Ambiental",
          items: [
            "Reducción del impacto ambiental",
            "Cumplimiento de legislación ambiental vigente",
            "Optimización del uso de recursos naturales",
            "Responsabilidad ambiental corporativa",
          ],
        },
      },
      {
        id: "iso-45001",
        label: "ISO 45001 - Gestión de la SST",
        backgroundImage: "sst",
        details: {
          title: "ISO 45001 — Seguridad y Salud en el Trabajo",
          items: [
            "Prevención de lesiones y enfermedades laborales",
            "Entornos de trabajo seguros y saludables",
            "Reducción de riesgos laborales",
            "Cumplimiento normativo en SST",
          ],
        },
      },
      {
        id: "iso-21001",
        label: "ISO 21001 - Gestión Organizaciones Educativas",
        backgroundImage: "educacion",
        details: {
          title: "ISO 21001 — Organizaciones Educativas",
          items: [
            "Gestión centrada en el aprendizaje",
            "Mejora de la experiencia educativa",
            "Inclusión y equidad en la enseñanza",
            "Reconocimiento internacional de calidad educativa",
          ],
        },
      },
      {
        id: "iso-50001",
        label: "ISO 50001 - Gestión Energética",
        backgroundImage: "energia",
        details: {
          title: "ISO 50001 — Gestión de la Energía",
          items: [
            "Optimización del consumo energético",
            "Reducción de costos operativos en energía",
            "Cumplimiento de normativas energéticas",
            "Mejora del desempeño energético organizacional",
          ],
        },
      },
    ],
  },
  {
    id: "asesorias",
    label: "Asesorías Especializadas",
    description: "Soluciones puntuales y especializadas para necesidades específicas.",
    icon: "Search",
    subCategories: [
      {
        id: "auditorias",
        label: "Auditorías",
        backgroundImage: "auditorias",
        details: {
          title: "Auditorías Internas y Externas",
          items: [
            "Auditorías internas de sistemas de gestión",
            "Auditorías de cumplimiento legal",
            "Auditorías de segunda parte a proveedores",
            "Informes ejecutivos y planes de acción correctiva",
          ],
        },
      },
      {
        id: "gestion-documental",
        label: "Gestión Documental",
        backgroundImage: "documental",
        details: {
          title: "Gestión Documental Integrada",
          items: [
            "Diseño de manuales y procedimientos",
            "Digitalización y control de documentos",
            "Tablas de retención documental",
            "Implementación de sistemas de gestión documental",
          ],
        },
      },
      {
        id: "tramites-ambientales",
        label: "Trámites Ambientales",
        backgroundImage: "tramites",
        details: {
          title: "Trámites y Permisos Ambientales",
          items: [
            "Permisos de vertimientos",
            "Concesiones de agua",
            "Permisos de emisiones atmosféricas",
            "Licencias ambientales ante autoridades competentes",
          ],
        },
      },
      {
        id: "sig-asesoria",
        label: "Sistemas de Información Geográfica",
        backgroundImage: "sig",
        details: {
          title: "Asesoría en Sistemas de Información Geográfica",
          items: [
            "Consultoría en plataformas GIS",
            "Desarrollo de aplicaciones geoespaciales",
            "Análisis territorial y urbano",
            "Integración de datos espaciales con sistemas empresariales",
          ],
        },
      },
      {
        id: "sostenibilidad-asesoria",
        label: "Sostenibilidad",
        backgroundImage: "sostenibilidad",
        details: {
          title: "Asesoría en Sostenibilidad",
          items: [
            "Diagnóstico de sostenibilidad organizacional",
            "Indicadores ambientales y sociales",
            "Certificaciones verdes y sellos ambientales",
            "Estrategias de mitigación y adaptación al cambio climático",
          ],
        },
      },
    ],
  },
];
