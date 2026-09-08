const SIGMA = 5.670374419e-8;
const R = 8.314462618;

const TOPICS = [
  {
    id: 'systems',
    number: 'I',
    title: 'Systems, Properties & Temperature',
    divisions: ['B','C'],
    rule: 'Thermodynamic systems; intensive/extensive properties; temperature; zeroth law; temperature scales/conversions; heat-related units.',
    summary: 'Boundaries, equilibrium, temperature, property classification, and units/conversions.',
    learn: [
      'System vs surroundings; boundary; open, closed, and isolated systems.',
      'Intensive properties do not scale with amount of matter (temperature, pressure, density). Extensive properties do (mass, volume, internal energy).',
      'Thermal equilibrium means no net heat flow. Zeroth law: if A is in thermal equilibrium with B and B with C, then A and C are in thermal equilibrium.',
      'Temperature is not the same thing as heat or internal energy.',
      'Convert among Celsius, kelvin, Fahrenheit, and Rankine; know common heat-energy units such as joule, calorie, kilocalorie, and BTU.'
    ],
    traps: 'For temperature differences, Δ1 °C = Δ1 K. But absolute values need the +273.15 offset. Kelvin is written K, not °K.',
    sources: [
      ['OpenStax — Thermodynamic Systems','https://openstax.org/books/university-physics-volume-2/pages/3-1-thermodynamic-systems','system, boundary, surroundings, equilibrium'],
      ['NIST — Kelvin / Thermodynamic Temperature','https://www.nist.gov/si-redefinition/kelvin/kelvin-thermodynamic-temperature','authoritative temperature and kelvin background'],
      ['NIST — SI Units: Temperature','https://www.nist.gov/pml/owm/si-units-temperature','temperature units and exact Celsius/kelvin relation']
    ]
  },
  {
    id: 'phases',
    number: 'II',
    title: 'Phases, Phase Change & Ideal Gas',
    divisions: ['B','C'],
    rule: 'Phases of matter; phase transitions; phase diagrams; latent/sensible heat; ideal gas law.',
    summary: 'Heating curves, phase diagrams, latent heat, and gas-state calculations.',
    learn: [
      'Know solid, liquid, gas and the six common transition names: melting/fusion, freezing, vaporization, condensation, sublimation, deposition.',
      'On a phase diagram, boundaries are equilibrium lines; know triple point and critical point and how pressure shifts melting/boiling behavior.',
      'Sensible heat changes temperature: Q = mcΔT. Latent heat changes phase at essentially constant temperature: Q = mL.',
      'For multistep heating, split the path into sensible and latent-heat segments and add the energies.',
      'Ideal gas law: PV = nRT. Absolute temperature in kelvins is required.'
    ],
    traps: 'Do not use Q = mcΔT during the flat part of a heating curve. During a phase change, use Q = mL.',
    sources: [
      ['OpenStax — Phase Changes','https://openstax.org/books/university-physics-volume-2/pages/1-5-phase-changes','phase diagrams, latent heat, calorimetry with phase changes'],
      ['OpenStax — Molecular Model of an Ideal Gas','https://openstax.org/books/university-physics-volume-2/pages/2-1-molecular-model-of-an-ideal-gas','ideal gas model and equation of state'],
      ['OpenStax — Ideal Gas Key Equations','https://openstax.org/books/university-physics-volume-2/pages/2-key-equations','PV=nRT and related equations']
    ]
  },
  {
    id: 'heat',
    number: 'III',
    title: 'Heat Transfer & Calorimetry',
    divisions: ['B','C'],
    rule: 'Heat transfer; thermal conductivity; heat capacity; specific heat.',
    summary: 'Conduction, convection, radiation, calorimetry, heat capacity, and thermal conductivity.',
    learn: [
      'Conduction transfers energy through matter without bulk material motion; convection uses bulk fluid motion; radiation uses electromagnetic waves.',
      'Specific heat c is energy per mass per temperature change. Heat capacity C is energy per temperature change for an entire object.',
      'Calorimetry uses energy conservation: total heat exchanged in an isolated setup sums to zero.',
      'Steady 1-D conduction through a slab: P = kAΔT/L; heat flux is P/A = kΔT/L.',
      'Higher thermal conductivity means faster heat transfer for the same geometry and temperature difference.'
    ],
    traps: 'Do not confuse thermal conductivity k (a material property) with heat capacity C or specific heat c.',
    sources: [
      ['OpenStax — Mechanisms of Heat Transfer','https://openstax.org/books/university-physics-volume-2/pages/1-6-mechanisms-of-heat-transfer','conduction, convection, radiation, quantitative heat transfer'],
      ['NASA Glenn — Heat Transfer','https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/heat-transfer-3/','clear physical overview of thermal equilibrium and heat transfer'],
      ['NASA STEMonstrations — Thermal Energy','https://www.nasa.gov/stem-content/stemonstrations-thermal-energy/','real-world conduction, convection, radiation examples']
    ]
  },
  {
    id: 'processes',
    number: 'IV',
    title: 'Processes, Laws, Cycles & Engines',
    divisions: ['B','C'],
    rule: 'Adiabatic/isothermal/isochoric/isobaric processes; cycles; engines; efficiency; first and second laws.',
    summary: 'PV processes, first law bookkeeping, heat engines, Carnot efficiency, and the second law.',
    learn: [
      'Isothermal: T constant. Isobaric: P constant. Isochoric/isovolumetric: V constant. Adiabatic: Q = 0.',
      'Using the convention “work done by the system is positive,” the first law is ΔU = Q − W.',
      'For constant pressure, W = PΔV. For a complete cycle, ΔU = 0, so net Q = net W.',
      'Heat-engine efficiency e = Wout/Qh = 1 − Qc/Qh.',
      'Carnot efficiency: eC = 1 − Tc/Th with absolute temperatures.',
      'Second law limits heat engines and sets the spontaneous direction of heat flow.'
    ],
    traps: 'Carnot temperatures must be in kelvins. Also watch sign conventions: some chemistry texts define work differently.',
    sources: [
      ['OpenStax — First Law of Thermodynamics','https://openstax.org/books/university-physics-volume-2/pages/3-3-first-law-of-thermodynamics','ΔU, heat, work, sign convention'],
      ['OpenStax — Heat Engines','https://openstax.org/books/university-physics-volume-2/pages/4-2-heat-engines','engine components and efficiency'],
      ['OpenStax — Second Law','https://openstax.org/books/university-physics-volume-2/pages/4-4-statements-of-the-second-law-of-thermodynamics','Kelvin and Clausius statements'],
      ['OpenStax — Carnot Cycle','https://openstax.org/books/university-physics-volume-2/pages/4-5-the-carnot-cycle','four Carnot processes and maximum efficiency']
    ]
  },
  {
    id: 'history',
    number: 'V',
    title: 'History of Thermodynamics',
    divisions: ['B','C'],
    rule: 'Historical contributions of Kelvin, Joseph Black, Joule, Carnot, Planck, Clausius, Boltzmann, and Maxwell.',
    summary: 'Know who did what, not just a list of names.',
    learn: [
      'Joseph Black: major early work on specific heat and latent heat.',
      'Sadi Carnot: heat-engine efficiency and the reversible ideal cycle that bears his name.',
      'James Prescott Joule: mechanical equivalent of heat; strong experimental basis for energy conservation.',
      'Rudolf Clausius: major formulation of the second law; entropy concept and name.',
      'Lord Kelvin (William Thomson): absolute thermodynamic temperature scale and thermodynamic development of Carnot ideas.',
      'James Clerk Maxwell: kinetic theory of gases and the velocity distribution later generalized with Boltzmann.',
      'Ludwig Boltzmann: statistical mechanics and microscopic/statistical interpretation of entropy.',
      'Max Planck: blackbody radiation and quantum hypothesis; important thermodynamics/radiation work.'
    ],
    traps: 'Past tests often ask contributions in reverse (“who did this?”) and sometimes pair a person with a law, experiment, book, or concept.',
    sources: [
      ['University of Glasgow — Joseph Black','https://www.gla.ac.uk/schools/chemistry/abouttheschool/history/alumni/notablealumni/','latent heat and specific heat'],
      ['APS — Joule and the Mechanical Equivalent of Heat','https://www.aps.org/apsnews/2015/06/joule-mechanical-equivalent-heat','Joule paddle-wheel experiments and work–heat equivalence'],
      ['OpenStax — Carnot Cycle','https://openstax.org/books/university-physics-volume-2/pages/4-5-the-carnot-cycle','Carnot’s role and principle'],
      ['Stanford Encyclopedia — Boltzmann’s Statistical Physics','https://plato.stanford.edu/entries/statphys-boltzmann/','Boltzmann, entropy, and statistical mechanics'],
      ['Nobel Prize — Max Planck Nobel Lecture','https://www.nobelprize.org/nobel_prizes/physics/laureates/1918/planck-lecture.html','Planck and blackbody radiation']
    ]
  },
  {
    id: 'radiation',
    number: 'VI',
    title: 'Blackbody Radiation & Third Law',
    divisions: ['B','C'],
    rule: 'Radiant exitance; blackbody radiation; Stefan–Boltzmann law; third law of thermodynamics.',
    summary: 'Emission from surfaces, emissivity, T⁴ scaling, and the third law.',
    learn: [
      'A blackbody is an ideal absorber/emitter with emissivity ε = 1. Real surfaces have 0 ≤ ε ≤ 1.',
      'Radiant exitance (power per unit area) for a gray surface: M = εσT⁴.',
      'Total emitted power: P = εσAT⁴. Net exchange with uniform surroundings can be modeled using εσA(T⁴ − Tsur⁴).',
      'Temperature must be absolute (kelvin) in Stefan–Boltzmann calculations.',
      'Third law: as temperature approaches absolute zero, the entropy of a perfect crystal approaches a constant (conventionally zero); absolute zero cannot be reached in a finite number of processes.'
    ],
    traps: 'Radiant exitance M is W/m². Total radiated power P is W and includes surface area.',
    sources: [
      ['OpenStax — Radiation','https://openstax.org/books/college-physics/pages/14-7-radiation','Stefan–Boltzmann law, emissivity, net radiative transfer'],
      ['OpenStax — Blackbody Radiation','https://openstax.org/books/university-physics-volume-3/pages/6-1-blackbody-radiation','blackbody curves and Stefan law'],
      ['OpenStax — Thermodynamics Chapter Summary','https://openstax.org/books/university-physics-volume-2/pages/4-summary','third-law summary and entropy context']
    ]
  },
  {
    id: 'entropy',
    number: 'VII',
    title: 'Entropy & Enthalpy',
    divisions: ['C'],
    rule: 'Division C only: entropy and enthalpy.',
    summary: 'State functions, entropy change, and enthalpy bookkeeping.',
    learn: [
      'Entropy S is a state function. For a reversible isothermal heat transfer, ΔS = Qrev/T.',
      'For a phase transition at equilibrium temperature, ΔS = Qrev/T = mL/T.',
      'The second law can be expressed as nondecreasing total entropy for an isolated system/universe.',
      'Enthalpy is H = U + PV. It is also a state function.',
      'For a constant-pressure process with only PV work, heat transferred to the system equals the enthalpy change: qp = ΔH.'
    ],
    traps: 'Entropy is not simply “disorder” in every situation. For competition math, focus on state-function behavior, directionality, and ΔS = Qrev/T where applicable.',
    sources: [
      ['OpenStax — Entropy','https://openstax.org/books/university-physics-volume-2/pages/4-6-entropy','definition, state-function behavior, ΔS calculations'],
      ['OpenStax — Enthalpy','https://openstax.org/books/chemistry/pages/5-3-enthalpy','enthalpy as a state function; at constant pressure, heat transfer corresponds to ΔH when only PV work is involved']
    ]
  }
];

