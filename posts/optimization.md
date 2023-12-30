---
title: "Gradient descent and beyond"
category: "note"
excerpt: "Gradient descent & co."
coverImage: '../loss-landscape.png'
date: "2023-03-15T05:35:07.322Z"
author:
  name: Kareem
  # picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: "https://kareemarab.com/gd.jpeg"
---

In machine learning, optimization is king. Finding the best possible values for a model's parameters is crucial for creating accurate models that can yield useful predictions. At the heart of a machine learning algorithm lies a powerful optimization technique known as gradient descent that iteratively tweaks a model's parameters in the direction of steepest descent, minimizing its loss function. Beyond this foundational method lies a wealth of extensions, refinements, and alternatives developed over the years to tackle the challenges of modern machine learning. In this article, I'll briefly introduce the Gradient Descent and Newton method techniques in their simplest form. Stay tuned for more articles on this topic.


## Vanilla gradient descent

Gradient descent is an algorithm that minimizes a given model's loss function based on calculating the gradients of the loss landscape. Believe it or not, Gradient Descent was introduced by mathemetician and physicist Louis Augustin Cauchy in *1847*.

We start with a loss/error function $L_\varepsilon\$ that qunatifies the distance between a model's predictions and the true values. Starting out with random weights, the goal is to tweak them until the error is as small as possible.

Tweaking the parameters is done by calculating the gradient of the loss function at a specific point and determining which direction we need to take to minimize the loss. This is given by

$$
x_{n+1} = x_{n} - \epsilon \nabla f(x_{n})
$$

where $\epsilon$ is the learning rate or step size.

#### **Gradient**

The gradient is a vector of first-order derivatives of a scalar-valued function. It is given by:

$$
\nabla f(x,y, ..., z) = \begin{bmatrix}
                    \frac{\partial f}{\partial x} \\
                    \frac{\partial f}{\partial y} \\
                    \vdots \\
                    \frac{\partial f}{\partial z}
                  \end{bmatrix}
$$


The gradient helps us measure the direction of the fastest rate of increase; but in GD, we negate this expression because we're interested in the fastest rate of descent. Imagine looking down at the peak of a mountain range; what is the quickest path to the bottom? That is what the gradient tells us for any function in $R^{n}$.

Let's begin with a simple example. How do you find the minimum of the following function?

$$
f(x) = x^{2}
$$

Let's first calculate the gradient of  w.r.t $x$, which is simply the derivative:

$$
\frac{\partial f}{\partial x} = 2x
$$

Then let's set the learning rate $\epsilon=0.1$ and pick a random point $x_{0}=4$, to begin with. We can then take steps in the direction of the negative gradient of the function as follows, using the gradient descent equation we defined above:

$$
x_{1} = 3 - (0.1 * 2(3)) = 2.4
$$
$$
x_{2} = 2.4 - (0.1 * 2(2.4)) = 1.92
$$
$$
x_{3} = 1.92 - (0.1 * 2(1.92)) = 1.536
$$

$$
\vdots
$$

![](../5figs.png)

As we can see in the figures above, picking a suitable value for $\epsilon$ is very important to ensure that our algorithm behaves correctly. Selecting a value for $\epsilon$ that is too small can result in us undershooting the minimum and taking a long time to arrive there ($\epsilon=0.2$ figure). On the other hand, if we pick a value for $\epsilon$ that is too large, we risk overshooting the minimum, as shown in the $\epsilon=0.8$ figure.

And that's it (for the simplest form of GD)! We calculated the gradient of $x^2$, defined our optimization method $x_{n+1} = x_{n} - \epsilon \nabla f(x_{n})$, picked a suitable value for our learning rate $\epsilon$, selected a random starting point $x_0$ and successfully found the minimum.

In practice, we are often interested in finding the minimum of much more complicated functions over many iterations, known as forward and backward propagation, but that's a topic for another time.

## **Bonus: why stop at the gradient?**

## Newton's method and the Hessian

Newton's method is another powerful optimization technique that can help us minimize our loss function $L_\varepsilon\$. Unlike Gradient Descent, Newton's method requires that our loss function $L_\varepsilon\$ be twice-differentiable.

