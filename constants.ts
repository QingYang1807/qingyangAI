import { Section, Project, Advantage, Certificate, Experience } from './types';
import { Layers, Code, Cpu, Rocket, Zap, Brain, FileText, Database, Network } from 'lucide-react';

export const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com/QIngYang1807' },
  { name: 'Blog', href: 'http://linqingyang.com' },
];

export const SYSTEM_INSTRUCTION = `You are Qingyang's AI assistant.
Identity: Qingyang is an AI Infra & RAG Engineering Expert. He specializes in end-to-end AI application chains (Data -> Retrieval -> Reasoning -> Orchestration -> Application).
Highlights:
- **Five Haves**: Data x RAG x Agent, Ontology Modeling, Strong Engineering, Modular Architecture, Evolution.
- **Key Products**: Qingyang Resume (resume.qingyang.ai), Qingyang Brain (brain.qingyang.ai).
- **Experience**: Lead Architect at a Tech Startup (Ontology/Agent), AI Platform Lead at a Public Listed Tech Company (DeepSeek R1 Data, 300k+ Datasets).
- **Skills**: LangGraph, CrewAI, Java, Python, SpringCloud, Distributed Systems.
Tone: Professional, insightful, and concise. Focus on his engineering capabilities and system design skills.`;

const ADVANTAGES_EN: Advantage[] = [
  {
    id: '1',
    title: 'Data x RAG x Agent',
    icon: Layers,
    color: 'text-qy-blue',
    description: 'Triple-stack fusion capability. Independent end-to-end implementation from data construction, knowledge base creation, retrieval optimization, to agent orchestration.',
    details: [
      { label: 'Full Cycle', value: 'Data → Retrieval → Reasoning' },
      { label: 'Engineering', value: 'End-to-End Implementation' }
    ]
  },
  {
    id: '2',
    title: 'Ontology Modeling',
    icon: Network,
    color: 'text-purple-500',
    description: 'Expert in semantic abstraction. Unifying business semantics with enterprise ontology to build explainable, reproducible analysis Agents.',
    details: [
      { label: 'Semantic Layer', value: 'Business Semantics' },
      { label: 'Explainable', value: 'Graph RAG / Reasoning' }
    ]
  },
  {
    id: '3',
    title: 'Strong Engineering (Infra)',
    icon: Database,
    color: 'text-emerald-500',
    description: 'Supporting 300+ AI scenes, 500+ datasets, and million-level capacity. Lead architect for AI Data Platform from 0 to 1.',
    details: [
      { label: 'Throughput', value: '1TB Peak / Million Ops' },
      { label: 'Scale', value: '300+ AI Scenes' }
    ]
  },
  {
    id: '4',
    title: 'Modular Architecture',
    icon: Cpu,
    color: 'text-blue-500',
    description: 'Decomposing complex chains into engineering components: Modular RAG, Multi-model Routing, LangGraph State Machines, Chunking Experiments.',
    details: [
      { label: 'Orchestration', value: 'LangGraph / CrewAI' },
      { label: 'Strategy', value: 'Hybrid Search / ReRank' }
    ]
  },
  {
    id: '5',
    title: 'Evolution',
    icon: Zap,
    color: 'text-orange-500',
    description: 'Deep involvement in DeepSeek R1 data construction (SFT/CoT/RLAIF). Annually reading 50+ Arxiv papers and translating them into production.',
    details: [
      { label: 'Frontier', value: 'DeepSeek R1 / CoT' },
      { label: 'Learning', value: 'Arxiv -> Production' }
    ]
  }
];

