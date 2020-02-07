---
title: Tensor Spaces
subtitle:
tags: []
author: james
---


### What is a Tensor Space?


The context is that we have a fixed commutative ring $K$ of coefficients, often a field or the integers.  We also have $K$-modules $V_0,\ldots,V_{\ell}$.  We define the space of multilinear maps recursively
$$
\begin{aligned}
V_0\oslash V_1 & = \hom_K(V_1,V_0)=\{\langle f|:V_1\to V_0\textnormal{ linear}\}\\
V_0\oslash \cdots \oslash V_{\ell} & = (V_0\oslash\cdots \oslash V_{\ell-1})\oslash V_{\ell}
\end{aligned}
$$
See [Tensors](Tensors) for a detailed walk through this notation and definitions.

We can now define a tensor space.  

>**Definition.** A vector space (or $K$-module) $T$ is a _tensor space_ when it is equipped with 
> 1. A list $V_0,\ldots,V_\ell$ of vector spaces ($K$-modules) called the _(reference) frame_, and
> 2. A linear map 
 $$
 \langle \cdot |:T\to V_0\oslash \cdots \oslash V_{\ell}.
 $$
 Elements $t\in T$ are called _tensors_ and the multilinear map
 $$
 \langle t|:V_{\ell}\times \cdots \times V_1\rightarrowtail V_0
 $$
 is its _interpretation_.

Classical literature on tensors assumes matrices are tensors.  Usually this needs clarification.

**Example.** Let $T=\mathbb{M}_{2\times 3}(\mathbb{R})$ be the set of $(2\times 3)$-matrices.  Then $T$ can be made into a tensor space in at least the following distinct ways.
1. $V_0=\mathbb{R}^2$, $V_1=\mathbb{R}^3$ and 
$$
\langle \cdot |:T\to \mathbb{R}^2\oslash \mathbb{R}^3
\qquad \langle M|v_1\rangle := Mv_1.
$$
1. $V_0=\mathbb{R}^3$, $V_1=\mathbb{R}^2$ and 
$$
\langle \cdot |:T\to \mathbb{R}^3\oslash \mathbb{R}^2
\qquad \langle M|v_1\rangle := v_1^{\top} M.
$$
1. $V_0=\mathbb{R}$, $V_1=\mathbb{R}^2$, $V_2=\mathbb{R}^3$ and 
$$
\langle \cdot |:T\to \mathbb{R}\oslash\mathbb{R}^2\oslash \mathbb{R}^3
\qquad \langle M|v_2,v_1\rangle := v_2^{\top}Mv_1.
$$

So while often context is the guide, in strict terms a matrix is not a tensor unless it is equipped with a suitable multilinear interpreter.

### Computing with Tensor Spaces

If you are looking to use tensor spaces in software take a look at Chapter 3 of the manual for our Magma software found [here](https://github.com/thetensor-space/TensorSpace/blob/master/doc/TensorSpace.pdf).


---

## $\otimes$ for historical connection

It would seem we have a grave omission, the tensor product symbol $\otimes$ has appeared nowhere.  This hallmark of tensors was introduced somewhat late in the game of tensors by Whitney in 1939.  We can reconcile it without definition.

Recall that we have equated functions 
$$
V_2\to (V_1\to V_0)
$$ 
with functions 
$$
V_2\times V_1\rightarrowtail V_0.
$$
It is simply a matter of collecting a sequence of inputs into one input tuple.  In logic and computer science this is well-trod identification known as _Currying_ --- search the internet to find far more than you want to know about this homage to the mathematician Haskell Curry.

This identification might suggest that one could do the same on the level of the vector spaces themselves.  That is, could we perhaps solve for vector space $X$ such that
$$
(V_0\oslash V_1)\oslash V_2 = V_0\oslash X.
$$
Equality being unlikely let us settle for isomorphism between the two sides.  Whitney proved that such an $X$ exists and is unique up to isomorphism.  It further does not depend on $V_0$ so the best notation is as a function of $(V_2,V_1)$.  Indeed, it can be found in nearly all graduate texts on algebra as the _tensor product_:
$$
V_2\otimes V_1 := X.
$$
It is furthermore independent of $V_0$ so the notation is fitting.  In fact, put together it reminds us of fraction formulas:
$$
    (A\oslash B)\oslash C  \cong A\oslash (C\otimes B)
$$
Just as with fractions $(a/b)/c = a/(cb)$.  To make sure the idea is not lost behind the effect of the notation let us this once use $\hom$ instead of $\oslash$ and write:
$$
    \hom(C,\hom(A,B)) \cong \hom(C\otimes B,A).
$$
Thus we have been speaking of the  $(\otimes,\hom)$ adjunction.



> History not-withstanding it should be observed that the definition of the Whitney tensor product usually assumes technology that cannot be explained solely on the level of linear maps and matrices.  Defining multilinear maps as recursive linear maps lets us define tensor spaces within the language of linear algebra alone.


There is a lower-tech definition of Whitney's Tensor Product which can be found here: [The Whitney Tensor Product](/articles/Whitney-Tensor.md).

---