const FORMULA_GROUPS = [
  { title:'Temperature & energy units', items:[
    'K = °C + 273.15',
    '°F = (9/5)°C + 32',
    '°R = °F + 459.67 = (9/5)K',
    '1 cal = 4.184 J; 1 kcal = 4184 J'
  ]},
  { title:'Heating & phase change', items:[
    'Q = mcΔT',
    'C = Q/ΔT',
    'Q = mL (phase change)',
    'Calorimetry: ΣQ = 0 for an isolated setup'
  ]},
  { title:'Conduction', items:[
    'P = Q/t = kAΔT/L',
    'Heat flux: P/A = kΔT/L'
  ]},
  { title:'Ideal gas & work', items:[
    'PV = nRT',
    'First law: ΔU = Q − W (W by system positive)',
    'Constant-pressure work: W = PΔV',
    'Complete cycle: ΔUcycle = 0'
  ]},
  { title:'Engines', items:[
    'e = Wout/Qh = 1 − Qc/Qh',
    'Carnot: eC = 1 − Tc/Th (kelvins)'
  ]},
  { title:'Radiation', items:[
    'Radiant exitance: M = εσT⁴',
    'Total emitted power: P = εσAT⁴',
    'σ = 5.670374419×10⁻⁸ W·m⁻²·K⁻⁴'
  ]},
  { title:'Division C: entropy & enthalpy', items:[
    'ΔS = Qrev/T for reversible isothermal transfer',
    'At equilibrium phase change: ΔS = mL/T',
    'H = U + PV',
    'At constant pressure with PV work only: qp = ΔH'
  ]}
];

function q(id, topic, type, difficulty, prompt, answer, explanation, extra={}) {
  return { id, topic, type, difficulty, prompt, answer, explanation, points: extra.points || (type === 'frq' ? 4 : type === 'calc' ? 3 : 1), ...extra };
}