const ADVANTAGES_ZH: Advantage[] = [
  {
    id: '1',
    title: 'Data x RAG x Agent',
    icon: Layers,
    color: 'text-qy-blue',
    description: '具备三栈融合能力。独立完成从数据建设、知识库构建、检索链路优化、Agent 编排到应用落地的全流程闭环。',
    details: [
      { label: '全链路', value: 'Data → Retrieval → Reasoning' },
      { label: '工程化', value: 'End-to-End Implementation' }
    ]
  },
  {
    id: '2',
    title: '本体建模 (Ontology)',
    icon: Network,
    color: 'text-purple-500',
    description: '擅长业务语义抽象。以企业本体统一业务语义，构建可解释、可复现的分析 Agent，引导 LLM 稳定输出。',
    details: [
      { label: '语义层', value: 'Business Semantics' },
      { label: '可解释性', value: 'Graph RAG / Reasoning' }
    ]
  },
  {
    id: '3',
    title: '强工程落地 (Infra)',
    icon: Database,
    color: 'text-emerald-500',
    description: '支撑 300+ AI 场景、500+ 数据集与百万级产能。负责 AI 数据平台从 0 到 1 的架构设计，具备大规模系统构建能力。',
    details: [
      { label: '高吞吐', value: '1TB Peak / Million Ops' },
      { label: '规模化', value: '300+ AI Scenes' }
    ]
  },
  {
    id: '4',
    title: '模块化架构 (Arch)',
    icon: Cpu,
    color: 'text-blue-500',
    description: '擅长将复杂链路拆分为工程组件：RAG 检索模块化、多模型路由、LangGraph 状态机编排、Chunking 策略实验。',
    details: [
      { label: '编排', value: 'LangGraph / CrewAI' },
      { label: '策略', value: 'Hybrid Search / ReRank' }
    ]
  },
  {
    id: '5',
    title: '重进化 (Evolve)',
    icon: Zap,
    color: 'text-orange-500',
    description: '深度参与 DeepSeek R1 数据构建（SFT/CoT/RLAIF）。年均精读 50+ Arxiv 文献并转化落地，持续探索前沿生态。',
    details: [
      { label: '前沿实践', value: 'DeepSeek R1 / CoT' },
      { label: '持续学习', value: 'Arxiv -> Production' }
    ]
  }
];

