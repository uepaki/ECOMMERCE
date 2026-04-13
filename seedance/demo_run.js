/**
 * Uepaki Seedance 2.0 — Offline Demo Runner
 *
 * Simulates the full Playwright automation workflow and writes all output
 * artefacts (JSON results, HTML storyboard) that the real script would
 * produce after connecting to seedance.ai.
 *
 * Run:  node demo_run.js
 */

'use strict';

const fs   = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, 'outputs');
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

// ─── Shot definitions ────────────────────────────────────────────────────────

const SHOTS = [
  {
    id: 'shot_1',
    label: 'Opening',
    timecode: '0:00–0:12',
    duration: 12,
    color: '#C8860A',
    scene: 'Pre-dawn fashion design studio. Woman pins a hem alone under warm tungsten light.',
    prompt: `Cinematic opening shot. Interior, small Indian fashion design studio, pre-dawn.
Warm tungsten light from a single overhead lamp. Rolls of colorful fabric stacked
against the wall. A young Indian woman (late 20s, traditional salwar, hair tied back)
carefully pins the hem of a garment on a dress form. Her hands are precise, confident.
Camera begins as a slow dolly-in from wide to medium close-up on her hands.
Photorealistic. Cinematic depth of field. Native ambient audio: soft fabric rustling,
distant city sounds outside a window. No music. Color grade: warm shadows, soft gold
highlights. Aspect ratio 16:9.`,
  },
  {
    id: 'shot_2',
    label: 'The Frustration',
    timecode: '0:12–0:22',
    duration: 10,
    color: '#4A6FA5',
    scene: 'Same designer scrolling a marketplace app. Quiet exhaustion as her listing stays buried.',
    prompt: `Medium close-up. Same young Indian woman sitting cross-legged on a low stool, phone
in both hands, scrolling a shopping app. Screen glow on her face. Her expression shifts
from hope to quiet resignation as she scrolls past identical sponsored listings.
Subtle eye movement — she's looking for herself and can't find it. Handheld camera,
slight natural sway. Muted color grade — slightly cooler, desaturated. 5 seconds.
Native audio: soft UI tap sounds, a faint exhale.`,
  },
  {
    id: 'shot_3',
    label: 'Discovery',
    timecode: '0:22–0:35',
    duration: 13,
    color: '#13A89E',
    scene: 'She opens Uepaki — her listing is first, no paid boost. Something shifts.',
    prompt: `Close-up on phone screen then pulling back to reveal woman's face. She opens a clean,
teal-accented marketplace app (UI shows her own profile at the top of a feed — no
sponsored tags). Text on screen reads "Fair Reach. Your work. First." Slow pull-back
reveals her face — eyes widen slightly, a small involuntary smile. Warm light returns
to her face. Camera: smooth track-back with shallow depth of field keeping her sharp.
Native audio: gentle notification chime, soft ambient room tone. Color grade returns
to warm gold.`,
  },
  {
    id: 'shot_4',
    label: 'The Community',
    timecode: '0:35–0:48',
    duration: 13,
    color: '#7B5EA7',
    scene: 'Montage of four Indian creators: photographer, makeup artist, designer, craft seller.',
    prompt: `Multi-shot sequence. Four quick cuts, each 2–3 seconds. Shot A: Indian male photographer
(30s, casual kurta) at a laptop reviewing a booking confirmation — he nods, satisfied.
Shot B: Indian male makeup artist setting up brushes at a bridal dressing table,
organized and confident. Shot C: Young Indian woman presenting a mood board to a client,
pointing at fabric swatches. Shot D: A woman's hands carefully wrapping a handmade
textile product in brown paper, tying string. Each shot: warm, natural light.
Handheld, gentle camera movement. Consistent color grade across all four.
Native ambient audio: soft background sounds matching each scene. No voiceover.`,
  },
  {
    id: 'shot_5',
    label: 'Platform Identity',
    timecode: '0:48–1:00',
    duration: 12,
    color: '#D91B5C',
    scene: 'Brand reveal — teal/pink palette, logo forms from fabric and brushstrokes.',
    prompt: `Cinematic brand reveal sequence. Abstract motion of fabric folds, paint brush
strokes, and light refractions — teal (#13A89E) and deep pink (#D91B5C) palette.
These elements flow and coalesce into a clean logotype centered on a dark background.
Text appears below: "Uepaki — For every Indian creator who was built for more."
Camera: slow push-in to logo. Motion: elegant, not flashy. Native audio builds:
subtle low musical swell (organic, not electronic). End on hold for 2 seconds.
Aspect ratio 16:9. Photorealistic brand color accuracy essential.`,
  },
];

// ─── Simulate processing ─────────────────────────────────────────────────────

function log(msg) {
  console.log(`[${new Date().toISOString()}] ${msg}`);
}

function simulateShot(shot, index) {
  log(`Processing ${shot.label} (${shot.timecode}) …`);

  const result = {
    shotId:        shot.id,
    label:         shot.label,
    timecode:      shot.timecode,
    durationSec:   shot.duration,
    status:        'queued_for_generation',
    model:         'Seedance 2.0',
    aspectRatio:   '16:9',
    prompt:        shot.prompt.trim(),
    submittedAt:   new Date().toISOString(),
    estimatedUrl:  `https://seedance.ai/outputs/uepaki_${shot.id}.mp4`,
    note:          'Awaiting real Seedance 2.0 network access to download.',
  };

  const outPath = path.join(OUTPUT_DIR, `${shot.id}_result.json`);
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2));
  log(`  → Result saved: ${outPath}`);
  return result;
}

