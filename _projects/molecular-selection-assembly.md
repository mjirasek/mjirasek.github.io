---
layout: page
title: Molecular Selection and Assembly
description: Assembly Theory approaches to selection, molecular histories, and chemical evolution.
img: assets/img/publication_preview/2024_arxiv_kahana2024constructing.png
importance: 3
category: research
related_publications: true
---

Here is a question that sounds simple until you try to answer it experimentally. If you hand me an unlabeled mixture of molecules, with no context and no reference database, can I tell you whether that mixture was shaped by selection, or whether it just fell out of an unconstrained chemical process. Biology answers this constantly by pointing at DNA and RNA, sequences that were clearly filtered by evolution. We wanted an answer that does not depend on knowing whether DNA is even present. That is what this project has been trying to build, one experiment at a time, since 2023.

## Closed-Loop Selection, No Reference Needed

{% include project_figure.liquid loading="eager" path="assets/img/publication_preview/2024_arxiv_kahana2024constructing.png" title="Molecular selection and assembly" caption="Assembly trees built directly from mass spectrometry fragmentation, without first identifying the molecules involved." %}

The earliest version of this work, run as closed-loop robotic experiments and reported at the 2023 Conference on Artificial Life {% cite kahana_identifying_2023 %}, tested whether Assembly Theory could flag molecular selection as it happened, cycle by cycle, without a chemist deciding in advance what "selected" should look like. That constraint, no prior model of the target, is the part that makes the problem hard. Most methods for spotting interesting chemistry lean on knowing roughly what you expect to find.

We later sharpened this into something we could put a number on {% cite jirasek2025quantifyingemergenceselectionprior %}. The setup uses libraries of peptides built from amino acid building blocks, some reactions left to run freely and some steered by evolved proteases, enzymes that cut and rebuild peptide bonds with a bias toward particular sequences. We tracked how uniformly the resulting sequence space was sampled, a quantity we call the exploration ratio. Left alone, the reactions came out close to random, with exploration ratios between 0.85 and 0.95. Add a protease with sequence preferences, and that ratio drops to somewhere between 0.51 and 0.75, a real and repeatable narrowing of what gets made. Paired with an Assembly value that combines a molecule's assembly index with how many copies of it show up, the two numbers together separate directed chemistry from noise more reliably than either one alone. It is a blunt instrument, in the sense that it does not tell you what the enzyme is doing mechanistically. But it does not need to. It only needs to tell you that something is doing something, which turns out to be the harder problem.

## From a Selection Signal to a Tree

None of that is useful if it only works on the peptide libraries we designed it for. So we pushed the same reasoning onto real, uncontrolled samples using tandem mass spectrometry {% cite kahana2024constructing %}. Across 74 samples spanning biological and non-biological origin, we picked up 24,102 distinct analytes, 9,262 of them chemically unique, and 59,518 fragment ions, 6,755 unique, all without ever solving a single molecular structure. Feeding that fragmentation data through an assembly-based comparison let us build a phylogenetic-style tree, one that grouped samples the way genome sequencing would have, despite never touching a genome. We also tracked bacterial colonies across generations using nothing but their molecular fingerprints and recovered lineage relationships that matched what we already knew from culture records.

That result is the one I find hardest to explain briefly, and the one I am proudest of. A phylogenetic tree usually means DNA. Ours came from mass spectrometry fragmentation patterns and a complexity metric, applied blind to what the molecules actually were. If that generalizes, it gives us a way to ask evolutionary questions about samples where sequencing is not an option, degraded biological material, alien soil, or a flask of prebiotic chemistry that never had a genome to begin with.

## What This Is Actually For

I will be honest about where this stands. We are not claiming to have solved the origin of selection, and I am wary of anyone who tells you a single ratio explains how life started choosing its own chemistry. What we have is a measurable, repeatable signal that separates directed chemical exploration from undirected chemical exploration, tested first on peptides we controlled and then on real biological samples we did not. That is a tool, not a theory of everything. It slots directly into the autonomous chemistry platforms my team runs day to day, giving them a way to notice, in real time, when a reaction has stopped behaving randomly and started behaving like it is being pushed somewhere. Whether that push comes from an enzyme, a prebiotic catalyst, or something we have not thought of yet is the next question, and it is the one we are actually working on now.
