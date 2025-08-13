---
title: ''
exam: GATE-EE
exam_year: 2025
section: EE
tags: []
updated: '2025-08-13'
difficulty: ''
type: syllabus_pattern
pattern:
  sections: []
  duration_minutes: 0
  marking_scheme: ''
syllabus:
  topics: []
---

# GATE 2025 Electrical Engineering (EE) – Syllabus, Pattern & AI-Ingestion Summary

## 📘 Exam Pattern Overview

| Parameter                  | Details                                                                 |
|---------------------------|-------------------------------------------------------------------------|
| **Exam Mode**             | Computer-Based Test (CBT)                                               |
| **Duration**              | 3 hours (180 minutes)                                                   |
| **Total Questions**       | 65 (10 GA + 55 EE-related)                                              |
| **Total Marks**           | 100                                                                     |
| **Question Types**        | MCQ (–ve marking), MSQ (no –ve marking), NAT (no –ve marking)           |
| **Marking Scheme**        | ✔ 1 or 2 marks per question<br/>✘ –1/3 for 1-mark MCQ, –2/3 for 2-mark MCQ |
| **Medium**                | English                                                                 |
| **Virtual Calculator**    | Provided during exam                                                    |

---

## ✅ Sectional Weightage

| Section                     | Approx. Weight (%) | Marks (Typical) |
|-----------------------------|--------------------|-----------------|
| **General Aptitude (GA)**   | 15%                | 15              |
| **Engineering Mathematics** | 13%                | 13              |
| **Core EE Subjects**        | 72%                | 72              |

---

## 📚 Core Subjects – Topic-Wise Syllabus & Weightage Map

### 1. **Engineering Mathematics** – [13 Marks]  
[High-Yield][All Levels]

| Topic                      | Key Subtopics                                                |
|---------------------------|--------------------------------------------------------------|
| Linear Algebra            | Matrix operations, Eigenvalues, Solutions of linear systems |
| Calculus                  | Limits, Differentiation, Maxima/Minima                       |
| Differential Equations    | First-order & Linear Differential Equations                 |
| Complex Variables         | Cauchy-Riemann, Line integrals, Cauchy's theorem             |
| Probability & Statistics  | Mean, variance, distributions                                |
| Fourier & Laplace Transforms | Properties, applications in EE systems                     |
| Numerical Methods         | Newton-Raphson, Numerical differentiation/integration        |

#### Sample Questions:
1. [Easy] Find the eigenvalue of matrix [[2, 1], [1, 2]]
2. [Moderate] Solve dy/dx + y = e^x
3. [Moderate] Compute the Laplace Transform of f(t) = sin(2t)

---

### 2. **Electric Circuits** – [8–10 Marks]

| Topic                         | Key Subtopics                                                   |
|------------------------------|------------------------------------------------------------------|
| Basic Concepts               | Voltage/current sources, KVL, KCL                               |
| Network Theorems             | Superposition, Thevenin & Norton                                |
| Transient Analysis           | RC, RL, RLC (DC excitation)                                     |
| Sinusoidal Steady-State      | Phasor diagrams, impedance, resonance                           |
| 3-Phase Circuits             | Balanced/unbalanced, power calculations                         |

#### Sample Questions:
1. [Moderate] Find the current using Thevenin’s theorem
2. [High-Yield] Resonant frequency of an RLC series circuit?
3. [NAT] Time constant of an RC circuit with 1Ω and 1F?

---

### 3. **Electromagnetic Fields** – [6–8 Marks]

| Topic                         | Key Subtopics                                                   |
|------------------------------|------------------------------------------------------------------|
| Electrostatics               | Gauss' Law, electric field & potential                          |
| Magnetostatics               | Biot–Savart, Ampere’s law                                       |
| Maxwell’s Equations          | Integral and differential forms                                 |
| EM Waves                     | Propagation in dielectric/conducting media, Poynting vector     |

#### Sample Questions:
1. [High-Yield] Calculate flux through a spherical surface using Gauss' law
2. [Moderate] Find magnetic field using Biot–Savart for infinite wire
3. [Advanced] Write Maxwell's equations in differential form

---

### 4. **Signals & Systems** – [4–5 Marks]

| Topic                     | Key Subtopics                                               |
|--------------------------|-------------------------------------------------------------|
| Continuous/Discrete Signals | Elementary signals, transformations                     |
| LTI Systems               | Impulse response, convolution, stability                   |
| Fourier Series/Transform | Spectral analysis, bandwidth                               |
| Laplace & Z-Transform    | Pole-zero concepts, ROC, inverse transforms                |

#### Sample Questions:
1. [Moderate] Convolve two rectangular pulses
2. [NAT] Find the Laplace Transform of e^(–t)u(t)
3. [Advanced] Determine if system h(t) = e^(–2t)u(t) is BIBO stable

---

### 5. **Electrical Machines** – [10–12 Marks]  
[High-Yield][Scenario: Weak in Machines → Focus on DC & Transformers First]

| Topic                     | Key Subtopics                                                |
|--------------------------|--------------------------------------------------------------|
| Transformers             | EMF equation, equivalent circuit, efficiency, voltage regulation |
| DC Machines              | Types, EMF equations, torque-speed relation                  |
| Induction Machines       | Slip, torque equations, equivalent model                     |
| Synchronous Machines     | Voltage regulation, power-angle curve                        |

