---
title: ''
exam: SSC-JE-CE
exam_year: 2025
section: CE
tags: []
updated: '2025-08-13'
difficulty: ''
type: miqs
items: []
---

# SSC JE Civil Engineering – Most Important Questions (MIQs)
[Beginner] [Intermediate] [Advanced] [College Student] [Working Professional] [Repeater] [High-Yield] [Weak Area Focus] [Scenario: Weak in RCC + 8 weeks → 45 min beams daily + 20 PYQs/week]

## How to Use This MIQ Bank
- Do 10–15 MIQs/day topic‑wise; log mistakes; revisit on Day 3/7/14.
- Mix 70% high‑yield (RCC, SOM, Soil, Fluid/Open‑Channel, Transportation) with 30% breadth (Surveying, Env., Estimation).
- Solve in 2–3 minutes (MCQ tempo), then check the hint/answer; tag errors as Concept / Formula / Misread / Speed.

## Recent Trend Insights (2019–2024)
- Weightage hotspots (technical): RCC + SOM/Structural (20–28%), Fluid Mechanics + Hydraulics/Open Channel (16–22%), Soil & Foundation (12–16%), Transportation (8–12%), Surveying (8–12%), Environmental (8–12%), Building Materials/Concrete Tech + Estimation/CPM (8–12%).
- Question types trending:
  - RCC: development length, singly reinforced beams, shear checks, one‑way slab depth; quick code-table picks (IS 456).
  - SOM/Structural: bending/torsion, Mohr’s circle, Euler buckling, thin cylinder stresses, simple deflection.
  - Fluids/Hydraulics: manometry, orifice/venturi, pipe losses (Darcy–Weisbach), critical/normal depth (Manning).
  - Soil: Atterberg/USCS, compaction, permeability tests, consolidation t50, Rankine earth pressure, Terzaghi BC.
  - Transportation: SSD, super‑elevation, transition length, traffic flow, flexible pavement (CBR), bitumen tests.
  - Surveying: curvature/refraction correction, tacheometry (k & C), traverse (Bowditch), coordinate areas.
  - Environmental: BOD kinetics, filtration/disinfection, sedimentation types, sewer design (Manning).
  - Estimation/CPM: BBS/steel weight, rate analysis basics, CPM floats, PERT time/variance.

---

## MIQ Bank by Subject

### Subject: Strength of Materials (SOM) & Theory of Structures
Scope & Trend
- 10–14% of paper; dominant on bending/torsion, principal stresses, deflection, columns.

| Topic | Question | Difficulty/Tags | Importance/Trend Note | Hint/Answer |
|---|---|---|---|---|
| Bending stress | A simply supported beam L=6 m with UDL w=20 kN/m; section b=200 mm, d=400 mm. Find max bending stress. | [Moderate][High‑Yield] | Classic UDL + rectangular section; formula recall + unit handling. | Mmax = wL²/8 = 90 kN·m; I = bd³/12 = 1.067×10⁹ mm⁴; y=200 mm; σ = My/I ≈ 16.9 MPa. |
| Shear stress | Beam carries V=60 kN at a section; rectangle 250×400 mm. Find τmax. | [Easy][High‑Yield] | Rectangular τmax = 1.5 V/A repeats. | A=100,000 mm²; τavg=0.6 MPa; τmax=0.9 MPa. |
| Torsion | Solid shaft, d=50 mm, T=2 kN·m. Find τmax. | [Easy] | Quick torsion pick. | τmax = 16T/(πd³) ≈ 81.6 MPa. |
| Principal stresses | σx=80 MPa, σy=−20 MPa, τxy=30 MPa. Find principal stresses. | [Moderate] | Mohr’s circle staple. | σ1,2 = 30 ± √(50²+30²) ⇒ σ1≈88.3 MPa, σ2≈−28.3 MPa. |
| Beam deflection | Simply supported beam with central P=40 kN, L=4 m, E=200 GPa, I=8×10⁸ mm⁴. Find δmax. | [Moderate] | Plug‑in favorite. | δ = PL³/(48EI) ≈ 0.333 mm. |
| Columns (Euler) | Slender column, pinned‑pinned, L=3 m, E=200 GPa, I=8×10⁶ mm⁴. Find Pcr. | [Moderate][High‑Yield] | Euler buckling recurs. | Pcr=π²EI/L² ≈ 1.75 MN (≈1750 kN). |
| Combined stress | Circular bar under axial P=100 kN + torque T=3 kN·m, d=60 mm: find τmax. | [Advanced] | Combo load reasoning. | τtor=16T/(πd³)≈70.7 MPa; σ=4P/(πd²)≈35.4 MPa; τmax=√(τ²+(σ/2)²)≈72.9 MPa. |
| SFD/BMD basics | Cantilever with tip load P. Sketch SFD/BMD and locate Mmax. | [Easy] | Frequent visuals in MCQs. | V = −P (const.); M linear 0→−PL at fixed end; Mmax at fixed end. |
| Energy method | Deflection at free end of a cantilever with tip P using energy method equals? | [Moderate] | Theory check. | δ = PL³/(3EI). |
| Thin cylinders | Thin cylinder d=1 m, t=10 mm, p=2 MPa: find hoop stress. | [Easy] | Repeated formula. | σh = pd/(2t)=100 MPa. |

