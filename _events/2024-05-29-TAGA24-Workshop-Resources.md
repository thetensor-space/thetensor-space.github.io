---
# Uses this html: "_layout/post.html" as a template.
layout: post 
title: TAGA 24 Workshop Resources
# (Optional) Used to sort posts, not supported as of writing this.
categories: [ Workshops ]
---

<img src="/uploads/images/TAGA_2024.png" width=100 align="left">
<H3><p style="color:ForestGreen"><i class='fas fa-chalkboard-teacher'></i> TAGA 24 Workshop Resources</p>
<p style="color:DarkGoldenRod" >Abstracts, videos, and slides</p></H3>

 
---
# Talks

## [Intro to Tensors](#intro-to-tensors){:style="color:inherit"}

**Speakers:** 
<br><a href="https://personal.math.ubc.ca/~erobeva/" target="_blank">Elina Robeva</a>, University of British Columbia
<br>
<br>
<a href="https://www.math.colostate.edu/~jwilson/" target="_blank">James B. Wilson</a>, Colorado State University

I am Professor of Mathematics at Colorado State University, affiliate faculty of the Data Science Research Institute at CSU, and co-organizer of Tensor: Algebra-Geometry-Applications (TAGA24) and its predecessor TACA 19.  I research algebra and computation with an affinity towards a tensors as a bridge to other fields.  I have spent time both as a mathematics research and within industry.  I am <i>big tent</i> minded tensor theorist happy to see progress on applications and theory and open to tensors filled with everything from real numbers to boolean algebras, to subatomic particles.  I am weakest on the algebrogeometric methods for tensors but I don't mind learning more about this from you. Please feel free to call me **James**.


**Abstract:** An introduction to tensors: notation, vocabulary, basic properties, and the landscape of research.

### Lecture 1. Tensors Everywhere All at Once

> A guided tour through the zoo of tensors.  Start of in the hands-on exhibit to meet a flock of mulitway arrays on loan from the data science center before moving on to the main exhibits of the ever flamboyant real hyper matrices, our herds of statistical mechanical tensors, and the polar algebraic tensor exhibit nestled along shores of our very own pod of polynomial tensors.  Don't leave before wondering into the exotic corner to meet the  entropic affine quasi-rings and the monoidal cats.  On way out visit our gift shop to get commemorative sticker of your tour.

--- 
**In other words:**  We will cover: tensor definitions with motivating examples from present day applications in physics, engineering, data science, and mathematics.  We will describe some of the popular vocabularies and notations and point to the necessary assumptions to build a comprehensive theory of tensors targeting some outward facing applications.  The philosophy is that tensors are much broader then you might think it even if you are stone cold theorist you might make progress on a relevant problem.

### Lecture 2. The algebra of tensors

> Beginning with quick opinionated and biased take on  <center><i>''What is algebra.''</i> </center>
><p> I will take us through <p><center><i>''What is tensor algebra.''</i> </center>
><p> Far more than  <i>''generalized linear algebra''</i> with its concepts of ranks, eigen and singular values, tensors enjoy all the qualities of abstract algebra too including ideals, quotients, homomorphisms, zero-divisors, presentations and representations & modules.  </p>
> <p>Along the way we will relate these structures  to their counter parts in known applications setting up a bridge between the data we want in real life and the mathematics that can tame it.

<!-- 
### (Possible) Lecture 3. Applications

Tucker, CanDecamp, Parafac, CP
Stats tensors
Hyper graph tensors
Bilinear complexity
Signal separation
Low rank approximation -->

## [Determinantal varieties and Pfaffians](#determinantal-varieties-and-pfaffians){:style="color:inherit"}

**Speaker:** 
<br><a href="https://www.math.uni-bielefeld.de/~voll/" target="_blank">Christopher Voll</a>, Bielefeld University

My research interests are centred around asymptotic group theory, in particular arithmetic and analytic properties of zeta functions associated to infinite groups and rings. These are Dirichlet generating functions encoding arithmetic data about groups and rings, such as the numbers of finite index subobjects or finite-dimensional irreducible representations. The study of these zeta functions may be seen as a non-commutative analogue to the theory of the Dedekind zeta function of a number field, enumerating finite index ideals in the number field's ring of integers. This young subject area lies on the crossroads of infinite group and ring theory, algebraic geometry and combinatorics. 

