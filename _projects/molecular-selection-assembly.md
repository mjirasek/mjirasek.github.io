---
layout: page
title: Molecular Selection and Assembly
description: Assembly Theory approaches to selection, molecular histories, and chemical evolution.
img: assets/img/publication_preview/2024_arxiv_kahana2024constructing.png
importance: 3
category: research
related_publications: true
---

A central challenge in detecting molecular selection is doing so without prior knowledge of the target sequence or structure. Biology solves this by pointing at DNA and RNA, sequences filtered by evolution. This project asks whether selection can be detected without assuming DNA is present, using Assembly Theory instead of sequence comparison.

## Closed-Loop Selection, No Reference Needed

The earliest version of this work used closed-loop robotic experiments, reported at the 2023 Conference on Artificial Life {% cite kahana_identifying_2023 %}. It tested whether Assembly Theory could flag molecular selection as it happened, without a predefined model of the target. Most methods for identifying interesting chemistry rely on knowing roughly what to expect. This one does not.

This was later formalized into a quantitative metric {% cite jirasek2025quantifyingemergenceselectionprior %}. The setup uses peptide libraries built from amino acid building blocks. Some reactions run freely, others are steered by evolved proteases, enzymes that cut and rebuild peptide bonds with a bias toward particular sequences. We measured how uniformly the resulting sequence space was sampled, a quantity we call the exploration ratio. Unguided reactions produced exploration ratios between 0.85 and 0.95, close to random. Protease-steered reactions dropped to between 0.51 and 0.75, a repeatable narrowing of the sequence space. Combined with an Assembly value, which integrates a molecule's assembly index with its copy number, the two metrics together separate directed chemistry from noise more reliably than either alone. The method does not identify the mechanism behind the bias. It identifies that a bias exists, which is the harder and more general problem.

## From a Selection Signal to a Tree

{% include project_figure.liquid loading="eager" path="assets/img/publication_preview/2024_arxiv_kahana2024constructing.png" title="Molecular selection and assembly" caption="Assembly trees built directly from mass spectrometry fragmentation, without first identifying the molecules involved." %}

The same approach was tested on real, uncontrolled samples using tandem mass spectrometry {% cite kahana2024constructing %}. Across 74 samples of biological and non-biological origin, we identified 24,102 distinct analytes, 9,262 chemically unique, and 59,518 fragment ions, 6,755 unique, without solving a single molecular structure. The fragmentation data, compared using assembly-based metrics, produced a phylogenetic-style tree that grouped samples consistently with genome-based classification, despite using no genomic data. The same method tracked bacterial colonies across generations using only their molecular fingerprints, recovering lineage relationships that matched existing culture records.

A phylogenetic tree is normally built from DNA. This one was built from mass spectrometry fragmentation patterns and a complexity metric, applied without knowledge of the molecules involved. If the approach generalizes, it opens evolutionary analysis to samples where sequencing is not possible, degraded biological material, extraterrestrial samples, or prebiotic chemistry that never produced a genome.

## Scope and Limitations

This work does not explain the origin of selection. It provides a measurable, repeatable signal that distinguishes directed chemical exploration from undirected exploration, validated first on controlled peptide libraries and then on real biological samples. The method is integrated into the autonomous chemistry platforms my team operates, where it flags in real time when a reaction stops behaving randomly. Identifying the specific cause behind that shift, an enzyme, a prebiotic catalyst, or another mechanism, is the current focus of the work.