[Scenario: Weak in Mohr’s circle → 15 min/day circle drawing + 5 PYQs; 2 weeks]

---

### Subject: Reinforced Cement Concrete (RCC) & Concrete Technology
Scope & Trend
- 8–12% RCC; frequent: development length, singly reinforced beams, shear checks, one‑way slab depth; plus concrete tests.

| Topic | Question | Difficulty/Tags | Importance/Trend Note | Hint/Answer |
|---|---|---|---|---|
| Development length | Fe500 bar, φ=16 mm in tension; M20 concrete. Find Ld. | [Easy][High‑Yield] | Very frequent quick calc. | τbd(M20)=1.2; deformed ×1.6 ⇒ 1.92; σs≈0.87fy=435; Ld=φσs/(4τbd)= (16×435)/7.68≈906 mm (≈56.6φ). |
| Singly‑reinforced beam | b=250 mm, d=450 mm, M20, Fe415; factored M_u=120 kN·m. Estimate A_s. | [Moderate][High‑Yield] | Fast design estimate. | Use M_u=0.87fy A_s (d−0.42x_u), x_u≈0.48d for Fe415; A_s≈920–950 mm² (trial). |
| Shear in beams | Compute τv for V=140 kN, b=300 mm, d=500 mm. | [Easy] | τv vs τc check common. | τv = V/(bd)=0.933 MPa; compare with τc (IS table). |
| One‑way slab depth | Span 3.5 m, simply supported; Fe415. Estimate effective depth by span/depth. | [Easy] | Thumb rule MCQ. | Basic L/d ≈ 20 ⇒ d ≈ 175 mm (before modification factors). |
| Column basics | Short axially loaded tied column, M20, Fe415; Pu=1500 kN; 2% steel. Find gross size. | [Advanced] | Quick capacity pick. | Pu ≈ (0.4fck Ag + 0.67fy Asc) ⇒ (8 + 5.56)Ag ⇒ Ag ≈ 1.11×10⁵ mm² ⇒ ~340×340 mm. |
| Workability tests | Which is more precise on site for low workability: slump, compaction factor, Vee‑Bee, flow? | [Easy] | Standards recall. | Compaction factor (low‑medium); Vee‑Bee for very low; flow table high workability. |
| w/c ratio | As w/c increases, strength and permeability change how? | [Easy] | Theory staple. | Strength ↓, permeability ↑ (Abram’s law). |
| Durability | M35, severe exposure: trend for max w/c and min cement? | [Moderate] | Code‑table concept. | Typically w/c ≤ 0.45; min cement ~ 340 kg/m³ (check latest IS 456 table). |
| Anchorage | Standard hook in tension for plain bars equals? | [Easy] | Quick recall. | 9φ (IS 2502); hooks improve anchorage length. |

[Scenario: Weak in shear → 30 min τv vs τc drills + table lookups; 10 PYQs Sat]

---

### Subject: Building Materials & Construction
Scope & Trend
- 6–10%; cement/aggregate tests, bricks, timber, concrete properties, masonry, finishes.

| Topic | Question | Difficulty/Tags | Importance/Trend Note | Hint/Answer |
|---|---|---|---|---|
| Cement tests | Initial setting time of OPC at 27±2°C? | [Easy][High‑Yield] | IS:4031 recall. | ≥ 30 minutes. |
| Fineness modulus | FM of combined aggregate significance? | [Easy] | Mix design link. | Indicates average particle size; affects workability/strength. |
| Brick quality | Water absorption (24 h) for good building bricks? | [Easy] | Standard limit. | ≤ 20% by weight (class dependent). |
| Timber | Purpose of seasoning timber? | [Easy] | Conceptual. | Removes moisture → ↑ strength/stability, ↓ shrinkage/decay. |
| Pozzolana | Fly ash effect on concrete? | [Easy] | Durability trend. | Improves long‑term strength, workability; ↓ heat of hydration. |
| Plastering | Common mortar mix for 12 mm internal plaster? | [Easy] | Site practice. | 1:4 to 1:6; widely 1:4. |
| Admixtures | Superplasticizer primarily affects? | [Easy] | Quick pick. | Workability (or reduces water demand at given slump). |

