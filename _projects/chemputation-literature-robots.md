---
layout: page
title: Literature-to-Robot Chemputation
description: Turning synthetic procedures into verified robotic execution workflows.
img: assets/img/publication_preview/2024_arxiv_pagel2024validationscientificliteraturechemputation.png
importance: 2
category: platforms
related_publications: true
---

Chemputation means programming a chemical robot to run a synthesis using a symbolic, hardware-independent language rather than a human-written protocol. The idea works well when the procedure is already written in that language. Most synthetic chemistry is not. It sits in papers, written for other chemists, full of the ambiguity and shorthand that a trained person resolves without noticing and a robot cannot resolve at all. This project builds the pipeline that closes that gap {% cite pagel_validation_2024 %}.

## From Paper to Protocol

{% include project_figure.liquid loading="eager" path="assets/img/publication_preview/2024_arxiv_pagel2024validationscientificliteraturechemputation.png" title="Chemputation workflow" caption="A synthetic procedure moves from literature text through XDL translation, simulation, and robotic execution." %}

The workflow runs in four stages. A language model reads the paper and extracts the synthetic procedure and its analytical data. That procedure is translated into XDL, the eXtensible Description Language used to control chemputers regardless of the specific hardware in the lab. The XDL is then simulated against a hardware-specific setup before anything physical happens. Only once the simulation checks out does the procedure run on the actual robotic system.

The XDL step is the safety layer, not a formatting convenience. A language model reading a paper will occasionally hallucinate a step, a reagent, or a quantity that was never in the source text. XDL is a constrained, verifiable format, so a hallucinated instruction that does not correspond to real chemistry simply fails to compile into something the robot can run. The system does not have to trust the language model. It has to trust the compiler.

## What Was Actually Run

We validated the pipeline on four real syntheses taken directly from published literature, extracted, translated, simulated, and executed on a chemputer without a human rewriting the procedure by hand. That number sounds small next to the volume of chemistry published every year, and it is. The point was not throughput. It was showing that the full chain, from raw paper text to a completed physical synthesis, can run without a chemist sitting in the middle translating each step.

## Where This Fits

This is the part of my group's work that is least about discovery and most about infrastructure. Autonomous platforms that search chemical space still need a way to bring in the enormous amount of chemistry that already exists in the literature, rather than rediscovering it from scratch. A verified literature-to-robot pipeline is what makes decades of published procedures usable as a starting point for automated experimentation instead of a reference a person has to read and retype.
