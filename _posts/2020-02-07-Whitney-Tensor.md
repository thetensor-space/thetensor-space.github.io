---
# Uses this html: "_layout/post.html" as a template.
layout: post 
title:  The Whitney Tensor Product
# (Optional) Used to sort posts, not supported as of writing this.
categories: [ Articles ]
---

![](/uploads/images/Tensor-Product-Def-2-1-D.gif)
<p>
<a rel="license" href="http://creativecommons.org/licenses/by/4.0/" target="_blank"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br/> James B. Wilson
</p>

---

The concept of $U\otimes V$ can be found in most graduate textbooks on a abstract algebra because its definition seems to depend on abstractions such a free modules and universal mapping properties which are not yet standard to undergraduate context.  However, tensors are appearing in applications of data science and physics that apply to those not pursuing graduate mathematics.  What follows is a definition of $U\otimes V$ accessible with the tools of linear algebra alone.  Near the end we develop generalizations and show we can recover the now established definition with coordinates.

### The tensor product with coordinates

Let $K$ be the coefficients of our tensor.  These are often inside a field but the integers and other coefficients can be used as well.  Let use assume $K^a$ is a list (a row) vector and $v^{\top}$ denote a transpose.

$$
\otimes:K^{d_2}\times K^{d_1}\rightarrowtail M_{d_2\times d_1}(K)
\qquad
v\otimes u := v^{\top}u.
$$
This a distributive product as the following illustration demonstrates.

![](/uploads/images/Tensor-Product-Def-2d.gif)



**Observation.** Every matrix $v^{\top}u$ is a matrix of rank $1$, for example with $v=(1,7)$ and $u=(1,2,3)$
$$
v\otimes u = \begin{bmatrix}
1 & 2 & 3\\
7 & 14 & 21
\end{bmatrix}
$$
If we row reduce we are in a sense mapping $(1,7)\mapsto e_1^{(2)}=(1,0)$ and indeed the above matrix is row-reduced to:
$$
\begin{bmatrix}
1 & 2 & 3\\
0 & 0 & 0 
\end{bmatrix}
$$
Likewise if we column reduce we map $u=(1,2,3)$ to $e_1^{(3)}=(1,0,0)$ and get
$$
\begin{bmatrix}
1 & 0 & 0\\
7 & 0 & 0 
\end{bmatrix}
$$
And if map $v\otimes u$ to $e_1^{(2)}\otimes e_1^{(3)}$
$$
\begin{bmatrix}
1 & 0 & 0\\
0 & 0 & 0 
\end{bmatrix}
$$
In the literature these tensors are called **simple tensors** or **pure tensors**.  This is a bit unfortunate as it has stunted the growth of tensor concepts from the algebriac perspective.  In particular the words "simple" and "pure" do not hint at the concept of rank 2, rank 3, etc. tensors.  Speaking of **rank 1 tensors** not only connects to the a familiar coordinate concept it hints at an entire hierarchy of tensor complexity.

### Tensor products with many spaces

We can iterate the above definition
$$
K^{d_3}\otimes K^{d_2}\otimes K^{d_1}
:= K^{d_3}\otimes (K^{d_2}\otimes K^{d_1})
$$
Its elements are 3-way arrays.  If you build it inductively it would make the following distributive product.

![](/uploads/images/Tensor-Product-Def-2-1-D.gif)

But why not define things this way?
$$
K^{d_3}\otimes K^{d_2}\otimes K^{d_1}
:= (K^{d_3}\otimes K^{d_2})\otimes K^{d_1}
$$
This hits at problem in Whitney's definition as a **binary** product.  It is popular to define tensor products as binary operations $U\otimes V$ and then argue for relations such as associativity and commutativity, e.g. arguing that there is no material difference between our two definitions.
$$
(K^{d_3}\otimes K^{d_2})\otimes K^{d_1}
 \cong K^{d_3}\otimes (K^{d_2}\otimes K^{d_1})
$$
This can be done but there is an obvious alternative with coordinates.  We can define a **ternary** tensor product whose elements look like this.

![](/uploads/images/Tensor-Product-Def-3D.gif)


### Tensors with general modules

For more complicated modules $V_i$ we of course have more to do.  Suppose $V_i=\langle x_1,\ldots,x_{d_i}\rangle$.  Then there is a surjective homomorphism
$$
\pi_i:K^{d_i}\to V_i
$$
and $R_i:=\ker \pi_i$ embeds into $K^{d_i}$ so that we get an exact sequence
$$
0\to R_i\to K^{d_i}\to V_i\to 0.
$$
It would be fine to have an infinite number of generators as well.
Putting this together we get the ingredients of a general tensor.

![](/uploads/images/products/Whitney-Tensor-product.png)

The horizontal lines are exact sequences and the vertical lines are Curryed maps, i.e. 
$$
K^{d^2}\to (K^{d_1}\to \mathbb{M}_{d_2\times d_1}(K))
$$
In the usual convention of Currying one drops the parenthesis once the context of the notion has been set.  So in the diagram the vertical lines are bilinear maps.


What is happening here is the concept of an **ideal**.  Ideals are substructures of products that absorb products on the left and on the right.  The set $R_2\otimes K^{d_1}$ absorbs $K^{d_1}$ acting on the right, and $K^{d_2}\otimes R_1$ absorbs multiplication by $K^{d_2}$ on the left.  Since 
$$
R_2\otimes K^{d_1}+K^{d_2}\otimes R_1
$$
is an ideal of $\mathbb{M}_{d_2\times d_1}(K)=K^{d_2}\otimes K^{d_1}$, its quotient is a well-defined distributive product
$$
V_2\otimes V_1 := \mathbb{M}_{d_2\times d_1}(K)/(R_2\otimes K^{d_1}+K^{d_2}\otimes R_1).
$$

For a ternary tensor product we use three rows, etc.  


### Universal Mapping Properties


### What is gained by Whitney's original definition?

The coordinate method of tensor products is amenable to calculations and builds on somewhat simple concepts such as matrices and arrays.  Whether or not it is the right place to start is a matter of pedagogical debate and background.  So what do we gain by investing in Whitney's definition?

Whitney's tensor products are sophisticated coordinate free constructions.  They rely on concepts such as universal mapping properties which are often pedagogical goals in their own right.Above all, Whitney's definition is by now well-known and part of the essential history of the topic.  