---

### Subject: Fluid Mechanics & Hydraulics (incl. Open Channel, Pumps/Turbines)
Scope & Trend
- 16–22%; manometry, Bernoulli apps, orifice/venturi, pipe flow (f, head loss), critical/normal depth, Manning, pumps/turbines basics.

| Topic | Question | Difficulty/Tags | Importance/Trend Note | Hint/Answer |
|---|---|---|---|---|
| Manometer | A U‑tube with mercury measures pressure difference for water; Δh=0.2 m. Find Δp. | [Easy][High‑Yield] | Density contrast pick. | If both sides water: Δp=(ρHg−ρw)gΔh ≈ 24.7 kPa; if referenced to vacuum: ρHg g Δh ≈ 26.7 kPa. |
| Bernoulli | z1=z2; V1=2 m/s, V2=4 m/s (same fluid). p1−p2=? | [Easy] | Velocity head diff. | Δp = 0.5ρ(V2²−V1²) = 6000 Pa (ρ=1000). |
| Venturimeter | D1=150 mm, D2=75 mm, Δh=0.5 m Hg; Cd=0.98. Find Q. | [Advanced][High‑Yield] | Classic exam calc. | Δp≈(ρHg−ρw)gΔh≈61.8 kPa; Q ≈ Cd A1A2/√(A1²−A2²) √(2Δp/ρ) ≈ 0.050 m³/s. |
| Orifice | Sharp edged orifice d=30 mm, H=1.6 m, Cd=0.62. Discharge? | [Moderate] | Straight plug‑in. | Q = Cd a √(2gH) ≈ 0.00246 m³/s. |
| Pipe flow | 300 m pipe, D=200 mm, f=0.02, V=2 m/s. hf=? | [Easy][High‑Yield] | Darcy–Weisbach staple. | hf = f L/D × V²/(2g) ≈ 6.12 m. |
| Series pipes | Two pipes in series; equivalent diameter for same Q, f same? | [Moderate] | Recurs. | For same hf: (L/D⁵)_eq = Σ(L_i/D_i⁵). |
| Critical depth | Rectangular channel, discharge per width q=2 m²/s. Find y_c. | [Easy][High‑Yield] | Very frequent. | y_c = (q²/g)^(1/3) ≈ 0.74 m. |
| Normal depth | Rectangular/trapezoidal, uniform flow (Manning). | [Advanced] | Option‑trial common. | Use V=(1/n) R^(2/3) S^(1/2); Q=AV; iterate options. |
| Pumps | NPSH significance? | [Easy] | Theory. | NPSH_avail ≥ NPSH_req to avoid cavitation. |
| Turbines | Specific speed definition and type. | [Moderate] | Concept. | Ns=N√P/H^(5/4); Pelton low, Francis mid, Kaplan high. |

[Scenario: Working Professional + limited time → Do manometry/pipe/open‑channel first; solve 20 high‑yield numericals/week]

---

### Subject: Hydrology & Irrigation Engineering
Scope & Trend
- 8–12%; rational method, infiltration/runoff, hydrograph basics, duty/delta, canal design.

| Topic | Question | Difficulty/Tags | Importance/Trend Note | Hint/Answer |
|---|---|---|---|---|
| Rational method | Catchment 2 km², C=0.6, I=50 mm/h. Peak runoff Q=? | [Easy][High‑Yield] | “0.278CIA” favorite. | Q = 0.278×C×I×A ≈ 16.68 m³/s. |
| Infiltration | Horton’s equation form? | [Easy] | Theory recurs. | f_t = f_c + (f_0−f_c) e^(−kt). |
| UH basics | 1‑hr unit hydrograph concept tested by? | [Easy] | Concept MCQ. | Direct runoff per unit depth of effective rainfall over 1 hr. |
| Flood frequency | Gumbel method key relation? | [Moderate] | Basic formula. | X_T = x̄ + K σ; K via y=−ln[−ln(1−1/T)]. |
| Duty–Delta | Given D (ha/cumec), base period B (days), find Δ (m). | [Easy][High‑Yield] | Regular. | Δ = 8.64 B / D. |
| Canal design | Lacey/Kennedy core idea? | [Easy] | Theory recall. | Regime depends on silt grade (f) and Q; memorize forms like P≈4.75√Q (SI), R≈5V²/f. |
| Irrigation efficiency | Field application efficiency? | [Easy] | Formula pick. | η_a = (Water stored)/(Water delivered) × 100. |