**Abstract:** The algebraic geometry of tensors.

**Lecture 1**: Tensors from enumerative algebra

In this lecture, I will explain how naturally occurring counting
problems in the theory of (mostly infinite) groups connect to
tensors. Specifically, I will explain how matrices of linear forms
(over the integers, say) may be seen to comprise the commutator
structure of certain groups, and how an understanding of these
"commutator matrices" translates into an understanding of, say, the
normal subgroup or the representation growth of these groups.


**Lecture 2**: Tensors, Pfaffians, and p-adic integrals

We will explore how the geometry of the Pfaffians and more general
determinantal degeneracy loci of the commutator matrices of the groups
introduced in Lecture 1 reflects the complexity of the underlying
counting problems. I will explain how tools from p-adic integration
are being used to get to grips with this complexity. Some of these
geometric tools have a toric or tropical flavour, allowing for methods
from combinatorial algebra to be brought in.



**Lecture 3**: Where the wild things are - tensors and base change

Many of the counting problems sketched in these lectures have an
arithmetic nature, allowing naturally for a global-to-local
principle. This yields, equally naturally, families of p-adic
integrals associated with Z-defined tensors, indexed by the prime
numbers. Their variation with the prime numbers often reveils
intriguing and, in a sense I will make precise, "wild" variation of
the underlying (local) counting problems.

## [Linear methods for tensors](#linear-methods-for-tensors){:style="color:inherit"}

**Speaker:** 
<a href="https://brooksbank.scholar.bucknell.edu/" target="_blank">Peter A. Brooksbank</a>, Bucknell University

I am a Professor of Mathematics at Bucknell University, where I teach a range of courses including discrete mathematics and abstract algebra. I am also a Co-Director of the Dominguez Center for Data Science at Bucknell. I have research interests in computational algebra, discrete geometry, and multilinear algebra.

**Abstract:** These lectures concern the application of linear methods to tensor analysis. The ways in which linear methods are used in tensor theory are, of course, too numerous to list. However, these lectures focus on invariants of a tensor that can be computed as solutions of linear systems, and that possess an algebraic structure that can effectively be used to reveal corresponding structure in the tensor. The lectures will include some short software demos using the Magma system.

<b>Lecture 1 (Centroids)</b> As well as providing an overview of the lecture series as a whole, the first lecture studies in detail an algebraic invariant of a tensor called the <i>centroid</i>. We will introduce the centroid as a generalized collection of scalars for the tensor, and we will see how it can be used to block-diagonalize a tensor. 

<b>Lecture 2 (Adjoints)</b> This lecture introduces another collection of scalars 
associated with a tensor: its ring of <i>adjoints</i>. We will discuss how adjoints can be used to reduce search spaces when testing for isomorphism between tensors. We will also develop some of the algebraic properties of the adjoint ring, and explain how to use these to discover other types of block decompositions in a tensor.

<b>Lecture 3 (Applications)</b> In the last lecture we will survey some applications and variations of the concepts and methods in lectures 1 & 2. For instance, we will look at tensors arising from <i>p</i>-groups that come with additional symmetries, and consider how to adapt our linear invariants to this new setting. We will also see how to apply linear techniques to restricted isomorphism problems and to certain group intersection problems. 

## [Tensor Isomorphisms](#tensor-isomorphisms){:style="color:inherit"}

**Speaker:** 
<br><a href="https://joshmaglione.com/" target="_blank">Joshua Maglione</a>, University of Galway

**Abstract:** Isomorphism problems.

## [Tensor Combinatorics](#tensor-combinatorics){:style="color:inherit"}

**Speaker:** 
<br><a href="https://profiles.uts.edu.au/Youming.Qiao" target="_blank">Youming Qiao</a>, University of Technology Sydney

**Abstract:** Isomorphism problems.

---


<!-- Example video embed snippet
<iframe width="560" height="315" src="https://www.youtube.com/embed/VqteyFC3M60?si=EbfzhFNSYzOr0RW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
-->


<br/>This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons Attribution 4.0 International License</a>