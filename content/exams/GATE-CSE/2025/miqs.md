---
title: ''
exam: GATE-CSE
exam_year: 2025
section: CSE
tags: []
updated: '2025-08-13'
difficulty: ''
type: miqs
items: []
---

# GATE CSE Most Important Questions (MIQs) - High-Yield Study Guide

## Overview
[High-Yield][All Levels] This comprehensive MIQ guide covers all core GATE CSE subjects with trend analysis from the last 35 years of papers. Each question is tagged with difficulty, importance, and personalized study scenarios.

---

## 1. Engineering Mathematics

### A. Discrete Mathematics - Graph Theory
**Topic**: Shortest Path, Trees  
**Difficulty**: [Moderate]  
**Question**: For a connected, undirected graph with 8 vertices and 9 edges, how many cycles exist?  
**Hint**: Use formula: Cycles = E - V + 1 = 9 - 8 + 1 = 2  
**Trend/Importance**: [High-Yield] Direct graph/tree and shortest path (Dijkstra, BFS/DFS) MCQs or NATs guaranteed each year since 2021  
**[Scenario: Beginner → Master basic graph properties first]**  
**[Scenario: Time crunch → Focus on BFS/DFS algorithms]**

### B. Probability & Statistics
**Topic**: Basic Probability  
**Difficulty**: [Easy]  
**Question**: If 2 dice are thrown, what is the probability that the sum is at least 9?  
**Hint**: Favorable outcomes: (3,6), (4,5), (4,6), (5,4), (5,5), (5,6), (6,3), (6,4), (6,5), (6,6) = 10/36  
**Trend/Importance**: Probability basics (Bayes, PMF, events) appear as simple NATs or first-section MCQs every year  
**[Scenario: Weak in probability → Practice 10 dice/card problems daily]**

---

## 2. Digital Logic

### A. Boolean Algebra & K-maps
**Topic**: K-map Simplification  
**Difficulty**: [Moderate]  
**Question**: Minimize F(A,B,C,D) = Σ(0,1,2,5,8,9,10) using K-map  
**Hint**: Group adjacent 1s, look for prime implicants  
**Trend/Importance**: [High-Yield] K-map simplification appears in nearly all GATE CSE papers  
**[Scenario: Advanced → Practice 5-variable K-maps]**  
**[Scenario: Beginner → Master 3-variable first]**

### B. Number Systems
**Topic**: Binary Conversions  
**Difficulty**: [Easy]  
**Question**: Convert decimal 29 to 8-bit signed 2's complement  
**Answer**: 00011101  
**Trend/Importance**: 1-2 MCQs/NATs per paper on number representation conversions  
**[Scenario: Working Professional → Quick revision sheet of conversion formulas]**

---

## 3. Computer Organization & Architecture

### A. Cache & Memory
**Topic**: Cache Performance  
**Difficulty**: [Moderate-High]  
**Question**: Calculate hit ratio if RAM access = 100ns, cache access = 20ns, average access = 32ns  
**Solution**: Hit ratio = (100-32)/(100-20) = 0.85 or 85%  
**Trend/Importance**: [High-Yield] Cache, address mapping, and pipeline hazards account for 50% of COA marks  
**[Scenario: Weak in COA → Dedicate 1 hour daily to cache problems]**  
**[Scenario: Last month prep → Focus only on cache + pipeline]**

### B. Pipelining & Data Hazards
**Topic**: Pipeline Timing  
**Difficulty**: [Moderate]  
**Question**: A processor pipeline has stages with delays 8ns, 6ns, 10ns, 7ns. What is the clock cycle time?  
**Answer**: 10ns (maximum stage delay)  
**Trend/Importance**: Stall cycles, hazards, and pipeline timing problems reappear as NATs/MSQs annually  
**[Scenario: Intermediate → Practice hazard detection in code segments]**

---

## 4. Programming & Data Structures

