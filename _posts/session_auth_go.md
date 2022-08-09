---
title: 'building auth sessions from scratch in go'
category: 'How does the internet work?'
excerpt: 'How does the in'
# coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2022-07-06T05:35:07.322Z'
author:
  name: Kareem Arab
  # picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---

This page assumes that a signer is setup to serve the certificates API. The Kubernetes controller manager provides a default implementation of a signer. To enable it, pass the --cluster-signing-cert-file and --cluster-signing-key-file parameters to the controller manager with paths to your Certificate Authority's keypair.

```go {1-3,4} /carrot/
func (h *handler) Login(w http.ResponseWriter, r *http.Request) error {

}
```

This page assumes that a signer is setup to serve the certificates API. The Kubernetes controller manager provides a default implementation of a signer. To enable it, pass the --cluster-signing-cert-file and --cluster-signing-key-file parameters to the controller manager with paths to your Certificate Authority's keypair.