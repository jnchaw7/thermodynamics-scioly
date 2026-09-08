/*
  ThermoForge expanded question bank.
  Every question below is original to this site. The older invitational/tryout exams
  supplied by the user were used only to match the broad competition style: mixed
  recall, diagrams, calculations, history, and free response.
*/
window.EXTRA_QUESTIONS = (() => {
  const out = [];
  const SIGMA = 5.670374419e-8;
  const R = 8.314462618;
  const WIEN = 2.897771955e-3;
  const f = n => {
    const a = Math.abs(n);
    if (a && (a < 0.01 || a >= 100000)) return n.toExponential(3);
    return Number(n.toFixed(a < 10 ? 3 : a < 100 ? 2 : 1)).toString();
  };
  const add = (id, topic, type, difficulty, prompt, answer, explanation, extra={}) => {
    out.push({ id, topic, type, difficulty, prompt, answer, explanation,
      points: extra.points || (type === 'frq' ? 4 : type === 'calc' ? 3 : 1), ...extra });
  };
  const numericChoices = (correct, offsets, unit, pos=0, digits=1) => {
    const vals = offsets.map(x => correct + x);
    vals[pos % vals.length] = correct;
    return vals.map(v => `${Number(v.toFixed(digits))}${unit ? ' ' + unit : ''}`);
  };

  // AREA I — systems, properties, temperature, units -------------------------
  const cVals = [-40,-25,-10,0,10,15,20,25,30,37,50,65,80,100,125,150,175,200,225,250,275,300,325,350,400];
  cVals.forEach((c,i) => {
    const ans = c*9/5+32;
    add(`bank-s-cf-${i}`,'systems','calc',1,`Convert ${c} °C to °F.`,ans,
      `Use °F=(9/5)°C+32: (${c})(9/5)+32=${f(ans)} °F.`,{numeric:true,tolerance:0.15,unit:'°F'});
  });
  const fVals = [-40,-4,14,32,41,50,59,68,77,86,95,104,122,140,158,176,194,212,248,302,356,392,482,572,662];
  fVals.forEach((fv,i) => {
    const ans=(fv-32)*5/9;
    add(`bank-s-fc-${i}`,'systems','calc',1,`Convert ${fv} °F to °C.`,ans,
      `Use °C=(5/9)(°F−32): (5/9)(${fv}−32)=${f(ans)} °C.`,{numeric:true,tolerance:0.15,unit:'°C'});
  });
  const kVals = [73.15,123.15,173.15,223.15,253.15,263.15,273.15,283.15,293.15,298.15,303.15,310.15,323.15,333.15,353.15,373.15,423.15,473.15,523.15,573.15];
  kVals.forEach((k,i)=>{
    const ans=k-273.15;
    add(`bank-s-kc-${i}`,'systems','calc',1,`Convert ${k.toFixed(2)} K to °C.`,ans,
      `°C=K−273.15=${k.toFixed(2)}−273.15=${f(ans)} °C.`,{numeric:true,tolerance:0.05,unit:'°C'});
  });
  const systemScenarios = [
    ['an uncovered pot of boiling water on a stove','open','Both mass (water vapor) and energy can cross the boundary.'],
    ['a capped metal bottle warming in sunlight','closed','Energy can cross, but mass cannot cross the sealed boundary.'],
    ['an ideal perfectly insulated, sealed rigid container','isolated','In the idealization, neither mass nor energy crosses the boundary.'],
    ['a turbine with steam entering and leaving','open','Mass and energy cross the control surface.'],
    ['a sealed piston-cylinder that can be heated','closed','The gas mass is fixed although heat/work can cross.'],
    ['an ideal thermos with a perfect seal and perfect insulation','isolated','The ideal thermos exchanges neither mass nor energy.'],
    ['a human lung during inhalation','open','Air mass and energy cross the boundary.'],
    ['a sealed flexible balloon placed in warmer air','closed','Its boundary can move and heat can cross, but the gas mass stays fixed.']
  ];
  systemScenarios.forEach(([scenario,ans,why],i)=>add(`bank-s-sys-${i}`,'systems','short',1,
    `Classify this thermodynamic system as open, closed, or isolated: ${scenario}.`,[ans],why,{keywords:[ans]}));
  const propPairs = [
    ['density','intensive'],['pressure','intensive'],['temperature','intensive'],['specific heat','intensive'],['thermal conductivity','intensive'],
    ['mass','extensive'],['volume','extensive'],['total internal energy','extensive'],['total entropy','extensive'],['number of moles','extensive']
  ];
  propPairs.forEach(([p,ans],i)=>add(`bank-s-prop-${i}`,'systems','mcq',1,
    `The property “${p}” is best classified as…`, ans==='intensive'?0:1,
    `${p[0].toUpperCase()+p.slice(1)} is ${ans}: it ${ans==='intensive'?'does not scale':'scales'} with the amount of material.`,
    {choices:['intensive','extensive','a path function','not a thermodynamic property']}));
  add('bank-s-frq-1','systems','frq',2,'Two objects can have the same temperature but different internal energies. Explain how this is possible.',null,
    'Temperature is an intensive measure of thermal state, while internal energy is extensive and depends on amount of matter, material, and microscopic degrees of freedom.',
    {points:4,rubric:'1 pt: temperature is intensive. 1 pt: internal energy is extensive. 1 pt: amount/material can differ. 1 pt: equal temperature only implies no net heat flow at equilibrium.'});
  add('bank-s-frq-2','systems','frq',2,'Explain why the zeroth law is what makes thermometers useful.',null,
    'A thermometer that reaches thermal equilibrium with an object has the same temperature as the object; transitivity lets the thermometer reading compare different systems consistently.',
    {points:4,rubric:'2 pts: thermometer reaches thermal equilibrium with object. 1 pt: same temperature at equilibrium. 1 pt: transitivity/consistent comparison.'});
  add('bank-s-frq-3','systems','frq',2,'Distinguish a temperature interval of 20 °C from an absolute temperature of 20 °C when converting to kelvins.',null,
    'A 20 °C interval equals a 20 K interval, but the absolute temperature 20 °C equals 293.15 K because absolute scales require the offset.',
    {points:4,rubric:'2 pts: intervals have equal numerical size in °C and K. 2 pts: absolute 20 °C = 293.15 K.'});

  // AREA II — phases, latent/sensible heat, ideal gas ------------------------
  const gasNs=[0.25,0.5,0.75,1,1.25,1.5,2,2.5];
  const gasTs=[275,300,325,350,400,450,500,550];
  const gasVs=[5,8,10,12,15,20,25,30];
  for(let i=0;i<48;i++){
    const n=gasNs[i%gasNs.length], T=gasTs[(i*3)%gasTs.length], VL=gasVs[(i*5)%gasVs.length];
    const P=n*R*T/(VL/1000)/1000;
    add(`bank-p-gas-${i}`,'phases','calc',2,`An ideal gas has ${n} mol at ${T} K in a ${VL} L container. Find its pressure in kPa. Use R=8.314 J/(mol·K).`,P,
      `P=nRT/V=(${n})(8.314)(${T})/${VL/1000}=${f(P)} kPa.`,{numeric:true,tolerance:Math.max(0.15,0.015*P),unit:'kPa'});
  }
  const meltMass=[8,12,16,20,25,30,40,50,60,75,90,100,125,150,175,200];
  meltMass.forEach((m,i)=>{
    const ans=m*334/1000;
    add(`bank-p-melt-${i}`,'phases','calc',2,`${m} g of ice is already at 0 °C. How much heat is required to melt it completely? Use Lf=334 J/g. Give kJ.`,ans,
      `Q=mLf=(${m})(334)=${m*334} J=${f(ans)} kJ.`,{numeric:true,tolerance:0.02*ans,unit:'kJ'});
  });
  const vapMass=[2,4,5,8,10,12,15,18,20,25,30,35,40,50,60,75];
  vapMass.forEach((m,i)=>{
    const ans=m*2256/1000;
    add(`bank-p-vap-${i}`,'phases','calc',2,`${m} g of liquid water at 100 °C vaporizes at 1 atm. Using Lv=2256 J/g, find the heat required in kJ.`,ans,
      `Q=mLv=(${m})(2256)=${m*2256} J=${f(ans)} kJ.`,{numeric:true,tolerance:0.02*ans,unit:'kJ'});
  });
  for(let i=0;i<30;i++){
    const m=[10,15,20,25,30,40][i%6];
    const Ti=[-30,-25,-20,-15,-10][i%5];
    const Tf=[10,20,30,40,50][(i*2)%5];
    const q1=m*2.09*(0-Ti), q2=m*334, q3=m*4.184*Tf, ans=(q1+q2+q3)/1000;
    add(`bank-p-ice-${i}`,'phases','calc',3,`A ${m} g sample starts as ice at ${Ti} °C and ends as liquid water at ${Tf} °C. Use cice=2.09 J/(g·K), Lf=334 J/g, cwater=4.184 J/(g·K). Find total heat in kJ.`,ans,
      `Warm ice: ${f(q1)} J; melt: ${f(q2)} J; warm water: ${f(q3)} J. Total=${f(ans)} kJ.`,{numeric:true,tolerance:0.02*ans,unit:'kJ'});
  }
  const transitions=[
    ['solid','liquid','melting (fusion)'],['liquid','solid','freezing'],['liquid','gas','vaporization'],['gas','liquid','condensation'],['solid','gas','sublimation'],['gas','solid','deposition']
  ];
  transitions.forEach(([a,b,name],i)=>add(`bank-p-trans-${i}`,'phases','short',1,`Name the phase change from ${a} directly to ${b}.`,[name],`${a} → ${b} is ${name}.`,{keywords:[name.split(' ')[0]]}));
  add('bank-p-diag-1','phases','diagram',2,'On the heating curve, which segment represents liquid warming with no phase change?',2,'C–D is the sloped segment after melting and before boiling.',{choices:['A–B','B–C','C–D','D–E'],diagram:'heating'});
  add('bank-p-diag-2','phases','diagram',2,'On the heating curve, which segment represents vaporization?',3,'D–E is the second horizontal plateau, corresponding to boiling/vaporization.',{choices:['A–B','B–C','C–D','D–E'],diagram:'heating'});
  add('bank-p-diag-3','phases','diagram',2,'On the simplified phase diagram, moving at fixed pressure from the solid region to the gas region without entering the liquid region is called…',2,'Direct solid-to-gas transition is sublimation.',{choices:['fusion','condensation','sublimation','freezing'],diagram:'phase'});
  add('bank-p-frq-1','phases','frq',2,'Explain the difference between sensible heat and latent heat, and identify which parts of a heating curve use each.',null,
    'Sensible heat changes temperature within one phase and appears on sloped heating-curve segments; latent heat changes phase at nearly constant temperature and appears on plateaus.',
    {points:4,rubric:'1 pt: sensible heat changes T. 1 pt: latent heat changes phase. 1 pt: sloped segments. 1 pt: plateaus.'});
  add('bank-p-frq-2','phases','frq',3,'Explain the meanings of the triple point and critical point on a pressure–temperature phase diagram.',null,
    'At the triple point, solid, liquid, and gas coexist in equilibrium. At the critical point, the liquid–gas coexistence curve ends; above it the fluid is supercritical and liquid/gas are not distinct phases.',
    {points:5,rubric:'2 pts triple point. 2 pts critical point. 1 pt supercritical/liquid-gas distinction disappears.'});

  // AREA III — calorimetry, conductivity, heat transfer ----------------------
  const masses=[20,30,40,50,60,75,80,100,120,150];
  const cps=[0.129,0.235,0.385,0.449,0.900,1.30,2.10,4.184];
  const dTs=[5,10,15,20,25,30,35,40];
  for(let i=0;i<56;i++){
    const m=masses[i%masses.length], cp=cps[(i*3)%cps.length], dt=dTs[(i*5)%dTs.length];
    const ans=m*cp*dt;
    add(`bank-h-qmc-${i}`,'heat','calc',1,`A ${m} g sample has specific heat ${cp} J/(g·K). If its temperature rises by ${dt} K, how much heat is absorbed?`,ans,
      `Q=mcΔT=(${m})(${cp})(${dt})=${f(ans)} J.`,{numeric:true,tolerance:Math.max(0.1,0.015*ans),unit:'J'});
  }
  for(let i=0;i<40;i++){
    const mhot=[40,60,80,100,120][i%5], mcold=[50,70,90,110,150][(i*2)%5];
    const Th=[60,70,80,90,95][(i*3)%5], Tc=[5,10,15,20,25][(i*4)%5];
    const ans=(mhot*Th+mcold*Tc)/(mhot+mcold);
    add(`bank-h-mix-${i}`,'heat','calc',2,`In an ideal insulated cup, ${mhot} g of water at ${Th} °C is mixed with ${mcold} g of water at ${Tc} °C. Ignore the cup. Find the equilibrium temperature.`,ans,
      `For the same substance, Tf=(mhotTh+mcoldTc)/(mhot+mcold)=(${mhot}·${Th}+${mcold}·${Tc})/${mhot+mcold}=${f(ans)} °C.`,{numeric:true,tolerance:0.25,unit:'°C'});
  }
  const ks=[0.04,0.12,0.8,1.4,15,50,109,205,401];
  const areas=[0.005,0.01,0.02,0.04,0.08];
  const lengths=[0.005,0.01,0.02,0.04,0.05];
  const deltas=[10,20,30,40,50,60];
  for(let i=0;i<54;i++){
    const k=ks[i%ks.length], A=areas[(i*2)%areas.length], L=lengths[(i*3)%lengths.length], dt=deltas[(i*5)%deltas.length];
    const ans=k*A*dt/L;
    add(`bank-h-cond-${i}`,'heat','calc',2,`A slab has k=${k} W/(m·K), area ${A} m², thickness ${(L*100).toFixed(1)} cm, and steady temperature difference ${dt} K. Find the conduction rate.`,ans,
      `P=kAΔT/L=(${k})(${A})(${dt})/${L}=${f(ans)} W.`,{numeric:true,tolerance:Math.max(0.05,0.02*ans),unit:'W'});
  }
  for(let i=0;i<24;i++){
    const m=[25,40,55,70,90,120][i%6], q=[500,800,1200,1600,2200,3000][(i*5)%6], dt=[5,8,10,12,15,20][(i*3)%6];
    const ans=q/(m*dt);
    add(`bank-h-cp-${i}`,'heat','calc',2,`A ${m} g sample absorbs ${q} J and warms by ${dt} °C. Find its specific heat in J/(g·°C).`,ans,
      `c=Q/(mΔT)=${q}/(${m}·${dt})=${f(ans)} J/(g·°C).`,{numeric:true,tolerance:0.02*ans,unit:'J/(g·°C)'});
  }
  const mech=[
    ['Sunlight warming a black roof','radiation'],['Warm water circulating upward in a pot','convection'],['A metal rod carrying energy from a hot end to a cold end','conduction'],
    ['Energy crossing empty space from the Sun to Earth','radiation'],['A fan-driven current of warm air','convection'],['Heat passing through a window pane','conduction'],
    ['Infrared energy emitted by a glowing heating element','radiation'],['Buoyant warm air rising above a radiator','convection']
  ];
  mech.forEach(([s,a],i)=>add(`bank-h-mech-${i}`,'heat','mcq',1,`Which mechanism is dominant in this description: ${s}?`,['conduction','convection','radiation'].indexOf(a),
    `The dominant mechanism is ${a}.`,{choices:['conduction','convection','radiation','none of these']}));
  add('bank-h-frq-1','heat','frq',2,'A marble floor and carpet in the same room are at the same measured temperature, yet marble feels colder to bare feet. Explain.',null,
    'Marble generally has much higher thermal conductivity/effusivity than carpet, so it removes thermal energy from the foot faster even though both surfaces begin at the same temperature.',
    {points:4,rubric:'1 pt: same initial temperature acknowledged. 2 pts: marble transfers heat away faster because of thermal properties. 1 pt: sensation depends on heat-transfer rate, not just temperature.'});
  add('bank-h-frq-2','heat','frq',3,'Describe an energy-balance method for solving a calorimetry problem in which a hot metal sample is placed in water inside a calorimeter with nonzero heat capacity.',null,
    'Write heat lost by metal plus heat gained by water plus heat gained by calorimeter equal to zero, using the common final temperature. Then solve the resulting equation.',
    {points:5,rubric:'2 pts: ΣQ=0. 1 pt metal term. 1 pt water term. 1 pt calorimeter term/common final temperature.'});
  add('bank-h-frq-3','heat','frq',2,'Explain why doubling a wall’s thickness halves its steady one-dimensional conduction rate when all other quantities stay fixed.',null,
    'Fourier conduction gives P=kAΔT/L, so rate is inversely proportional to thickness L.',
    {points:4,rubric:'2 pts equation P=kAΔT/L. 1 pt inverse proportionality. 1 pt explicit doubling L → P/2.'});

  // AREA IV — processes, laws, cycles, engines -------------------------------
  for(let i=0;i<36;i++){
    const Q=[-500,-300,-150,200,350,500,750,900,1200][i%9];
    const W=[-250,-100,0,80,150,250,400,600][(i*5)%8];
    const ans=Q-W;
    add(`bank-t-first-${i}`,'processes','calc',2,`Using ΔU=Q−W, with W positive for work done by the system, a process has Q=${Q} J and W=${W} J. Find ΔU.`,ans,
      `ΔU=Q−W=${Q}−(${W})=${ans} J.`,{numeric:true,tolerance:0.5,unit:'J'});
  }
  for(let i=0;i<36;i++){
    const P=[80,100,120,150,180,200,250,300][i%8], Vi=[1,2,3,4][(i*3)%4], dV=[0.5,1,1.5,2,2.5][(i*5)%5];
    const Vf=Vi+dV, ans=P*dV;
    add(`bank-t-work-${i}`,'processes','calc',2,`A gas expands isobarically at ${P} kPa from ${Vi} L to ${Vf} L. Find the work done by the gas.`,ans,
      `W=PΔV. Since 1 kPa·L=1 J, W=(${P})(${dV})=${f(ans)} J.`,{numeric:true,tolerance:0.02*ans,unit:'J'});
  }
  for(let i=0;i<36;i++){
    const Qh=[600,800,1000,1200,1500,1800,2000,2500][i%8];
    const frac=[0.25,0.30,0.35,0.40,0.45,0.50,0.60,0.65][(i*3)%8];
    const W=Qh*frac, Qc=Qh-W, ans=frac*100;
    add(`bank-t-eng-${i}`,'processes','calc',2,`A heat engine absorbs ${Qh} J per cycle and rejects ${f(Qc)} J. What is its thermal efficiency as a percent?`,ans,
      `W=Qh−Qc=${f(W)} J; e=W/Qh=${f(frac)}=${f(ans)}%.`,{numeric:true,tolerance:0.25,unit:'%'});
  }
  for(let i=0;i<36;i++){
    const Tc=[250,270,280,300,320,350][i%6], Th=[450,500,550,600,650,700,800,900][(i*5)%8];
    const hot=Math.max(Th,Tc+100), ans=(1-Tc/hot)*100;
    add(`bank-t-carnot-${i}`,'processes','calc',2,`A Carnot engine operates between ${hot} K and ${Tc} K. Find its maximum efficiency in percent.`,ans,
      `eC=1−Tc/Th=1−${Tc}/${hot}=${f(ans)}%.`,{numeric:true,tolerance:0.25,unit:'%'});
  }
  const procDefs=[
    ['constant temperature','isothermal'],['constant pressure','isobaric'],['constant volume','isochoric'],['zero heat transfer','adiabatic'],
    ['returns to its initial state','cyclic'],['no change in internal energy over a complete closed path','cyclic']
  ];
  procDefs.forEach(([d,a],i)=>add(`bank-t-def-${i}`,'processes','mcq',1,`Which process is characterized by ${d}?`,['isothermal','isobaric','isochoric','adiabatic','cyclic'].indexOf(a),
    `${a} is the matching process.`,{choices:['isothermal','isobaric','isochoric','adiabatic','cyclic']}));
  add('bank-t-diag-1','processes','diagram',2,'For the clockwise rectangular P–V cycle shown, which geometric quantity equals the magnitude of net work per cycle?',2,'The net work equals the area enclosed by the cycle on a P–V diagram.',{choices:['the perimeter','the average pressure','the enclosed area','the maximum volume'],diagram:'pv'});
  add('bank-t-diag-2','processes','diagram',2,'For the clockwise P–V loop shown, the sign of work done by the gas over one full cycle is…',0,'Clockwise P–V cycles have positive net work done by the gas.',{choices:['positive','negative','zero','undefined'],diagram:'pv'});
  add('bank-t-frq-1','processes','frq',2,'A refrigerator is left running with its door open in an otherwise closed room. Explain the long-term effect on room temperature.',null,
    'The refrigerator removes heat from the room air at the evaporator but rejects that heat plus the electrical work input back to the same room, so the net effect is warming.',
    {points:5,rubric:'2 pts heat removed from air. 2 pts condenser returns that heat plus work. 1 pt net warming.'});
  add('bank-t-frq-2','processes','frq',3,'Compare isothermal and adiabatic compression of the same ideal gas starting from the same state and ending at the same smaller volume. Which generally requires more external work, and why?',null,
    'Adiabatic compression generally requires more work because no heat leaves, so the gas temperature and pressure rise more strongly than in isothermal compression.',
    {points:5,rubric:'1 pt adiabatic requires more work. 2 pts temperature rises adiabatically. 1 pt pressure is higher along path. 1 pt isothermal sheds heat to maintain T.'});
  add('bank-t-frq-3','processes','frq',2,'Explain why a 100% efficient heat engine operating cyclically between finite-temperature reservoirs is impossible.',null,
    'The second law requires some heat rejection to a colder reservoir for a cyclic engine; converting all heat from a single reservoir into work would violate the Kelvin–Planck statement.',
    {points:4,rubric:'2 pts some heat must be rejected. 1 pt second law/Kelvin–Planck. 1 pt cyclic engine context.'});

  // AREA V — history ---------------------------------------------------------
  const people = [
    ['Joseph Black','specific heat and latent heat'],
    ['Sadi Carnot','limits on heat-engine performance and the reversible ideal cycle'],
    ['James Prescott Joule','the mechanical equivalent of heat and work–heat equivalence'],
    ['Rudolf Clausius','a formulation of the second law and the entropy concept'],
    ['Lord Kelvin','the absolute thermodynamic temperature scale'],
    ['James Clerk Maxwell','kinetic theory and the molecular speed distribution'],
    ['Ludwig Boltzmann','statistical mechanics and the microscopic interpretation of entropy'],
    ['Max Planck','blackbody radiation and the quantum hypothesis']
  ];
  for(let round=0;round<5;round++){
    people.forEach(([name,contrib],i)=>{
      const distract=[people[(i+1+round)%people.length][0],people[(i+3+round)%people.length][0],people[(i+5+round)%people.length][0]];
      const choices=[name,...distract];
      const shift=(i+round)%4;
      const rotated=choices.slice(shift).concat(choices.slice(0,shift));
      add(`bank-y-who-${round}-${i}`,'history','mcq',1,`Which scientist is most directly associated with ${contrib}?`,rotated.indexOf(name),
        `${name} is associated with ${contrib}.`,{choices:rotated});
    });
  }
  people.forEach(([name,contrib],i)=>add(`bank-y-short-${i}`,'history','short',1,`Give the main thermodynamics contribution associated with ${name}.`,[contrib],`${name}: ${contrib}.`,{keywords:[contrib.split(' ')[0]]}));
  const historyPairs=[
    ['Carnot','1824','heat-engine analysis'],['Joule','1840s','mechanical work and heat'],['Clausius','1850s','second law/entropy'],['Planck','1900','blackbody quantum hypothesis'],
    ['Black','18th century','specific and latent heat'],['Maxwell','19th century','kinetic theory of gases'],['Boltzmann','late 19th century','statistical mechanics']
  ];
  historyPairs.forEach(([name,period,idea],i)=>add(`bank-y-frq-${i}`,'history','frq',2,`Briefly explain why ${name} is important to thermodynamics. Include the idea most associated with this scientist${period?` and its approximate historical period (${period})`:''}.`,null,
    `${name} is associated with ${idea}${period?` around the ${period}`:''}.`,{points:4,rubric:`2 pts: identifies ${idea}. 1 pt: reasonable historical placement (${period}). 1 pt: explains significance rather than only naming it.`}));

  // AREA VI — radiation and third law ---------------------------------------
  const emiss=[0.2,0.35,0.5,0.65,0.75,0.85,0.9,0.95,1.0];
  const temps=[250,300,350,400,450,500,600,700,800,900,1000,1200];
  for(let i=0;i<45;i++){
    const e=emiss[i%emiss.length], T=temps[(i*5)%temps.length], ans=e*SIGMA*T**4;
    add(`bank-r-exit-${i}`,'radiation','calc',2,`A gray surface has emissivity ${e} and temperature ${T} K. Find its radiant exitance using σ=5.670×10⁻⁸ W/(m²·K⁴).`,ans,
      `M=εσT⁴=(${e})(5.670×10⁻⁸)(${T})⁴=${f(ans)} W/m².`,{numeric:true,tolerance:0.025*ans,unit:'W/m²'});
  }
  for(let i=0;i<36;i++){
    const e=emiss[(i*2)%emiss.length], T=temps[(i*7)%temps.length], A=[0.1,0.2,0.35,0.5,0.75,1,1.5,2][i%8], ans=e*SIGMA*A*T**4;
    add(`bank-r-power-${i}`,'radiation','calc',2,`A surface of area ${A} m² has emissivity ${e} and temperature ${T} K. Approximate its total emitted thermal-radiation power.`,ans,
      `P=εσAT⁴=(${e})(5.670×10⁻⁸)(${A})(${T})⁴=${f(ans)} W.`,{numeric:true,tolerance:0.025*ans,unit:'W'});
  }
  for(let i=0;i<24;i++){
    const T=temps[(i*5)%temps.length], lam=WIEN/T*1e6;
    add(`bank-r-wien-${i}`,'radiation','calc',3,`Treat an object as a blackbody at ${T} K. Using Wien’s law λmaxT=2.898×10⁻³ m·K, find λmax in μm.`,lam,
      `λmax=b/T=(2.898×10⁻³)/${T}=${f(lam)} μm.`,{numeric:true,tolerance:0.02*lam,unit:'μm'});
  }
  [1.1,1.2,1.5,2,2.5,3].forEach((ratio,i)=>{
    const ans=ratio**4;
    add(`bank-r-scale-${i}`,'radiation','mcq',2,`Two ideal blackbodies have absolute temperatures T and ${ratio}T. By what factor is the hotter one’s radiant exitance larger?`,0,
      `Stefan–Boltzmann gives M∝T⁴, so the factor is ${ratio}⁴=${f(ans)}.`,{choices:[f(ans),f(ratio**2),f(ratio),f(ratio**3)]});
  });
  add('bank-r-frq-1','radiation','frq',2,'Explain the physical meaning of emissivity and why a real surface at the same temperature as a blackbody emits less power if ε<1.',null,
    'Emissivity measures how effectively a surface emits relative to an ideal blackbody at the same temperature. Stefan–Boltzmann emission is multiplied by ε, so ε<1 reduces emitted power.',
    {points:4,rubric:'2 pts definition relative to blackbody. 1 pt ε between 0 and 1. 1 pt connects to P=εσAT⁴.'});
  add('bank-r-frq-2','radiation','frq',2,'State the third law of thermodynamics and explain one practical implication concerning absolute zero.',null,
    'The entropy of a perfect crystal approaches a constant (conventionally zero) as T approaches 0 K. Absolute zero cannot be reached by a finite sequence of ordinary thermodynamic processes.',
    {points:4,rubric:'2 pts entropy limit/perfect crystal. 1 pt T→0 K. 1 pt unattainability implication.'});

  // AREA VII — Division C entropy and enthalpy -------------------------------
  const entropyT=[200,250,273.15,300,320,350,400,450,500,600];
  const entropyQ=[200,400,600,800,1000,1200,1500,1800,2000,2500];
  for(let i=0;i<40;i++){
    const T=entropyT[i%entropyT.length], Q=entropyQ[(i*3)%entropyQ.length], ans=Q/T;
    add(`bank-e-qrev-${i}`,'entropy','calc',2,`A system reversibly absorbs ${Q} J at constant temperature ${T} K. Find ΔS.`,ans,
      `ΔS=Qrev/T=${Q}/${T}=${f(ans)} J/K.`,{numeric:true,tolerance:0.02*ans,unit:'J/K'});
  }
  const entMass=[5,10,15,20,25,30,40,50,75,100];
  entMass.forEach((m,i)=>{
    const ans=m*334/273.15;
    add(`bank-e-melt-${i}`,'entropy','calc',3,`${m} g of ice melts reversibly at 0 °C. Using Lf=334 J/g, find the entropy change of the ice.`,ans,
      `ΔS=mLf/T=(${m})(334)/273.15=${f(ans)} J/K.`,{numeric:true,tolerance:0.02*ans,unit:'J/K'});
  });
  const dHs=[-120,-90,-65,-40,-25,-10,15,30,45,70,95,130];
  dHs.forEach((dh,i)=>add(`bank-e-h-${i}`,'entropy','calc',1,`A constant-pressure process with only PV work has ΔH=${dh} kJ. What is qp for the system?`,dh,
    `Under these conditions qp=ΔH=${dh} kJ.`,{numeric:true,tolerance:0.05,unit:'kJ'}));
  const entSigns=[
    ['a gas expands freely into a larger evacuated volume','increase'],['liquid water freezes at its freezing point','decrease'],['a solid sublimes to a gas','increase'],
    ['two ideal gases mix','increase'],['a gas is compressed isothermally and reversibly','decrease'],['a perfect crystal is cooled toward 0 K','decrease']
  ];
  entSigns.forEach(([s,a],i)=>add(`bank-e-sign-${i}`,'entropy','mcq',2,`For the system described, its entropy will generally ${a==='increase'?'…':'…'}: ${s}.`,a==='increase'?0:1,
    `The system entropy generally ${a}s for this process.`,{choices:['increase','decrease','stay exactly constant in every case','be undefined']}));
  add('bank-e-frq-1','entropy','frq',2,'Why can entropy change be calculated along a reversible path even when the actual process is irreversible?',null,
    'Entropy is a state function, so ΔS depends only on initial and final equilibrium states. A convenient reversible path between the same states can therefore be used to evaluate ∫δQrev/T.',
    {points:5,rubric:'2 pts state function. 1 pt endpoints only. 1 pt reversible path allowed. 1 pt mentions Qrev/T or equivalent.'});
  add('bank-e-frq-2','entropy','frq',2,'Explain why enthalpy is especially convenient for many constant-pressure processes.',null,
    'Enthalpy H=U+PV is a state function, and when only PV work occurs at constant pressure, qp=ΔH. Thus measured heat at constant pressure directly gives the enthalpy change.',
    {points:4,rubric:'1 pt H=U+PV. 1 pt state function. 1 pt constant pressure + PV work condition. 1 pt qp=ΔH.'});
  add('bank-e-frq-3','entropy','frq',3,'For a spontaneous process in an isolated system, state the required sign of ΔStotal and explain how this expresses the second law.',null,
    'The total entropy cannot decrease; for a spontaneous irreversible process it increases. An isolated system has no entropy transfer with surroundings, so this directly expresses the second law.',
    {points:4,rubric:'2 pts ΔSisolated ≥0 / spontaneous irreversible >0. 1 pt isolated boundary meaning. 1 pt second-law connection.'});


  // Extra diagram interpretation and short-answer coverage -------------------
  const diagramExtras = [
    ['bank-d-h1','phases','On the heating curve, which segment is solid warming before melting?',0,'A–B is the first sloped segment, representing solid warming.',['A–B','B–C','C–D','D–E'],'heating'],
    ['bank-d-h2','phases','On the heating curve, which segment is melting?',1,'B–C is the first plateau, where solid and liquid coexist.',['A–B','B–C','C–D','E–F'],'heating'],
    ['bank-d-h3','phases','On the heating curve, which segment is gas warming after vaporization?',3,'E–F is the final sloped segment, representing gas warming.',['A–B','B–C','D–E','E–F'],'heating'],
    ['bank-d-h4','phases','Which two heating-curve segments require latent heat rather than mcΔT?',1,'The horizontal plateaus B–C and D–E are phase changes.',['A–B and C–D','B–C and D–E','C–D and E–F','A–B and E–F'],'heating'],
    ['bank-d-h5','phases','During which heating-curve segment are liquid and gas both present?',2,'D–E is the vaporization plateau where liquid and gas coexist.',['B–C','C–D','D–E','E–F'],'heating'],
    ['bank-d-h6','phases','Which heating-curve segment would use the liquid specific heat in Q=mcΔT?',2,'C–D is the liquid warming region.',['A–B','B–C','C–D','D–E'],'heating'],
    ['bank-d-p1','phases','On the phase diagram, point X is the intersection of three phase boundaries. What is it?',0,'The intersection of all three coexistence curves is the triple point.',['triple point','critical point','normal boiling point','absolute zero'],'phase'],
    ['bank-d-p2','phases','On the phase diagram, the labeled point at the end of the liquid–gas boundary is the…',1,'The liquid–gas coexistence line terminates at the critical point.',['triple point','critical point','normal melting point','sublimation point'],'phase'],
    ['bank-d-p3','phases','On the phase diagram, which region is stable at relatively low pressure and high temperature?',2,'The gas region lies at low pressure/high temperature.',['solid','liquid','gas','solid + liquid only'],'phase'],
    ['bank-d-p4','phases','At fixed pressure, moving from the liquid region into the gas region corresponds to…',0,'Liquid → gas is vaporization.',['vaporization','freezing','deposition','fusion'],'phase'],
    ['bank-d-p5','phases','At fixed temperature, increasing pressure can move a substance from gas into liquid. That transition is…',1,'Gas → liquid is condensation.',['sublimation','condensation','fusion','vaporization'],'phase'],
    ['bank-d-p6','phases','Which phase-diagram feature marks where liquid and gas cease to be distinct phases?',3,'The critical point marks the end of the liquid–gas coexistence curve.',['normal boiling point','triple point','fusion line','critical point'],'phase'],
    ['bank-d-p7','phases','A point that lies exactly on a phase boundary represents…',2,'Two phases coexist in equilibrium on a boundary line.',['one unstable phase','three phases always','two phases in equilibrium','no material state'],'phase'],
    ['bank-d-p8','phases','What does crossing the solid–gas boundary from gas toward solid represent?',3,'Gas → solid is deposition.',['melting','sublimation','condensation','deposition'],'phase'],
    ['bank-d-v1','processes','On the P–V diagram, a vertical segment corresponds to which named process?',2,'Vertical on P–V means V is constant: isochoric.',['isothermal','isobaric','isochoric','adiabatic'],'pv'],
    ['bank-d-v2','processes','On the P–V diagram, a horizontal segment corresponds to which named process?',1,'Horizontal on P–V means P is constant: isobaric.',['isothermal','isobaric','isochoric','adiabatic'],'pv'],
    ['bank-d-v3','processes','For the clockwise P–V loop, the net work done by the gas equals…',0,'The net work equals the enclosed area and is positive for clockwise traversal.',['the enclosed area','the perimeter','zero','the maximum pressure'],'pv'],
    ['bank-d-v4','processes','If the same rectangular P–V path were traversed counterclockwise instead, the net work done by the gas would be…',1,'Reversing the traversal reverses the sign of the enclosed-area work.',['positive','negative','zero','always equal to Qh'],'pv'],
    ['bank-d-v5','processes','Over one complete P–V cycle, the change in internal energy is…',2,'Internal energy is a state function, so returning to the initial state gives ΔU=0.',['positive','negative','zero','equal to the enclosed area'],'pv'],
    ['bank-d-v6','processes','Which change would double the magnitude of the rectangular cycle’s net work if all else stayed fixed?',3,'Net cycle work is rectangle area ΔP·ΔV, so doubling either span doubles work.',['halve ΔP','halve ΔV','reverse direction only','double ΔV'],'pv']
  ];
  diagramExtras.forEach(([id,topic,prompt,answer,explanation,choices,diagram])=>add(id,topic,'diagram',2,prompt,answer,explanation,{choices,diagram}));

  const shortExtras = [
    ['bank-sh-s1','systems','Define an intensive property in one sentence.',['does not depend on amount'],'An intensive property does not depend on the amount or size of the system.',['amount']],
    ['bank-sh-s2','systems','Define an extensive property in one sentence.',['depends on amount'],'An extensive property scales with the amount of matter in the system.',['amount']],
    ['bank-sh-s3','systems','What is thermal equilibrium?',['no net heat flow'],'Thermal equilibrium means no net heat flow between systems in thermal contact.',['heat']],
    ['bank-sh-s4','systems','What SI unit is used for thermodynamic temperature?',['kelvin'],'The SI unit is the kelvin, symbol K.',['kelvin']],
    ['bank-sh-s5','systems','What is the Celsius temperature corresponding to 0 K?',['-273.15'],'0 K = −273.15 °C.',['273.15']],
    ['bank-sh-s6','systems','What is the relation between a 1 K interval and a 1 °C interval?',['same size'],'They have exactly the same interval size.',['same']],
    ['bank-sh-p1','phases','Define latent heat.',['phase change'],'Latent heat is energy absorbed or released during a phase change without the usual temperature change.',['phase']],
    ['bank-sh-p2','phases','What is the critical point?',['end of liquid gas boundary'],'It is the endpoint of the liquid–gas coexistence curve, above which liquid and gas are not distinct phases.',['liquid','gas']],
    ['bank-sh-p3','phases','What is the triple point?',['three phases coexist'],'It is the unique condition where solid, liquid, and gas coexist in equilibrium.',['solid','liquid','gas']],
    ['bank-sh-p4','phases','What is meant by the normal boiling point?',['boiling at 1 atm'],'The boiling temperature at 1 atm pressure.',['1','atm']],
    ['bank-sh-p5','phases','State the ideal gas law.',['PV=nRT'],'PV=nRT.',['p','v','n','r','t']],
    ['bank-sh-h1','heat','Define specific heat capacity.',['energy per mass per temperature'],'Energy required per unit mass per unit temperature change.',['mass','temperature']],
    ['bank-sh-h2','heat','Define heat capacity.',['energy per temperature'],'Energy required to change an entire object’s temperature by one degree.',['temperature']],
    ['bank-sh-h3','heat','What is heat flux?',['power per area'],'Heat-transfer rate per unit area.',['area']],
    ['bank-sh-h4','heat','Which heat-transfer mode is bulk fluid motion?',['convection'],'Convection.',['convection']],
    ['bank-sh-h5','heat','Which heat-transfer mode does not require matter?',['radiation'],'Radiation.',['radiation']],
    ['bank-sh-h6','heat','Write the steady one-dimensional slab conduction relation.',['kAΔT/L'],'P=kAΔT/L.',['k','a','l']],
    ['bank-sh-t1','processes','What does isothermal mean?',['constant temperature'],'Constant temperature.',['temperature']],
    ['bank-sh-t2','processes','What does isobaric mean?',['constant pressure'],'Constant pressure.',['pressure']],
    ['bank-sh-t3','processes','What does isochoric mean?',['constant volume'],'Constant volume.',['volume']],
    ['bank-sh-t4','processes','What does adiabatic mean?',['no heat transfer'],'No heat transfer across the boundary, Q=0.',['heat']],
    ['bank-sh-t5','processes','State the first law using the sign convention where W is work done by the system.',['ΔU=Q-W'],'ΔU=Q−W.',['u','q','w']],
    ['bank-sh-r1','radiation','What is radiant exitance?',['power per unit area'],'Thermal-radiation power emitted per unit surface area.',['power','area']],
    ['bank-sh-r2','radiation','What is the emissivity of an ideal blackbody?',['1'],'ε=1.',['1']],
    ['bank-sh-r3','radiation','State the Stefan–Boltzmann law for radiant exitance of a gray surface.',['εσT^4'],'M=εσT⁴.',['sigma','t']],
    ['bank-sh-r4','radiation','State one competition-appropriate form of the third law.',['entropy perfect crystal approaches zero'],'As T→0 K, the entropy of a perfect crystal approaches a constant conventionally taken as zero.',['entropy','zero']],
    ['bank-sh-e1','entropy','Is entropy a state function or a path function?',['state function'],'Entropy is a state function.',['state']],
    ['bank-sh-e2','entropy','State the reversible isothermal entropy-change relation.',['Qrev/T'],'ΔS=Qrev/T.',['q','t']],
    ['bank-sh-e3','entropy','Define enthalpy in terms of U, P, and V.',['H=U+PV'],'H=U+PV.',['u','p','v']],
    ['bank-sh-e4','entropy','At constant pressure with only PV work, what heat quantity equals ΔH?',['qp'],'qp=ΔH.',['q']]
  ];
  shortExtras.forEach(([id,topic,prompt,answer,explanation,keywords])=>add(id,topic,'short',1,prompt,answer,explanation,{keywords}));

  return out;
})();