### A. Trees/BSTs/Heap
**Topic**: Binary Search Trees  
**Difficulty**: [Moderate]  
**Question**: What is the number of distinct binary search trees possible with 4 nodes?  
**Hint**: Use Catalan number formula: C₄ = 14  
**Trend/Importance**: [High-Yield] Trees & heap structures see MCQ/NAT on count, traversal, or operations  
**[Scenario: Repeater → Focus on tree traversal variations]**  
**[Scenario: College Student → Build strong foundation with tree basics]**

### B. Recursion, Stack/Queue
**Topic**: Recursive Functions  
**Difficulty**: [Moderate]  
**Question**: What does the following recursive C function print for n=3?
```c
void fun(int n) {
    if(n > 0) {
        printf("%d ", n);
        fun(n-1);
        printf("%d ", n);
    }
}
```
**Answer**: 3 2 1 1 2 3  
**Trend/Importance**: Trace-based NATs, output prediction, and pointer/stack MCQs—2-3 each year  
**[Scenario: Weak in recursion → Trace 5 recursive functions daily]**

---

## 5. Algorithms

### A. Complexity Analysis
**Topic**: Time Complexity  
**Difficulty**: [Moderate]  
**Question**: What is the time complexity of heap sort?  
**Answer**: O(n log n) for all cases  
**Trend/Importance**: [High-Yield] Every GATE includes at least one sorting/searching complexity MCQ  
**[Scenario: Beginner → Memorize complexity table for all algorithms]**

### B. Dynamic Programming
**Topic**: Classic DP Problems  
**Difficulty**: [Moderate-High]  
**Question**: Write recurrence for 0/1 Knapsack problem  
**Answer**: `dp[i][w] = max(dp[i-1][w], val[i] + dp[i-1][w-wt[i]])`  
**Trend/Importance**: DP and greedy paradigms constitute high-yield MSQs  
**[Scenario: Advanced → Practice DP variations and space optimization]**  
**[Scenario: Time crunch → Focus on 5 classic DP problems]**

---

## 6. Theory of Computation

### A. Regular Languages
**Topic**: Regular Expressions  
**Difficulty**: [Moderate]  
**Question**: Give a regular expression for all strings over {0,1} that contain at least two consecutive 1's  
**Answer**: (0|1)*11(0|1)*  
**Trend/Importance**: [High-Yield] DFA construction, regex, language acceptance appear as direct NAT/MSQ  
**[Scenario: Weak in TOC → Practice DFA to regex conversions daily]**

### B. Decidability
**Topic**: Language Classification  
**Difficulty**: [Moderate-High]  
**Question**: Is language L = {aⁿbⁿcⁿ | n ≥ 0} regular, context-free, or neither?  
**Answer**: Neither (context-sensitive)  
**Trend/Importance**: Context-freeness, decidability, pumping lemma questions every year  
**[Scenario: Intermediate → Master pumping lemma applications]**

---

## 7. Compiler Design

### A. Parsing
**Topic**: Grammar Derivations  
**Difficulty**: [Moderate]  
**Question**: For grammar S → aSb | ab, show the leftmost derivation of "aabb"  
**Answer**: S → aSb → aabb  
**Trend/Importance**: Questions on grammar derivations, FIRST/FOLLOW sets, tokens  
**[Scenario: Beginner → Start with LL(1) parsing basics]**

### B. Intermediate Code Generation
**Topic**: 3-Address Code  
**Difficulty**: [Moderate]  
**Question**: Generate 3-address code for: a = b + c * d  
**Answer**:
```
t1 = c * d
a = b + t1
```
**Trend/Importance**: Code generation and translation schemes frequently asked  
**[Scenario: Working Professional → Quick revision of code generation rules]**

---

## 8. Operating Systems

### A. CPU Scheduling
**Topic**: Scheduling Algorithms  
**Difficulty**: [Moderate]  
**Question**: Given processes with arrival times [0,1,2,3] and burst times [5,3,8,6], calculate average turnaround time using SJF  
**Hint**: Non-preemptive SJF order: P1→P2→P4→P3  
**Trend/Importance**: [High-Yield] Scheduling MCQs/NATs are staple questions  
**[Scenario: Weak in OS → Practice Gantt chart creation]**  
**[Scenario: Advanced → Focus on preemptive scheduling edge cases]**