const QUESTIONS = [
  // I. Systems / properties / temperature
  q('s1','systems','mcq',1,'Which property is intensive?',1,'Temperature does not scale with the amount of material.',{choices:['Mass','Temperature','Volume','Total internal energy']}),
  q('s2','systems','mcq',1,'A sealed rigid bottle can exchange heat with the room but no mass. Which classification best describes the bottle contents as a thermodynamic system?',1,'No mass crosses the boundary, so it is closed; energy may still cross as heat.',{choices:['Open system','Closed system','Isolated system','Not a thermodynamic system']}),
  q('s3','systems','short',1,'State the zeroth law of thermodynamics in words.', ['thermal equilibrium','third system'], 'If two systems are each in thermal equilibrium with a third system, they are in thermal equilibrium with each other.',{keywords:['equilibrium','third'], rubric:'Mention A↔B equilibrium, B↔C equilibrium, therefore A↔C equilibrium.'}),
  q('s4','systems','mcq',2,'Two copper blocks have the same temperature. Block A has twice the mass of block B. Which statement must be true?',2,'Equal temperature does not imply equal thermal energy or heat capacity. They are in thermal equilibrium if placed in thermal contact.',{choices:['They contain equal internal energy','They have equal heat capacity','No net heat flows between them when placed in contact','They have equal mass-specific heat only if their masses are equal']}),
  q('s5','systems','frq',2,'Explain the difference among temperature, heat, and internal energy.',null,'A strong answer says temperature characterizes thermal state; internal energy is energy stored microscopically in a system; heat is energy transferred because of a temperature difference.',{rubric:'1 pt: temperature described as a state/property. 1 pt: internal energy is stored microscopic energy. 1 pt: heat is energy in transfer due to ΔT. 1 pt: clearly distinguishes heat from “amount of hotness.”'}),
  q('s6','systems','mcq',1,'Which is an extensive property?',3,'Volume doubles if the amount of otherwise identical material doubles.',{choices:['Pressure','Density','Temperature','Volume']}),
  q('s7','systems','short',2,'A thermodynamic boundary allows both mass and energy to cross. What type of system is this?', ['open'], 'An open system can exchange both mass and energy with its surroundings.',{keywords:['open']}),
  q('s8','systems','mcq',2,'A temperature increase of 18 °F corresponds to what temperature increase in Celsius?',2,'Temperature intervals scale by 5/9, so 18 °F corresponds to 10 °C.',{choices:['5 °C','9 °C','10 °C','32 °C']}),

  // II. Phases / ideal gas
  q('p1','phases','mcq',1,'What is the direct phase transition from solid to gas called?',2,'Solid → gas is sublimation.',{choices:['Deposition','Condensation','Sublimation','Fusion']}),
  q('p2','phases','mcq',1,'On a standard pressure–temperature phase diagram, the point where solid, liquid, and gas coexist in equilibrium is the…',1,'That unique coexistence point is the triple point.',{choices:['critical point','triple point','normal boiling point','saturation line']}),
  q('p3','phases','diagram',2,'On the heating curve shown, which labeled segment represents a phase change from solid to liquid?',1,'The first horizontal plateau is melting, where added energy changes phase while temperature stays nearly constant.',{choices:['A–B','B–C','C–D','D–E'], diagram:'heating'}),
  q('p4','phases','diagram',2,'On the simplified phase diagram shown, what does point X represent?',0,'X is where all three phase boundaries meet: the triple point.',{choices:['Triple point','Critical point','Normal boiling point','Absolute zero'], diagram:'phase'}),
  q('p5','phases','frq',2,'Why does temperature remain nearly constant during melting even while heat continues to enter the sample?',null,'The added energy goes into changing intermolecular potential/configuration associated with the phase change rather than increasing average molecular kinetic energy.',{rubric:'2 pts: energy goes into the phase change/intermolecular arrangement. 1 pt: not primarily increasing average kinetic energy. 1 pt: connects average kinetic energy to temperature.'}),
  q('p6','phases','mcq',2,'For most substances, increasing external pressure raises the boiling temperature. Why?',1,'A higher vapor pressure is needed to match the higher external pressure, requiring a higher temperature.',{choices:['The liquid becomes less dense','The liquid must reach a higher vapor pressure to boil','The latent heat becomes zero','The ideal gas constant changes']}),
  q('p7','phases','mcq',1,'Which equation is appropriate for the energy needed to completely melt a mass m already at its melting point?',3,'A phase change at constant temperature uses Q=mL.',{choices:['Q=mcΔT','PV=nRT','P=kAΔT/L','Q=mL']}),
  q('p8','phases','frq',3,'Water has an unusual negative slope for its solid–liquid boundary on a P–T phase diagram. Explain the physical reason.',null,'Liquid water is denser than ordinary ice, so increasing pressure favors the denser liquid phase and lowers the melting temperature.',{rubric:'2 pts: liquid water denser than ice. 1 pt: pressure favors denser phase. 1 pt: therefore melting point decreases as pressure rises.'}),

  // III. Heat transfer
  q('h1','heat','mcq',1,'Which heat-transfer mechanism can occur through a vacuum?',2,'Radiation is electromagnetic and does not require matter.',{choices:['Conduction only','Convection only','Radiation','Conduction and convection']}),
  q('h2','heat','mcq',1,'A metal spoon feels colder than a wooden spoon in the same room even though both are at the same temperature. The main reason is that metal has…',0,'Higher thermal conductivity transfers energy away from your hand faster.',{choices:['higher thermal conductivity','lower specific heat in every case','a lower actual temperature','no internal energy']}),
  q('h3','heat','short',1,'What is the SI unit of thermal conductivity k?', ['W/(m K)','W/mK','W m^-1 K^-1'], 'Thermal conductivity is measured in watts per meter-kelvin, W/(m·K).',{keywords:['w','m','k']}),
  q('h4','heat','mcq',2,'Two samples absorb the same heat Q. Sample A has half the mass of sample B but undergoes the same temperature rise. Compare their specific heats.',0,'From Q=mcΔT, c∝1/m when Q and ΔT are fixed. A has twice the specific heat.',{choices:['cA = 2cB','cA = cB','cA = cB/2','Cannot be determined']}),
  q('h5','heat','frq',2,'Describe conduction, convection, and radiation and give one physical example of each.',null,'Conduction: energy transfer through microscopic interactions in matter; convection: bulk fluid motion; radiation: electromagnetic waves.',{rubric:'1 pt each for correct definition of conduction, convection, radiation; 1 pt for valid examples.'}),
  q('h6','heat','mcq',2,'For steady conduction through a flat slab, which change doubles the heat-transfer rate while all else stays fixed?',3,'P=kAΔT/L, so doubling area doubles P.',{choices:['Double thickness L','Halve thermal conductivity k','Halve temperature difference','Double area A']}),
  q('h7','heat','short',2,'In an ideal isolated calorimetry experiment, what conservation statement relates the heat changes of all objects?', ['sum q zero','ΣQ=0','heat lost equals heat gained'], 'The algebraic sum of heat transfers is zero: ΣQ=0.',{keywords:['heat','zero']}),
  q('h8','heat','frq',2,'Explain the difference between heat capacity C and specific heat c.',null,'Heat capacity belongs to an entire object and has units J/K; specific heat is normalized by mass and has units J/(kg·K) or J/(g·K).',{rubric:'1 pt: C is object-level. 1 pt: c is per unit mass. 1 pt: correct units. 1 pt: relationship C=mc for uniform material.'}),

  // IV. Processes / cycles
  q('t1','processes','mcq',1,'Which process occurs at constant volume?',2,'Isochoric and isovolumetric both mean constant volume.',{choices:['Isothermal','Isobaric','Isochoric','Adiabatic']}),
  q('t2','processes','mcq',1,'For an adiabatic process, which quantity is zero by definition?',1,'Adiabatic means no heat transfer: Q=0.',{choices:['Work W','Heat Q','Internal energy change ΔU','Pressure P']}),
  q('t3','processes','mcq',2,'Using ΔU = Q − W with W positive when done by the system: a gas absorbs 500 J of heat and does 180 J of work. What is ΔU?',2,'ΔU=500−180=320 J.',{choices:['−680 J','−320 J','320 J','680 J']}),
  q('t4','processes','mcq',2,'A heat engine absorbs 1000 J from a hot reservoir and rejects 650 J to a cold reservoir each cycle. Its efficiency is…',1,'W=Qh−Qc=350 J; e=W/Qh=0.35.',{choices:['0.25','0.35','0.65','1.54']}),
  q('t5','processes','mcq',2,'Which sequence correctly describes a Carnot engine cycle starting with expansion at the hot reservoir?',3,'Carnot: isothermal expansion, adiabatic expansion, isothermal compression, adiabatic compression.',{choices:['isobaric expansion → isochoric cooling → isobaric compression → isochoric heating','adiabatic expansion → isothermal expansion → adiabatic compression → isothermal compression','isothermal compression → adiabatic compression → isothermal expansion → adiabatic expansion','isothermal expansion → adiabatic expansion → isothermal compression → adiabatic compression']}),
  q('t6','processes','frq',2,'State one equivalent physical meaning of the second law of thermodynamics.',null,'Acceptable statements include: heat does not spontaneously flow from cold to hot; no cyclic heat engine can convert all absorbed heat from a single reservoir into work; entropy of an isolated system does not decrease.',{rubric:'4 pts for a correct, unambiguous second-law statement; 2–3 for partly correct wording.'}),
  q('t7','processes','diagram',2,'The P–V path shown is a rectangle traversed clockwise. What is true about the net work done by the gas over one cycle?',0,'For a clockwise cycle, net work done by the gas is positive and equals the enclosed P–V area.',{choices:['Positive; equal to the enclosed area','Negative; equal to the enclosed area','Zero because the cycle returns to its start','Cannot be determined'], diagram:'pv'}),
  q('t8','processes','frq',3,'Why can no real heat engine operating between two fixed reservoirs be more efficient than a reversible Carnot engine between the same reservoirs?',null,'A more efficient engine would violate the Carnot principle/second law; reversibility establishes the maximum possible efficiency between fixed reservoir temperatures.',{rubric:'2 pts: identifies Carnot/reversible maximum. 1 pt: connects to second law. 1 pt: fixed reservoir temperatures matter.'}),

  // V. History
  q('y1','history','mcq',1,'Who is most strongly associated with the mechanical equivalent of heat?',2,'James Prescott Joule experimentally linked mechanical work and heat.',{choices:['Max Planck','Sadi Carnot','James Prescott Joule','Joseph Black']}),
  q('y2','history','mcq',1,'Whose work established the concepts of latent heat and specific heat in early thermodynamics?',0,'Joseph Black is a major early figure for latent and specific heat.',{choices:['Joseph Black','Rudolf Clausius','Ludwig Boltzmann','James Clerk Maxwell']}),
  q('y3','history','mcq',1,'Who developed the idealized reversible heat-engine cycle used to define the maximum possible efficiency between two reservoirs?',1,'That is Sadi Carnot.',{choices:['Kelvin','Sadi Carnot','Planck','Maxwell']}),
  q('y4','history','short',1,'Which scientist is associated with the absolute thermodynamic temperature scale that bears his title/name?', ['Kelvin','William Thomson','Lord Kelvin'], 'William Thomson, Lord Kelvin.',{keywords:['kelvin']}),
  q('y5','history','mcq',2,'Which scientist is especially associated with the entropy concept and a major formulation of the second law?',2,'Rudolf Clausius formulated the second law and introduced the term entropy.',{choices:['Joseph Black','James Joule','Rudolf Clausius','Max Planck']}),
  q('y6','history','mcq',2,'The microscopic statistical interpretation of entropy S ∝ ln W is most strongly associated with…',3,'Ludwig Boltzmann connected thermodynamics to statistical mechanics.',{choices:['Kelvin','Black','Carnot','Boltzmann']}),
  q('y7','history','mcq',2,'Who made major contributions to the kinetic theory of gases and the molecular speed distribution later called Maxwell–Boltzmann?',1,'James Clerk Maxwell developed the velocity distribution and kinetic theory.',{choices:['Planck','James Clerk Maxwell','Carnot','Black']}),
  q('y8','history','mcq',2,'Whose blackbody-radiation work led to the quantum hypothesis?',0,'Max Planck introduced energy quantization while solving the blackbody-radiation problem.',{choices:['Max Planck','Rudolf Clausius','James Joule','Lord Kelvin']}),
  q('y9','history','frq',3,'Put these developments in a sensible historical/conceptual sequence and briefly identify each contribution: Black, Carnot, Joule, Clausius, Maxwell/Boltzmann, Planck.',null,'A good sequence is Black (18th-century heat capacity/latent heat) → Carnot (1824 engines) → Joule (1840s work–heat equivalence) → Clausius (1850s second law/entropy) → Maxwell/Boltzmann (kinetic/statistical theory) → Planck (1900 blackbody quantum hypothesis).',{rubric:'Award for correct rough chronology and correct contribution, not exact dates. 1 point each major stage up to 6 points.', points:6}),

  // VI. Radiation / third law
  q('r1','radiation','mcq',1,'An ideal blackbody has emissivity ε equal to…',3,'By definition, an ideal blackbody has ε=1.',{choices:['−1','0','0.5','1']}),
  q('r2','radiation','mcq',2,'If the absolute temperature of a blackbody doubles, its radiant exitance changes by a factor of…',3,'M∝T⁴, so 2⁴=16.',{choices:['2','4','8','16']}),
  q('r3','radiation','short',1,'Write the Stefan–Boltzmann expression for radiant exitance M of a real gray surface.', ['epsilon sigma T^4','εσT^4'], 'M=εσT⁴.',{keywords:['sigma','t'], rubric:'M = εσT⁴, where ε is emissivity and T is in kelvins.'}),
  q('r4','radiation','mcq',2,'Radiant exitance has units of…',1,'Exitance is power per area, W/m².',{choices:['J','W/m²','J/K','W·m']}),
  q('r5','radiation','mcq',2,'Two same-area surfaces are at the same temperature. Surface A has ε=0.90 and B has ε=0.30. Ignoring surroundings, A emits thermal radiation at what multiple of B?',2,'P∝ε, so 0.90/0.30=3.',{choices:['1/3','1','3','9']}),
  q('r6','radiation','frq',2,'State the third law of thermodynamics in a competition-appropriate form.',null,'As T approaches 0 K, the entropy of a perfect crystal approaches a constant conventionally taken as zero; equivalently, absolute zero cannot be reached by a finite sequence of thermodynamic processes.',{rubric:'2 pts: entropy limit for perfect crystal. 1 pt: T→0 K. 1 pt: optionally/alternatively states unattainability of absolute zero.'}),
  q('r7','radiation','frq',2,'Distinguish radiant exitance from total radiated power.',null,'Radiant exitance is emitted power per unit area (W/m²). Total power multiplies exitance by area: P=MA=εσAT⁴.',{rubric:'2 pts: exitance = power/area. 1 pt: total power includes A. 1 pt: correct units.'}),
  q('r8','radiation','mcq',2,'Why must kelvins, not Celsius, be used in the T⁴ Stefan–Boltzmann law?',0,'The law is defined using absolute thermodynamic temperature; a Celsius zero is arbitrary and would destroy the physical scaling.',{choices:['It requires an absolute temperature scale','Celsius degrees are larger than kelvins','Kelvin makes emissivity equal to 1','Celsius cannot describe temperature differences']}),

  // VII. Entropy / enthalpy C
  q('e1','entropy','mcq',1,'Entropy is best classified as a…',2,'Entropy is a state function.',{choices:['path function','heat-transfer rate','state function','temperature scale']}),
  q('e2','entropy','mcq',2,'A system reversibly absorbs 600 J of heat while held at 300 K. Its entropy change is…',1,'ΔS=Qrev/T=600/300=2 J/K.',{choices:['0.5 J/K','2 J/K','300 J/K','180000 J/K']}),
  q('e3','entropy','mcq',2,'For an isolated system undergoing a spontaneous process, total entropy…',2,'By the second law, it does not decrease; for an irreversible spontaneous process it increases.',{choices:['must decrease','must stay exactly zero','cannot decrease','is not defined']}),
  q('e4','entropy','short',1,'Write the definition of enthalpy H in terms of internal energy, pressure, and volume.', ['H=U+PV','U+PV'], 'H=U+PV.',{keywords:['u','p','v']}),
  q('e5','entropy','mcq',2,'For a constant-pressure process with only PV work, the heat added to the system qp equals…',3,'At constant pressure under these conditions, qp=ΔH.',{choices:['−ΔU','TΔS in every process','0','ΔH']}),
  q('e6','entropy','frq',2,'Explain why entropy change is a state-function quantity even though heat Q is path-dependent.',null,'Entropy change between equilibrium states depends only on the endpoints. For calculations one may choose a convenient reversible path and integrate dQrev/T, even if the actual path was irreversible.',{rubric:'2 pts: ΔS depends only on states. 1 pt: Q depends on path. 1 pt: reversible path can be used to calculate ΔS.'}),
  q('e7','entropy','mcq',2,'One mole of a substance melts reversibly at temperature T, absorbing latent heat Lm per mole. What is the entropy change?',1,'At a reversible isothermal phase change, ΔS=Qrev/T=Lm/T.',{choices:['T/Lm','Lm/T','LmT','0']}),
  q('e8','entropy','frq',3,'Compare internal energy U and enthalpy H. Why is H especially useful for constant-pressure processes?',null,'H=U+PV packages internal energy plus the PV term. For constant-pressure processes with only PV work, the heat transfer equals ΔH, which makes energy accounting convenient.',{rubric:'1 pt: H=U+PV. 1 pt: both are state functions. 1 pt: qp=ΔH under stated conditions. 1 pt: explains why this is useful.'})
];

