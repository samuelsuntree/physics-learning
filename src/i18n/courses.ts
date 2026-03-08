export interface Section {
  id: string;
  title: { zh: string; en: string };
}

export interface Chapter {
  id: string;
  title: { zh: string; en: string };
  sections: Section[];
}

export interface Course {
  id: string;
  title: { zh: string; en: string };
  chapters: Chapter[];
}

export const courses: Course[] = [
  {
    id: 'qm',
    title: { zh: '量子力学', en: 'Quantum Mechanics' },
    chapters: [
      {
        id: 'ch01',
        title: { zh: '第一章 数学基础', en: 'Ch.1 Mathematical Foundations' },
        sections: [
          { id: 'hilbert-space', title: { zh: '1.1 Hilbert空间与内积', en: '1.1 Hilbert Space and Inner Product' } },
          { id: 'operators', title: { zh: '1.2 算符代数', en: '1.2 Operator Algebra' } },
          { id: 'dirac-notation', title: { zh: '1.3 Dirac符号', en: '1.3 Dirac Notation' } },
          { id: 'representation', title: { zh: '1.4 表象理论', en: '1.4 Representation Theory' } },
        ],
      },
      {
        id: 'ch02',
        title: { zh: '第二章 量子力学公设', en: 'Ch.2 Postulates of Quantum Mechanics' },
        sections: [
          { id: 'state-vectors', title: { zh: '2.1 态矢量与态空间', en: '2.1 State Vectors and State Space' } },
          { id: 'observables', title: { zh: '2.2 可观测量与算符', en: '2.2 Observables and Operators' } },
          { id: 'measurement', title: { zh: '2.3 测量公设', en: '2.3 Measurement Postulate' } },
          { id: 'time-evolution', title: { zh: '2.4 时间演化与Schrödinger方程', en: '2.4 Time Evolution and Schrödinger Equation' } },
          { id: 'uncertainty', title: { zh: '2.5 不确定性关系', en: '2.5 Uncertainty Relations' } },
        ],
      },
      {
        id: 'ch03',
        title: { zh: '第三章 一维问题', en: 'Ch.3 One-Dimensional Problems' },
        sections: [
          { id: 'free-particle', title: { zh: '3.1 自由粒子与波包', en: '3.1 Free Particle and Wave Packets' } },
          { id: 'harmonic-oscillator-algebraic', title: { zh: '3.2 谐振子：代数方法', en: '3.2 Harmonic Oscillator: Algebraic Method' } },
          { id: 'harmonic-oscillator-analytic', title: { zh: '3.3 谐振子：解析方法', en: '3.3 Harmonic Oscillator: Analytic Method' } },
          { id: 'potential-well', title: { zh: '3.4 有限深方势阱', en: '3.4 Finite Square Well' } },
          { id: 'tunneling', title: { zh: '3.5 隧穿效应', en: '3.5 Quantum Tunneling' } },
        ],
      },
      {
        id: 'ch04',
        title: { zh: '第四章 角动量理论', en: 'Ch.4 Angular Momentum Theory' },
        sections: [
          { id: 'orbital-angular-momentum', title: { zh: '4.1 轨道角动量', en: '4.1 Orbital Angular Momentum' } },
          { id: 'spin', title: { zh: '4.2 自旋', en: '4.2 Spin' } },
          { id: 'addition', title: { zh: '4.3 角动量耦合与CG系数', en: '4.3 Addition of Angular Momenta and CG Coefficients' } },
        ],
      },
      {
        id: 'ch05',
        title: { zh: '第五章 全同粒子', en: 'Ch.5 Identical Particles' },
        sections: [
          { id: 'symmetrization', title: { zh: '5.1 对称化与反对称化', en: '5.1 Symmetrization and Antisymmetrization' } },
          { id: 'exchange', title: { zh: '5.2 交换相互作用', en: '5.2 Exchange Interaction' } },
          { id: 'second-quantization', title: { zh: '5.3 二次量子化初步', en: '5.3 Introduction to Second Quantization' } },
        ],
      },
      {
        id: 'ch06',
        title: { zh: '第六章 近似方法', en: 'Ch.6 Approximation Methods' },
        sections: [
          { id: 'non-degenerate-perturbation', title: { zh: '6.1 非简并定态微扰论', en: '6.1 Non-degenerate Perturbation Theory' } },
          { id: 'degenerate-perturbation', title: { zh: '6.2 简并定态微扰论', en: '6.2 Degenerate Perturbation Theory' } },
          { id: 'variational', title: { zh: '6.3 变分法', en: '6.3 Variational Method' } },
          { id: 'wkb', title: { zh: '6.4 WKB近似', en: '6.4 WKB Approximation' } },
        ],
      },
      {
        id: 'ch07',
        title: { zh: '第七章 含时问题', en: 'Ch.7 Time-Dependent Problems' },
        sections: [
          { id: 'time-dependent-perturbation', title: { zh: '7.1 含时微扰论', en: '7.1 Time-Dependent Perturbation Theory' } },
          { id: 'fermi-golden-rule', title: { zh: '7.2 费米黄金规则', en: '7.2 Fermi\'s Golden Rule' } },
          { id: 'adiabatic', title: { zh: '7.3 绝热近似与Berry相', en: '7.3 Adiabatic Approximation and Berry Phase' } },
        ],
      },
      {
        id: 'ch08',
        title: { zh: '第八章 散射理论', en: 'Ch.8 Scattering Theory' },
        sections: [
          { id: 'cross-section', title: { zh: '8.1 散射截面与散射振幅', en: '8.1 Cross Section and Scattering Amplitude' } },
          { id: 'partial-wave', title: { zh: '8.2 分波法', en: '8.2 Partial Wave Analysis' } },
          { id: 'born', title: { zh: '8.3 Born近似', en: '8.3 Born Approximation' } },
          { id: 'optical-theorem', title: { zh: '8.4 光学定理', en: '8.4 Optical Theorem' } },
        ],
      },
      {
        id: 'ch09',
        title: { zh: '第九章 路径积分', en: 'Ch.9 Path Integrals' },
        sections: [
          { id: 'propagator', title: { zh: '9.1 传播子与路径积分表述', en: '9.1 Propagator and Path Integral Formulation' } },
          { id: 'free-particle-pi', title: { zh: '9.2 自由粒子与谐振子的路径积分', en: '9.2 Path Integrals for Free Particle and Harmonic Oscillator' } },
          { id: 'classical-limit', title: { zh: '9.3 经典极限与驻相近似', en: '9.3 Classical Limit and Stationary Phase' } },
        ],
      },
      {
        id: 'ch10',
        title: { zh: '第十章 量子纠缠与Bell不等式', en: 'Ch.10 Quantum Entanglement and Bell Inequalities' },
        sections: [
          { id: 'epr', title: { zh: '10.1 EPR佯谬', en: '10.1 EPR Paradox' } },
          { id: 'bell', title: { zh: '10.2 Bell不等式与实验检验', en: '10.2 Bell Inequalities and Experimental Tests' } },
          { id: 'quantum-info', title: { zh: '10.3 量子信息初步', en: '10.3 Introduction to Quantum Information' } },
        ],
      },
    ],
  },
  {
    id: 'stat',
    title: { zh: '平衡态统计物理', en: 'Equilibrium Statistical Physics' },
    chapters: [
      {
        id: 'ch01',
        title: { zh: '第一章 统计力学的逻辑基础', en: 'Ch.1 Logical Foundations of Statistical Mechanics' },
        sections: [
          { id: 'why-probability', title: { zh: '1.1 从力学到统计', en: '1.1 From Mechanics to Statistics' } },
          { id: 'liouville', title: { zh: '1.2 Liouville定理与统计系综', en: '1.2 Liouville Theorem and Ensembles' } },
          { id: 'equal-probability', title: { zh: '1.3 等概率假设与Boltzmann熵', en: '1.3 Equal A Priori Probability and Boltzmann Entropy' } },
        ],
      },
      {
        id: 'ch02',
        title: { zh: '第二章 微正则系综', en: 'Ch.2 Microcanonical Ensemble' },
        sections: [
          { id: 'density-of-states', title: { zh: '2.1 态密度与微正则配分函数', en: '2.1 Density of States' } },
          { id: 'thermodynamics-from-counting', title: { zh: '2.2 从态密度推导热力学', en: '2.2 Deriving Thermodynamics from Counting' } },
          { id: 'microcanonical-applications', title: { zh: '2.3 微正则系综的经典应用', en: '2.3 Classical Applications' } },
        ],
      },
      {
        id: 'ch03',
        title: { zh: '第三章 正则系综', en: 'Ch.3 Canonical Ensemble' },
        sections: [
          { id: 'canonical-foundation', title: { zh: '3.1 正则系综的建立', en: '3.1 Establishing the Canonical Ensemble' } },
          { id: 'energy-fluctuations', title: { zh: '3.2 能量涨落与热力学稳定性', en: '3.2 Energy Fluctuations and Stability' } },
          { id: 'canonical-applications', title: { zh: '3.3 经典正则系综的应用', en: '3.3 Applications' } },
        ],
      },
      {
        id: 'ch04',
        title: { zh: '第四章 巨正则系综', en: 'Ch.4 Grand Canonical Ensemble' },
        sections: [
          { id: 'grand-canonical-foundation', title: { zh: '4.1 巨正则系综的建立', en: '4.1 Establishing the Grand Canonical Ensemble' } },
          { id: 'particle-fluctuations', title: { zh: '4.2 粒子数涨落与系综等价性', en: '4.2 Particle Fluctuations and Equivalence' } },
        ],
      },
      {
        id: 'ch05',
        title: { zh: '第五章 量子统计', en: 'Ch.5 Quantum Statistics' },
        sections: [
          { id: 'quantum-counting', title: { zh: '5.1 量子态计数', en: '5.1 Quantum State Counting' } },
          { id: 'be-fd-distributions', title: { zh: '5.2 Bose-Einstein与Fermi-Dirac分布', en: '5.2 BE and FD Distributions' } },
        ],
      },
      {
        id: 'ch06',
        title: { zh: '第六章 理想费米气体', en: 'Ch.6 Ideal Fermi Gas' },
        sections: [
          { id: 'fermi-surface', title: { zh: '6.1 零温费米气体与费米面', en: '6.1 Zero-Temperature Fermi Gas and Fermi Surface' } },
          { id: 'sommerfeld', title: { zh: '6.2 Sommerfeld展开', en: '6.2 Sommerfeld Expansion' } },
          { id: 'white-dwarf', title: { zh: '6.3 白矮星与Chandrasekhar极限', en: '6.3 White Dwarfs and Chandrasekhar Limit' } },
        ],
      },
      {
        id: 'ch07',
        title: { zh: '第七章 理想玻色气体', en: 'Ch.7 Ideal Bose Gas' },
        sections: [
          { id: 'bec', title: { zh: '7.1 Bose-Einstein凝聚', en: '7.1 Bose-Einstein Condensation' } },
          { id: 'blackbody', title: { zh: '7.2 黑体辐射：光子气体', en: '7.2 Blackbody Radiation: Photon Gas' } },
          { id: 'debye', title: { zh: '7.3 声子气体：Debye模型', en: '7.3 Phonon Gas: Debye Model' } },
        ],
      },
      {
        id: 'ch08',
        title: { zh: '第八章 相变与临界现象', en: 'Ch.8 Phase Transitions and Critical Phenomena' },
        sections: [
          { id: 'classification', title: { zh: '8.1 相变的唯象分类', en: '8.1 Phenomenological Classification' } },
          { id: 'ising', title: { zh: '8.2 Ising模型与精确解', en: '8.2 Ising Model and Exact Solutions' } },
          { id: 'mean-field', title: { zh: '8.3 平均场理论', en: '8.3 Mean-Field Theory' } },
          { id: 'landau', title: { zh: '8.4 Landau理论与对称性破缺', en: '8.4 Landau Theory and Symmetry Breaking' } },
          { id: 'scaling', title: { zh: '8.5 标度律与普适性', en: '8.5 Scaling Laws and Universality' } },
        ],
      },
      {
        id: 'ch09',
        title: { zh: '第九章 涨落理论', en: 'Ch.9 Fluctuation Theory' },
        sections: [
          { id: 'thermodynamic-fluctuations', title: { zh: '9.1 热力学涨落', en: '9.1 Thermodynamic Fluctuations' } },
          { id: 'fdt', title: { zh: '9.2 涨落-耗散定理与线性响应', en: '9.2 Fluctuation-Dissipation Theorem' } },
        ],
      },
      {
        id: 'ch10',
        title: { zh: '第十章 系综等价性与热力学极限', en: 'Ch.10 Ensemble Equivalence and Thermodynamic Limit' },
        sections: [
          { id: 'thermodynamic-limit', title: { zh: '10.1 热力学极限', en: '10.1 Thermodynamic Limit' } },
          { id: 'equivalence', title: { zh: '10.2 系综等价性的条件与失效', en: '10.2 Conditions for Equivalence' } },
          { id: 'unified-review', title: { zh: '10.3 统一回顾', en: '10.3 Unified Review' } },
        ],
      },
    ],
  },
];
