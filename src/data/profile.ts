export type Language = 'cn' | 'en';

export type Project = {
  title: string;
  kicker: string;
  summary: string;
  image: string;
  stack: string[];
  impact: string[];
};

export type ProfileContent = {
  nav: {
    projects: string;
    skills: string;
    timeline: string;
    contact: string;
  };
  hero: {
    name: string;
    role: string;
    intro: string;
    availability: string;
    primaryAction: string;
    secondaryAction: string;
    metrics: Array<{ value: string; label: string }>;
  };
  projects: Project[];
  skills: Array<{ title: string; detail: string }>;
  timeline: Array<{ year: string; title: string; detail: string }>;
  contact: {
    title: string;
    copy: string;
    email: string;
    location: string;
  };
  ui: {
    selectedWork: string;
    coreStack: string;
    projectDetails: string;
    impact: string;
    close: string;
    switchLanguage: string;
  };
};

export const profile: {
  assets: {
    heroImage: string;
  };
  cn: ProfileContent;
  en: ProfileContent;
} = {
  assets: {
    heroImage: './images/hero-ai-workspace.png'
  },
  cn: {
    nav: {
      projects: '项目',
      skills: '能力',
      timeline: '经历',
      contact: '联系'
    },
    hero: {
      name: '顾一深',
      role: 'AI 产品工程师 / Full-stack Developer',
      intro:
        '我把大模型能力落到真实业务系统里：从需求拆解、前端体验、后端服务到自动化工作流，追求可以上线、可以维护、可以被团队接住的交付。',
      availability: '可承接 AI 应用原型、内部工具与知识系统搭建',
      primaryAction: '查看项目',
      secondaryAction: '联系我',
      metrics: [
        { value: '6+', label: 'AI 应用方向' },
        { value: '12w+', label: '自动化处理记录' },
        { value: '3x', label: '交付节奏提升' }
      ]
    },
    projects: [
      {
        title: '智能客服中枢',
        kicker: 'Conversational AI',
        summary:
          '为服务团队设计多轮对话助手，结合知识检索、意图识别和人工接管，把高频问题先交给系统稳定处理。',
        image: './images/project-ai-assistant.png',
        stack: ['React', 'RAG', 'Node.js', 'OpenAI API'],
        impact: ['首轮响应时间从分钟级降到秒级', '沉淀可复用的问答评估集', '保留人工复核与风险升级路径']
      },
      {
        title: '运营自动化流水线',
        kicker: 'Workflow Automation',
        summary:
          '把分散在表格、邮件和后台里的重复流程串成可追踪任务链，减少人工搬运和漏处理。',
        image: './images/project-automation.png',
        stack: ['TypeScript', 'Queue', 'Webhook', 'Dashboard'],
        impact: ['自动归档并同步跨系统数据', '异常任务集中告警', '让运营同事可以自行调整规则']
      },
      {
        title: '数据洞察面板',
        kicker: 'Decision Intelligence',
        summary:
          '面向管理层重构业务指标看板，把实时数据、趋势解释和行动建议放在同一个决策界面。',
        image: './images/project-data-analytics.png',
        stack: ['Vite', 'Charts', 'SQL', 'Metrics'],
        impact: ['统一指标口径', '减少周报制作时间', '支持按团队和周期快速下钻']
      },
      {
        title: '知识库检索系统',
        kicker: 'Knowledge Base',
        summary:
          '为团队内部资料建立结构化知识入口，通过语义检索、标签体系和答案引用减少重复咨询。',
        image: './images/project-knowledge-base.png',
        stack: ['Embeddings', 'Search', 'CMS', 'Access Control'],
        impact: ['资料查找路径更短', '答案保留来源引用', '支持按角色控制可见范围']
      }
    ],
    skills: [
      { title: 'AI 应用落地', detail: 'RAG、Agent 工作流、评估集、提示词与工具调用设计。' },
      { title: '产品工程', detail: '把模糊需求拆成可验证的界面、接口、状态和上线节奏。' },
      { title: '前端体验', detail: 'React、TypeScript、可访问性、响应式布局和细节交互。' },
      { title: '自动化系统', detail: '任务编排、Webhook、队列、异常处理和运营后台。' }
    ],
    timeline: [
      { year: '2026', title: 'AI 工具链咨询', detail: '帮助团队梳理模型能力边界，搭建从原型到生产的交付路径。' },
      { year: '2025', title: '内部系统工程', detail: '主导多套运营后台和数据自动化流程，降低重复性人工处理。' },
      { year: '2024', title: '全栈产品开发', detail: '负责从用户访谈、交互方案到前后端实现的完整闭环。' }
    ],
    contact: {
      title: '把 AI 能力接进你的业务流程',
      copy: '适合从一个清晰场景开始：客服、知识库、内容处理、数据看板或内部自动化。',
      email: 'hello@example.com',
      location: 'Shanghai / Remote'
    },
    ui: {
      selectedWork: '精选项目',
      coreStack: '核心能力',
      projectDetails: '项目详情',
      impact: '成果',
      close: '关闭',
      switchLanguage: 'Switch to English'
    }
  },
  en: {
    nav: {
      projects: 'Projects',
      skills: 'Skills',
      timeline: 'Timeline',
      contact: 'Contact'
    },
    hero: {
      name: 'Yishen Gu',
      role: 'AI Product Engineer / Full-stack Developer',
      intro:
        'I turn model capability into usable business systems, spanning product framing, front-end experience, back-end services, and automation workflows that teams can maintain after launch.',
      availability: 'Available for AI prototypes, internal tools, and knowledge systems',
      primaryAction: 'View work',
      secondaryAction: 'Contact',
      metrics: [
        { value: '6+', label: 'AI product areas' },
        { value: '120k+', label: 'records automated' },
        { value: '3x', label: 'faster delivery loops' }
      ]
    },
    projects: [
      {
        title: 'AI Support Command Center',
        kicker: 'Conversational AI',
        summary:
          'A multi-turn support assistant with retrieval, intent routing, and human handoff so service teams can resolve repeat questions consistently.',
        image: './images/project-ai-assistant.png',
        stack: ['React', 'RAG', 'Node.js', 'OpenAI API'],
        impact: ['Cut first responses from minutes to seconds', 'Created reusable answer evaluation sets', 'Kept review and escalation paths explicit']
      },
      {
        title: 'Operations Automation Pipeline',
        kicker: 'Workflow Automation',
        summary:
          'A traceable workflow layer that replaces manual handoffs across spreadsheets, email, and internal systems.',
        image: './images/project-automation.png',
        stack: ['TypeScript', 'Queue', 'Webhook', 'Dashboard'],
        impact: ['Archived and synced cross-system records', 'Centralized exception alerts', 'Let operators adjust rules without code changes']
      },
      {
        title: 'Decision Intelligence Dashboard',
        kicker: 'Decision Intelligence',
        summary:
          'A management dashboard that combines live metrics, trend explanations, and action cues in one decision surface.',
        image: './images/project-data-analytics.png',
        stack: ['Vite', 'Charts', 'SQL', 'Metrics'],
        impact: ['Unified metric definitions', 'Reduced weekly reporting work', 'Enabled fast drill-down by team and period']
      },
      {
        title: 'Knowledge Retrieval System',
        kicker: 'Knowledge Base',
        summary:
          'A semantic search entry point for internal documents with tags, source citations, and role-based visibility.',
        image: './images/project-knowledge-base.png',
        stack: ['Embeddings', 'Search', 'CMS', 'Access Control'],
        impact: ['Shortened the path to useful documents', 'Preserved citations in answers', 'Supported role-based access boundaries']
      }
    ],
    skills: [
      { title: 'Applied AI', detail: 'RAG, agent workflows, evaluation sets, prompting, and tool-use design.' },
      { title: 'Product Engineering', detail: 'Turning vague needs into verifiable screens, APIs, states, and releases.' },
      { title: 'Front-end Systems', detail: 'React, TypeScript, accessibility, responsive layout, and interaction detail.' },
      { title: 'Automation', detail: 'Workflow orchestration, webhooks, queues, exception handling, and operator consoles.' }
    ],
    timeline: [
      { year: '2026', title: 'AI Tooling Consultant', detail: 'Helped teams map model capabilities and move from prototype to production.' },
      { year: '2025', title: 'Internal Systems Engineer', detail: 'Led operations dashboards and automation flows that reduced repeated manual work.' },
      { year: '2024', title: 'Full-stack Product Developer', detail: 'Owned the loop from user interviews and UX decisions to implementation.' }
    ],
    contact: {
      title: 'Connect AI capability to your workflow',
      copy: 'The best starting points are concrete: support, knowledge bases, content operations, dashboards, or internal automation.',
      email: 'hello@example.com',
      location: 'Shanghai / Remote'
    },
    ui: {
      selectedWork: 'Selected work',
      coreStack: 'Core stack',
      projectDetails: 'Project details',
      impact: 'Impact',
      close: 'Close',
      switchLanguage: '切换到中文'
    }
  }
};
