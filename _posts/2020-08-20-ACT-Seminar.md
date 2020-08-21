---
# Uses this html: "_layout/post.html" as a template.
layout: post 
title:  Applied Category Theory (ACT) Seminar
author: james
# (Optional) Used to sort posts, not supported as of writing this.
categories: [ Open ]
---

[Amit Patel](Amit.Patel@ColoState.Edu) (Colorado State University)
[James Wilson](James.Wilson@ColoState.Edu) (Colorado State University)


----

- [Get Connected](#Get-Connected)
- [Future Topics](#Future-Topics)
- [Past Topics](Past-Topics)
- [Recommended](Recommended)
- [Some History](Some-History)

-------------

# Get Connected

Write to one of organizers to be added to the Zulip chat with discussions and Zoom links.

## About ACT

**Applied Category Theory** 
 
Wondering what this means?  Modern applications have to cope with numerous, interrelated systems.  Today, categories are being used to organize systems and insert theory where it is otherwise hard to find.  Examples include data structures for cloud computing, data analysis, formal verification, causality, and more.
 
All levels of experience are welcome. We are a friendly group happy to answer questions and just as happy to learn something from you.
 

## Future Topics

- **Logic in Categories** 
  *  Why? Because when you model real world problems, the classical logic of undergraduate mathematics is too basic to capture realities like likelihood of success, expectations in different modes, time dependent assumptions, limits on resource use etc.  These are all captured by different logics such as modal, temporal, linear, and intuitionistic logic -- all difficult philosophical studies to the lay mathematician.  Thankfully Category Theory models these logics faithfully with the familiar mathematics of maps, products, sums, tensor products, and such.  We will learn some things about categories and some more nuanced ways to reason about the real world.

- **Type Theory**
  * Why? Because computers are idiots.  They do not understand set theory and hence they are terrible at math.  Fortunately a number of mathematicians had trouble with Set Theory for their own reasons and they built an entire theory that not only recovers sets but far more and it even has been programmed.  Type theory, like the word data type, is that study, and it pairs nicely with categories.
- **Higher categories**
  * Why? Well there comes a point where you pay the cost of abstraction.  Just because you set aside the differences to learn something eventually you mean equality only up to some relations that you can deal with later.  Higher categories layer all these relations together to make it manageable but without in the end dismissing the differences.


## Past Topics

- Theorems for Free.
- Folds & Flats in Apache's Spark.
- Kleisli Composition and Categories.
- Monads and Adjunctions with examples.
- The Option Monad and Strict and Lazy Evaluation
- Algebraic Data Types and Pattern Matching
- Where are the categories in Haskell & Scala?
- Loops & Recursion: comparing compiled code in C, Java, and Scala.


## Recommended

**What to read?**  While you do not need to come prepared, along the way it will help to have some companion texts. I recommend
> [Functional Programming in Scala](https://www.manning.com/books/functional-programming-in-scala) by Paul Chiusano and Runar Bjarnason

This thin book features some of the most surprising applications  that will reshape how you think of applied mathematics.  From the use of mundane axioms in abstract algebra to prove programs are bug free to application of complex constructions in category theory to remove side-effects and make code that works in smoothly in parallel.  When you finish be sure to look also at the
companion solution manual packed with many more gems.

As a perk, this book is inexpensive and comes with a digital copy as well so you can have it as quick guide wherever you go.

**What programming language to learn?**

You do not have to program a thing...but even the best theoretical physicist wants to play with a laser sometimes, and as mathematician should likewise want to play with a computer.

C/C++, Java, and Python are safe comfortable choices with lots of tutorials, but to discover the mathematics of programming you might prefer to pick up modern language such as Scala, Haskell, Swift, C#, or OCaml.  Maybe even a proof assistant like Agda or Coq, or something in between like Idris and Lean.

It wouldn't hurt either to start using [GIT](https://git-scm.com) or its social-media platform [GIT-Hub](https://github.com/).  Similar to LaTeX, it is a pain at first, but you learn Git so you can be more productive in the long run.

## Some History

This seminar began as an excuse to let two professors brush up on things on the state of programming that had changed since they had spent their time in the trenches.  To save on embarrassement it would be done in secret.  And as to not waste the opportunity the students of the professors would be dragged along as well.  They focussed on a functional language called Scala because it had the right balance of use and good deal of math in the mix.  Since it was in private they would meet in the stairwell -- the **Scalawell**. 

Scalawell quickly became the worst-kept secret.  New students and postdocs showed each week.  We met to learn theory and applications of modern mathematics to modern programming.  You didn't have to program to participate, just come with a curiosity to puzzle about hard problems disguised as easy questions.  Some even wrote a paper. Since the meetings were in "secret", no question was too embarrassing to ask.  

That is the ethos of the seminar today. Came, ask, and make abstraction useful to your goals.

