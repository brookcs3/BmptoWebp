# Bmpflip

A browser‑based file converter built around [FFmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm).  The server merely serves the React client; all media processing happens on the client side for privacy and speed.

## Features

- Drag‑and‑drop UI with progress feedback
- Web Worker powered conversions and optional ZIP packaging
- Support for many image and video formats via a modular converter system
- Deployed with Vite & Express, ready for Cloudflare Pages

## Local Development

```bash
npm install
npm run dev      # start the express server with Vite in middleware mode
```

To create a production build run:

```bash
npm run build    # output goes to dist/public
```

## Tests

Simple unit tests can be executed with:

```bash
npm test
```

## Notable Implementation

The heart of the app is the `BaseFFmpegConverter` which wraps FFmpeg.wasm and reports conversion progress with detailed metadata.  It loads FFmpeg lazily and calculates compression ratios after each run.

```ts
// simplified excerpt
async convert(file: File, output: FileFormat) {
  await this.ensureLoaded();
  const start = performance.now();
  // write file, run ffmpeg, read output...
  const conversionTime = performance.now() - start;
  return { success: true, metadata: { conversionTime } };
}
```

See `client/src/converters/base-ffmpeg-converter.ts` for the full logic.

## Next Steps

- Flesh out additional converters (e.g. documents)
- Add end‑to‑end tests

---

This project was previously titled **BmptoWebp**; renaming it to **Bmpflip** better reflects the overall conversion focus.
