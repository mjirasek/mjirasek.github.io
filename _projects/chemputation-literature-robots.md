---
layout: page
title: Literature-to-Robot Chemputation
description: Turning synthetic procedures into verified robotic execution workflows.
img: assets/img/publication_preview/2024_arxiv_pagel2024validationscientificliteraturechemputation.png
importance: 2
category: platforms
related_publications: true
---

This project connects chemical literature, language models, XDL, and robotic synthesis. The goal is not just to extract text from papers, but to turn procedures into executable, checkable instructions for automated chemistry.

## Workflow

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/2024_arxiv_pagel2024validationscientificliteraturechemputation.png" title="Chemputation workflow" class="img-fluid rounded project-figure z-depth-1" %}
  </div>
</div>

The central design principle is verification. A language model can help parse and translate experimental procedures, but the output has to be constrained by a chemical execution language and tested against available hardware before anything reaches the robot.

## Research Direction

This is a practical route toward self-driving laboratories that can use the published literature as a starting point while remaining grounded in executable chemistry.