// ─── HTML storyboard ─────────────────────────────────────────────────────────

function buildStoryboard(shots, results) {
  const cards = shots.map((shot, i) => {
    const timePct = Math.round((shot.duration / 60) * 100);
    return `
      <div class="card">
        <div class="card-header" style="background:${shot.color}">
          <span class="shot-num">SHOT ${i + 1}</span>
          <span class="timecode">${shot.timecode}</span>
        </div>
        <div class="card-body">
          <h2>${shot.label}</h2>
          <p class="scene">${shot.scene}</p>
          <div class="progress-bar">
            <div class="progress-fill" style="width:${timePct}%;background:${shot.color}"></div>
          </div>
          <p class="duration">${shot.duration}s &nbsp;·&nbsp; 16:9 &nbsp;·&nbsp; Seedance 2.0</p>
          <details>
            <summary>Full AI Prompt</summary>
            <pre>${shot.prompt.trim()}</pre>
          </details>
          <div class="status">
            <span class="badge">Queued for generation</span>
          </div>
        </div>
      </div>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Uepaki Seller Introduction — Seedance 2.0 Storyboard</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'Segoe UI',system-ui,sans-serif;background:#0f0f10;color:#e8e8e8;padding:2rem}
  h1{text-align:center;font-size:1.8rem;margin-bottom:.4rem;color:#fff}
  .subtitle{text-align:center;color:#888;margin-bottom:2rem;font-size:.95rem}
  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:1.5rem;max-width:1300px;margin:0 auto}
  .card{border-radius:12px;overflow:hidden;background:#1a1a1d;box-shadow:0 4px 20px rgba(0,0,0,.5)}
  .card-header{padding:1rem 1.2rem;display:flex;justify-content:space-between;align-items:center}
  .shot-num{font-size:.75rem;font-weight:700;letter-spacing:.12em;color:rgba(255,255,255,.85)}
  .timecode{font-size:.75rem;color:rgba(255,255,255,.7);font-variant-numeric:tabular-nums}
  .card-body{padding:1.2rem}
  h2{font-size:1.15rem;margin-bottom:.6rem;color:#fff}
  .scene{font-size:.88rem;color:#aaa;line-height:1.55;margin-bottom:.8rem}
  .progress-bar{height:4px;background:#2a2a2e;border-radius:2px;margin-bottom:.5rem}
  .progress-fill{height:100%;border-radius:2px;transition:width .3s}
  .duration{font-size:.8rem;color:#666;margin-bottom:1rem}
  details{margin-bottom:1rem}
  summary{font-size:.82rem;color:#13A89E;cursor:pointer;margin-bottom:.5rem}
  pre{font-size:.78rem;color:#bbb;white-space:pre-wrap;word-break:break-word;
      background:#111;padding:.8rem;border-radius:6px;line-height:1.5}
  .badge{display:inline-block;padding:.25rem .7rem;border-radius:20px;
         font-size:.75rem;font-weight:600;background:#2a2a2e;color:#13A89E;border:1px solid #13A89E44}
  footer{text-align:center;margin-top:3rem;font-size:.8rem;color:#555}
  footer a{color:#13A89E;text-decoration:none}
</style>
</head>
<body>
<h1>🎬 Uepaki Seller Introduction</h1>
<p class="subtitle">Seedance 2.0 &nbsp;·&nbsp; 5 Shots &nbsp;·&nbsp; 60–90 s &nbsp;·&nbsp; 16:9 Cinematic</p>
<div class="grid">
${cards}
</div>
<footer>
  Generated by Playwright MCP automation &nbsp;·&nbsp;
  <a href="https://uepaki.com">Uepaki</a> &nbsp;·&nbsp; ${new Date().toUTCString()}
</footer>
</body>
</html>`;
}

// ─── Entry point ──────────────────────────────────────────────────────────────

(function main() {
  log('=== Uepaki × Seedance 2.0 — Demo Run ===');

  const results = SHOTS.map(simulateShot);

  const sessionLog = {
    project:      'Uepaki Seller Introduction',
    concept:      'You built something real. The world should see it.',
    model:        'Seedance 2.0',
    totalShots:   SHOTS.length,
    totalSeconds: SHOTS.reduce((s, sh) => s + sh.duration, 0),
    aspectRatio:  '16:9',
    runAt:        new Date().toISOString(),
    mode:         'demo (offline simulation)',
    note:         'Re-run generate_uepaki_video.js once network access to seedance.ai is granted.',
    shots:        results,
  };

  const logPath = path.join(OUTPUT_DIR, 'session_log.json');
  fs.writeFileSync(logPath, JSON.stringify(sessionLog, null, 2));
  log(`Session log: ${logPath}`);

  const html = buildStoryboard(SHOTS, results);
  const htmlPath = path.join(OUTPUT_DIR, 'storyboard.html');
  fs.writeFileSync(htmlPath, html);
  log(`Storyboard: ${htmlPath}`);

  log('');
  log('All 5 shots queued. Summary:');
  SHOTS.forEach((s, i) => log(`  Shot ${i + 1}  ${s.label.padEnd(20)} ${s.timecode}  (${s.duration}s)`));
  log('');
  log('Next step: run  SEEDANCE_URL=<url> node generate_uepaki_video.js');
  log('            or use the Playwright MCP server tools (playwright_navigate, etc.)');
  log('           once seedance.ai is accessible from this environment.');
})();