#### Sample Questions:
1. [Moderate] Define slip for a 4-pole 50 Hz induction motor at 1440 rpm
2. [High-Yield] EMF equation of a transformer?
3. [Advanced] V-curve in synchronous motor operation—what does it show?

---

### 6. **Power Systems** – [10–12 Marks]

| Topic                        | Key Subtopics                                              |
|-----------------------------|------------------------------------------------------------|
| Power Generation            | Thermal, hydro, nuclear overview                          |
| Transmission Lines          | Parameters, corona, SAG, ferranti effect                  |
| Per Unit System             | Base quantities, system reductions                        |
| Fault Analysis              | Symmetrical & unsymmetrical faults                        |
| Stability & Protection      | Swing equation, circuit breakers, relay characteristics   |

#### Sample Questions:
1. [Easy] Explain Ferranti effect in transmission lines
2. [Moderate] What’s the per unit impedance for a base of 100 MVA, 11 kV?
3. [Advanced] Calculate SC current for a 3-phase fault at generator terminals

---

### 7. **Power Electronics** – [7–9 Marks]

| Topic                     | Key Subtopics                                                |
|--------------------------|--------------------------------------------------------------|
| Semiconductor Devices    | Diodes, SCRs, MOSFETs, IGBTs                                |
| Converters               | AC–DC (controlled), DC–DC, DC–AC, PWM inverters            |
| Commutation Techniques   | Natural & forced                                             |
| Applications             | SMPS, UPS, drives                                            |

#### Sample Questions:
1. [Basic] Thyristor remains ON until...?
2. [Moderate] Output voltage of a single-phase full converter?
3. [NAT] Duty cycle required for buck converter reducing 24V to 12V output?

---

### 8. **Control Systems** – [8–10 Marks]  
[High-Yield][Scenario: Weak in Bode/Root Locus → Focus on frequency analysis first]

| Topic                     | Key Subtopics                                          |
|--------------------------|--------------------------------------------------------|
| Time Domain Analysis      | Step, ramp inputs, second-order systems                |
| Frequency Domain          | Bode plots, gain/phase margin                         |
| Stability                 | Routh–Hurwitz, Nyquist                                |
| Controllers               | PID, compensators                                     |
| State Space               | State variables, controllability/observability        |

#### Sample Questions:
1. [Moderate] Damping ratio of 2nd-order system with overshoot 16%?
2. [High-Yield] What phase margin ensures system stability?
3. [NAT] Find closed-loop poles from given transfer function

---

### 9. **Analog & Digital Electronics** – [4–5 Marks]

| Topic                     | Key Subtopics                                           |
|--------------------------|----------------------------------------------------------|
| Diodes / BJTs / FETs     | Characteristics, biasing, applications                   |
| Op-Amps                  | Inverting, non-inverting, active filters                 |
| Logic Gates & Flip-Flops | JK, SR, D, Counters, timing diagrams                     |
| ADC/DAC                  | Concepts, resolutions, applications                      |

#### Sample Questions:
1. [Basic] Find output voltage of op-amp with gain –10 and input 0.5V
2. [Moderate] Flip-flop toggles on...?
3. [NAT] Number of comparators needed for 3-bit flash ADC?

---

## 🔄 GATE EE Question Type Summary

| Question Type | Description                           | Marking Scheme                             |
|---------------|---------------------------------------|--------------------------------------------|
| MCQ           | Single answer, negative marking       | –1/3 (1-mark), –2/3 (2-mark) for wrong      |
| MSQ           | Multiple correct, no negative         | No partial marking or negative              |
| NAT           | Numerical answer type (fill-in)       | No negative; precision upto 2-3 decimals    |

---

## 🔍 Recent Trends & Observations
- **More NATs & MSQs**: ~35–45% of paper  
[Scenario: Low accuracy → Focus practice on NAT/MSQ formats]

- **Fewer formula-cramming MCQs**  
- **Computation-based questions** in Machines, Math, EMF

- **Digital & Analog Electronics** maintaining ~4–5 marks only  
[Low Priority vs. Power Systems]

- [High-Yield Subjects]:  
  - Power Systems, Machines, Circuits, Control Systems  
  - Math for non-tech boosts → worth focus

---

## ✅ AI Personalization Ready Tags

- [High-Yield]  
- [Weak Area Focus]  
- [Beginner], [Intermediate], [Advanced]  
- [Scenario: Weak in Control → Routh/Nyquist → Solve 5 questions from past 5 years]  
- [Scenario: Last 30 Days → Focus on formulas + 2 mocks/week + error log revision]

---

## 🔚 Final Notes for AI Mentor Integration

- Enable topic-level diagnostic and feedback loop:  
  > "You've attempted 12 Power Systems NATs → Your weak areas: Transient Stability & PU System."

- Smart plan suggestion:  
  > “Target Machines + Circuits this week. Together = 25+ marks history.”

- Mock analytics tagging by subject:  
  > “3 repeated errors in EMF → Recommend targeted revision pack + booster quiz.”