The Hessian matrix is a matrix of the second derivatives of a multivariate function. It describes the curvature of the landscape produced by that function. In other words, the Hessian matrix tells us how much the gradient of a function changes as we move along each coordinate axis.

We define the Hessian matrix of a function $f(x)$ as follows:

$$
H(f)(x)_{i,j} = \frac{\partial^2}{\partial x_i \partial x_j} f(x)
$$

$$
H(f) = \begin{bmatrix}
\dfrac{\partial^2 f}{\partial x_1^2} & \dfrac{\partial^2 f}{\partial x_1 \partial x_2} & \ldots & \dfrac{\partial^2 f}{\partial x_1 \partial x_n} \\
\dfrac{\partial^2 f}{\partial x_2 \partial x_1} & \dfrac{\partial^2 f}{\partial x_2^2} & \ldots & \dfrac{\partial^2 f}{\partial x_2 \partial x_n} \\
\vdots & \vdots & \ddots & \vdots\\
\dfrac{\partial^2 f}{\partial x_n \partial x_1} & \dfrac{\partial^2 f}{\partial x_n \partial x_2} & \ldots & \dfrac{\partial^2 f}{\partial x_n^2}
\end{bmatrix}
$$

Here, $H(f)(x)$ is the Hessian matrix of the function $f$ evaluated at point $x$, and $H_{i,j}(f)(x)$ is its $(i,j)$-th entry.

Also, note that if the second derivatives are continuous, the differential operators are commutative,

$$
\frac{\partial^2}{\partial x_i \partial x_j} f(x) = \frac{\partial^2}{\partial x_j \partial x_i} f(x)
$$

## Taylor Approximation

Because the Hessian matrix requires an enormous amount of compute and is sometimes intractable, we look to approximate it using a second-order Taylor approximation around the current point $x^{(0)}$:

$$
f(x) \approx f(x_0) + (x-x_0)^T \triangledown f(x) + \frac{1}{2} (x-x_0)^T H(f)(x-x_0)
$$

Here, $\nabla f(x)$ is the gradient of the function $f$ evaluated at point $x$. And this approximation is helpful because it captures the local behavior of the function around the point $x$.

Recall that an update is given by,

$$
x = x_{0} - \epsilon g
$$

Therefore, the new point $x$ is given by $x_0 - \epsilon g$. If we substitute this expression in the approximation, we get,

$$
f(x_0 - \epsilon g) \approx f(x_0) - \epsilon g^Tg + \frac{1}{2} \epsilon^2 g^THg
$$

where,
$f(x_0)$ is the original value of the funciton,
$\epsilon g^Tg$ is the expected imporvement due to the function's slope, and
$\frac{1}{2} \epsilon^2 g^THg$ is the correction to account for the function's curvature.

Note that when $\frac{1}{2} \epsilon^2 g^THg$ is large enough, the algorithm can diverge. On the other hand, if our approximation is sufficiently accurate, we converge very quickly.

Finally, the different terms in the Taylor approximation are just tools to help us adjust to the different properties of the landsacape. If the last term is positive, the optimal step that effectively decreases the Taylor approximation yields:

$$
\epsilon^* = \frac{g^Tg}{g^THg}
$$

We can use this optimal step size $\epsilon^*$ to update our current point $x_0$ as follows:

$$
x = x_0 - \epsilon g
$$

This update rule is known as the Newton-Raphson method, and it can converge much faster than gradient descent since it takes into account the curvature of the landscape. However, the computation of the Hessian matrix can be expensive for high-dimensional functions, and it may not always be positive definite, which is a requirement for the method to work properly.

In practice, gradient descent is often a more practical optimization algorithm, as it is simpler to implement and can work well for many optimization problems. However, there are cases where Newton-Raphson method or its variants, such as quasi-Newton methods like Broyden-Fletcher-Goldfarb-Shanno (BFGS) and limited-memory BFGS (L-BFGS), can outperform gradient descent.

And just like that, we have successfully defined two of the most important optimzation methods in modern optimization theory. If you found this useful and would like to be notified of future articles on (but not limited to) the following topics:
- Computation theory
- ML
- System design
- Miscellaneous

Drop your email [here](https://vs6itw50puy.typeform.com/to/YWqHUfk5)