---

### Subject: Soil Mechanics & Foundation Engineering
Scope & Trend
- 12–16%; Atterberg, USCS, compaction, permeability, consolidation, earth pressure, bearing capacity.

| Topic | Question | Difficulty/Tags | Importance/Trend Note | Hint/Answer |
|---|---|---|---|---|
| Atterberg/USCS | LL=60%, PL=25%; PI=? Class if fines>50%? | [Easy][High‑Yield] | Fast pick. | PI=35%; on A‑line high plasticity clay → CH. |
| Compaction | OMC increases when? | [Easy] | Concept. | ↑ fines/clay, ↓ compactive effort → OMC shifts higher, γ_dmax lower. |
| Permeability | Falling head test: compute k. | [Moderate] | Formula repeat. | k = (aL/A t) ln(h1/h2). |
| Consolidation | T50=0.197; H_d=20 mm; c_v=1×10⁻³ cm²/s. Find t50. | [Advanced] | Unit care. | t = T_v H_d² / c_v ≈ 788 s ≈ 13.1 min. |
| Earth pressure | Rankine active pressure at depth z (ϕ soil) equals? | [Easy][High‑Yield] | Core formula. | σ_a = K_a γ z; K_a=(1−sinϕ)/(1+sinϕ). |
| c‑ϕ backfill | Tension crack depth z₀ and σ_a with cohesion c? | [Moderate] | Variant recurs. | z₀=2c/(γ√K_a); σ_a(z)=K_aγz−2c√K_a (till z₀). |
| Bearing capacity | Terzaghi strip footing on c‑ϕ soil: q_u=? | [Moderate][High‑Yield] | Regular. | q_u = cN_c + γD_f N_q + 0.5 γ B N_γ (ϕ>0). |
| Plate load | Safe load correlation idea? | [Advanced] | Concept. | Settlement‑based; scale from plate to footing (Meyerhof/Terzaghi), apply FOS. |

---

### Subject: Transportation Engineering
Scope & Trend
- 8–12%; geometric design (SSD, e, transition), traffic flow, pavement (CBR), bitumen tests.

| Topic | Question | Difficulty/Tags | Importance/Trend Note | Hint/Answer |
|---|---|---|---|---|
| SSD | V=80 km/h, t=2.5 s, level road f=0.35. SSD=? | [Easy][High‑Yield] | Very frequent. | SSD = 0.278 V t + V²/(254 f) ≈ 127.6 m. |
| Super‑elevation | R=300 m, V=80 km/h; find e (no friction). | [Easy] | Quick calc. | e = V²/(225R) ≈ 0.095 (≈ 1 in 10.5). |
| Transition length | Using IRC comfort C=0.6 m/s³, V=80 km/h, R=300 m. | [Moderate] | Code‑based numeric. | L_s = 0.0215 V³/(C R) ≈ 61 m. |
| Traffic flow | Mean speed 60 km/h, density 30 veh/km → flow? | [Easy] | Fundamental diagram. | q = u×k = 1800 veh/h. |
| Bitumen | Softening point test and significance. | [Easy] | Theory. | Ring & Ball; indicates temperature susceptibility. |
| CBR | Subgrade CBR=6% → pavement thickness trend? | [Easy] | Design logic. | Lower CBR ⇒ thicker pavement. |
| Marshall | Stability vs flow indicate? | [Moderate] | Concept. | Stability = strength; Flow = plastic deformation at failure. |

---

### Subject: Surveying
Scope & Trend
- 8–12%; levelling corrections, tacheometry constants, traverse adjustment, coordinate areas.

