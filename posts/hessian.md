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

I like to think of it as the Jaccobian of the gradient $J(\triangledown f)$.

$$
H(f)(x)_{i,j} = \frac{\partial^2}{\partial x_i \partial x_j} f(x)
$$

Anywhere the second derivatives are continuous the differential operators are commutative.

$$
\frac{\partial^2}{\partial x_i \partial x_j} f(x) = \frac{\partial^2}{\partial x_j \partial x_i} f(x)
$$


We can use this to create a second-order taylor approximation of a function $f(x)$ around the current point $x^{(0)}$.

$$
f(x) \approx f(x_0) + (x-x_0)^T \triangledown f + \frac{1}{2} (x-x_0)^T H(x-x_0)
$$

We only care about the local area around point x of the curve. At this point we can start talking about the "learning rate" $\epsilon$.

The new point $$x$$ will be given by,

$$
x_0 - \epsilon \triangledown f(x_0)
$$

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

where,
$f(x_0)$ is the original value of the funciton,
$\epsilon g^Tg$ is expected imporvement due to the slope of the function, and
$\frac{1}{2} \epsilon^2 g^THg$ is the correction to account for function's curvature.

Note that when $\frac{1}{2} \epsilon^2 g^THg$ is large enough, the gradient descent can move uphill.

Finally, the different terms in the Taylor approximation are just tools to help us adjust to the different properties of the landsacape.

- 1st term: **position**
- 2nd term: **direction**
- 3rd term: **curvature**

I like to refer to the above as the dance of accountability.

If the last term is positive, the optimal step that secreases the Taylor approximation the most yields:

$$
\epsilon^* = \frac{g^Tg}{g^THg}
$$