const GENERATORS = [
  function tempConversion(){
    const c = randInt(-30,180);
    const f = c*9/5+32;
    return q(uid('gtemp'),'systems','calc',1,`Convert ${c} °C to °F.`,f,`${c}×(9/5)+32 = ${fmt(f)} °F`,{numeric:true,tolerance:0.2,unit:'°F'});
  },
  function tempKelvin(){
    const c = randInt(-40,220);
    const k = c+273.15;
    return q(uid('gk'),'systems','calc',1,`Convert ${c} °C to kelvins.`,k,`${c}+273.15 = ${fmt(k)} K`,{numeric:true,tolerance:0.05,unit:'K'});
  },
  function idealGas(){
    const n = pick([0.5,0.75,1,1.5,2]);
    const T = randInt(280,520);
    const V_L = pick([5,8,10,12,15,20]);
    const V = V_L/1000;
    const P = n*R*T/V;
    return q(uid('gpv'),'phases','calc',2,`An ideal gas contains ${n} mol at ${T} K in a ${V_L} L container. Find its pressure in kPa. Use R = 8.314 J/(mol·K).`,P/1000,`P=nRT/V = (${n})(8.314)(${T})/${V} = ${fmt(P/1000)} kPa.`,{numeric:true,tolerance:0.02*Math.abs(P/1000),unit:'kPa'});
  },
  function latent(){
    const m = pick([20,35,50,75,120]);
    const L = pick([2256,334]);
    const label = L===334?'ice at 0 °C':'water at 100 °C';
    const action = L===334?'melt':'vaporize';
    const ans = m*L/1000;
    return q(uid('glat'),'phases','calc',2,`How much energy is required to completely ${action} ${m} g of ${label}? Use L = ${L} J/g. Give the answer in kJ.`,ans,`Q=mL=(${m} g)(${L} J/g)=${m*L} J=${fmt(ans)} kJ.`,{numeric:true,tolerance:0.02*ans,unit:'kJ'});
  },
  function multiStepIce(){
    const m = pick([10,15,20,25]);
    const Ti = pick([-30,-20,-10]);
    const Tf = pick([20,35,50]);
    const cIce=2.09, cWater=4.184, Lf=334;
    const q1=m*cIce*(0-Ti), q2=m*Lf, q3=m*cWater*Tf;
    const ans=(q1+q2+q3)/1000;
    return q(uid('gice'),'phases','calc',3,`A ${m} g sample of ice starts at ${Ti} °C and ends as liquid water at ${Tf} °C. Find the total heat required. Use c_ice=2.09 J/(g·K), Lf=334 J/g, c_water=4.184 J/(g·K). Give kJ.`,ans,`Three stages: warm ice ${fmt(q1)} J; melt ${fmt(q2)} J; warm water ${fmt(q3)} J. Total = ${fmt(ans)} kJ.`,{numeric:true,tolerance:0.02*ans,unit:'kJ'});
  },
  function specificHeat(){
    const m=pick([50,80,120,150]);
    const c=pick([0.385,0.449,0.900,1.30]);
    const dT=pick([15,20,30,40]);
    const ans=m*c*dT;
    return q(uid('gqmc'),'heat','calc',1,`A ${m} g sample with specific heat ${c} J/(g·K) warms by ${dT} K. How much heat does it absorb?`,ans,`Q=mcΔT=(${m})(${c})(${dT})=${fmt(ans)} J.`,{numeric:true,tolerance:0.02*ans,unit:'J'});
  },
  function calorimetrySame(){
    const m1=pick([50,75,100,125]);
    const m2=pick([60,80,120,150]);
    const T1=pick([70,80,90]);
    const T2=pick([10,20,25]);
    const Tf=(m1*T1+m2*T2)/(m1+m2);
    return q(uid('gcal'),'heat','calc',2,`In an ideal insulated cup, ${m1} g of water at ${T1} °C is mixed with ${m2} g of water at ${T2} °C. Ignore the cup. Find the final temperature.`,Tf,`For the same substance, m₁(T₁−Tf)=m₂(Tf−T₂), giving Tf=(${m1}·${T1}+${m2}·${T2})/(${m1+m2})=${fmt(Tf)} °C.`,{numeric:true,tolerance:0.25,unit:'°C'});
  },
  function conduction(){
    const k=pick([0.04,0.8,1.4,15,205]);
    const A=pick([0.01,0.02,0.04,0.08]);
    const Lcm=pick([1,2,4,5]);
    const dT=pick([15,25,40,60]);
    const L=Lcm/100;
    const ans=k*A*dT/L;
    return q(uid('gcond'),'heat','calc',2,`A flat slab has k=${k} W/(m·K), area ${A} m², thickness ${Lcm} cm, and a steady temperature difference of ${dT} K. Find the conduction rate P.`,ans,`P=kAΔT/L=(${k})(${A})(${dT})/${L}=${fmt(ans)} W.`,{numeric:true,tolerance:0.02*Math.abs(ans)+0.02,unit:'W'});
  },
  function firstLaw(){
    const Q=pick([250,400,650,900,1200]);
    const W=pick([80,120,200,350,500]);
    const ans=Q-W;
    return q(uid('gfirst'),'processes','calc',1,`Using ΔU=Q−W (W is work done by the system), a gas absorbs ${Q} J of heat and does ${W} J of work. Find ΔU.`,ans,`ΔU=${Q}−${W}=${ans} J.`,{numeric:true,tolerance:0.5,unit:'J'});
  },
  function isobaricWork(){
    const Pk=pick([100,150,200,250]);
    const Vi=pick([1,2,3]);
    const Vf=Vi+pick([1,2,3]);
    const ans=Pk*1000*(Vf-Vi)/1000;
    return q(uid('gwork'),'processes','calc',2,`A gas expands at constant pressure ${Pk} kPa from ${Vi} L to ${Vf} L. Find the work done by the gas.`,ans,`W=PΔV=(${Pk*1000} Pa)(${(Vf-Vi)/1000} m³)=${fmt(ans)} J.`,{numeric:true,tolerance:0.02*ans,unit:'J'});
  },
  function engineEfficiency(){
    const Qh=pick([800,1000,1200,1500,2000]);
    const Qc=pick([300,400,500,600,700]);
    const qc=Math.min(Qc,Qh-200);
    const ans=(Qh-qc)/Qh*100;
    return q(uid('geng'),'processes','calc',2,`A heat engine absorbs ${Qh} J from the hot reservoir and rejects ${qc} J to the cold reservoir. Find its efficiency as a percent.`,ans,`W=${Qh}−${qc}=${Qh-qc} J; e=W/Qh=${fmt(ans)}%.`,{numeric:true,tolerance:0.3,unit:'%'});
  },
  function carnot(){
    const Tc=pick([250,280,300,320]);
    const Th=pick([500,600,700,800]);
    const ans=(1-Tc/Th)*100;
    return q(uid('gcarnot'),'processes','calc',2,`A reversible Carnot engine operates between ${Th} K and ${Tc} K. What is its maximum efficiency? Give percent.`,ans,`e=1−Tc/Th=1−${Tc}/${Th}=${fmt(ans)}%.`,{numeric:true,tolerance:0.3,unit:'%'});
  },
  function radiant(){
    const e=pick([0.25,0.5,0.75,0.9,1]);
    const T=pick([300,400,500,700,900]);
    const ans=e*SIGMA*T**4;
    return q(uid('grad'),'radiation','calc',2,`A surface has emissivity ε=${e} and temperature ${T} K. Find its radiant exitance M using σ=5.67×10⁻⁸ W/(m²·K⁴).`,ans,`M=εσT⁴=(${e})(5.67×10⁻⁸)(${T})⁴=${fmt(ans)} W/m².`,{numeric:true,tolerance:0.025*ans,unit:'W/m²'});
  },
  function totalRadiation(){
    const e=pick([0.4,0.7,0.85]);
    const T=pick([350,450,600]);
    const A=pick([0.25,0.5,1.2]);
    const ans=e*SIGMA*A*T**4;
    return q(uid('gpower'),'radiation','calc',2,`A surface of area ${A} m², emissivity ${e}, and temperature ${T} K radiates into effectively cold surroundings. Approximate its total emitted power.`,ans,`P=εσAT⁴=(${e})(5.67×10⁻⁸)(${A})(${T})⁴=${fmt(ans)} W.`,{numeric:true,tolerance:0.025*ans,unit:'W'});
  },
  function entropyHeat(){
    const T=pick([250,300,350,400]);
    const Q=pick([500,750,1200,1800]);
    const ans=Q/T;
    return q(uid('gent'),'entropy','calc',2,`A system reversibly absorbs ${Q} J at constant temperature ${T} K. Find its entropy change.`,ans,`ΔS=Qrev/T=${Q}/${T}=${fmt(ans)} J/K.`,{numeric:true,tolerance:0.02*ans,unit:'J/K'});
  },
  function phaseEntropy(){
    const m=pick([10,20,30,50]);
    const L=334;
    const T=273.15;
    const ans=m*L/T;
    return q(uid('gents'),'entropy','calc',3,`${m} g of ice melts reversibly at 0 °C. Using Lf=334 J/g, find the entropy change of the ice.`,ans,`ΔS=Qrev/T=mLf/T=(${m})(${L})/${T}=${fmt(ans)} J/K.`,{numeric:true,tolerance:0.02*ans,unit:'J/K'});
  },
  function enthalpyHeat(){
    const dH=pick([-45,-25,30,55,80]);
    return q(uid('genth'),'entropy','calc',1,`A constant-pressure process with only PV work has ΔH = ${dH} kJ. What is qₚ for the system?`,dH,`At constant pressure with only PV work, qₚ=ΔH=${dH} kJ.`,{numeric:true,tolerance:0.05,unit:'kJ'});
  }
];

