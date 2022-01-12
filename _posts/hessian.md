---
title: 'notes on the hessian'
category: 'note'
excerpt: 'a dive into the specifics of the hessian and its taylor approximation'
# coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2020-03-16T05:35:07.322Z'
author:
  name: Kareem
  # picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---

The Hessian matrix is a matrix of a multivariate function's second derivatives. It describes the "curvature" of the landscape produced by that function.


Preceding



Following.

I like to think of it as the Jaccobian of the gradient $J(\triangledown f)$.

$$
H(f)(x)_{i,j} = \frac{\partial^2}{\partial x_i \partial x_j} f(x)
$$

Anywhere the second derivatives are continuous the differential operators are commutative.

$$
\frac{\partial^2}{\partial x_i \partial x_j} f(x) = \frac{\partial^2}{\partial x_j \partial x_i} f(x)
$$


We can use this to create a second-order taylor series approximation of a function $f(x)$ around the current point $x^{(0)}$.

$$
f(x) \approx f(x_0) + (x-x_0)^T \triangledown f + \frac{1}{2} (x-x_0)^T H(x-x_0) \eqref{1}
$$

We only care about the local area around point x of the curve. At this point we can start talking about the "learning rate" $\epsilon$.


The new point $$x$$ will be given by $$x_0 - \epsilon \triangledown f(x_0)$$.

In theory, the taylor approximation is infinite, hence in our case we will incur some error because we cut it off at the second derivative, (see eq. 1), using a learning rate $\epsilon$, the new point $x$ is given by $x_0 - \epsilon g$. Subbing this we get,

$$
x = x_0 - \epsilon g
$$

The new point $x$ is the old $x_0$ minus a small step in the direction of the gradient:

- If the gradient is positive, it's pointing up.
- If the gradient is negative, it's pointing down.

This dictates the signage of the expression $x_0 - \epsilon g$.

Now we have,

$$
f(x_0 - \epsilon g) \approx f(x_0) - \epsilon g^Tg + \frac{1}{2} \epsilon^2 g^THg
$$