| Topic | Question | Difficulty/Tags | Importance/Trend Note | Hint/Answer |
|---|---|---|---|---|
| Curvature + refraction | Combined correction (m) for sight distance d km? | [Easy][High‑Yield] | Must‑know number. | C_(c+r) ≈ 0.0673 d² (subtract from observed). |
| Tacheometry | Staff vertical, k=100, C=0; intercept s=1.5 m; horizontal sight. D=? | [Easy] | Staple. | D = k s + C = 150 m. |
| Theodolite | Why take face left/right? | [Easy] | Theory. | To eliminate instrumental errors (e.g., collimation). |
| Traverse | Bowditch rule adjusts what/how? | [Easy] | Frequent. | Adjusts latitudes/departures ∝ line length. |
| Area by coords | Compute polygon area by coordinates? | [Moderate] | Numerical. | A = ½ Σ(x_i y_{i+1} − x_{i+1} y_i). |
| Contours | Widely spaced contours indicate? | [Easy] | Concept. | Gentle slope; close contours = steep. |

---

### Subject: Environmental Engineering (Water Supply & Wastewater)
Scope & Trend
- 8–12%; BOD/COD, sedimentation/filtration, disinfection, sewer flow (Manning), design periods.

| Topic | Question | Difficulty/Tags | Importance/Trend Note | Hint/Answer |
|---|---|---|---|---|
| BOD kinetics | L₀=200 mg/L, k=0.23 day⁻¹ (20°C). BOD₅=? | [Moderate][High‑Yield] | Recurring calc. | BOD_t = L₀(1−e^(−kt)) ⇒ ≈ 136.8 mg/L. |
| Disinfection | Breakpoint chlorination ensures? | [Easy] | Theory. | Oxidizes NH₃/organics demand; leaves free Cl residual. |
| Filtration | Rapid sand filter typical rate? | [Easy] | Standard value. | 4–6 m³/m²·h (≈5). |
| Sedimentation | Type II settling involves? | [Easy] | Theory. | Flocculent particles, variable velocity; aggregation. |
| Sewer design | Design D for Q using Manning (n=0.013), S=0.001; ensure V≥0.8 m/s. | [Advanced] | Design + criteria. | V=(1/n) R^(2/3) S^(1/2); A=πD²/4; iterate options; pick first D meeting V≥0.8. |
| DO/BOD/COD | Relationship? | [Easy] | Concept. | COD ≥ BOD; TOC is carbon; BOD = biodegradable fraction. |

---

### Subject: Steel Structures
Scope & Trend
- 6–10%; tension members (net area, block shear), bolts/welds, simple beam/column behavior, effective length.

| Topic | Question | Difficulty/Tags | Importance/Trend Note | Hint/Answer |
|---|---|---|---|---|
| Net area | Plate 120×10 with two 18 mm holes in one line (ϕ=16). Net area? | [Easy][High‑Yield] | Tension member staple. | A_n = bt − n d_h t = 1200 − 360 = 840 mm². |
| Block shear | Failure path includes what? | [Moderate] | Concept. | Tension on one plane + shear on perpendicular planes around bolts. |
| Bolted joints | Bearing‑type joint governing modes? | [Easy] | Theory. | Bolt shear, bearing of bolt/plate, tear‑out/block shear. |
| Fillet weld | Design via throat thickness? | [Easy] | Quick recall. | t_throat = 0.7 s (s=leg). |
| Effective length | Column in sway frame → K values? | [Moderate] | Concept. | Sway increases K>1; use alignment charts (typ. 1.5–2.0). |

---

### Subject: Estimation, Costing & Construction Management (CPM/PERT)
Scope & Trend
- 6–10%; BBS/steel weight, earthwork, rates basics, CPM floats, PERT probability.

| Topic | Question | Difficulty/Tags | Importance/Trend Note | Hint/Answer |
|---|---|---|---|---|
| Steel weight | Weight (kg/m) of 16 mm bar? | [Easy][High‑Yield] | Fast recall. | d²/162 = 1.58 kg/m. |
| Earthwork | Volume by trapezoidal rule (end areas A1, A2, spacing L). | [Easy] | Formula. | V = L (A1 + A2)/2. |
| Brickwork | Modular bricks/m³ of brickwork (10 mm joints)? | [Moderate] | Repeats. | ≈ 500 bricks/m³. |
| CPM | Free float of activity i–j? | [Moderate] | Recall. | FF = min(ES_successors) − EF_ij. |
| PERT | Expected time t_e and variance σ²? | [Easy][High‑Yield] | Always asked. | t_e=(a+4m+b)/6; σ²=((b−a)/6)². |
| Crashing | Cost slope formula? | [Easy] | Formula. | (Crash cost − Normal cost)/(Normal time − Crash time). |

---

### Subject: General Intelligence & Reasoning (Paper‑1)
Scope & Trend
- 50 marks; analogy, series, syllogism, coding‑decoding, blood relation, direction, Venns, puzzles.

