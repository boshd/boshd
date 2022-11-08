---
title: 'Public key cryptography'
category: 'note'
excerpt: 'how does it work internally -- on a high-ish level'
# coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2022-11-07T14:31:35+00:00'
author:
  name: Kareem
  # picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---

Public-key cryptography (asymmetric cryptography) is a subdomain of cryptography that deals with public-private key pairs.

What does that even mean? and why is it useful?

### Analogy

Here's a helpful analogy for PKC that I came up with back when I was learning about this technique. Imagine you're taking a stroll down a neighborhood and you find a house you like. You take out a random key and try to insert it into the keyhole; probably won't work right? You need a key (private key) that is compatible with the lock (public key). Notice that the lock (public key) is available to everyone to interact with, but the key is always kept private by the owner.

This is how PKC works (kind-of).

### Deep dive

The public key is derived from the private key and not vice versa. This is done using a method called elliptic curve multiplication:

$$
\displaylines{
  K = k * G \text{ } \\
}
\left\{
\begin{array}{c}
  K = \text{public key} \\
  k = \text{private key} \\
  G = \text{generator point}
\end{array}
\right.
$$

Inversion of this operation isn't as simple as dividing $\frac{K}{G}$. Solving for the private key in this scenario requires finding the discrete logarithm, which is computationally infeasible for a large enough key.

> **_Note:_** The elliptic curve space does not allow divisions, allowing only one-way multiplication.

One of the most common types of elliptic curves used today is the **secp256k1** which is defined by,

$$
y^2 \text{ } mod \text{ } p = (\times 3 + 7) \text{ } mod \text{ } p \\
$$

$mod \text{ } p$ indicates that the curve is defined over a finite field of prime order $p((F_{p}))$, where $p = 2^{256}-2^{32}-2^9-2^8-2^7-2^6-2^4-1$, which is a very large prime.

The multiplicity of $g$ produces a *seemingly* random point on the elliptic curve. Guessing the multiplier for a high prime order is computationally *infeasible* due to difficulty.

![elliptic curve space example](/public/posts/pkc/fig1.png "Elliptic curve space example")

Elliptic curve addition is defined by $P_3=P_1+P_2$, where $P_3$ is also on the elliptic curve. Geometrically, a straight line is drawn between $P_1$ & $P_2$ which will intersect the curve in **one** additional place, $P_3$. $P_3'=(x,y)$, then reflect in the x-axis to get $P_3=(x,-y)$.
