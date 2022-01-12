---
title: 'notes on the pumping lemma'
category: 'note'
excerpt: 'mini note on one of the core concepts in nonregular languages'
# coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2020-03-16T05:35:07.322Z'
author:
  name: Kareem
  # picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---

Starting with a pumping length $p$, any string $s$ with at least length $p$, that string can be split into $s=xyz$, satisfying:

$$
\begin{cases}
    \text{for each } i>=0, xy^iz \text{ in } A; \text{ }(\text{can be } \epsilon)\\
    |y|>0; \text{ }(\text{cannot be } \epsilon)\\
    |xy| <= p; \text{ }(\text{can be } \epsilon)
\end{cases}
$$