| Topic | Question | Difficulty/Tags | Importance/Trend Note | Hint/Answer |
|---|---|---|---|---|
| Number series | 3, 9, 27, ?, 243 | [Easy][High‑Yield] | GP powers. | ×3 ⇒ missing 81. |
| Alphabet series | C, F, J, O, ? | [Easy] | Gaps +2,+3,+4… | Next +5 ⇒ T. |
| Syllogism | All A are B; Some B are C; Which is true? | [Moderate] | Venn logic. | “Some C are B” true; “Some A are C” not guaranteed. |
| Coding | If CAT=3120 (C=3,A=1,T=20), BED=? | [Easy] | Letter‑number map. | 254. |
| Direction | 5N, 3E, 4S → distance from start? | [Easy] | Vector. | √(1²+3²)=√10. |
| Puzzle | Linear seating (small). | [Moderate] | 3–5Q sets. | Draw slots; place fixed; propagate constraints. |

---

### Subject: General Awareness (Paper‑1)
Scope & Trend
- 50 marks; current affairs (1 year), Indian polity/economy, science basics, environment, infra/Govt schemes.

| Topic | Question | Difficulty/Tags | Importance/Trend Note | Hint/Answer |
|---|---|---|---|---|
| Polity | Fundamental Duties are in which Part? | [Easy] | High‑frequency static. | Part IV‑A. |
| Economy | CPI is published by? | [Easy] | Static/current mix. | NSO (MoSPI). |
| Science | pH of neutral water at 25°C? | [Easy][High‑Yield] | Basics. | 7.0 |
| Env./Infra | Jal Jeevan Mission target? | [Moderate] | Schemes. | Functional household tap connections (55 lpcd). |
| Geography | Longest river in India (within India)? | [Easy] | Static geo. | Ganga. |
| Current | Union Budget trend on infra capex? | [Moderate] | CA emphasis. | Rising capex; memorize latest % for exam year. |

---

## Scenario Variations
- [Scenario: Beginner + High‑Yield First] Start with RCC, SOM, Fluid/Open‑Channel, Soil; 60 MIQs/week; build a formula deck; 1 sectional mock/2 weeks.
- [Scenario: Working Professional + 2 hours/day] Weekdays 8–10 MIQs (rotate 2 subjects); weekends 3×40‑min deep blocks; prioritize RCC/Fluids/Soil.
- [Scenario: Repeater + Weak in Soil] 40% Soil (perm./consol./BC), 40% RCC/SOM mixed numericals, 20% Survey/Env.; 2 full Paper‑1 mocks/month.

## Checkpoints & Scorecard
- Week 1: Formula deck for 6 core subjects; ≥ 60 MIQs; accuracy ≥ 50%.
- Week 3: 300+ MIQs total; accuracy ≥ 60% in RCC/Fluids/Soil; error log > 80 items categorized.
- Week 6: 600+ MIQs; full Paper‑1 mock ≥ 120/200; time balance acceptable.
- Final 2 weeks: Mock variance ≤ ±5%; pivot to weak‑area MIQs and mixed sets.

## Quick Reference
- Error Log & Revision
  - Fields: Subject, Topic, Error type, Root cause, Fix, New example, Review dates.
  - Spaced repetition: D1–D3–D7–D14–D30; retire after 2 clean passes.
- High‑Yield Topics Summary
  - RCC: Ld, singly‑reinforced beams, shear checks.
  - SOM/Structural: bending/torsion, Mohr’s circle, Euler, deflections.
  - Fluids/Hydraulics: manometry, pipe losses, orifice/venturi, critical/normal depth.
  - Soil: Atterberg/USCS, permeability tests, consolidation t50, Rankine/BC.
  - Transportation: SSD, e, transition length, traffic flow.
  - Surveying: curvature/refraction, tacheo constants, traverse balancing.
  - Environmental: BOD kinetics, filtration/disinfection, Manning in sewers.
- Mock Frequency & Burnout Tips
  - Paper‑1: 1 sectional mock/week; last month add 1 full mock/week.
  - Paper‑2 tech: weekly mixed sets (50–100 Q); last month add 1 full tech mock/week.
  - Burnout guardrails: 50–10 focus cycles; 1 rest evening/week; rotate subjects; hydrate and micro‑stretch.

Use filters like Subject → Topic → [High‑Yield]/Difficulty to auto‑generate targeted practice lists. Example: [Scenario: Weak in Soil + 30 days → 20 MIQs/day from Soil + 10 mixed RCC/SOM].
