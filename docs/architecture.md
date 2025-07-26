# Architecture Overview

```mermaid
flowchart TD
    Client["React + Vite Client"] -->|HTTP| ExpressServer
    subgraph ExpressServer
        Server["Express + Vite DevServer"]
    end
    ExpressServer -->|Static files| Browser
```

This project ships a small Express server that serves the compiled React app. All
file conversions run in the browser using FFmpeg.wasm so the server only delivers
static assets.
