---
title: Tame Genus
subtitle:
tags: [Isomorphism, Groups]
author: [pete, josh, james]
---

The Tame Genus package provides polynomial-time algorithms to compute automorphism groups and decide isomorphism for "tame genus" $p$-groups and alternating $3$-tensors. These include 
- $d$-generator $p$-groups of order $p^{d + 2}$, exponent $p$, and class $2$,
- $3$-tensors of the form $\mathbb{F}_q^d\times \mathbb{F}_q^d\rightarrowtail \mathbb{F}_q^2$.

These algorithms can decide isomorphism on tame genus groups of of order $5^{256}$ in less than an hour. They are based on work done by P. A. Brooksbank, J. Maglione, and J. B. Wilson (<a href="https://doi.org/10.1016/j.jalgebra.2016.12.007" target="_blank">J. Algebra 2017</a>). Sample runtimes for deciding isomorphism can be found in the same paper. 

![](/uploads/images/genus2-data.png)

## How to get started

To see if a $p$-group or $3$-tensor is suitable for the Tame Genus package, use either
- `IsTameGenusGroup`, or  
- `IsTameGenusTensor`.

To build examples of your own, can use
- `TGRandomGroup`, and 
- `RandomGenus2Group`.

Decide isomorphism, construct the automorphism group, or determine a canonical tame-genus signature. These functions have **prefix** `TG`. 

Examples: 
- `TGIsIsomorphic`
- `TGSignature`
- `TGPseudoIsometryGroup`

## More information

All the functions are documented in the `TameGenus.pdf` found at the repo. 

<a href="https://github.com/thetensor-space/TameGenus#readme" target="_blank">Tame Genus Files</a>

<a href="https://github.com/thetensor-space/TameGenus/blob/master/doc/TameGenus.pdf" target="_blank"> Tame Genus Manual</a>

<p>
<a rel="license" href="http://creativecommons.org/licenses/by/4.0/" target="_blank"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br/> P.A. Brooksbank, J. Maglione, J. B. Wilson
</p>