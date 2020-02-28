---
# Uses this html: "_layout/post.html" as a template.
layout: post 
title:  Isometry groups in characteristic 2
author: pete
# (Optional) Used to sort posts, not supported as of writing this.
categories: [ Open ]
---


### Preliminaries

Let $K$ be a finite field. Let $V,W$ be $K$-vector spaces.  Let $t\colon V\times V \to W$ be a $K$-bilinear map.  Assume there exists $\theta\in \mathrm{Aut}_K(W)$ such that $t(u,v)=t(v,u)\theta$ for all $u,v\in V$. (Note, symmetric and alternating bilinear maps satisfy this condition, where $\theta=1$ and $-1$, respectively.) Assume $t$ is **fully nondegenerate** in that $\{v\in V~\mid~t(v,V)=0\}=0$ and $t(V,V)=W$; the latter condition ensures $\theta^2=1$.

One of the main computational challenges is to compute the group of symmetries of such a bilinear map.  (Note, linear operators act on the right, e.g. $v\mapsto vg$ for $v\in V$ and $g\in{\rm End}_K(V)$.)

**Definition.**
The group of symmetries of $t$ is the group of basis changes by (symmetrized) invertible transverse operators, namely

$$
\begin{aligned}
\mathrm{Aut}(t) & =  \{ (g,h) ~\mid~ t(ug,vg)=t(u,v)h~\textnormal{for all}~u,v\in V \} \\
            & \subseteq \mathrm{Aut}_K(V) \times \mathrm{Aut}_K(W).
\end{aligned}
$$


As a preliminary step we consider the subgroup of ${\rm Aut}(t)$ that acts as the identity on the $W$-coordinate:

**Definition.**
  The group of \textbf{isometries} of $t$ is the group

  $$
  \begin{aligned}
  \mathrm{Isom}(t) & = \{ g \in \mathrm{Aut}_K(V) ~\mid~ 
  t(ug,vg)=t(u,v)~\textnormal{for all}~u\in U,v\in V \}.
  \end{aligned}
  $$

  The map $g\mapsto (g,1)$ embeds   $\mathrm{Isom}(t)$ in $\mathrm{Aut}(t)$ as a normal subgroup.

To access ${\rm Isom}(t)$ we introduce a linear invariant of $t$:

>**Definition.**
>The **adjoint ring** of $t$ is
>
>$$
  \begin{aligned}
  \mathrm{Adj}(t) & =  \{ (f,g) ~\mid~ t(uf,v)=t(u,vg)~\textnormal{for all}~u\in U,v\in V \} \\
              & \subseteq  \mathrm{End}_K(U)\times\mathrm{End}_K(V)^{\mathrm{op}}.
  \end{aligned}
$$
>
>Acting with the opposite ring $\mathrm{End}(V)^{\mathrm{op}}$ means that $\mathrm{Adj}(t)$ is an associative ring. Furthermore, symmetry of $t$ means that $(f,g)\in \mathrm{Adj}(t)$ if, and only if, $(g,f)\in \mathrm{ Adj}(t)$.  Nondegeneracy of $t$ means that $\mathrm{Adj}(t)$ projects faithfully onto ${\rm End}_K(V)$, so we identify $\mathrm{Adj}(t)$ with this projection. It then follows that $f^*:=g$ is an anti-automorphim of $\mathrm{Adj}(t)$ of order at most 2 (i.e. an **involution**), so that
${\rm Adj}(t)$ is a **$\star$-ring**.

**KEY FACT:** 

$$
\mathrm{Isom}(t)=\mathrm{Adj}(t)^{\#}=\{f\in{\rm Adj}(t)~\mid~
ff^*=1\}.
$$

**When the characteristic of \boldmath$K$ is not 2**, this key fact leads to an algorithm to construct $\mathrm{Isom}(t)$. It proceeds as follows (see [BW] for details). Build a $\star$-invariant ring decomposition $\mathrm{Adj}(t)=J\oplus T$, where $J=J(\mathrm{Adj}(t))$ is the usual Jacobson radical of $\mathrm{Adj}(t)$, and $T=T_1\oplus\ldots\oplus T_s$ is a sum of simple $\star$-ideals.
Then,

$$
\mathrm{Adj}(t)^{\#}=J^{\#} : (T_1^{\#}\times\ldots\times T_s^{\#})
$$

is a group factorization of $\mathrm{Isom}(t)$. One can construct generators for $J^{\#}$ using a power series. This series is similar in spirit to the usual exponentiation map used to pass from Lie algebras to Lie groups, but is better in the sense that it only demands the ability to divide by 2 (which we have since $\mathrm{char}(K)$ is odd). The groups $T_i^{\#}$ are classical groups, each preserving some reflexive form: generating sets for these groups can simply be written down.

> **Problem.** Find an efficient algorithm to construct generators for $\mathrm{Isom}(t)$ when $\mathrm{char}(K)=2$.  

A solution to this problem would be of considerable theoretical interest, and of significant practical importance. There are (at least) two ways in which the situation differs from the odd characteristic case described above.  First, it is not necessarily the case that $\mathrm{Adj}(t)$ has a $*$-invariant ring decomposition $J\oplus T$ into radical and semisimple parts.  Secondly, and more seriously, the power series trick that produces unipotent group elements from nilpotent algebra elements does not work in characterictic 2.

---

 - [BW] P.A. Brooksbank, J.B. Wilson, *Computing isometry groups of Hermitian maps*, Trans. Amer. Math. Soc. 364 (2012), no. 4, 1975--1996.
