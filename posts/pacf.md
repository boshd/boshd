---
title: 'Partial auto-correlation function'
category: 'note'
excerpt: 'wtf is a pacf anyway?'
# coverImage: './public/posts/figure1.png'
date: '2022-10-05T19:11:01+00:00'
author:
  name: Kareem
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---

This function gives the partial correlation between a time-series $y_t$ and $y_{t-1}$, excluding all the intermediary values. For example, given time-series

$$
y \rightarrow y_{t-4},
$$

the partial correlation will include $y_t$ & $y_{t-4}$ and exclude $y_{t-3}$, $y_{t-2}$ and $y_{t-1}$.

