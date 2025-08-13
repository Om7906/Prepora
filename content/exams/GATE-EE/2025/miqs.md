---
title: ''
exam: GATE-EE
exam_year: 2025
section: EE
tags: []
updated: '2025-08-13'
difficulty: ''
type: miqs
items: []
---

# GATE EE – Most Important Questions (MIQs)

## Overview
[High-Yield][Beginner][Intermediate][Advanced]  
Curated MIQs across all GATE EE subjects. Each question includes topic reference, difficulty, and contextual advice. Based on GATE trends over the last 10+ years.

---

## 1. Engineering Mathematics

### A. Linear Algebra
- **Question**: Find eigenvalues of matrix [[2,1],[1,2]].  
  [Easy][High-Yield]  
  [Scenario: Beginner → Practice 10 similar 2x2 cases first]  
  **Trend**: 1–2 linear algebra questions appear every year.

### B. Differential Equations
- **Question**: Solve dy/dx + y = e^x  
  [Moderate][High-Yield]  
  **Trend**: Linear ODEs are consistent NATs (1 mark).

### C. Laplace Transforms
- **Question**: Find Laplace Transform of sin(3t)  
  [Easy][High-Yield]  
  Formula-based; most models repeat.

---

## 2. Electric Circuits

### A. Thevenin’s Theorem
- **Question**: Find Thevenin resistance across terminals in a 3-resistor network.  
  [Moderate][High-Yield]  
  [Scenario: Weak in Theorems → Practice 5 unique circuit configs]  
  **Trend**: 2 or more questions combined from Theorems + Transients.

### B. RLC Transient
- **Question**: What is the time constant in a series RC circuit with R=10Ω and C=1F?  
  [Easy][High-Yield]  
  **Answer**: τ = RC = 10s  
  **Trend**: RLC transient-based questions in 70% of papers.

### C. Sinusoidal Analysis
- **Question**: In an RLC circuit, if XL = XC, what is the impedance?  
  [Easy]  
  **Answer**: Pure Resistive.  
  **Trend**: Phasor-based NATs are common.

---

## 3. Electromagnetic Fields (EMF)

### A. Gauss's Law
- **Question**: Calculate electric flux through a closed spherical surface enclosing charge Q.  
  [Easy][High-Yield]  
  **Answer**: Φ = Q/ε₀  
  **Trend**: Almost every year has one field/equation-based EMF question.

### B. Wave Propagation
- **Question**: What's the velocity of propagation in a dielectric medium with εr=4?  
  [Moderate]  
  **Answer**: v = c/√εr = 3×10^8 / 2 = 1.5×10^8 m/s  
  [Scenario: Weak in wave theory → Revise core formulas + 3 PYQs]

---

## 4. Signals & Systems

### A. Convolution
- **Question**: Convolve x(t) = u(t), h(t) = e^(–t)u(t)  
  [Moderate][High-Yield]  
  **Trend**: Manual convolution appears frequently in 1-mark NAT format.

### B. Laplace Domain Analysis
- **Question**: Determine final value using Laplace Final Value Theorem  
  **Answer**: lim(s→0) sF(s)  
  [Scenario: Beginner → Practice with stable/unstable examples]

---

## 5. Electrical Machines

### A. Slip in Induction Motor
- **Question**: Rotor speed in 4-pole, 50 Hz IM at full-load slip of 4%?  
  [Easy][High-Yield]  
  **Answer**: Ns = 1500 rpm → Nr = 1440 rpm

### B. EMF in Transformers
- **Question**: EMF equation of transformer?  
  [Easy][High-Yield]  
  **Answer**: E = 4.44 f N φ  
  **Trend**: Appears in >90% GATE EE papers.

### C. Synchronous Generator
- **Question**: Define synchronous reactance in alternators.  
  [Moderate]  
  **Trend**: Theory-based MSQs common in Machines.

---

## 6. Power Systems

