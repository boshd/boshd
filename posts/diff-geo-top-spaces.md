---
title: 'Topological spaces and Manifolds'
category: 'note'
excerpt: 'A tiny primer on topological spaces'
coverImage: '../top-space.png'
date: '2023-12-29T14:31:35+00:00'
author:
  name: Kareem
ogImage:
  url: "../top-space.png"
---

### Definition
A **topological space** is a fundamental concept in the field of topology, a branch of mathematics concerned with the properties of space that are preserved under continuous transformations. Formally, a topological space $X$ is defined by a set of points $x \in X$ and a set of subsets of $X$, known as the critical neighbourhoods $N(X)$, for each point. These neighbourhoods help us understand the local structure of the space.

### Axioms of Topology
Topological spaces adhere to the following axioms:

1. **Inclusion of Point in Neighbourhood**: If $U$ is a neighbourhood of $x$ ($U \in N(X)$), then $x$ is an element of $U$.
2. **Neighbourhood Containment**: If $V \subset X$ and $U \subset V$, and $U$ is a neighbourhood of $x$, then $V$ is also a neighbourhood of $x$.
3. **Intersection Property**: The intersection of two neighbourhoods of $x$ is also a neighbourhood of $x$.
4. **Neighbourhood of Neighbourhood**: Any neighbourhood $U$ of $x$ includes a neighbourhood $V$ of $x$ such that $U$ is a neighbourhood of all points in $V$.

### Homeomorphism
A function $f: X \rightarrow Y$ between two topological spaces is a **homeomorphism** if it satisfies three conditions:

1. **Bijection**: $f$ is one-to-one and onto.
2. **Continuity**: $f$ does not tear or glue the space; it's a smooth transformation.
3. **Inverse Continuity**: The inverse function $f^{-1}$ is also continuous.

![diag1](../top-sp-d1.png "Diag1")

When such a function exists, we say $X$ and $Y$ are **homeomorphic**, or topologically equivalent. This means they have the same shape or structure from a topological viewpoint, even if they look different geometrically.

### The Role of Manifolds in Topology

**Manifolds** are a special class of topological spaces that locally resemble Euclidean space. A topological space $M$ is a manifold if, for all points $x \in M$, there exists a neighbourhood $U$ of $x$ and some integer $m$ such that $U$ is homeomorphic to a subset of $\mathbb{R}^n$. The smallest such $n$ is called the dimension of the manifold. Manifolds are crucial in understanding complex shapes and forms in higher dimensions and have applications in physics, engineering, and beyond.

Understanding topological spaces and their properties is essential in the realm of advanced mathematics and theoretical physics. They offer a framework to study continuous transformations and intrinsic properties of spaces, irrespective of their exact shape or size.
