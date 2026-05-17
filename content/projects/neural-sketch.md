---
title: "NeuralSketch"
description: "A browser-based creative tool that uses Stable Diffusion to transform rough sketches into polished concept art in real time. Runs inference directly via WebGPU without a server."
tags: ["TypeScript", "WebGPU", "Transformers.js", "Canvas API", "Vite"]
github: "https://github.com/zara-okafor/neural-sketch"
liveUrl: "https://neural-sketch.demo.dev"
image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&auto=format&fit=crop&q=80"
---

Pioneered client-side Stable Diffusion inference using WebGPU compute shaders, achieving ~8s generation time on consumer GPUs with no backend cost. Custom quantization pipeline reduces model size from 4GB to 740MB with less than 3% quality loss.