const DIAGRAMS = {
  heating: `<svg viewBox="0 0 520 280" role="img" aria-label="Heating curve with labeled points A through F"><line x1="60" y1="235" x2="485" y2="235" stroke="#192332" stroke-width="2"/><line x1="60" y1="235" x2="60" y2="30" stroke="#192332" stroke-width="2"/><polyline points="70,220 150,155 250,155 330,90 420,90 470,45" fill="none" stroke="#ef5b2a" stroke-width="5" stroke-linejoin="round"/><g font-family="system-ui" font-size="15" fill="#192332"><text x="52" y="258">time / heat added</text><text x="8" y="32" transform="rotate(90 8 32)">temperature</text><text x="61" y="219">A</text><text x="142" y="147">B</text><text x="244" y="147">C</text><text x="324" y="82">D</text><text x="414" y="82">E</text><text x="465" y="39">F</text></g></svg>`,
  phase: `<svg viewBox="0 0 520 300" role="img" aria-label="Simplified pressure-temperature phase diagram"><line x1="65" y1="245" x2="480" y2="245" stroke="#192332" stroke-width="2"/><line x1="65" y1="245" x2="65" y2="30" stroke="#192332" stroke-width="2"/><path d="M70 240 Q140 200 220 155" fill="none" stroke="#204f8f" stroke-width="4"/><path d="M220 155 Q285 120 430 65" fill="none" stroke="#204f8f" stroke-width="4"/><path d="M220 155 L245 38" fill="none" stroke="#204f8f" stroke-width="4"/><circle cx="220" cy="155" r="7" fill="#ef5b2a"/><circle cx="430" cy="65" r="7" fill="#ef5b2a"/><g font-family="system-ui" font-size="15" fill="#192332"><text x="207" y="146">X</text><text x="435" y="57">critical</text><text x="115" y="105">solid</text><text x="270" y="115">liquid</text><text x="305" y="208">gas</text><text x="390" y="270">temperature</text><text x="20" y="55">pressure</text></g></svg>`,
  pv: `<svg viewBox="0 0 520 280" role="img" aria-label="Clockwise rectangular P-V cycle"><line x1="65" y1="230" x2="475" y2="230" stroke="#192332" stroke-width="2"/><line x1="65" y1="230" x2="65" y2="35" stroke="#192332" stroke-width="2"/><path d="M150 185 L390 185 L390 80 L150 80 Z" fill="rgba(239,91,42,.1)" stroke="#ef5b2a" stroke-width="5"/><path d="M270 185 l25 0 l-12 -9 M390 132 l0 -25 l-9 12 M270 80 l-25 0 l12 9 M150 132 l0 25 l9 -12" fill="none" stroke="#204f8f" stroke-width="3"/><g font-family="system-ui" font-size="16" fill="#192332"><text x="455" y="255">V</text><text x="42" y="48">P</text></g></svg>`
};

const state = {
  division: localStorage.getItem('thermoDivision') || 'C',
  theme: localStorage.getItem('thermoTheme') || 'light',
  practiceQuestion: null,
  currentStreak: Number(localStorage.getItem('thermoCurrentStreak') || 0),
  stats: JSON.parse(localStorage.getItem('thermoStats') || '{}'),
  test: null,
  timerId: null
};

