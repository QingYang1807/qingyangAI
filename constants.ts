
import { Section, Project, Advantage, Certificate, Experience, Course, SkillCategory, Differentiator } from './types';
import { Layers, Code, Cpu, Rocket, Zap, Brain, FileText, Database, Network } from 'lucide-react';

export const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com/QIngYang1807' },
  { name: 'Blog', href: 'http://linqingyang.com' },
  { name: 'CSDN', href: 'https://blog.csdn.net/zsrsdf?type=blog' },
];

// Path to the image in public/images folder
export const WECHAT_QR_CODE = '/images/qrcode_for_gh_0453b5821be3_1280.jpg';

export const SYSTEM_INSTRUCTION = `You are Qingyang's AI assistant.
Identity: Qingyang is an AI Infra & RAG Engineering Expert. He specializes in end-to-end AI application chains (Data -> Retrieval -> Reasoning -> Orchestration -> Application).
Highlights:
- **Five Haves**: Data x RAG x Agent, Ontology Modeling, Strong Engineering, Modular Architecture, Evolution.
- **Key Products**: Qingyang Resume (resume.qingyang.ai), Qingyang Brain (brain.qingyang.ai).
- **Experience**: Lead Architect at a Million-Dollar Angel Round Startup (Ontology/Agent), AI Platform Lead at a Top Public Listed Tech Company (DeepSeek R1 Data, 300k+ Datasets).
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

const COURSES_EN: Record<string, Course> = {
  'fullstack': {
    id: 'fullstack',
    title: "AI Full-Stack Development Camp",
    period: "2025.05 - 2025.09",
    description: "Comprehensive training on modern AI application development, covering Transformer architectures, DeepSeek integration, RAG systems, and commercial deployment.",
    modules: [
      { title: "Machine Learning & DL Basics", topics: ["Supervised/Unsupervised Learning", "Neural Networks", "Backpropagation"] },
      { title: "Transformer & LLMs", topics: ["Attention Mechanism", "Self-Attention", "MoE", "Quantization", "Distillation"] },
      { title: "DeepSeek Application", topics: ["Prompt Engineering", "Code Generation", "Reasoning Models (R1)"] },
      { title: "AI App Platforms", topics: ["RAG Systems", "Dify / FastGPT", "LangBot", "Smart CS Agents"] },
      { title: "Advanced Agentic AI", topics: ["MCP Protocol", "A2A Collaboration", "Code Agents"] }
    ]
  },
  'rag-advanced': {
    id: 'rag-advanced',
    title: "Large Model RAG Advanced Camp",
    period: "2025.03 - 2025.06",
    description: "Deep dive into Retrieval-Augmented Generation, focusing on advanced indexing, retrieval strategies, evaluation frameworks, and multimodal RAG.",
    modules: [
      { title: "RAG Foundations", topics: ["Git/Cursor", "LlamaIndex", "Framework Design"] },
      { title: "Data Processing", topics: ["PDF Parsing (Unstructured)", "Table Extraction", "Embedding Models"] },
      { title: "Vector Database", topics: ["Milvus", "Hybrid Search", "Multimodal Retrieval"] },
      { title: "Advanced Retrieval", topics: ["Text-to-SQL/Cypher", "Query Routing", "Reranking", "GraphRAG"] },
      { title: "Evaluation & Production", topics: ["RAGas Framework", "MCP Integration", "DeepSeek R1 Fine-tuning"] }
    ]
  },
  'agent-enterprise': {
    id: 'agent-enterprise',
    title: "Enterprise Agents Development Camp",
    period: "2024.08 - 2024.11",
    description: "Focusing on production-grade Agent orchestration using LangChain/LangGraph, multi-agent collaboration, and private deployment.",
    modules: [
      { title: "LLM Evolution", topics: ["GPT-1 to GPT-4", "Transformer Architecture"] },
      { title: "Agent Frameworks", topics: ["GitHubSentinel", "LangChain/LangGraph", "ReAct Pattern"] },
      { title: "Orchestration", topics: ["Multi-Agent Systems", "State Machines", "Reflection Mechanisms"] },
      { title: "Advanced Protocols", topics: ["MCP (Model Context Protocol)", "A2A (Agent-to-Agent)"] }
    ]
  },
  'fine-tuning': {
    id: 'fine-tuning',
    title: "AI Large Model Fine-tuning Camp",
    period: "2023.11 - 2024.02",
    description: "Mastering the art of model customization, from PEFT/LoRA techniques to RLHF and distilled reasoning models.",
    modules: [
      { title: "Fine-tuning Basics", topics: ["PEFT", "LoRA", "QLoRA", "Hugging Face Transformers"] },
      { title: "Model Architectures", topics: ["ChatGLM3", "LLaMA 2", "MoE (Mixture of Experts)"] },
      { title: "Advanced Training", topics: ["RLHF", "DeepSpeed Distributed Training", "Privatized Deployment"] },
      { title: "Reasoning Models", topics: ["DeepSeek-R1 Distillation", "Instruction Tuning"] }
    ]
  },
  'algorithm': {
    id: 'algorithm',
    title: "AI Algorithm Advanced Camp",
    period: "2025.06 - 2025.12",
    description: "In-depth theoretical and practical study of AI algorithms, ranging from mathematical foundations to cutting-edge generative models.",
    modules: [
      { title: "Math & ML Foundations", topics: ["Probability", "Data Distribution", "Linear Models", "Decision Trees"] },
      { title: "Knowledge & Reasoning", topics: ["Symbolic AI", "Knowledge Bases", "Rule Engines"] },
      { title: "Reinforcement Learning", topics: ["Q-Learning", "DQN", "Deep RL"] },
      { title: "Deep Representation", topics: ["CNN (Vision)", "RNN/Transformer (NLP)", "Attention Mechanism"] },
      { title: "Generative AI", topics: ["Diffusion Models", "CLIP", "World Models"] }
    ]
  },
  'digital-human': {
    id: 'digital-human',
    title: "AI Agent Real-time Digital Human",
    period: "2025.06 - 2025.07",
    description: "Building interactive, real-time digital humans driven by advanced Agent logic and Live2D technologies.",
    modules: [
      { title: "Foundations", topics: ["DeepSeek R1 / Qwen3", "ADH Tool Setup"] },
      { title: "Character Dev", topics: ["Live2D Models", "Agent SDK", "Personality Design"] },
      { title: "Intelligence Integration", topics: ["RAG Memory", "Vector DB", "MCP Protocol"] },
      { title: "Optimization", topics: ["Latency Reduction", "OpenManus Integration"] }
    ]
  }
};

const COURSES_ZH: Record<string, Course> = {
  'fullstack': {
    id: 'fullstack',
    title: "AI 全栈开发实战营",
    period: "2025.05 - 2025.09",
    description: "系统掌握现代 AI 应用开发，覆盖 Transformer 架构、DeepSeek 集成、RAG 系统构建与商业化落地。",
    modules: [
      { title: "机器学习与深度学习基础", topics: ["监督/非监督学习", "神经网络架构", "反向传播"] },
      { title: "Transformer 与大模型", topics: ["注意力机制", "MoE 混合专家", "量化与蒸馏技术"] },
      { title: "DeepSeek 应用生态", topics: ["提示词工程", "代码生成", "R1 推理模型微调"] },
      { title: "AI 应用开发平台", topics: ["Dify / FastGPT 实战", "LangBot 机器人", "企业级知识库"] },
      { title: "Agent 前沿技术", topics: ["MCP 协议", "A2A 协作", "Code Agent"] }
    ]
  },
  'rag-advanced': {
    id: 'rag-advanced',
    title: "大模型 RAG 进阶实战营",
    period: "2025.03 - 2025.06",
    description: "深入 RAG 检索增强生成技术，专注高级索引策略、混合检索、评估框架与多模态应用。",
    modules: [
      { title: "RAG 基础设施", topics: ["Git/Cursor 工具链", "LlamaIndex 框架", "自研 RAG 框架"] },
      { title: "数据处理与解析", topics: ["PDF/表格解析", "非结构化数据清洗", "Embedding 技术"] },
      { title: "向量数据库实战", topics: ["Milvus 部署", "混合检索", "多模态检索"] },
      { title: "高级检索策略", topics: ["Text-to-SQL/Cypher", "查询路由", "重排 (Rerank)", "GraphRAG"] },
      { title: "系统评估与生产", topics: ["RAGas 评估", "MCP 集成", "DeepSeek R1 微调"] }
    ]
  },
  'agent-enterprise': {
    id: 'agent-enterprise',
    title: "企业级 Agents 开发实战营",
    period: "2024.08 - 2024.11",
    description: "专注于生产级 Agent 编排，掌握 LangChain/LangGraph、多智能体协作与私有化部署。",
    modules: [
      { title: "大模型演进", topics: ["GPT 家族", "Transformer 原理", "Attention 机制"] },
      { title: "Agent 开发框架", topics: ["GitHubSentinel 实战", "LangChain 体系", "ReAct 模式"] },
      { title: "高级编排技术", topics: ["LangGraph 状态机", "Multi-Agent 协作", "反思机制"] },
      { title: "下一代协议", topics: ["MCP (模型上下文协议)", "A2A (Agent-to-Agent)"] }
    ]
  },
  'fine-tuning': {
    id: 'fine-tuning',
    title: "AI 大模型微调训练营",
    period: "2023.11 - 2024.02",
    description: "精通模型定制化技术，从 PEFT/LoRA 微调到 RLHF 对齐与推理模型蒸馏。",
    modules: [
      { title: "微调基础技术", topics: ["PEFT", "LoRA", "QLoRA", "Hugging Face Transformers"] },
      { title: "模型架构实战", topics: ["ChatGLM3", "LLaMA 2", "MoE 架构揭秘"] },
      { title: "高级训练技术", topics: ["RLHF", "DeepSpeed 分布式训练", "私有化部署"] },
      { title: "推理模型特训", topics: ["DeepSeek-R1 蒸馏", "指令微调 (Instruction Tuning)"] }
    ]
  },
  'algorithm': {
    id: 'algorithm',
    title: "AI 算法进阶训练营",
    period: "2025.06 - 2025.12",
    description: "深度剖析 AI 算法理论与实践，从数学基础到前沿的生成式模型与世界模型。",
    modules: [
      { title: "数学与 ML 基础", topics: ["概率论", "数据分布", "线性模型", "决策树"] },
      { title: "知识与推理", topics: ["符号主义", "知识库", "规则引擎"] },
      { title: "强化学习 (RL)", topics: ["Q-Learning", "DQN", "深度强化学习"] },
      { title: "深度表示学习", topics: ["CNN (视觉)", "RNN/Transformer (NLP)", "自监督学习"] },
      { title: "生成式 AI", topics: ["扩散模型 (Diffusion)", "CLIP", "世界模型", "具身智能"] }
    ]
  },
  'digital-human': {
    id: 'digital-human',
    title: "AI Agent 实时数字人行动营",
    period: "2025.06 - 2025.07",
    description: "构建由高级 Agent 逻辑驱动的实时交互数字人，结合 Live2D 与 RAG 技术。",
    modules: [
      { title: "基础环境搭建", topics: ["DeepSeek R1 / Qwen3", "ADH 工具链"] },
      { title: "角色开发", topics: ["Live2D 模型集成", "Agent SDK", "个性化设计"] },
      { title: "智能集成", topics: ["RAG 记忆库", "向量数据库", "MCP 协议"] },
      { title: "性能优化", topics: ["低延迟优化", "OpenManus 对接", "后端集成"] }
    ]
  }
};

// SORTED BY LATEST END DATE
const CERTIFICATES_EN: Certificate[] = [
  {
    id: 7,
    title: "AI Algorithm Advanced",
    year: "2025",
    description: "Deep dive into Mathematical foundations, RL, and Generative Models.",
    category: 'ai',
    courseId: 'algorithm'
  },
  {
    id: 2,
    title: "AI Full-Stack Development Certificate",
    year: "2025",
    description: "Systematic mastery of AI frontend/backend, model deployment, and application capabilities.",
    category: 'ai',
    courseId: 'fullstack'
  },
  {
    id: 8,
    title: "Real-time Digital Human Agent",
    year: "2025",
    description: "Building interactive digital humans with DeepSeek R1 and Live2D.",
    category: 'ai',
    courseId: 'digital-human'
  },
  {
    id: 3,
    title: "Advanced LLM RAG Certificate",
    year: "2025",
    description: "Advanced mastery of RAG architecture, retrieval strategies, and Agent development.",
    category: 'ai',
    courseId: 'rag-advanced'
  },
  {
    id: 4,
    title: "Enterprise Agent Development",
    year: "2024",
    description: "Mastery of CrewAI/LangGraph orchestration, multi-agent collaboration, and production deployment.",
    category: 'ai',
    courseId: 'agent-enterprise'
  },
  {
    id: 1,
    title: "Annual Excellent Deliverable Award (2nd Prize)",
    year: "2024",
    description: "Awarded to 5 out of 3000+ employees for outstanding AI platform deliverables.",
    category: 'professional'
  },
  {
    id: 5,
    title: "Senior Big Data Analyst",
    year: "2024",
    description: "Data mining and analysis modeling capabilities for complex business scenarios.",
    category: 'professional'
  },
  {
    id: 6,
    title: "AI Large Model Fine-tuning",
    year: "2024",
    description: "Mastering PEFT, LoRA, RLHF, and DeepSpeed distributed training techniques.",
    category: 'ai',
    courseId: 'fine-tuning'
  }
];

// SORTED BY LATEST END DATE
const CERTIFICATES_ZH: Certificate[] = [
  {
    id: 7,
    title: "AI算法进阶训练营",
    year: "2025",
    description: "深度掌握算法数学基础、强化学习及生成式模型原理",
    category: 'ai',
    courseId: 'algorithm'
  },
  {
    id: 2,
    title: "AI全栈开发毕业证书",
    year: "2025",
    description: "系统掌握 AI 前后端、模型部署与应用落地全链路能力",
    category: 'ai',
    courseId: 'fullstack'
  },
  {
    id: 8,
    title: "实时数字人行动营",
    year: "2025",
    description: "基于 DeepSeek R1 与 Live2D 构建实时交互数字人 Agent",
    category: 'ai',
    courseId: 'digital-human'
  },
  {
    id: 3,
    title: "大模型RAG进阶毕业",
    year: "2025",
    description: "深入掌握 RAG 架构优化、高级检索策略与 Agent 开发",
    category: 'ai',
    courseId: 'rag-advanced'
  },
  {
    id: 4,
    title: "企业级Agent开发",
    year: "2024",
    description: "掌握 CrewAI/LangGraph 编排、多智能体协作与生产级部署",
    category: 'ai',
    courseId: 'agent-enterprise'
  },
  {
    id: 1,
    title: "年度优秀交付物二等奖",
    year: "2024",
    description: "全公司 3000+ 人中脱颖而出（仅 5 人获奖），表彰 AI 平台与应用交付成果",
    category: 'professional'
  },
  {
    id: 5,
    title: "高级大数据分析师",
    year: "2024",
    description: "具备复杂业务场景下的数据挖掘与分析建模能力",
    category: 'professional'
  },
  {
    id: 6,
    title: "AI大模型微调训练营",
    year: "2024",
    description: "精通 PEFT、LoRA、RLHF 及 DeepSpeed 分布式训练技术",
    category: 'ai',
    courseId: 'fine-tuning'
  }
];

// Skill Matrix Data - Core Engineering (前4个) + System-Level Skills (后4个)
const SKILLS_EN: SkillCategory[] = [
  {
    id: 'agent',
    title: 'Agent & Orchestration',
    level: 95,
    description: 'LangGraph / FSM / DAG driven multi-agent orchestration. Agent lifecycle management: planning → execution → feedback → reflection → evolution.',
    tags: ['LangGraph', 'FSM', 'Multi-Agent', 'AgentOps']
  },
  {
    id: 'rag',
    title: 'RAG & Retrieval Optimization',
    level: 92,
    description: 'Chunking strategies, Dense/Sparse/Hybrid Retrieval, Query Rewrite, HyDE, Vector DB (Milvus/FAISS/ES), RAG evaluation & hallucination control.',
    tags: ['RAG', 'Retrieval Optimization', 'Vector DB', 'Evaluation']
  },
  {
    id: 'ontology',
    title: 'Ontology & Knowledge Graph',
    level: 88,
    description: 'Ontology-driven Agent design, knowledge structuring, semantic alignment, entity-relationship modeling, Graph + RAG fusion architecture.',
    tags: ['Ontology', 'Knowledge Graph', 'Semantic Modeling']
  },
  {
    id: 'java',
    title: 'Java & Distributed Systems',
    level: 90,
    description: '5+ years Java backend development. High concurrency, high availability, distributed architecture, microservices, task scheduling, message queues.',
    tags: ['Java', 'Distributed Systems', 'High Concurrency']
  },
  {
    id: 'system-design',
    title: 'System Design',
    level: 90,
    description: 'From business goals → system boundaries → architecture decomposition → technology selection. Covering functional, data, technical, and deployment architectures.',
    tags: ['Architecture', 'Scalability', 'Tech Selection']
  },
  {
    id: 'data-pipeline',
    title: 'Data Pipeline & DAG',
    level: 92,
    description: 'DataOps / AI dataset pipeline design. Airflow / DAG orchestration. Data collection → cleaning → labeling → augmentation → feedback loop.',
    tags: ['DataOps', 'Airflow', 'DAG', 'ETL']
  },
  {
    id: 'productization',
    title: 'Productization & Engineering',
    level: 88,
    description: 'AI prototype → deliverable product. Configurable, modular, low-code/visual design. Multi-model adaptation & enterprise deployment.',
    tags: ['Product', 'Modular', 'Enterprise Deployment']
  },
  {
    id: 'leadership',
    title: 'Team & Technical Leadership',
    level: 85,
    description: 'Platform lead / tech lead experience. Technical solution delivery, team collaboration, cross-department communication.',
    tags: ['Tech Lead', 'Team Building', 'Communication']
  }
];

const SKILLS_ZH: SkillCategory[] = [
  {
    id: 'agent',
    title: 'Agent & 编排',
    level: 95,
    description: 'LangGraph / FSM / DAG 驱动的多智能体编排。Agent 生命周期管理：规划 → 执行 → 反馈 → 复盘 → 演化。',
    tags: ['LangGraph', 'FSM', 'Multi-Agent', 'AgentOps']
  },
  {
    id: 'rag',
    title: 'RAG & 检索优化',
    level: 92,
    description: 'Chunking 策略、Dense/Sparse/Hybrid 检索、Query Rewrite、HyDE、向量数据库（Milvus/FAISS/ES）、RAG 评估与幻觉控制。',
    tags: ['RAG', '检索优化', 'Vector DB', '评估']
  },
  {
    id: 'ontology',
    title: '本体 & 知识图谱',
    level: 88,
    description: '本体驱动的 Agent 设计、知识结构化、语义对齐、实体关系建模、图 + RAG 融合架构。',
    tags: ['Ontology', 'Knowledge Graph', '语义建模']
  },
  {
    id: 'java',
    title: 'Java & 分布式系统',
    level: 90,
    description: '5+ 年 Java 后端开发。高并发、高可用、分布式架构设计、微服务、任务调度、消息队列、缓存体系。',
    tags: ['Java', '分布式系统', '高并发']
  },
  {
    id: 'system-design',
    title: '系统设计',
    level: 90,
    description: '从业务目标 → 系统边界 → 架构拆解 → 技术选型。覆盖功能架构、数据架构、技术架构、部署架构。',
    tags: ['架构设计', '可扩展性', '技术选型']
  },
  {
    id: 'data-pipeline',
    title: '数据流水线 & DAG',
    level: 92,
    description: 'DataOps / AI 数据集流水线设计。Airflow / DAG 编排。数据采集 → 清洗 → 标注 → 增强 → 回流。',
    tags: ['DataOps', 'Airflow', 'DAG', 'ETL']
  },
  {
    id: 'productization',
    title: '产品化 & 工程落地',
    level: 88,
    description: 'AI 原型 → 可交付产品。配置化、模块化、低代码/可视化设计。多模型适配与企业级部署。',
    tags: ['产品化', '模块化', '企业部署']
  },
  {
    id: 'leadership',
    title: '团队与技术领导力',
    level: 85,
    description: '平台负责人 / 技术负责人角色。技术方案输出、团队协作、跨部门沟通。',
    tags: ['Tech Lead', '团队建设', '沟通协调']
  }
];

// Differentiators - What makes you uniquely valuable
const DIFFERENTIATORS_EN: Differentiator[] = [
  {
    id: 'triple-stack',
    title: 'Agent × RAG × DataOps Triple-Stack Fusion',
    description: 'Not just using frameworks, but solving process problems with Agent, knowledge problems with RAG, and data quality & scale problems with DataOps. A rare combination in the market.'
  },
  {
    id: 'system-thinking',
    title: 'From "Playing with Models" to "Building Systems"',
    description: 'Focus not on model power, but on: Can it run long-term? Can ordinary people use it? Can it continuously generate value? Can it become a product and asset?'
  },
  {
    id: 'real-experience',
    title: 'Hard-earned Engineering Experience',
    description: 'Built enterprise data platforms, AI data pipelines, Agent automation systems, multi-modal processing (text/image/audio/video), and private/offline/complex deployments. Not demos, but systems people actually use.'
  }
];

const DIFFERENTIATORS_ZH: Differentiator[] = [
  {
    id: 'triple-stack',
    title: 'Agent × RAG × DataOps 三栈融合能力',
    description: '不是只会用某一个框架，而是能用 Agent 解决流程问题、用 RAG 解决知识问题、用 DataOps 解决数据质量与规模问题。这是市场上极少数人真正具备的组合。'
  },
  {
    id: 'system-thinking',
    title: '从"玩模型"到"做系统"',
    description: '关注的不是模型多强，而是：能不能长期运行？能不能被普通人使用？能不能持续产出价值？能不能形成产品与资产？'
  },
  {
    id: 'real-experience',
    title: '工程真实感 (Hard-earned Experience)',
    description: '做过企业级数据平台、AI 数据处理流水线、Agent 自动化系统、多模态数据处理（文本/图像/音频/视频）、私有化/离线/复杂环境部署。不是 Demo，而是"上线后还要有人用"的系统。'
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
      tag: "AI Agent & DataOps Platform Architect",
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
      toastPrivate: "Internal Enterprise Project - Not Publicly Available",
      keywords: "Agent Orchestration · RAG Optimization · AI DataOps · System Architecture · Production Engineering"
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
      role: "AI Agent & DataOps Platform Architect",
      roleDesc: "Specializing in Agent Orchestration, RAG Systems, and AI Dataset Engineering. Complete experience from 0→1 architecture design, 1→N productization, to production-grade engineering and scaling.",
      intro1: "My expertise lies in building the complete AI application lifecycle:",
      intro2: "I possess a unique fusion of capabilities: **Agent × RAG × DataOps Triple-Stack**. I have architected enterprise-level data platforms supporting 300+ AI scenes and millions of data points, and engineered sophisticated Agent orchestration engines using LangGraph and Ontology modeling.",
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
      capabilities: "System-Level Skills",
      differentiatorTitle: "What Makes Me Unique"
    },
    advantages: ADVANTAGES_EN,
    projects: PROJECTS_EN,
    certificates: CERTIFICATES_EN,
    experiences: EXPERIENCES_EN,
    courses: COURSES_EN,
    skills: SKILLS_EN,
    differentiators: DIFFERENTIATORS_EN
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
      tag: "AI Agent & DataOps 平台架构师",
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
      toastPrivate: "企业内部项目 - 暂不对外开放",
      keywords: "Agent Orchestration · RAG Optimization · AI DataOps · System Architecture · Production Engineering"
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
      role: "AI Agent & DataOps 平台架构师",
      roleDesc: "专注于 Agent 编排、RAG 系统、AI 数据集工程化。具备从 0 → 1 架构设计、1 → N 产品化、工程级落地与规模化运行的完整经验。",
      intro1: "专精于构建 AI 应用的全生命周期链路：",
      intro2: "具备独特的 **Agent × RAG × DataOps 三栈融合能力**。主导构建了支撑 300+ AI 场景的企业级数据平台，并使用 LangGraph 和本体建模设计了复杂的 Agent 编排引擎。",
      intro3: "专注于将复杂的算法转化为可扩展、稳定且可解释的工程解决方案。",
      impactTitle: "影响力",
      stats: [
        { value: "300+", label: "AI 场景支撑" },
        { value: "19+", label: "RAG/Agent 应用" },
        { value: "50万+", label: "CoT 样本数据" }
      ],
      expTitle: "专业经历",
      skillsTitle: "技能矩阵",
      coreEng: "核心工程能力",
      capabilities: "系统级综合能力",
      differentiatorTitle: "核心差异化能力"
    },
    advantages: ADVANTAGES_ZH,
    projects: PROJECTS_ZH,
    certificates: CERTIFICATES_ZH,
    experiences: EXPERIENCES_ZH,
    courses: COURSES_ZH,
    skills: SKILLS_ZH,
    differentiators: DIFFERENTIATORS_ZH
  }
};
