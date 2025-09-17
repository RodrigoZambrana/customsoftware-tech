// scripts/gen-favicon.js
// Generates public/favicon.ico from existing PNGs
const fs = require('fs');
const path = require('path');
const child_process = require('child_process');

async function ensureResize(srcPng, size, outPng) {
  // Prefer sips to resize if available; otherwise reuse 32x32
  try {
    child_process.execFileSync('sips', ['-s', 'format', 'png', '-z', String(size), String(size), srcPng, '--out', outPng], { stdio: 'ignore' });
  } catch (e) {
    fs.copyFileSync(srcPng, outPng);
  }
}

async function main() {
  const _mod = require('png-to-ico');
  const pngToIco = _mod.default || _mod;
  const pub = path.join(process.cwd(), 'public');
  const p16 = path.join(pub, 'favicon-16x16.png');
  const p32 = path.join(pub, 'favicon-32x32.png');
  const p48 = path.join(pub, 'favicon-48x48.png');
  if (!fs.existsSync(p48)) {
    await ensureResize(p32, 48, p48);
  }
  const buf = await pngToIco([p16, p32, p48]);
  fs.writeFileSync(path.join(pub, 'favicon.ico'), buf);
  // Cleanup tmp 48 file if it was not present originally
  try { fs.unlinkSync(p48); } catch (_) {}
  console.log('Generated public/favicon.ico');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