function uid(prefix='q'){ return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2,8)}`; }
function randInt(a,b){ return Math.floor(Math.random()*(b-a+1))+a; }
function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function shuffle(arr){ const a=[...arr]; for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function fmt(n){
  if (!Number.isFinite(n)) return String(n);
  const abs=Math.abs(n);
  if ((abs>0 && abs<0.01) || abs>=100000) return n.toExponential(3);
  return Number(n.toFixed(abs<10?3:abs<100?2:1)).toString();
}
function topicById(id){ return TOPICS.find(t=>t.id===id); }
function activeTopics(div=state.division){ return TOPICS.filter(t=>t.divisions.includes(div)); }
function typeLabel(type){ return ({mcq:'MCQ',short:'Short answer',calc:'Calculation',frq:'FRQ',diagram:'Diagram'})[type] || type; }
function difficultyLabel(d){ return d===1?'Foundational':d===2?'Competition':'Hard'; }
function normalize(s){ return String(s ?? '').toLowerCase().replace(/σ/g,'sigma').replace(/ε/g,'epsilon').replace(/[δΔ]/g,'delta').replace(/[°·×^ₚ]/g,'').replace(/[^a-z0-9.+-]/g,''); }
function extractNumber(v){ const m=String(v).replace(/,/g,'').match(/[-+]?\d*\.?\d+(?:e[-+]?\d+)?/i); return m?Number(m[0]):NaN; }

function saveStats(){
  localStorage.setItem('thermoStats',JSON.stringify(state.stats));
  localStorage.setItem('thermoCurrentStreak',String(state.currentStreak));
}
function ensureTopicStats(id){ if(!state.stats[id]) state.stats[id]={attempts:0,correct:0,bestStreak:0}; return state.stats[id]; }
function recordAttempt(question, correct){
  const s=ensureTopicStats(question.topic); s.attempts++; if(correct){ s.correct++; state.currentStreak++; s.bestStreak=Math.max(s.bestStreak,state.currentStreak); } else state.currentStreak=0;
  saveStats(); renderDashboard(); document.getElementById('currentStreak').textContent=state.currentStreak;
}

function route(){
  const id=(location.hash||'#home').slice(1);
  document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active',p.id===id));
  document.querySelectorAll('.nav a').forEach(a=>a.classList.toggle('active',a.dataset.route===id));
  if(id==='learn') renderLearn();
  if(id==='practice' && !state.practiceQuestion) newPracticeQuestion();
  if(id==='bank') renderBank(true);
  if(id==='formulas') renderFormulas();
  window.scrollTo({top:0,behavior:'auto'});
}

function renderDashboard(){
  let attempts=0,correct=0,best=0;
  Object.values(state.stats).forEach(s=>{ attempts+=s.attempts||0; correct+=s.correct||0; best=Math.max(best,s.bestStreak||0); });
  const acc=attempts?Math.round(correct/attempts*100):0;
  document.getElementById('overallAccuracy').textContent=attempts?`${acc}%`:'—';
  document.getElementById('overallBar').style.width=`${acc}%`;
  document.getElementById('attemptCount').textContent=attempts;
  document.getElementById('correctCount').textContent=correct;
  document.getElementById('bestStreak').textContent=best;
  const grid=document.getElementById('masteryGrid');
  grid.innerHTML=activeTopics().map(t=>{
    const s=state.stats[t.id]||{attempts:0,correct:0};
    const a=s.attempts?Math.round(s.correct/s.attempts*100):0;
    return `<article class="mastery-card"><div class="row"><div><span class="topic-number">AREA ${t.number}</span><h3>${t.title}</h3></div><strong>${s.attempts?a+'%':'—'}</strong></div><div class="progress"><span style="width:${a}%"></span></div><small class="muted">${s.attempts||0} attempts</small></article>`;
  }).join('');
}

function renderLearn(){
  const ruleGrid=document.getElementById('ruleAreaGrid');
  ruleGrid.innerHTML=activeTopics().map(t=>`<article class="learn-card" data-topic="${t.id}" tabindex="0"><span class="topic-number">DRAFT AREA ${t.number}</span><h3>${t.title}</h3><p>${t.summary}</p><div class="card-footer"><span>${t.learn.length} key ideas</span><span>Quick overview →</span></div></article>`).join('');
  ruleGrid.querySelectorAll('.learn-card').forEach(card=>{
    const open=()=>openLearn(card.dataset.topic);
    card.addEventListener('click',open); card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});
  });

  const activeIds=new Set(activeTopics().map(t=>t.id));
  const guides=(window.STUDY_GUIDES||[]).filter(g=>activeIds.has(g.topic));
  document.getElementById('guideCountBadge').textContent=`${guides.length} guides`;
  document.getElementById('learnGrid').innerHTML=guides.map(g=>`<a class="learn-card guide-card" href="learn/${g.id}.html"><span class="topic-number">AREA ${g.area} • STUDY GUIDE</span><h3>${g.title}</h3><p>${g.summary}</p><div class="card-footer"><span>lesson + worked example + mini quiz</span><span>Open document →</span></div></a>`).join('');
}

function openLearn(id){
  const t=topicById(id);
  document.getElementById('dialogContent').innerHTML=`
    <span class="eyebrow">DRAFT AREA ${t.number}</span><h2>${t.title}</h2><p class="muted">${t.rule}</p>
    <div class="learn-section"><h3>Know these cold</h3><ul>${t.learn.map(x=>`<li>${x}</li>`).join('')}</ul></div>
    <div class="learn-section trap"><strong>Common trap:</strong> ${t.traps}</div>
    <div class="learn-section"><h3>Real sources</h3><div class="source-list">${t.sources.map(([name,url,note])=>`<a class="source-link" href="${url}" target="_blank" rel="noopener"><strong>${name}</strong><small>${note}</small></a>`).join('')}</div></div>
    <div class="learn-section"><a class="btn primary" href="#practice" onclick="document.getElementById('learnDialog').close(); setPracticeTopic('${t.id}')">Practice this topic</a></div>`;
  document.getElementById('learnDialog').showModal();
}

function renderFormulas(){
  document.getElementById('formulaGrid').innerHTML=FORMULA_GROUPS.filter((_,i)=>state.division==='C'||i<6).map(g=>`<article class="formula-card"><h3>${g.title}</h3>${g.items.map(x=>`<code>${x}</code>`).join('')}</article>`).join('');
}

function populatePracticeTopics(){
  document.getElementById('practiceTopic').innerHTML=`<option value="all">All current-rule topics</option>`+activeTopics().map(t=>`<option value="${t.id}">${t.number}. ${t.title}</option>`).join('');
}
function setPracticeTopic(id){ document.getElementById('practiceTopic').value=id; newPracticeQuestion(); }
window.setPracticeTopic=setPracticeTopic;

function buildPool(div=state.division){
  const ids=new Set(activeTopics(div).map(t=>t.id));
  const fixed=[...QUESTIONS,...(window.EXTRA_QUESTIONS||[])].filter(x=>ids.has(x.topic));
  const generated=[];
  for(const gen of GENERATORS){ for(let i=0;i<2;i++){ const z=gen(); if(ids.has(z.topic)) generated.push(z); } }
  return [...fixed,...generated];
}


function fixedBank(div=state.division){
  const ids=new Set(activeTopics(div).map(t=>t.id));
  return [...QUESTIONS,...(window.EXTRA_QUESTIONS||[])].filter(x=>ids.has(x.topic));
}

function populateBankFilters(){
  const el=document.getElementById('bankTopic');
  if(!el) return;
  const old=el.value||'all';
  el.innerHTML='<option value="all">All current-rule topics</option>'+activeTopics().map(t=>`<option value="${t.id}">${t.number}. ${t.title}</option>`).join('');
  if([...el.options].some(o=>o.value===old)) el.value=old;
}

function bankQuestionPreview(qn){
  const t=topicById(qn.topic);
  const choices=(qn.type==='mcq'||qn.type==='diagram')?`<ol class="bank-choices" type="A">${qn.choices.map(c=>`<li>${c}</li>`).join('')}</ol>`:'';
  return `<article class="panel bank-item"><div class="question-meta"><span class="badge">Area ${t.number}</span><span class="badge">${typeLabel(qn.type)}</span><span class="badge">${difficultyLabel(qn.difficulty)}</span></div><div class="bank-prompt">${qn.prompt}</div>${choices}<details class="bank-answer"><summary>Reveal answer / rubric</summary><div>${qn.type==='frq'?`<strong>Rubric:</strong> ${qn.rubric||qn.explanation}<p>${qn.explanation}</p>`:`<strong>Answer:</strong> ${answerDisplay(qn)}<p>${qn.explanation}</p>`}</div></details></article>`;
}

function renderBank(reset=false){
  const totalEl=document.getElementById('bankTotal'); if(!totalEl) return;
  populateBankFilters();
  if(reset) state.bankLimit=30;
  const topic=document.getElementById('bankTopic').value||'all';
  const type=document.getElementById('bankType').value||'all';
  const diff=document.getElementById('bankDifficulty').value||'all';
  const search=(document.getElementById('bankSearch').value||'').trim().toLowerCase();
  const bank=fixedBank();
  totalEl.textContent=bank.length;
  let filtered=bank;
  if(topic!=='all') filtered=filtered.filter(x=>x.topic===topic);
  if(type!=='all') filtered=filtered.filter(x=>x.type===type);
  if(diff!=='all') filtered=filtered.filter(x=>String(x.difficulty)===diff);
  if(search) filtered=filtered.filter(x=>(x.prompt+' '+x.explanation+' '+topicById(x.topic).title).toLowerCase().includes(search));
  document.getElementById('bankMatchText').textContent=`Showing ${Math.min(state.bankLimit,filtered.length)} of ${filtered.length} matching questions.`;
  document.getElementById('bankList').innerHTML=filtered.slice(0,state.bankLimit).map(bankQuestionPreview).join('') || '<div class="panel compact"><strong>No matches.</strong> Try a broader filter.</div>';
  const more=document.getElementById('bankMoreBtn');
  more.classList.toggle('hidden',state.bankLimit>=filtered.length);
}

function newPracticeQuestion(){
  const topic=document.getElementById('practiceTopic')?.value||'all';
  const type=document.getElementById('practiceType')?.value||'all';
  const diff=document.getElementById('practiceDifficulty')?.value||'all';
  let pool=buildPool();
  if(topic!=='all') pool=pool.filter(x=>x.topic===topic);
  if(type!=='all') pool=pool.filter(x=>x.type===type);
  if(diff!=='all') pool=pool.filter(x=>String(x.difficulty)===diff);
  if(!pool.length){ document.getElementById('practiceCard').innerHTML='<h3>No matching questions</h3><p class="muted">Try a broader filter.</p>'; return; }
  state.practiceQuestion=pick(pool);
  renderPracticeQuestion();
}

function renderQuestionBody(question, mode='practice', savedAnswer=null){
  let answerHtml='';
  const name=mode==='test'?'testAnswer':'practiceAnswer';
  if(question.type==='mcq'||question.type==='diagram'){
    answerHtml=`<div class="choices">${question.choices.map((c,i)=>`<label class="choice"><input type="radio" name="${name}" value="${i}" ${String(savedAnswer)===String(i)?'checked':''}><span><strong>${String.fromCharCode(65+i)}.</strong> ${c}</span></label>`).join('')}</div>`;
  } else if(question.type==='frq') {
    answerHtml=`<textarea class="answer-input" id="${name}" placeholder="Write your reasoning. Full tests self-grade FRQs with a rubric after submission.">${savedAnswer||''}</textarea>`;
  } else {
    answerHtml=`<input class="answer-input" id="${name}" value="${savedAnswer??''}" placeholder="Enter your answer${question.numeric&&question.unit?' with '+question.unit:''}" />`;
  }
  return `${question.diagram?`<div class="diagram-wrap">${DIAGRAMS[question.diagram]}</div>`:''}${answerHtml}`;
}

function renderPracticeQuestion(){
  const z=state.practiceQuestion, topic=topicById(z.topic);
  const card=document.getElementById('practiceCard');
  card.innerHTML=`<div class="question-meta"><span class="badge">Area ${topic.number}: ${topic.title}</span><span class="badge">${typeLabel(z.type)}</span><span class="badge">${difficultyLabel(z.difficulty)}</span><span class="badge">${z.points} pt${z.points===1?'':'s'}</span></div><div class="question-text">${z.prompt}</div>${renderQuestionBody(z)}<div class="question-actions"><button class="btn primary" id="checkPracticeBtn">${z.type==='frq'?'Reveal rubric':'Check answer'}</button><button class="btn" id="hintBtn">Hint</button><button class="btn" id="skipBtn">Skip / new</button></div><div id="practiceFeedback"></div>`;
  document.getElementById('checkPracticeBtn').onclick=checkPractice;
  document.getElementById('hintBtn').onclick=()=>{ const f=document.getElementById('practiceFeedback'); f.innerHTML=`<div class="hint">${hintFor(z)}</div>`; };
  document.getElementById('skipBtn').onclick=newPracticeQuestion;
}

function getResponse(question, name='practiceAnswer'){
  if(question.type==='mcq'||question.type==='diagram'){
    const checked=document.querySelector(`input[name="${name}"]:checked`); return checked?Number(checked.value):null;
  }
  return document.getElementById(name)?.value?.trim() ?? '';
}
function gradeObjective(question,response){
  if(question.type==='mcq'||question.type==='diagram') return response!==null && Number(response)===Number(question.answer);
  if(question.numeric){
    const n=extractNumber(response); if(!Number.isFinite(n)) return false;
    const tol=question.tolerance ?? Math.max(0.02*Math.abs(question.answer),0.02);
    return Math.abs(n-question.answer)<=tol;
  }
  const n=normalize(response);
  if(question.keywords) return question.keywords.every(k=>n.includes(normalize(k)));
  if(Array.isArray(question.answer)) return question.answer.some(a=>n.includes(normalize(a)));
  return n===normalize(question.answer);
}
function answerDisplay(qn){
  if(qn.type==='mcq'||qn.type==='diagram') return `${String.fromCharCode(65+qn.answer)}. ${qn.choices[qn.answer]}`;
  if(qn.numeric) return `${fmt(qn.answer)}${qn.unit?' '+qn.unit:''}`;
  return Array.isArray(qn.answer)?qn.answer[0]:qn.answer;
}
function hintFor(qn){
  const map={systems:'Ask what crosses the system boundary, or which property scales with amount.',phases:'Decide whether temperature is changing or phase is changing before choosing an equation.',heat:'Start from Q=mcΔT or P=kAΔT/L and track units.',processes:'Identify what stays constant, then use the first law/engine relation.',history:'Match the scientist to a signature contribution.',radiation:'Stefan–Boltzmann uses absolute temperature and a fourth power.',entropy:'Remember state functions and use ΔS=Qrev/T only under the appropriate reversible path.'};
  return map[qn.topic];
}

function checkPractice(){
  const z=state.practiceQuestion, out=document.getElementById('practiceFeedback');
  if(z.type==='frq'){
    const response=getResponse(z);
    out.innerHTML=`<div class="feedback"><h4>Self-grade rubric</h4><div class="solution">${z.rubric||z.explanation}</div><p><strong>Model explanation:</strong> ${z.explanation}</p><div class="question-actions"><button class="btn primary" id="selfCorrect">I got it</button><button class="btn" id="selfMissed">I missed it</button></div></div>`;
    document.getElementById('selfCorrect').onclick=()=>{recordAttempt(z,true);newPracticeQuestion();};
    document.getElementById('selfMissed').onclick=()=>{recordAttempt(z,false);newPracticeQuestion();};
    return;
  }
  const response=getResponse(z);
  const correct=gradeObjective(z,response);
  recordAttempt(z,correct);
  out.innerHTML=`<div class="feedback ${correct?'good':'bad'}"><h4>${correct?'Correct ✓':'Not quite'}</h4>${correct?'':`<p><strong>Answer:</strong> ${answerDisplay(z)}</p>`}<div class="solution">${z.explanation}</div><div class="question-actions"><button class="btn primary" id="nextPractice">Next question</button></div></div>`;
  document.getElementById('nextPractice').onclick=newPracticeQuestion;
}

function chooseCandidate(cands,diff){
  if(!cands.length) return null;
  let list=shuffle(cands);
  if(diff==='hard') list.sort((a,b)=>b.difficulty-a.difficulty);
  else if(diff==='foundation') list.sort((a,b)=>a.difficulty-b.difficulty);
  return list[0];
}

function typeTriples(types,total=3,prefix=[],idx=0,out=[]){
  if(idx===types.length-1){ out.push({...Object.fromEntries(types.map(t=>[t,0])),...Object.fromEntries(prefix),[types[idx]]:total}); return out; }
  for(let n=0;n<=total;n++) typeTriples(types,total-n,[...prefix,[types[idx],n]],idx+1,out);
  return out;
}

function coverageAllocation(topics,requested,pool){
  const types=['mcq','short','calc','diagram','frq'];
  const available={};
  topics.forEach(t=>{ available[t.id]={}; types.forEach(ty=>available[t.id][ty]=pool.filter(q=>q.topic===t.id&&q.type===ty).length); });
  const combos={};
  topics.forEach(t=>{
    combos[t.id]=typeTriples(types,3,[],0,[]).filter(c=>types.every(ty=>c[ty]<=available[t.id][ty]));
    combos[t.id].sort((a,b)=>{
      const score=x=>types.reduce((sum,ty)=>sum+(requested[ty]?x[ty]/requested[ty]:x[ty]*100),0);
      return score(a)-score(b);
    });
  });
  const order=[...topics].sort((a,b)=>combos[a.id].length-combos[b.id].length);
  const rem={...requested}, result={};
  function dfs(i){
    if(i===order.length) return true;
    const t=order[i];
    const feasible=combos[t.id].filter(c=>types.every(ty=>c[ty]<=rem[ty]));
    feasible.sort((a,b)=>{
      const sa=types.reduce((s,ty)=>s+(rem[ty]?a[ty]/rem[ty]:0),0);
      const sb=types.reduce((s,ty)=>s+(rem[ty]?b[ty]/rem[ty]:0),0);
      return sb-sa;
    });
    for(const c of feasible){
      types.forEach(ty=>rem[ty]-=c[ty]); result[t.id]=c;
      if(dfs(i+1)) return true;
      types.forEach(ty=>rem[ty]+=c[ty]); delete result[t.id];
    }
    return false;
  }
  return dfs(0)?result:null;
}

function getRequestedTypeCounts(){
  const val=id=>Math.max(0,Math.floor(Number(document.getElementById(id).value)||0));
  return {mcq:val('testMcqCount'),short:val('testShortCount'),calc:val('testCalcCount'),diagram:val('testDiagramCount'),frq:val('testFrqCount')};
}

function updateTestCountSummary(){
  const div=document.getElementById('testDivision').value;
  const counts=getRequestedTypeCounts();
  const total=Object.values(counts).reduce((a,b)=>a+b,0), min=activeTopics(div).length*3;
  const bank=fixedBank(div);
  const availability={}; Object.keys(counts).forEach(ty=>availability[ty]=bank.filter(q=>q.type===ty).length);
  document.getElementById('testCountSummary').innerHTML=`<strong>Total:</strong> ${total} questions. Division ${div} draft-coverage minimum is ${min}. <span class="muted">Bank availability — MCQ ${availability.mcq}, short ${availability.short}, calc ${availability.calc}, diagram ${availability.diagram}, FRQ ${availability.frq}.</span>`;
}

function generateTest(){
  const div=document.getElementById('testDivision').value;
  const topics=activeTopics(div);
  const counts=getRequestedTypeCounts();
  const total=Object.values(counts).reduce((a,b)=>a+b,0);
  const minutes=Math.max(5,Math.min(120,Number(document.getElementById('testMinutes').value)||50));
  const diff=document.getElementById('testDifficulty').value;
  const enforce=document.getElementById('draftCoverage').checked;
  const error=document.getElementById('testSetupError');
  error.classList.add('hidden'); error.textContent='';
  if(total<1){ error.textContent='Choose at least one question.'; error.classList.remove('hidden'); return; }
  if(total>80){ error.textContent='Keep a generated test to 80 questions or fewer.'; error.classList.remove('hidden'); return; }
  const min=topics.length*3;
  if(enforce && total<min){ error.textContent=`Draft-area coverage needs at least ${min} total questions for Division ${div}. Increase your counts or turn off coverage.`; error.classList.remove('hidden'); return; }

  const pool=buildPool(div);
  const types=['mcq','short','calc','diagram','frq'];
  for(const ty of types){
    const available=pool.filter(q=>q.type===ty).length;
    if(counts[ty]>available){ error.textContent=`You requested ${counts[ty]} ${typeLabel(ty)} questions, but this division currently has ${available} unique candidates. Lower that count.`; error.classList.remove('hidden'); return; }
  }

  const selected=[],used=new Set();
  const remaining={...counts};
  if(enforce){
    const alloc=coverageAllocation(topics,counts,pool);
    if(!alloc){ error.textContent='That exact type mix cannot also give every draft area at least 3 questions. Add more MCQ/short/FRQ or turn off draft-area coverage.'; error.classList.remove('hidden'); return; }
    for(const t of topics){
      for(const ty of types){
        const n=alloc[t.id][ty]||0;
        for(let i=0;i<n;i++){
          const cands=pool.filter(q=>q.topic===t.id&&q.type===ty&&!used.has(q.id));
          const chosen=chooseCandidate(cands,diff);
          if(!chosen){ error.textContent='Could not assemble a unique coverage set with those constraints.'; error.classList.remove('hidden'); return; }
          selected.push(chosen); used.add(chosen.id); remaining[ty]--;
        }
      }
    }
  }

  for(const ty of types){
    for(let i=0;i<remaining[ty];i++){
      const cands=pool.filter(q=>q.type===ty&&!used.has(q.id));
      const chosen=chooseCandidate(cands,diff);
      if(!chosen){ error.textContent=`Ran out of unique ${typeLabel(ty)} questions.`; error.classList.remove('hidden'); return; }
      selected.push(chosen); used.add(chosen.id);
    }
  }

  const questions=shuffle(selected);
  state.test={division:div,questions,answers:Array(total).fill(null),flags:Array(total).fill(false),index:0,seconds:minutes*60,submitted:false,selfScores:{}};
  document.getElementById('testSetup').classList.add('hidden');
  document.getElementById('testResults').classList.add('hidden');
  document.getElementById('testRunner').classList.remove('hidden');
  renderTestNav(); renderTestQuestion(); startTimer();
}
function startTimer(){
  clearInterval(state.timerId);
  updateTimer();
  state.timerId=setInterval(()=>{
    if(!state.test||state.test.submitted) return clearInterval(state.timerId);
    state.test.seconds--;
    updateTimer();
    if(state.test.seconds<=0){ clearInterval(state.timerId); submitTest(true); }
  },1000);
}
function updateTimer(){
  const s=Math.max(0,state.test?.seconds||0), m=Math.floor(s/60), sec=s%60;
  const el=document.getElementById('timerDisplay'); el.textContent=`${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`; el.classList.toggle('low',s<=300);
}
function renderTestNav(){
  const nav=document.getElementById('questionNav');
  nav.innerHTML=state.test.questions.map((_,i)=>`<button class="qnav-btn ${i===state.test.index?'current':''} ${state.test.answers[i]!==null&&state.test.answers[i]!==''?'answered':''} ${state.test.flags[i]?'flagged':''}" data-i="${i}">${i+1}</button>`).join('');
  nav.querySelectorAll('button').forEach(b=>b.onclick=()=>{saveCurrentTestAnswer();state.test.index=Number(b.dataset.i);renderTestQuestion();renderTestNav();});
}
function saveCurrentTestAnswer(){
  if(!state.test) return;
  const qn=state.test.questions[state.test.index];
  const r=getResponse(qn,'testAnswer');
  state.test.answers[state.test.index]=r;
}
function renderTestQuestion(){
  const t=state.test, qn=t.questions[t.index], topic=topicById(qn.topic);
  document.getElementById('testProgressText').textContent=`Question ${t.index+1} / ${t.questions.length}`;
  document.getElementById('testTopicBadge').textContent=`Area ${topic.number}`;
  const card=document.getElementById('testQuestionCard');
  card.innerHTML=`<div class="question-meta"><span class="badge">${topic.title}</span><span class="badge">${typeLabel(qn.type)}</span><span class="badge">${difficultyLabel(qn.difficulty)}</span><span class="badge">${qn.points} pt${qn.points===1?'':'s'}</span></div><div class="question-text">${qn.prompt}</div>${renderQuestionBody(qn,'test',t.answers[t.index])}<div class="nav-actions"><div><button class="btn flag-btn ${t.flags[t.index]?'active':''}" id="flagBtn">${t.flags[t.index]?'Flagged':'Flag question'}</button></div><div><button class="btn" id="prevBtn" ${t.index===0?'disabled':''}>← Previous</button> <button class="btn primary" id="nextBtn" ${t.index===t.questions.length-1?'disabled':''}>Next →</button></div></div>`;
  document.getElementById('flagBtn').onclick=()=>{saveCurrentTestAnswer();t.flags[t.index]=!t.flags[t.index];renderTestQuestion();renderTestNav();};
  document.getElementById('prevBtn').onclick=()=>{saveCurrentTestAnswer();if(t.index>0){t.index--;renderTestQuestion();renderTestNav();}};
  document.getElementById('nextBtn').onclick=()=>{saveCurrentTestAnswer();if(t.index<t.questions.length-1){t.index++;renderTestQuestion();renderTestNav();}};
  card.querySelectorAll('input,textarea').forEach(el=>el.addEventListener('change',()=>{saveCurrentTestAnswer();renderTestNav();}));
}

function submitTest(auto=false){
  if(!state.test) return;
  saveCurrentTestAnswer();
  if(!auto){
    const unanswered=state.test.answers.filter((a,i)=>a===null||a==='').length;
    if(unanswered && !confirm(`${unanswered} question(s) are unanswered. Submit anyway?`)) return;
  }
  state.test.submitted=true; clearInterval(state.timerId);
  document.getElementById('testRunner').classList.add('hidden');
  renderTestResults(auto);
}

function renderTestResults(auto){
  const t=state.test;
  let objectiveEarned=0,objectivePossible=0,frqPossible=0,correctCount=0;
  const reviews=t.questions.map((qn,i)=>{
    const resp=t.answers[i];
    if(qn.type==='frq'){ frqPossible+=qn.points; return {qn,i,resp,status:'self'}; }
    objectivePossible+=qn.points;
    const ok=gradeObjective(qn,resp); if(ok){objectiveEarned+=qn.points;correctCount++;}
    return {qn,i,resp,status:ok?'good':'bad'};
  });
  const objPct=objectivePossible?Math.round(objectiveEarned/objectivePossible*100):0;
  const results=document.getElementById('testResults');
  results.classList.remove('hidden');
  results.innerHTML=`<div class="panel results-card"><span class="eyebrow">TEST COMPLETE${auto?' • TIME EXPIRED':''}</span><h2>Objective score: ${objectiveEarned}/${objectivePossible} (${objPct}%)</h2><p class="muted">FRQs are self-graded below because good explanations can be worded many ways. Add your rubric scores to get a complete point total.</p><div class="results-summary"><div><strong>${correctCount}</strong><small>objective questions correct</small></div><div><strong>${t.questions.length}</strong><small>total questions</small></div><div><strong>${frqPossible}</strong><small>FRQ points to self-grade</small></div><div><strong id="combinedScore">${objectiveEarned}/${objectivePossible+frqPossible}</strong><small>combined points</small></div></div><button class="btn primary" id="newTestBtn">Generate another test</button><div id="reviewList">${reviews.map(r=>renderReview(r)).join('')}</div></div>`;
  document.getElementById('newTestBtn').onclick=()=>{document.getElementById('testResults').classList.add('hidden');document.getElementById('testSetup').classList.remove('hidden');};
  results.querySelectorAll('.self-score input').forEach(inp=>inp.addEventListener('input',()=>updateSelfScores(objectiveEarned,objectivePossible,frqPossible)));
  window.scrollTo({top:0,behavior:'smooth'});
}
function renderReview(r){
  const {qn,i,resp,status}=r, topic=topicById(qn.topic);
  if(status==='self') return `<div class="review-item"><div class="question-meta"><span class="badge">#${i+1}</span><span class="badge">${topic.title}</span><span class="badge">FRQ</span></div><div class="question-text">${qn.prompt}</div><p><strong>Your answer:</strong> ${escapeHtml(resp||'(blank)')}</p><p><strong>Rubric:</strong> ${qn.rubric||qn.explanation}</p><p><strong>Model explanation:</strong> ${qn.explanation}</p><label class="self-score">Self-score <input type="number" min="0" max="${qn.points}" value="0" data-i="${i}"> / ${qn.points}</label></div>`;
  return `<div class="review-item"><div class="question-meta"><span class="badge">#${i+1}</span><span class="badge">${topic.title}</span></div><span class="review-status ${status}">${status==='good'?'Correct ✓':'Incorrect'}</span><div class="question-text">${qn.prompt}</div><p><strong>Your answer:</strong> ${escapeHtml(resp===null||resp===''?'(blank)':String(resp))}</p>${status==='bad'?`<p><strong>Correct answer:</strong> ${answerDisplay(qn)}</p>`:''}<p>${qn.explanation}</p></div>`;
}
function updateSelfScores(objEarned,objPossible,frqPossible){
  let self=0;
  document.querySelectorAll('.self-score input').forEach(inp=>{ const max=Number(inp.max); const v=Math.max(0,Math.min(max,Number(inp.value)||0)); self+=v; });
  document.getElementById('combinedScore').textContent=`${objEarned+self}/${objPossible+frqPossible}`;
}
function escapeHtml(s){ return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

// Events / initialization
window.addEventListener('hashchange',route);
document.getElementById('dialogClose').onclick=()=>document.getElementById('learnDialog').close();
document.getElementById('themeToggle').onclick=()=>{
  state.theme=state.theme==='dark'?'light':'dark'; document.documentElement.dataset.theme=state.theme; localStorage.setItem('thermoTheme',state.theme);
};
document.getElementById('divisionSelect').value=state.division;
document.getElementById('divisionSelect').onchange=e=>{
  state.division=e.target.value; localStorage.setItem('thermoDivision',state.division); populatePracticeTopics(); populateBankFilters(); state.practiceQuestion=null; renderDashboard(); renderLearn(); renderFormulas(); if(location.hash==='#practice') newPracticeQuestion(); if(location.hash==='#bank')renderBank(true);
};
document.getElementById('practiceTopic').onchange=newPracticeQuestion;
document.getElementById('practiceType').onchange=newPracticeQuestion;
document.getElementById('practiceDifficulty').onchange=newPracticeQuestion;
document.getElementById('newPracticeBtn').onclick=newPracticeQuestion;
document.getElementById('resetProgressBtn').onclick=()=>{ if(confirm('Reset all saved practice progress and streaks?')){ state.stats={};state.currentStreak=0;saveStats();renderDashboard();document.getElementById('currentStreak').textContent='0'; } };
document.getElementById('generateTestBtn').onclick=generateTest;
document.getElementById('submitTestBtn').onclick=()=>submitTest(false);
document.getElementById('testDivision').onchange=updateTestCountSummary;
['testMcqCount','testShortCount','testCalcCount','testDiagramCount','testFrqCount'].forEach(id=>document.getElementById(id).addEventListener('input',updateTestCountSummary));
document.getElementById('draftCoverage').addEventListener('change',updateTestCountSummary);
['bankTopic','bankType','bankDifficulty'].forEach(id=>document.getElementById(id).addEventListener('change',()=>renderBank(true)));
document.getElementById('bankSearch').addEventListener('input',()=>renderBank(true));
document.getElementById('bankMoreBtn').onclick=()=>{state.bankLimit=(state.bankLimit||30)+30;renderBank(false);};

document.documentElement.dataset.theme=state.theme;
populatePracticeTopics(); populateBankFilters();
document.getElementById('currentStreak').textContent=state.currentStreak;
updateTestCountSummary();
renderDashboard(); renderLearn(); renderFormulas();
const practiceParam=new URLSearchParams(location.search).get('practice');
if(practiceParam && activeTopics().some(t=>t.id===practiceParam)){
  document.getElementById('practiceTopic').value=practiceParam;
  state.practiceQuestion=null;
}
route();
