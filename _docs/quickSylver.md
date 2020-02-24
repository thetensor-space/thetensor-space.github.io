---
title: Quick Sylver
subtitle:
tags: []
author: james
---

The original Sylvester equation concerns matrices $A,B,C$ and solving for $X$ such that

$$
AX-XB=C.
$$


For $(d\times d)$-matrices this equation involves $O(d^2)$ variables and $O(d^2)$ equations.  These are linear equations and so it can be solved in time $O(d^{2\omega})$ where $2\leq \omega\leq 3$ is the exponent of efficient matrix multiplication.  After extensive study, this equation has a solution that takes time $O(d^{\omega})$.  However, our problems are often engaged in generalization, for example **solving simultaneous Sylvester equations**, as well as generalizations.  Our most important equation is the following.

$$
(\forall i)(A_iX+YB_i = C_i)
$$

If the matrices are square then using $A_0=I=B_0$ and $C_0$ we recover Sylvester's equation as a special case.  While individually we can solve these equations in $O(d^{\omega})$ this make spaces that are $O(d^2)$-dimensional.  So intersecting their solutions blows up the work to $O(d^{2\omega})$.  In fact Schneider questioned if this complexity is required.

Our QuickSylver algorithms our our flagship and prototype methods to solve these equations.  We focus both on improved complexity and practical performance.  In [BW] we give an $O(d^{\omega})$-time to right down a single solution $(X,Y)$ for pairs $[(A_1,B_1,0), (A_2,B_2,0)]$.  That algorithm applies even to intersections with Hermitian forms.  That algorithm is included in the current version.

Recent progress of Maglione-Wilson has produced on $O(d^{\omega})$ time solution for all tensors of bounded slice rank.  A prototype is underdevelopment and will be encorporated into these packages.

---

Other variations are included for tensors, derivations, and densors.  Specifically we include solving for the following linear equations.

$$
[A] X+Y[B] = [C]^Z
$$

---

[BW] Intersecting two classical groups, P. A. Brooksbank, J. B. Wilson, J. Algebra 353 (2012) 286-297. 

