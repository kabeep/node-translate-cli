import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['bin/cli.ts'],
    format: ['esm'],
    outDir: 'dist',
    target: ['es2020'],
    bundle: true,
    clean: true,
    minify: false,
    splitting: true,
    cjsInterop: true,
});