### A. Per Unit System
- **Question**: Convert 10Ω to pu on base Zbase = 25Ω  
  [Easy]  
  **Answer**: 10 / 25 = 0.4 pu  
  [High-Yield][Scenario: Repeated error in PU → Practice 5 per-unit conversions]

### B. Symmetrical Fault Analysis
- **Question**: Fault current if V = 11kV and Z = 0.2 pu, Sbase = 100 MVA  
  [Moderate][High-Yield]  
  **Answer**: Fault current = Sbase / (√3 × V × Z)

### C. Ferranti Effect
- **Question**: In long, lightly loaded lines, why is Vrecv > Vsending?  
  **Answer**: Ferranti Effect due to line capacitance  
  [Difficulty: Moderate]  

---

## 7. Control Systems

### A. Bode Plot
- **Question**: Phase margin for G(s)H(s) = 1/s(1+0.1s) at ω = 10 rad/sec  
  [Advanced][High-Yield]  
  [Scenario: Weak in frequency analysis → Draw Bode from scratch]

### B. Routh Criterion
- **Question**: Is system stable? Characteristic: s⁴ + 2s³ + 3s² + 4s + 5  
  [Moderate]  
  **Trend**: Routh appears in either stability MSQs or pattern-based NATs.

### C. Time Responses
- **Question**: Max overshoot for a 2nd-order system with ζ = 0.5?  
  **Answer**: ~16%  
  [High-Yield][Practical Scenario: Quick recall required]

---

## 8. Power Electronics

### A. Converter Circuit
- **Question**: Output voltage of single-phase full converter with RL load?  
  [Moderate]  
  Use Vdc = (2Vm/π) cos(α)

### B. Commutation
- **Question**: What commutation type used in single-phase bridge inverter?  
  **Answer**: Forced Commutation  
  **Trend**: Application-based theory Qs common

### C. MOSFET Characteristic
- **Question**: Draw output characteristics of Enhancement mode MOSFET  
  [Moderate]  
  [Scenario: Weak in Waveform ID → Solve mixed-type identification drills]

---

## 9. Analog & Digital Electronics

### A. Op-Amp Applications
- **Question**: Gain of inverting op-amp with R1 = 1kΩ, Rf = 10kΩ?  
  [Easy][High-Yield]  
  **Answer**: –10

### B. Flip-Flop Behavior
- **Question**: What is the output of a JK flip-flop with J=K=1 and CLK edge?  
  **Answer**: Toggle

### C. ADC Resolution
- **Question**: Resolution of 8-bit ADC with 5V range?  
  [Easy]  
  **Answer**: 5 / 2⁸ = ~19.53mV

---

## Summary Table – MIQ Distribution

| Subject             | Weight | MIQs/Topic          | Priority      |
|---------------------|--------|---------------------|---------------|
| Engg. Mathematics   | 13%    | ODEs, Linear Algebra| [High-Yield]  |
| Circuits            | 8–9%   | Theorems, RLC       | [High-Yield]  |
| EMF                 | 6–8%   | Gauss, Maxwell      | [Moderate]    |
| Signals & Systems   | 4–5%   | Convolution, LTI    | [High-Yield]  |
| Machines            | 11–12% | Transformers, IM    | [High-Yield]  |
| Power Systems       | 10–12% | Faults, PU, Stability| [High-Yield]  |
| Control Systems     | 8–10%  | Routh, Bode         | [High-Yield]  |
| Power Electronics   | 7–9%   | Converters, Devices | [Moderate]    |
| A/D Electronics     | 4–5%   | Op-amps, Logic      | [Moderate]    |

---

## Quick Reference & Study Tactics

- Maintain topic-wise **error log**
- Solve **minimum 5 PYQs** per subject weekly
- Use **mock outcome** to shortlist top 3 subjects needing MIQ drilling
- [Scenario: Weak in Machines + 1 month left → Focus on Transformers + Practice 20 NATs]
