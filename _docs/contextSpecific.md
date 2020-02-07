---
title: Differences in Disciplines
subtitle: Sort out confusion between different backgrounds
tags: [Tensor, Tensor Space]
author: james
---


For those who benefit from background with tensors some of our choices may conflict with routine choices.  Here are some general warnings and ways to reconcile notations and terms.

- [Tensors in Algebra](#TensorsInAlgebra)
- [Tensors in Differential Geometry](#TensorsDifferentialGeometry)
- [Tensors in Category Theory](#TensorsInCategoryTheory)
- [Tensors in Physics](#TensorsInPhysics)
- [Tensors in Statistics](#TensorsInStatistics)

### Tensors in Algebra

1. Most algebraist will consider the word _tensor_ as synonymous with _tensor products_.  In particular $U\otimes V$ would be called a tensor, and its elements would carry no name.  We draw a distinction.  Tensor spaces are vector spaces (or modules) represented on a space of multilinear maps.  For example the dual space $(U\otimes V)^{*}$ is a tensor space because it consists of bilinear forms $U\times V\rightarrowtail K$ but elements of $U\otimes V$ are not in general tensors as they have no a priori associated multilinear interpretation.
2. Unlike vector spaces, indeed unlike most of algebra, tensor spaces have no a prior "natural" homomorphisms.  Instead, there are an exponential number of morphism families each as natural as the next and each found is as many applications as the next.  Just to emphasize the differences, some have cokernels, some do not.  

### Tensors in Differential Geometry

Our view of a tensors is not fixed to a single space $V$ repeated several times such as $V\otimes V\otimes V^*$.  We can involve arbitrary spaces and thus Levi-Civita index calculus is not generally adequate notation as we will be summing over different ranges.  In fact tensor contractions are on the whole not well-defined and require an imposed, perhaps unnatural, bilinear form.  Yet the spirit of these techniques survive as generalized notations often as functors.

### Tensor in Category Theory

Tensor categories are not monoidal categories.  Monoidal categories study just the "free" tensor spaces $V_0\oslash \cdots \oslash V_{\ell}$ whereas tensor categories study all their subspaces, and do so from every possible co/contra-variant perspective.

### Tensors in Physics

We borrow practical tools like Dirac notation and tensor networks but we make no demands that coefficients be in complex.  We have no global Hermitian form on spaces in the frame and so spaces are not naturally identified with their duals by maps such as $\mid u\rangle\mapsto \langle u\mid$.  And $\mid u\rangle \langle u\mid$ is generally meaningless to a general tensor context.

### Tensors in Statistics

Tensors in statistics, engineering, big data and informatics is often synonymous with a high-dimensional grid of numbers.  This can have limitations not present in our model.  For example the allowed numbers may not form a ring, they may simply be a limited number of coefficients.  We shall assume at all times that we have a ring.