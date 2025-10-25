---
layout: page
title: Alien Detector
description: Experimentally quantifying molecular complexity using Assembly Theory and spectroscopy
img: assets/img/aliens.png
importance: 1
category: work
related_publications: true
---

Well, this is the kind of project you cannot bring as an example of your skills to a serious interview. Yet, it is fairly well appreciated, published in ACS Central Science with significant impact in the field of astrobiology and molecular complexity.

"Alien Detector" is our colloquial name for what is formally known as Assembly Theory-based Molecular Complexity Detection. This research presents the first experimentally quantifiable approach to determining molecular assembly complexity, a potential biosignature for detecting life.

## The Core Innovation

<div class="row">
   <div class="col-sm mt-3 mt-md-0">
       {% include figure.liquid loading="eager" path="assets/img/molecular_assembly_spectroscopy.png" title="Molecular Assembly and Spectroscopic Techniques" class="img-fluid rounded z-depth-1" %}
   </div>
</div>
<div class="caption">
   Molecular assembly pathway showing how complex molecules are built from simpler building blocks, and the three spectroscopic techniques (NMR, IR, MS/MS) used to experimentally measure molecular complexity.
</div>

Our approach uses Assembly Theory, which measures the minimum number of steps needed to build a molecule from its basic parts. The key insight: molecules with high assembly indices (MA > 15) are too complex to form by chance and likely indicate biological or technological origins.

## New Ground in Astrobiology

We've developed three independent experimental methods to quickly estimate molecular assembly indices. NMR works by counting different carbon environments, with quaternary carbons contributing most to complexity. IR analyzes peak counts in the fingerprint region (400-1500 cm⁻¹). MS/MS uses a recursive algorithm to map fragmentation patterns to assembly pathways.

<div class="row">
   <div class="col-sm mt-3 mt-md-0">
       {% include figure.liquid loading="eager" path="assets/img/correlation_plots.png" title="Correlation Results" class="img-fluid rounded z-depth-1" %}
   </div>
</div>
<div class="caption">
   Correlation between computed molecular assembly and experimentally inferred values across our three techniques, showing strong correlations (0.75-0.87).
</div>

## The "Alien" Connection

The nickname "Alien Detector" comes from the fact that we can now experimentally detect molecular signatures of life without knowing what we're looking for. This could be useful for missions to Mars, Enceladus, and Titan, studying life's origins on Earth, or even detecting technosignatures from advanced civilizations.

The nice thing about our approach is that you don't need to know a molecule's structure beforehand. We can assess complexity directly from spectroscopic data, which is perfect for analyzing unknown samples from who-knows-where.

## Technical Achievement

We tested our methods on datasets of 10,000+ molecules computationally and ~100 molecules experimentally. The correlation between predicted and actual molecular assembly values were solid: combined techniques showed 0.88-0.91 correlation, individual methods showed 0.73-0.87 correlation, and we could successfully tell apart high-complexity biomolecules from simple compounds with similar molecular weights.

## Impact and Recognition

This work represents a shift in how we approach the search for life beyond Earth. By providing an experimentally measurable complexity metric, we've created a tool that could change astrobiology.

The research has garnered attention in the scientific community and has implications for understanding what distinguishes living systems from regular chemistry.

Who knows? Maybe one day this "Alien Detector" will actually detect aliens. Until then, it's helping us understand what makes life special, and that's pretty cool.