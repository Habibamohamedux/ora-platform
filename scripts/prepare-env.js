const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const outputFile = path.join(projectRoot, '.env.local');
const trackedKeys = ['REACT_APP_SUPABASE_URL', 'REACT_APP_SUPABASE_ANON_KEY'];

const envCandidates = [
  '.env',
  '.env.local',
  '.env.development',
  '.env.development.local',
  '.env.production',
  '.env.production.local',
];

function parseEnvFile(content) {
  const values = {};

  content.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;

    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex === -1) return;

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    values[key] = value;
  });

  return values;
}

function loadEnvValues() {
  const loaded = {};

  envCandidates.forEach((fileName) => {
    const fullPath = path.join(projectRoot, fileName);
    if (!fs.existsSync(fullPath)) return;
    Object.assign(loaded, parseEnvFile(fs.readFileSync(fullPath, 'utf8')));
  });

  return loaded;
}

function mergeTrackedKeys(existingContent, mappedValues) {
  const lines = existingContent ? existingContent.split(/\r?\n/) : [];
  const nextLines = [];
  const handled = new Set();

  lines.forEach((line) => {
    const key = line.split('=')[0]?.trim();

    if (trackedKeys.includes(key) && mappedValues[key]) {
      nextLines.push(`${key}=${mappedValues[key]}`);
      handled.add(key);
      return;
    }

    nextLines.push(line);
  });

  trackedKeys.forEach((key) => {
    if (!mappedValues[key] || handled.has(key)) return;
    nextLines.push(`${key}=${mappedValues[key]}`);
  });

  return `${nextLines.filter((line, index, array) => !(index === array.length - 1 && line === '')).join('\n')}\n`;
}

const fileEnv = loadEnvValues();
const viteUrl = process.env.VITE_SUPABASE_URL || fileEnv.VITE_SUPABASE_URL || '';
const viteAnon =
  process.env.VITE_SUPABASE_ANON_KEY || fileEnv.VITE_SUPABASE_ANON_KEY || '';

const mappedValues = {
  REACT_APP_SUPABASE_URL:
    process.env.REACT_APP_SUPABASE_URL || fileEnv.REACT_APP_SUPABASE_URL || viteUrl,
  REACT_APP_SUPABASE_ANON_KEY:
    process.env.REACT_APP_SUPABASE_ANON_KEY ||
    fileEnv.REACT_APP_SUPABASE_ANON_KEY ||
    viteAnon,
};

if (!mappedValues.REACT_APP_SUPABASE_URL || !mappedValues.REACT_APP_SUPABASE_ANON_KEY) {
  console.warn(
    '[env] Missing Supabase env values. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY (or REACT_APP equivalents).'
  );
  process.exit(0);
}

const existingContent = fs.existsSync(outputFile)
  ? fs.readFileSync(outputFile, 'utf8')
  : '';
const nextContent = mergeTrackedKeys(existingContent, mappedValues);

if (existingContent !== nextContent) {
  fs.writeFileSync(outputFile, nextContent);
  console.log('[env] Synced Supabase VITE env values into CRA-compatible .env.local');
}
