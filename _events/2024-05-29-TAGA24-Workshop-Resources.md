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

Link back to [conference home](./TAGA-2024)

**Talks**:

- [Intro to Tensors](#intro-to-tensors)
- [Tensor CP Decomposition](#tensor-cp-decomposition)
- [Determinantal varieties and Pfaffians](#determinantal-varieties-and-pfaffians)
- [Linear methods for tensors](#linear-methods-for-tensors)
- [Tensor Isomorphisms](#tensor-isomorphisms)
- [Tensors and graphs](#tensors-and-graphs)

# [Intro to Tensors](#intro-to-tensors){:style="color:inherit"}

<a href="https://www.math.colostate.edu/~jwilson/" target="_blank">James B. Wilson</a>, Colorado State University

**Bio**: I am Professor of Mathematics at Colorado State University, affiliate faculty of the Data Science Research Institute at CSU, and co-organizer of Tensor: Algebra-Geometry-Applications (TAGA24) and its predecessor TACA 19.  I research algebra and computation with an affinity towards a tensors as a bridge to other fields.  I have spent time both as a mathematics research and within industry.  I am <i>big tent</i> minded tensor theorist happy to see progress on applications and theory and open to tensors filled with everything from real numbers to boolean algebras, to subatomic particles.  I am weakest on the algebrogeometric methods for tensors but I don't mind learning more about this from you. Please feel free to call me **James**.


**Abstract:** An introduction to tensors: notation, vocabulary, basic properties, and the landscape of research.

##### [Intro to Tensors Lecture 1: Tensors Everywhere All at Once](#intro-to-tensors-lecture-1-tensors-everywhere-all-at-once){:style="color:inherit"}

> A guided tour through the zoo of tensors.  Start of in the hands-on exhibit to meet a flock of mulitway arrays on loan from the data science center before moving on to the main exhibits of the ever flamboyant real hyper matrices, our herds of statistical mechanical tensors, and the polar algebraic tensor exhibit nestled along shores of our very own pod of polynomial tensors.  Don't leave before wondering into the exotic corner to meet the  entropic affine quasi-rings and the monoidal cats.  On way out visit our gift shop to get commemorative sticker of your tour.

--- 
**In other words:**  We will cover: tensor definitions with motivating examples from present day applications in physics, engineering, data science, and mathematics.  We will describe some of the popular vocabularies and notations and point to the necessary assumptions to build a comprehensive theory of tensors targeting some outward facing applications.  The philosophy is that tensors are much broader then you might think it even if you are stone cold theorist you might make progress on a relevant problem.

#### [Intro to Tensors Lecture 2: The algebra of tensors](#intro-to-tensors-lecture-2-the-algebra-of-tensors){:style="color:inherit"}

> Beginning with quick opinionated and biased take on  <center><i>''What is algebra.''</i> </center>
><p> I will take us through <p><center><i>''What is tensor algebra.''</i> </center>
><p> Far more than  <i>''generalized linear algebra''</i> with its concepts of ranks, eigen and singular values, tensors enjoy all the qualities of abstract algebra too including ideals, quotients, homomorphisms, zero-divisors, presentations and representations & modules.  </p>
> <p>Along the way we will relate these structures  to their counter parts in known applications setting up a bridge between the data we want in real life and the mathematics that can tame it.

#### [Intro to Tensors Lecture 3: What are tensors missing?](#intro-to-tensors-lecture-3-what-are-tensors-missing){:style="color:inherit"}

TBD 

<!-- 
#### (Possible) Lecture 3. Applications

Tucker, CanDecamp, Parafac, CP
Stats tensors
Hyper graph tensors
Bilinear complexity
Signal separation
Low rank approximation -->

# [Tensor CP Decomposition](#tensor-cp-decomposition){:style="color:inherit"}

**Speaker:** 
<br><a href="https://personal.math.ubc.ca/~erobeva/" target="_blank">Elina Robeva</a>, University of British Columbia

**Bio**: Elina Robeva is an Assistant Professor in Mathematics at the University of British Columbia. Her work lies at the intersection of mathematical statistics, machine learning, applied and multilinear algebra. Elina obtained her PhD in Mathematics in 2016 at the University of California, Berkeley under the supervision of Bernd Sturmfels. From 2016 to 2019 she was a Statistics Instructor and an NSF Postdoctoral Fellow at MIT. She has received several awards for her research including the SIAM Algebraic Geometry Early Career Prize and the André-Aisenstadt Prize. Since 2024, she is also a Canada CIFAR AI Chair and a member of the Alberta Machine Intelligence Institute. 

#### [Tensor CP Decomposition Lecture 1: Introduction and Applications](#tensor-cp-decomposition-lecture-1-introduction-and-applications){:style="color:inherit"}

In this lecture we will introduce the tensor CP decomposition, which is one of the popular ways to generalize matrix decompositions to tensors (multi-way arrays). We will see how it is defined both for symmetric and ordinary tensors. We will show how CP decomposition is useful in applications in machine learning - sometimes it makes sense to decompose the tensor consisting of the data at hand and sometimes it is better to decompose the higher order moments of the random vector of interest.

#### [Tensor CP Decomposition Lecture 2: Algorithms](#tensor-cp-decomposition-lecture-2-algorithms){:style="color:inherit"}

In this lecture we will finish our discussion of applications of CP decomposition and will introduce some of the most popular algorithms for finding the CP decomposition. We will start with the Alternating Least Squares (ALS) algorithm and will then briefly discuss Jennrich’s algorithm and some algorithms for symmetric tensor decomposition.


#### [Tensor CP Decomposition Lecture 3: Properties](#tensor-cp-decomposition-lecture-3-properties){:style="color:inherit"}

In this final lecture we will turn to the theory of CP decomposition. We will see that despite its usefulness, CP decomposition does not have the desirable properties that matrix decompositions do — the set of tensors of rank at most r is not closed, the rank over the reals may be different from the rank over the complex numbers, for a symmetric tensor its rank may be different from its symmetric rank, and computing the rank, decomposition, and eigenvectors of a general tensor are computationally hard problems. These issues set the stage for a lot of the theoretical research in the area.

# [Determinantal varieties and Pfaffians](#determinantal-varieties-and-pfaffians){:style="color:inherit"}

**Speaker:** 
<a href="https://www.math.uni-bielefeld.de/~voll/" target="_blank">Christopher Voll</a>, Bielefeld University

**Bio**: 
Christopher received a PhD from Cambridge University in 2002. After
postdocs
in Oxford, Duesseldorf and Lausanne he took up a lectureship in
Southampton
(UK). Since 2011 he has been Professor of Mathematics, in particular
Algebra,
at Bielefeld University (Germany). He specializes in asymptotic and
combinatorial algebra, in particular zeta functions of groups, rings,
and
modules.

As Principal Investigator of the Research Centre
[Integral Structures in Geometry and Representation Theory](https://trr358.math.uni-bielefeld.de/), Christopher will be recruiting a postdoc
from 01
January 2025 in a project on
[Zeta functions of integral quiver representations](https://trr358.math.uni-bielefeld.de/projects/view/A6).

Christopher Voll is co-organizer of the Research Programme
[Combinatorial Methods in Enumerative Algebra](https://www.icts.res.in/program/cmea) at ICTS Bangalore in December 2024 (apply by 31 May
2024).


#### [Determinantal varieties and Pfaffians Lecture 1: Tensors from enumerative algebra](#determinantal-varieties-and-pfaffians-lecture-1-tensors-from-enumerative-algebra){:style="color:inherit"}

In this lecture, I will explain how naturally occurring counting
problems in the theory of (mostly infinite) groups connect to
tensors. Specifically, I will explain how matrices of linear forms
(over the integers, say) may be seen to comprise the commutator
structure of certain groups, and how an understanding of these
"commutator matrices" translates into an understanding of, say, the
normal subgroup or the representation growth of these groups.


#### [Determinantal varieties and Pfaffians Lecture 2: Tensors, Pfaffians, and p-adic integrals](#determinantal-varieties-and-pfaffians-lecture-2-tensors-pfaffians-and-p-adic-integrals){:style="color:inherit"}

We will explore how the geometry of the Pfaffians and more general
determinantal degeneracy loci of the commutator matrices of the groups
introduced in Lecture 1 reflects the complexity of the underlying
counting problems. I will explain how tools from p-adic integration
are being used to get to grips with this complexity. Some of these
geometric tools have a toric or tropical flavour, allowing for methods
from combinatorial algebra to be brought in.



#### [Determinantal varieties and Pfaffians Lecture 3: Where the wild things are - tensors and base change](#determinantal-varieties-and-pfaffians-lecture-3-where-the-wild-things-are---tensors-and-base-change){:style="color:inherit"}

Many of the counting problems sketched in these lectures have an
arithmetic nature, allowing naturally for a global-to-local
principle. This yields, equally naturally, families of p-adic
integrals associated with Z-defined tensors, indexed by the prime
numbers. Their variation with the prime numbers often reveils
intriguing and, in a sense I will make precise, "wild" variation of
the underlying (local) counting problems.

# [Linear methods for tensors](#linear-methods-for-tensors){:style="color:inherit"}

**Speaker:** 
<a href="https://brooksbank.scholar.bucknell.edu/" target="_blank">Peter A. Brooksbank</a>, Bucknell University

**Bio**: I am a Professor of Mathematics at Bucknell University, where I teach a range of courses including discrete mathematics and abstract algebra. I am also a Co-Director of the Dominguez Center for Data Science at Bucknell. I have research interests in computational algebra, discrete geometry, and multilinear algebra.

**Abstract:** These lectures concern the application of linear methods to tensor analysis. The ways in which linear methods are used in tensor theory are, of course, too numerous to list. However, these lectures focus on invariants of a tensor that can be computed as solutions of linear systems, and that possess an algebraic structure that can effectively be used to reveal corresponding structure in the tensor. The lectures will include some short software demos using the Magma system.

#### [Linear methods for tensors Lecture 1: Centroids](#linear-methods-for-tensors-lecture-1-centroids){:style="color:inherit"}

As well as providing an overview of the lecture series as a whole, the first lecture studies in detail an algebraic invariant of a tensor called the <i>centroid</i>. We will introduce the centroid as a generalized collection of scalars for the tensor, and we will see how it can be used to block-diagonalize a tensor. 

#### [Linear methods for tensors Lecture 2: Adjoints](#linear-methods-for-tensors-lecture-2-adjoints){:style="color:inherit"}

This lecture introduces another collection of scalars 
associated with a tensor: its ring of <i>adjoints</i>. We will discuss how adjoints can be used to reduce search spaces when testing for isomorphism between tensors. We will also develop some of the algebraic properties of the adjoint ring, and explain how to use these to discover other types of block decompositions in a tensor.

#### [Linear methods for tensors Lecture 3: Applications](#linear-methods-for-tensors-lecture-3-applications){:style="color:inherit"}

In the last lecture we will survey some applications and variations of the concepts and methods in lectures 1 & 2. For instance, we will look at tensors arising from <i>p</i>-groups that come with additional symmetries, and consider how to adapt our linear invariants to this new setting. We will also see how to apply linear techniques to restricted isomorphism problems and to certain group intersection problems. 

# [Tensor Isomorphisms](#tensor-isomorphisms){:style="color:inherit"}

**Speaker:** 
<a href="https://joshmaglione.com/" target="_blank">Joshua Maglione</a>, University of Galway

**Bio**: 
I am a Lecturer at the University of Galway, and my research interests concern isomorphism and enumeration problems from algebra, with a large emphasis on computation. I develop efficient algorithms to aid in various isomorphism problems, like the Group and Tensor Isomorphism Problems. I also apply combinatorial tools to understand and compute certain p-adic integrals coming from zeta functions of groups and rings and Igusa's zeta function.

#### [Tensor Isomorphisms Lecture 1: Mapping the Terrain of the Many Tensor Isomorphism Problems](#tensor-isomorphisms-lecture-1-mapping-the-terrain-of-the-many-tensor-isomorphism-problems){:style="color:inherit"}

Preparing for our journey up the mountain, we look at problems from algebra, geometry, and quantum information theory that help navigate through the many notions of tensor isomorphism. We formulate this as a decision problem, and we leverage the centroid to find some computational savings.

#### [Tensor Isomorphisms Lecture 2: An Isomorphologist's Toolkit](#tensor-isomorphisms-lecture-2-an-isomorphologists-toolkit){:style="color:inherit"}

In this lecture, we delve into the toolkit of an isomorphologist, examining the rich taxonomy of tensor isomorphism invariants. These include the adjoint algebras, derivation Lie algebras, and projective varieties coming from determinants and Pfaffians.

#### [Tensor Isomorphisms Lecture 3: Some of the Peaks of Tensor Isomorphism](#tensor-isomorphisms-lecture-3-some-of-the-peaks-of-tensor-isomorphism){:style="color:inherit"}

In the final lecture, we summit some of the many peaks and explore the vistas of efficient algorithms to decide isomorphism of tensors. We demonstrate how adjoint algebras help us decide isomorphism of a class of tensors in polynomial time. We optimize this approach by bringing in the Lie algebra of derivations, which yields the universally smallest search space cut out by algebras.

# [Tensors and graphs](#tensors-and-graphs){:style="color:inherit"}

**Speaker:** 
<a href="https://profiles.uts.edu.au/Youming.Qiao" target="_blank">Youming Qiao</a>, University of Technology Sydney

**Bio**: I am an associate professor of computer science at the University of Technology Sydney. Despite my computer science degree and affiliation, I mingle with mathematicians, and I dig into their toolboxes to see if they will solve problems of interest to me, such as polynomial identity testing and tensor isomorphism. On the other hand, I also try to provide some perspectives from the computer science side, in particular from computational complexity and algorithm design.

#### [Tensors and graphs Lecture 1: Structures](#tensors-and-graphs-lecture-1-structures){:style="color:inherit"}

Graphs are a prime object in combinatorics. In this lecture, I will first show how graphs naturally give rise to tensors. Based on this connection, I will present some correspondences between graph structures (independent sets, perfect matchings, and isomorphism) and tensor structures (totally-isotropic spaces, full-rank slices, and equivalence).
 

#### [Tensors and graphs Lecture 2: questions and techniques](#tensors-and-graphs-lecture-2-questions-and-techniques){:style="color:inherit"}
 
Continuing from the last lecture, I will start this lecture with some "combinatorial-type" questions for tensors and their backgrounds (in complexity theory, cryptography, and invariant theory). I will then discuss two techniques for tensors which have nice graph-theoretic correspondences. The first technique corresponds to the alternating path technique on graphs, a fundamental tool in studying graph matchings. The second technique corresponds to the graph colouring gadget, useful in complexity theory for graph isomorphism.

---


<!-- Example video embed snippet
<iframe width="560" height="315" src="https://www.youtube.com/embed/VqteyFC3M60?si=EbfzhFNSYzOr0RW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
-->


<br/>This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons Attribution 4.0 International License</a>