const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const csso = require('csso');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const OUT = path.join(ROOT, 'style.user.css');

const FILES = [
  // 1. UserStyle metadata header (no @-moz-document wrapper)
  'header.css',

  // 2. Base / global styles (each wrapped in @-moz-document regexp)
  'base/variables.css',
  'base/global.css',

  // 3. Site-specific styles (each wrapped in @-moz-document domain)
  'sites/google.css',
  'sites/youtube.css',
  'sites/instagram.css',
  'sites/office.css',
  'sites/gemini.css',
  'sites/notebooklm.css',
  'sites/bing.css',
  'sites/scholar.css',
  'sites/twitter.css',
  'sites/reddit.css',
  'sites/wikipedia.css',
  'sites/linkedin.css',
  'sites/github.css',
  'sites/whatsapp.css',
  'sites/gmail.css',
  'sites/chatgpt.css',

  // 4. Global safety net (CDK overlay, no @-moz-document wrapper)
  'safety.css',
];

function log(msg) {
  const t = new Date().toLocaleTimeString('pt-BR', { hour12: false });
  console.log(`\x1b[35m[${t}]\x1b[0m \x1b[36m✦\x1b[0m ${msg}`);
}

function readSource(rel) {
  const p = path.join(SRC, rel);
  try {
    const content = fs.readFileSync(p, 'utf-8');
    const lines = content.split('\n').length;
    return { rel, content, lines, ok: true };
  } catch (err) {
    log(`\x1b[31mERRO: não foi possível ler ${rel} — ${err.message}\x1b[0m`);
    return { rel, content: '', lines: 0, ok: false };
  }
}

function build() {
  log('Iniciando build...\n');

  const parts = [];
  let totalLines = 0;
  let errors = 0;

  for (const rel of FILES) {
    const result = readSource(rel);
    if (!result.ok) { errors++; continue; }
    if (!result.content) {
      log(`  \x1b[33m⚠ ${rel} — arquivo vazio\x1b[0m`);
    }
    const trimmed = result.content.endsWith('\n') ? result.content.slice(0, -1) : result.content;
    parts.push(trimmed);
    totalLines += result.lines;
    log(`  \x1b[32m✓\x1b[0m ${rel} \x1b[90m(${result.lines} linhas)\x1b[0m`);
  }

  if (errors > 0) {
    log(`\n\x1b[31mBuild interrompido — ${errors} erro(s) encontrado(s).\x1b[0m`);
    process.exit(1);
  }

  const assembled = parts.join('\n').replace(/\r/g, '');

  // Extract the UserStyle header (must be preserved for Stylus)
  const headerMatch = assembled.match(/^\/\* ==UserStyle==[\s\S]*?==\/UserStyle== \*\//);
  const header = headerMatch ? headerMatch[0] : '';
  let body = headerMatch ? assembled.substring(headerMatch[0].length) : assembled;

  // ── Step 1: Shorten CSS variable names ──────────────────
  const VAR_MAP = [
    // Sorted by key length descending so --rose-bg-strong matches before --rose-bg
    ['--rose-bg-strong',  '--rbg'],
    ['--rose-bg-soft',    '--rbs'],
    ['--rose-pill-hover', '--rph'],
    ['--rose-pill-selected', '--rps'],
    ['--rose-text-on-accent', '--rta'],
    ['--rose-text-secondary', '--rts'],
    ['--rose-text-muted', '--rtm'],
    ['--rose-accent-hover', '--rah'],
    ['--rose-transition', '--rtr'],
    ['--rose-white',      '--rw'],
    ['--rose-border',     '--rbo'],
    ['--rose-pill',       '--rp'],
    ['--rose-radius',     '--rrd'],
    ['--rose-shadow',     '--rsh'],
    ['--rose-accent',     '--ra'],
    ['--rose-bg',         '--rb'],
    ['--rose-text',       '--rt'],
  ];
  for (const [long, short] of VAR_MAP) {
    body = body.replaceAll(long, short);
  }

  // ── Step 2: Minify the CSS body with csso ───────────────
  let minified;
  try {
    const result = csso.minify(body, {
      restructure: true,
      comments: false,
      forceMediaMerge: true
    });
    minified = result.css;
  } catch (err) {
    log(`\n\x1b[31mCSSO minification failed — ${err.message}\x1b[0m`);
    log('\x1b[33mFalling back to unminified output.\x1b[0m');
    minified = body;
  }

  const output = header + '\n' + minified;
  fs.writeFileSync(OUT, output, 'utf-8');

  const rawKB = (Buffer.byteLength(assembled, 'utf-8') / 1024).toFixed(1);
  const minKB = (Buffer.byteLength(output, 'utf-8') / 1024).toFixed(1);
  const saved = (rawKB - minKB).toFixed(1);
  const pct = rawKB > 0 ? ((1 - minKB / rawKB) * 100).toFixed(1) : '0.0';
  log(`\n\x1b[35m✦\x1b[0m \x1b[1mstyle.user.css\x1b[0m gerado — ` +
    `\x1b[36m${rawKB}\x1b[0m → \x1b[36m${minKB}\x1b[0m KB ` +
    `\x1b[32m(-${saved} KB, ${pct}%)\x1b[0m`);

  return true;
}

// ── Watch mode ────────────────────────────────────────────
function watch() {
  log('Watch mode ativo. Monitorando src/...\n');
  build();

  let timer;
  let ready = false;

  chokidar.watch(SRC, { ignoreInitial: true }).on('all', (event, filePath) => {
    if (!filePath.endsWith('.css')) return;
    if (!ready) { ready = true; return; }
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log('');
      log(`\x1b[36m${event}\x1b[0m: ${path.relative(SRC, filePath)}`);
      build();
    }, 300);
  });
}

// ── CLI ───────────────────────────────────────────────────
const args = process.argv.slice(2);
if (args.includes('--watch') || args.includes('-w')) {
  watch();
} else {
  build();
}
