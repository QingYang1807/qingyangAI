import { Section, Project, Advantage, Certificate, Experience } from './types';
import { Layers, Code, Cpu, Rocket, Zap, Brain, FileText, Database, Network } from 'lucide-react';

export const NAV_ITEMS: { id: Section; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'works', label: 'Works' },
  { id: 'products', label: 'Products' },
  { id: 'mind', label: 'Mind' },
  { id: 'universe', label: 'Universe' },
  { id: 'about', label: 'About' },
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com/QIngYang1807' },
  { name: 'Blog', href: 'http://linqingyang.com' },
];

export const ADVANTAGES: Advantage[] = [
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

export const ALL_PROJECTS: Project[] = [
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

export const CERTIFICATES: Certificate[] = [
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

export const EXPERIENCES: Experience[] = [
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

export const SYSTEM_INSTRUCTION = `You are Qingyang's AI assistant.
Identity: Qingyang is an AI Infra & RAG Engineering Expert. He specializes in end-to-end AI application chains (Data -> Retrieval -> Reasoning -> Orchestration -> Application).
Highlights:
- **Five Haves**: Data x RAG x Agent, Ontology Modeling, Strong Engineering, Modular Architecture, Evolution.
- **Key Products**: Qingyang Resume (resume.qingyang.ai), Qingyang Brain (brain.qingyang.ai).
- **Experience**: Lead Architect at a Tech Startup (Ontology/Agent), AI Platform Lead at a Public Listed Tech Company (DeepSeek R1 Data, 300k+ Datasets).
- **Skills**: LangGraph, CrewAI, Java, Python, SpringCloud, Distributed Systems.
Tone: Professional, insightful, and concise. Focus on his engineering capabilities and system design skills.`;