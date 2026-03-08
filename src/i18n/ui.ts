export const languages = {
  zh: '中文',
  en: 'English',
};

export const defaultLang = 'zh';

export const ui = {
  zh: {
    'site.title': '四大力学深度学习平台',
    'site.subtitle': '量子力学 & 平衡态统计物理',
    'nav.home': '首页',
    'nav.qm': '量子力学',
    'nav.stat': '统计物理',
    'nav.about': '关于',
    'nav.progress': '学习进度',
    'course.qm.title': '量子力学',
    'course.stat.title': '平衡态统计物理',
    'ui.prev': '上一节',
    'ui.next': '下一节',
    'ui.toc': '本章目录',
    'ui.references': '参考教材',
    'ui.insight': '深度洞察',
    'ui.interactive': '交互实验',
    'ui.thinking': '深层思考',
    'ui.expand': '展开推导',
    'ui.collapse': '收起',
  },
  en: {
    'site.title': 'Advanced Physics Learning Platform',
    'site.subtitle': 'Quantum Mechanics & Equilibrium Statistical Physics',
    'nav.home': 'Home',
    'nav.qm': 'Quantum Mechanics',
    'nav.stat': 'Statistical Physics',
    'nav.about': 'About',
    'nav.progress': 'Progress',
    'course.qm.title': 'Quantum Mechanics',
    'course.stat.title': 'Equilibrium Statistical Physics',
    'ui.prev': 'Previous',
    'ui.next': 'Next',
    'ui.toc': 'Table of Contents',
    'ui.references': 'References',
    'ui.insight': 'Deep Insight',
    'ui.interactive': 'Interactive Lab',
    'ui.thinking': 'Deep Thinking',
    'ui.expand': 'Expand Derivation',
    'ui.collapse': 'Collapse',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