### B. Synchronization
**Topic**: Critical Section Problems  
**Difficulty**: [Moderate-High]  
**Question**: Identify the error in given Peterson's Algorithm implementation  
**Trend/Importance**: Critical section, semaphore logic, concurrency bugs common in MSQ form  
**[Scenario: Repeater → Master classical synchronization problems]**

---

## 9. Databases

### A. SQL & Relational Algebra
**Topic**: Joins and Queries  
**Difficulty**: [Moderate]  
**Question**: Write SQL query to find employees earning more than their managers  
**Answer**: 
```sql
SELECT e1.name 
FROM Employee e1, Employee e2 
WHERE e1.mgr_id = e2.emp_id AND e1.salary > e2.salary
```
**Trend/Importance**: [High-Yield] NAT/MCQ on joins, selections, SQL queries (esp. correlated subqueries)  
**[Scenario: Beginner → Practice basic SELECT queries first]**

### B. Normalization
**Topic**: Normal Forms  
**Difficulty**: [Moderate]  
**Question**: Given FDs: A→B, B→C, C→D, what is the highest normal form?  
**Hint**: Check for transitive dependencies  
**Trend/Importance**: Appears every year; questions on BCNF/3NF, lossless decomposition  
**[Scenario: Time crunch → Focus on 2NF, 3NF, BCNF only]**

---

## 10. Computer Networks

### A. Network Layer
**Topic**: IP Addressing & Routing  
**Difficulty**: [Moderate]  
**Question**: Calculate number of subnets and hosts for 192.168.1.0/27  
**Answer**: 8 subnets, 30 hosts each  
**Trend/Importance**: [High-Yield] IP addressing/subnet, protocol layers most asked  
**[Scenario: Working Professional → Quick subnet calculation tricks]**

### B. Transport Layer
**Topic**: TCP vs UDP  
**Difficulty**: [Easy-Moderate]  
**Question**: Which protocol guarantees in-order reliable delivery?  
**Answer**: TCP  
**Trend/Importance**: OSI/TCP-IP details, protocol characteristics regular questions  
**[Scenario: Beginner → Create protocol comparison chart]**

---

## Quick Reference Summary Table

| Subject | Topic | MIQ Focus | Difficulty | Yearly Frequency |
|---------|-------|-----------|------------|------------------|
| Discrete Math | Graphs | Cycles, Shortest Path | [Moderate] | 100% appearance |
| Digital Logic | K-maps | Minimization | [Moderate] | Every paper |
| COA | Cache | Hit ratio, Mapping | [High] | 2-3 questions |
| DS | Trees | BST count, Traversal | [Moderate] | 3-5 questions |
| Algorithms | DP/Greedy | Classic problems | [High] | High-yield MSQs |
| TOC | RegEx/DFA | Language properties | [Moderate] | Always present |
| Compiler | Parsing | Grammar, Code Gen | [Moderate] | 2-3 questions |
| OS | Scheduling | SJF, RR, FCFS | [Moderate] | Guaranteed |
| DBMS | SQL/NF | Joins, Normal Forms | [Moderate] | 3-4 questions |
| Networks | IP/Protocols | Subnetting, Layers | [Moderate] | 2-3 questions |

---

## Study Strategy Notes

### [Beginner - 6 months prep]
- Week 1-4: Focus on Easy topics from each subject
- Week 5-12: Build moderate difficulty topics
- Week 13-24: Practice PYQs and mock tests

### [Intermediate - 3 months prep]
- Month 1: Revise all moderate topics
- Month 2: Focus on high-yield areas
- Month 3: Mock tests + error analysis

### [Advanced - 1 month prep]
- Week 1-2: High-yield topics only
- Week 3: Full-length mocks
- Week 4: Error log revision

### [Working Professional]
- Daily: 2 hours focused study
- Weekend: Full subject revision
- Use formula sheets and quick notes

### Error Log Protocol
- Maintain topic-wise error frequency
- Review errors weekly
- Focus practice on weak areas
- [High-Yield] Topics with >30% errors need daily practice
