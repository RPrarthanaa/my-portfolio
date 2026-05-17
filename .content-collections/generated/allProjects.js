
export default [
  {
    "title": "NeuralSketch",
    "description": "A browser-based creative tool that uses Stable Diffusion to transform rough sketches into polished concept art in real time. Runs inference directly via WebGPU without a server.",
    "tags": [
      "TypeScript",
      "WebGPU",
      "Transformers.js",
      "Canvas API",
      "Vite"
    ],
    "github": "https://github.com/zara-okafor/neural-sketch",
    "liveUrl": "https://neural-sketch.demo.dev",
    "image": "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&auto=format&fit=crop&q=80",
    "content": "Pioneered client-side Stable Diffusion inference using WebGPU compute shaders, achieving ~8s generation time on consumer GPUs with no backend cost. Custom quantization pipeline reduces model size from 4GB to 740MB with less than 3% quality loss.",
    "_meta": {
      "filePath": "neural-sketch.md",
      "fileName": "neural-sketch.md",
      "directory": ".",
      "extension": "md",
      "path": "neural-sketch"
    }
  },
  {
    "title": "Pulse Analytics",
    "description": "A real-time business intelligence dashboard with AI-powered anomaly detection. Visualizes complex datasets through interactive charts, heatmaps, and trend analysis with sub-100ms query response times.",
    "tags": [
      "React",
      "TypeScript",
      "D3.js",
      "Python",
      "FastAPI",
      "PostgreSQL"
    ],
    "github": "https://github.com/zara-okafor/pulse-analytics",
    "liveUrl": "https://pulse-analytics.demo.dev",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "content": "Built an end-to-end analytics platform handling 18M events/day. Implemented a custom charting library on top of D3.js for 11 chart types. The anomaly detection model (Python/scikit-learn) flags unusual patterns with 94.3% precision.",
    "_meta": {
      "filePath": "portfolio-site.md",
      "fileName": "portfolio-site.md",
      "directory": ".",
      "extension": "md",
      "path": "portfolio-site"
    }
  },
  {
    "title": "Sentinel CLI",
    "description": "An open-source DevOps toolkit that aggregates logs, metrics, and alerts from AWS, GCP, and Datadog into a unified terminal interface. Replaces 4 separate browser dashboards with a single pane of glass.",
    "tags": [
      "Go",
      "Rust",
      "AWS SDK",
      "gRPC",
      "SQLite",
      "Terminal UI"
    ],
    "github": "https://github.com/zara-okafor/sentinel-cli",
    "liveUrl": "https://sentinel-cli.dev",
    "image": "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=80",
    "content": "2,800+ GitHub stars. Written in Go with a Rust-powered query engine for sub-millisecond log parsing across streams. Plugin architecture supports 14 community integrations. Used in production by engineering teams at Stripe, Linear, and Vercel.",
    "_meta": {
      "filePath": "sentinel-cli.md",
      "fileName": "sentinel-cli.md",
      "directory": ".",
      "extension": "md",
      "path": "sentinel-cli"
    }
  },
  {
    "title": "Collab OS",
    "description": "A multiplayer project management tool with real-time document editing, kanban boards, and async video messaging. Supports offline-first workflows with CRDTs for conflict-free sync.",
    "tags": [
      "React",
      "Node.js",
      "Socket.io",
      "PostgreSQL",
      "Yjs",
      "Docker"
    ],
    "github": "https://github.com/zara-okafor/collab-os",
    "liveUrl": "https://collab-os.demo.dev",
    "image": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop&q=80",
    "content": "Implemented Yjs CRDT for conflict-free real-time document collaboration across 8 content types. WebSocket layer handles 40k concurrent connections. Async video clips compressed to under 2MB via WebAssembly-powered codec integration.",
    "_meta": {
      "filePath": "task-manager.md",
      "fileName": "task-manager.md",
      "directory": ".",
      "extension": "md",
      "path": "task-manager"
    }
  }
]