---
title: Tensor Categories
subtitle:
tags: []
author: james
---


### What is a Tensor Category?

The simplest tensor spaces are formed by frames with 2 axes.  E.g. 
$$
\langle \cdot |:T\to V_0\oslash V_1
$$
Suppose we want to think of the tensor space as an object in a category.  Then we would want to map this to another tensor space
$$
\langle \cdot |:S\to U_0\oslash U_1.
$$
Observe that intential separation of $V_0$ from $V_1$ we should seek morphisms between $V_0$ and $U_0$, and separately $V_1$ and $U_1$.  But this is still ambiguous.  There are at least 4 natural choices.
$$
\begin{matrix}
V_1 & \overset{t}{\to} & V_0\\
f_1\downarrow & & f_0\downarrow\\
U_1 & \overset{s}{\to} & U_0
\end{matrix}
\qquad
\langle s|f_1 v_1\rangle=f_0\langle t|v_1\rangle
$$
$$
\begin{matrix}
V_1 & \overset{t}{\to} & V_0\\
f^1 \uparrow & & f_0\downarrow\\
U_1 & \overset{s}{\to} & U_0
\end{matrix}
\qquad
\langle s|u_1\rangle=f_0\langle t|f^1 u_1\rangle
$$
$$
\begin{matrix}
V_1 & \overset{t}{\to} & V_0\\
f_1 \downarrow & & f^0\uparrow\\
U_1 & \overset{s}{\to} & U_0
\end{matrix}
\qquad
f^0\langle s|f_1v_1\rangle=\langle t|v_1\rangle
$$
$$
\begin{matrix}
V_1 & \overset{t}{\to} & V_0\\
f^1\uparrow & & f^0\uparrow\\
U_1 & \overset{s}{\to} & U_0
\end{matrix}
\qquad
f^0\langle s|u_1\rangle=\langle s|f^1 u_1\rangle
$$

These are in fact different.  In the first for example forms an abelian category and the second does not even have cokernels.  This is one of truly unique aspects of tensor compared other forms of mathematics.  There is no best choice of morphisms, the behavior of tensors is instead collaboration of many interacting categories.  There are noticable functors between some of these and exploiting these and other properties minimizes the work in calculating and proving claims for tensors. 

### Computing with Tensor Spaces

If you are looking to use tensor spaces in software take a look at Chapter 3 of the manual for our Magma software found [here](https://github.com/thetensor-space/TensorSpace/blob/master/doc/TensorSpace.pdf).