const PROJECTS_EN: Project[] = [
  {
    id: 'resume',
    slug: 'qingyang-resume',
    title: 'Easy-Resume',
    category: 'Product',
    description: 'Create professional resumes effortlessly. Minimalist design, powerful features.',
    longDescription: 'Minimalist design, powerful features. Makes resume creation simple and efficient. Focus on content creation without worrying about complex layout. One-click export to professional PDF.',
    technologies: ['Next.js', 'Tailwind', 'React PDF', 'AI Writer'],
    status: 'completed',
    results: ['Minimalist UX', 'Real-time Preview', 'PDF Export'],
    link: 'https://resume.qingyang.ai',
    featured: true,
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'brain',
    slug: 'qingyang-brain',
    title: 'Qingyang Brain',
    category: 'Product',
    description: 'AI Brain Product. Real-time chat with Gemini-Flash.',
    longDescription: 'Personal AI knowledge base and assistant built on Google Gemini Flash. Supports ultra-low latency real-time Q&A, serving as a second brain to assist thinking.',
    technologies: ['Gemini Flash', 'React', 'Vercel AI SDK', 'Streaming'],
    status: 'completed',
    results: ['Real-time', 'Powered by Gemini', 'Smart Q&A'],
    link: 'https://brain.qingyang.ai',
    featured: true,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ontology-engine',
    slug: 'enterprise-insight-engine',
    title: 'Ontology Insight Engine',
    category: 'AI Architecture',
    description: 'Enterprise Semantic Hub. Ontology + Agent Engine unifying business semantics.',
    longDescription: 'Lead architect for company-wide Ontology + Agent engine. Unified semantics for subscriptions, orders, and behavior, building an enterprise ontology with 40+ entities. Built an orchestration engine based on LangGraph/CrewAI for FSM-driven Agent chains. Proposed DSS Data Saturation Score system.',
    technologies: ['LangGraph', 'CrewAI', 'Milvus', 'Knowledge Graph', 'FastAPI'],
    status: 'completed',
    results: ['Auto Ontology', 'Explainable Analysis', 'SQL/Cypher Gen'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'toolbox',
    slug: 'web-toolbox',
    title: 'Web Toolbox',
    category: 'Product',
    description: 'Lightweight, out-of-the-box collection of web tools.',
    longDescription: 'Integrated 12+ tools including Mermaid renderer, Password Generator, Canvas, Pomodoro, LaTeX editor. Zero registration, 100% local storage, fully responsive.',
    technologies: ['HTML5', 'JS', 'Canvas', 'Local Storage'],
    status: 'completed',
    results: ['12+ Tools', '100% Local', 'No Registration'],
    link: 'https://tools.qingyang.ai',
    featured: true,
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'chatbi',
    slug: 'chatbi-platform',
    title: 'ChatBI Platform',
    category: 'AI Platform',
    description: 'Natural Language Query and Intelligent Data Analysis with LLM.',
    longDescription: 'Supports multi-source data integration, real-time processing, smart charting, and auto-insight discovery. Makes data analysis as simple as chatting via AI assistant.',
    technologies: ['Vue.js', 'Doris', 'Python', 'FastAPI', 'LangChain'],
    status: 'completed',
    results: ['5x Query Efficiency', '95% NL2SQL Accuracy'],
    link: 'https://chatbi.qingyang.ai',
    featured: false,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'dataplat',
    slug: 'ai-data-processing-platform',
    title: 'AI DataOps Platform',
    category: 'AI Platform',
    description: 'Enterprise AI Data Production System, supporting DeepSeek R1 data construction.',
    longDescription: 'Covers full lifecycle: collection, cleaning, labeling, augmentation, synthesis, evaluation. Led DeepSeek R1 data construction (SFT/CoT/RLAIF) with 100+ datasets. Built multi-modal DAG Pipeline (Text/Image/Audio/Video), tripling capacity.',
    technologies: ['SpringCloud', 'LangChain', 'DeepSeek R1', 'RAG', 'Agent'],
    status: 'completed',
    results: ['300k+ Datasets', '500k+ CoT Samples', '10+ Industries'],
    link: 'https://data.qingyang.ai',
    featured: true,
    image: 'https://images.unsplash.com/photo-1558494949-efc02570fbc9?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ragagent',
    slug: 'rag-agent-applications',
    title: '19+ RAG Agent Apps',
    category: 'AI Application',
    description: 'Cluster of 19+ AI Apps, saving 90% human cost.',
    longDescription: 'Developed 19+ applications including Contract Extraction, Policy QA, Smart CS, Coding Assistant, Interview Helper. Built RAG retrieval chain (Chunking/Hybrid Search/ReRank). 100+ daily internal calls, selected as Government Digital Transformation Case Study.',
    technologies: ['Python', 'RAG', 'Agent', 'ChatGLM4', 'LoRA'],
    status: 'completed',
    results: ['19+ Apps', '90% Cost Saving', 'Gov Case Study'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'data-middle-platform',
    slug: 'data-middle-platform',
    title: 'Data Middle Platform',
    category: 'Data Platform',
    description: 'Data Middle Platform Architecture Refactoring and Service Construction.',
    longDescription: 'Responsible for underlying framework development and microservice evolution (separation of frontend/backend). Deep integration of data governance capabilities (Standards, Models, Assets). Implemented Asset Map Search, Health Monitoring, and Anomaly Alerting.',
    technologies: ['Java', 'SpringCloud', 'Kafka', 'Redis', 'Docker'],
    status: 'completed',
    results: ['Efficiency +200%', 'Microservices', 'Anomaly Alerts'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'datagov-platform',
    slug: 'data-governance-platform',
    title: 'Data Governance Platform',
    category: 'Data Platform',
    description: 'Unified governance system covering Metadata, Standards, Quality, and Security.',
    longDescription: 'Developed core modules for full-lifecycle governance platform. Built Metadata Management, Data Standards, Full-link Lineage, Quality Audit, and Security Control. Achieved automated integration with business systems and visual lineage graphs.',
    technologies: ['Java', 'SpringBoot', 'ElasticSearch', 'Neo4j', 'ClickHouse'],
    status: 'completed',
    results: ['Traceability +90%', 'Compliance 100%', 'Asset Transparency'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=800&auto=format&fit=crop'
  }
];

const PROJECTS_ZH: Project[] = [
  {
    id: 'resume',
    slug: 'qingyang-resume',
    title: '简单简历（Easy-Resume）',
    category: 'Product',
    description: '轻松创建专业简历。极简设计，强大功能。',
    longDescription: '极简设计，强大功能。让简历制作变得简单高效。无需关注复杂排版，专注于内容创作，一键生成专业级 PDF 简历。',
    technologies: ['Next.js', 'Tailwind', 'React PDF', 'AI Writer'],
    status: 'completed',
    results: ['极简交互', '实时预览', 'PDF导出'],
    link: 'https://resume.qingyang.ai',
    featured: true,
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'brain',
    slug: 'qingyang-brain',
    title: '清扬个人大脑（Qingyang Brain）',
    category: 'Product',
    description: 'AI 大脑产品。支持和 Gemini-Flash 实时问答。',
    longDescription: '基于 Google Gemini Flash 模型构建的个人 AI 知识库与智能助手。支持超低延迟的实时问答，作为第二大脑辅助思考。',
    technologies: ['Gemini Flash', 'React', 'Vercel AI SDK', 'Streaming'],
    status: 'completed',
    results: ['实时响应', 'Gemini驱动', '智能问答'],
    link: 'https://brain.qingyang.ai',
    featured: true,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ontology-engine',
    slug: '企业级本体分析引擎（enterprise-insight-engine）',
    title: 'Ontology Insight Engine',
    category: 'AI Architecture',
    description: '企业级语义中枢。Ontology + Agent 智能分析引擎，统一业务语义。',
    longDescription: '主导构建公司级 Ontology + Agent 引擎。统一订阅、订单、行为等业务语义，构建 40+ 实体企业本体。基于 LangGraph/CrewAI 搭建编排引擎，实现状态机驱动的 Agent 链路。提出 DSS 数据饱和度评分体系。',
    technologies: ['LangGraph', 'CrewAI', 'Milvus', 'Knowledge Graph', 'FastAPI'],
    status: 'completed',
    results: ['自动本体构建', '可解释分析', 'SQL/Cypher生成'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'toolbox',
    slug: 'web-toolbox',
    title: '网页工具箱（Web Toolbox）',
    category: 'Product',
    description: '轻量、开箱即用的多功能网页工具集合。',
    longDescription: '集成Mermaid渲染、密码生成、画板、番茄钟、LaTeX编辑等12+工具。零注册，100% 本地化存储，完全响应式设计。',
    technologies: ['HTML5', 'JS', 'Canvas', 'Local Storage'],
    status: 'completed',
    results: ['集成12个实用工具', '100% 本地化', '零注册'],
    link: 'https://tools.qingyang.ai',
    featured: true,
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'chatbi',
    slug: 'chatbi-platform',
    title: '智能数据分析平台（ChatBI）',
    category: 'AI Platform',
    description: '结合 LLM 实现自然语言查询和智能数据分析。',
    longDescription: '支持多数据源接入、实时数据处理、智能图表生成和业务洞察自动发现。通过 AI 助手让数据分析变得像聊天一样简单。',
    technologies: ['Vue.js', 'Doris', 'Python', 'FastAPI', 'LangChain'],
    status: 'completed',
    results: ['查询效率提升 5倍', 'NL2SQL准确率 95%'],
    link: 'https://chatbi.qingyang.ai',
    featured: false,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'dataplat',
    slug: 'ai-data-processing-platform',
    title: 'AI 数据处理平台（DataOps）',
    category: 'AI Platform',
    description: '企业级AI数据生产体系，支撑 DeepSeek R1 数据构建。',
    longDescription: '覆盖采集、清洗、标注、增强、合成、评估全链路。主导 DeepSeek R1 数据构建（SFT/CoT/RLAIF/思维链）100+ 数据集。构建多模态 DAG Pipeline（文本/图像/音频/视频），产能提升 3 倍。',
    technologies: ['SpringCloud', 'LangChain', 'DeepSeek R1', 'RAG', 'Agent'],
    status: 'completed',
    results: ['交付30万+数据集', '50W+ CoT样本', '覆盖10+行业'],
    link: 'https://data.qingyang.ai',
    featured: true,
    image: 'https://images.unsplash.com/photo-1558494949-efc02570fbc9?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ragagent',
    slug: 'rag-agent-applications',
    title: '19+ RAG Agent Apps',
    category: 'AI Application',
    description: '19+ AI智能应用集群，节省 90% 人力成本。',
    longDescription: '研发合同抽取、制度问答、智能客服、代码助手、面试助手等 19+ 应用。构建 RAG 检索链路（Chunking/Hybrid Search/ReRank）。内部员工日均调用超 100 次，入选政府数字化转型案例。',
    technologies: ['Python', 'RAG', 'Agent', 'ChatGLM4', 'LoRA'],
    status: 'completed',
    results: ['落地19+应用', '节省90%人力', '政府示范案例'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'data-middle-platform',
    slug: 'data-middle-platform',
    title: '企业级数据中台',
    category: 'Data Platform',
    description: '数据中台底层架构重构与服务化建设。',
    longDescription: '负责中台底层框架开发与微服务架构演进（前后端分离）。将数据治理能力（标准、模型、资产）深度集成至中台体系。实现数据资产地图搜索、资产健康度实时检测与异常预警机制，打通数据治理与业务场景的最后一公里。',
    technologies: ['Java', 'SpringCloud', 'Kafka', 'Redis', 'Docker'],
    status: 'completed',
    results: ['数据使用效率+200%', '微服务架构重构', '资产异常预警'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'datagov-platform',
    slug: 'data-governance-platform',
    title: '全生命周期数据治理平台',
    category: 'Data Platform',
    description: '覆盖元数据、标准、质量、安全的统一治理体系。',
    longDescription: '负责企业级全生命周期治理平台核心模块研发。构建元数据管理、数据标准体系、全链路血缘分析、数据质量稽核与安全管控模块。实现元数据与业务系统自动打通，构建可视化血缘图谱，显著提升数据资产的透明度与合规性。',
    technologies: ['Java', 'SpringBoot', 'ElasticSearch', 'Neo4j', 'ClickHouse'],
    status: 'completed',
    results: ['元数据追溯效率+90%', '安全合规扫描100%', '资产透明化'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=800&auto=format&fit=crop'
  }
];

const CERTIFICATES_EN: Certificate[] = [
  {
    id: 1,
    title: "Annual Excellent Deliverable Award (2nd Prize)",
    year: "2024",
    description: "Awarded to 5 out of 3000+ employees for outstanding AI platform deliverables.",
    category: 'professional'
  },
  {
    id: 2,
    title: "AI Full-Stack Development Certificate",
    year: "2025",
    description: "Systematic mastery of AI frontend/backend, model deployment, and application capabilities.",
    category: 'ai'
  },
  {
    id: 3,
    title: "Advanced LLM RAG Certificate",
    year: "2025",
    description: "Advanced mastery of RAG architecture, retrieval strategies, and Agent development.",
    category: 'ai'
  },
  {
    id: 4,
    title: "Enterprise Agent Development",
    year: "2024",
    description: "Mastery of CrewAI/LangGraph orchestration, multi-agent collaboration, and production deployment.",
    category: 'ai'
  },
  {
    id: 5,
    title: "Senior Big Data Analyst",
    year: "2024",
    description: "Data mining and analysis modeling capabilities for complex business scenarios.",
    category: 'professional'
  }
];

const CERTIFICATES_ZH: Certificate[] = [
  {
    id: 1,
    title: "年度优秀交付物二等奖",
    year: "2024",
    description: "全公司 3000+ 人中脱颖而出（仅 5 人获奖），表彰 AI 平台与应用交付成果",
    category: 'professional'
  },
  {
    id: 2,
    title: "AI全栈开发毕业证书",
    year: "2025",
    description: "系统掌握 AI 前后端、模型部署与应用落地全链路能力",
    category: 'ai'
  },
  {
    id: 3,
    title: "大模型RAG进阶毕业",
    year: "2025",
    description: "深入掌握 RAG 架构优化、高级检索策略与 Agent 开发",
    category: 'ai'
  },
  {
    id: 4,
    title: "企业级Agent开发",
    year: "2024",
    description: "掌握 CrewAI/LangGraph 编排、多智能体协作与生产级部署",
    category: 'ai'
  },
  {
    id: 5,
    title: "高级大数据分析师",
    year: "2024",
    description: "具备复杂业务场景下的数据挖掘与分析建模能力",
    category: 'professional'
  }
];

const EXPERIENCES_EN: Experience[] = [
  {
    id: '1',
    role: "Lead Architect",
    company: "Million-Dollar Angel Round Startup",
    period: "2025.09 - 2025.11",
    description: "Led the construction of company-wide Ontology + Agent Insight Engine. Built FSM-driven Agent chains using LangGraph/CrewAI. Proposed DSS Data Saturation Score system. Delivered RAG Retrieval Chain & Insight Agent.",
    tags: ["Ontology", "Agent Orchestration", "LangGraph", "System Design"]
  },
  {
    id: '2',
    role: "Senior Engineer (AI Platform Lead)",
    company: "Top Industry Player (Public Company)",
    period: "2020.06 - 2025.07",
    description: "Built AI Data Production System from 0 to 1, tripling capacity. Led DeepSeek R1 data construction (500k+ samples). Developed 19+ RAG Agent Apps. Responsible for Data Governance & Middle Platform refactoring.",
    tags: ["AI Platform", "DeepSeek R1", "RAG", "Team Lead"]
  },
  {
    id: '3',
    role: "Education",
    company: "Double First-Class University",
    period: "2016.09 - 2020.06",
    description: "Bachelor in Software Engineering. Awarded scholarships for three consecutive years. Class Monitor & Campus Host.",
    tags: ["Software Engineering", "Bachelor"]
  }
];

const EXPERIENCES_ZH: Experience[] = [
  {
    id: '1',
    role: "架构设计 & 主负责人",
    company: "某百万美金天使轮公司",
    period: "2025.09 - 2025.11",
    description: "主导构建公司级 Ontology + Agent 智能分析引擎。基于 LangGraph/CrewAI 搭建状态机驱动的 Agent 链路。提出 DSS 数据饱和度评分体系。交付 RAG 检索链路与 Insight Agent。",
    tags: ["Ontology", "Agent Orchestration", "LangGraph", "System Design"]
  },
  {
    id: '2',
    role: "高级工程师 (AI数据平台负责人)",
    company: "某行业Top公司 (上市公司)",
    period: "2020.06 - 2025.07",
    description: "从 0 到 1 构建 AI 数据生产体系，产能提升 3 倍。主导 DeepSeek R1 数据构建 (50W+ 样本)。研发 19+ RAG Agent 应用。负责数据治理平台与中台重构，支撑 10+ 省市运营商落地。",
    tags: ["AI Platform", "DeepSeek R1", "RAG", "Team Lead"]
  },
  {
    id: '3',
    role: "教育背景",
    company: "某双一流大学",
    period: "2016.09 - 2020.06",
    description: "软件工程专业本科。连续三年获得奖学金，担任班长与校区主持人。",
    tags: ["Software Engineering", "Bachelor"]
  }
];


export const CONTENT = {
  en: {
    nav: [
      { id: 'home', label: 'Home' },
      { id: 'works', label: 'Works' },
      { id: 'products', label: 'Products' },
      { id: 'mind', label: 'Mind' },
      { id: 'universe', label: 'Universe' },
      { id: 'about', label: 'About' },
    ],
    hero: {
      tag: "AI Infra • RAG • Agent Orchestration",
      title1: "Building the",
      title2: "Intelligent Infrastructure",
      description: "Constructing end-to-end AI application chains:",
      chain: ["Data", "Retrieval", "Reasoning", "Orchestration"],
      ctaPrimary: "View Architectures",
      ctaSecondary: "Try Products",
      featuredTitle: "Featured Work",
      featuredDesc: "From live products to enterprise architectures.",
      viewAll: "View All",
      noImage: "No Image",
      techStack: "Tech Stack",
      toastPrivate: "Internal Enterprise Project - Not Publicly Available"
    },
    works: {
      titleProjects: "Projects & Architectures",
      descProjects: "Enterprise-grade systems, architectures, and AI applications delivered for impact.",
      titleProducts: "Products",
      descProducts: "Live tools built for efficiency and creativity.",
      visitLive: "Visit Live",
      filterAll: "All"
    },
    mind: {
      title: "Core Advantages",
      description: "Based on 5 years of enterprise development experience, I have formed a unique \"Five Haves\" system to provide comprehensive professional services.",
      contactTitle: "Need a Technical Partner?",
      contactDesc: "Whether it's technical consulting, product development, or team training, I can provide professional support based on extensive practical experience.",
      contactBtn: "Start Consultation"
    },
    universe: {
      title: "Honors & Certificates",
      description: "Continuous learning and professional certification, witnessing technical growth and industry recognition.",
      aiTitle: "AI Specialization",
      profTitle: "Professional Certifications"
    },
    about: {
      name: "Qingyang",
      role: "AI Infrastructure & RAG Engineering Specialist.",
      intro1: "My expertise lies in building the complete AI application lifecycle:",
      intro2: "I possess a unique fusion of capabilities: **Data Platform x RAG x Agent Workflow**. I have architected enterprise-level data platforms supporting 300+ AI scenes and millions of data points, and engineered sophisticated Agent orchestration engines using LangGraph and Ontology modeling.",
      intro3: "I focus on turning complex algorithms into scalable, stable, and explainable engineering solutions.",
      impactTitle: "Impact",
      stats: [
        { value: "300+", label: "AI Scenes Supported" },
        { value: "19+", label: "RAG/Agent Apps" },
        { value: "500k+", label: "CoT Data Samples" }
      ],
      expTitle: "Professional Experience",
      skillsTitle: "Skill Matrix",
      coreEng: "Core Engineering",
      capabilities: "Capabilities"
    },
    advantages: ADVANTAGES_EN,
    projects: PROJECTS_EN,
    certificates: CERTIFICATES_EN,
    experiences: EXPERIENCES_EN
  },
  zh: {
    nav: [
      { id: 'home', label: '首页' },
      { id: 'works', label: '作品' },
      { id: 'products', label: '产品' },
      { id: 'mind', label: '思维' },
      { id: 'universe', label: '宇宙' },
      { id: 'about', label: '关于' },
    ],
    hero: {
      tag: "AI 基础设施 • RAG • Agent 编排",
      title1: "构建",
      title2: "智能基础设施",
      description: "构建端到端 AI 应用链路：",
      chain: ["数据", "检索", "推理", "编排"],
      ctaPrimary: "查看架构案例",
      ctaSecondary: "体验产品",
      featuredTitle: "精选案例",
      featuredDesc: "从独立产品到企业级架构落地。",
      viewAll: "查看全部",
      noImage: "暂无图片",
      techStack: "技术栈",
      toastPrivate: "企业内部项目 - 暂不对外开放"
    },
    works: {
      titleProjects: "项目与架构",
      descProjects: "交付有影响力的企业级系统、架构与 AI 应用。",
      titleProducts: "产品",
      descProducts: "为效率与创造力打造的实时工具。",
      visitLive: "访问产品",
      filterAll: "全部"
    },
    mind: {
      title: "核心优势",
      description: "基于 5 年企业级开发经验，形成独特的“五有”优势体系，为您提供全方位的专业服务。",
      contactTitle: "寻找技术伙伴？",
      contactDesc: "无论是技术咨询、产品开发还是团队培训，我都能基于丰富的实战经验为您提供专业的支持。",
      contactBtn: "开始咨询"
    },
    universe: {
      title: "荣誉与证书",
      description: "持续学习与专业认证，见证技术成长与行业认可。",
      aiTitle: "AI 专项认证",
      profTitle: "专业资质认证"
    },
    about: {
      name: "清扬",
      role: "AI 基础设施 & RAG 工程专家",
      intro1: "专精于构建 AI 应用的全生命周期链路：",
      intro2: "具备独特的 **数据平台 x RAG x Agent 工作流** 三栈融合能力。主导构建了支撑 300+ AI 场景的企业级数据平台，并使用 LangGraph 和本体建模设计了复杂的 Agent 编排引擎。",
      intro3: "专注于将复杂的算法转化为可扩展、稳定且可解释的工程解决方案。",
      impactTitle: "影响力",
      stats: [
        { value: "300+", label: "AI 场景支撑" },
        { value: "19+", label: "RAG/Agent 应用" },
        { value: "50万+", label: "CoT 样本数据" }
      ],
      expTitle: "专业经历",
      skillsTitle: "技能矩阵",
      coreEng: "核心工程",
      capabilities: "综合能力"
    },
    advantages: ADVANTAGES_ZH,
    projects: PROJECTS_ZH,
    certificates: CERTIFICATES_ZH,
    experiences: EXPERIENCES_ZH
  }
};