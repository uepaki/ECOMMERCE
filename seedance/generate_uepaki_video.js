/**
 * Uepaki Seller Introduction — Seedance 2.0 Video Generator
 *
 * Automates submission of all 5 cinematic shots to the Seedance 2.0
 * platform via Playwright browser automation.
 *
 * Usage:
 *   node generate_uepaki_video.js [--headless] [--url <seedance-url>]
 *
 * Outputs:
 *   ./outputs/<shot_id>_result.json   — generation metadata per shot
 *   ./outputs/session_log.json        — full session log
 */

// Use the system-installed Playwright which matches the pre-installed browsers.
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const fs = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const CONFIG = {
  // Override with --url <value> or SEEDANCE_URL env var
  seedanceUrl: process.env.SEEDANCE_URL || 'https://seedance.ai',
  headless: process.argv.includes('--headless'),
  outputDir: path.join(__dirname, 'outputs'),
  // How long to wait for a video generation job to appear (ms)
  generationPollInterval: 5000,
  generationTimeout: 600_000, // 10 minutes per shot
  // Selectors — adjust if the Seedance UI changes
  selectors: {
    promptTextarea:   'textarea[placeholder], textarea[name="prompt"], [contenteditable="true"]',
    generateButton:   'button:has-text("Generate"), button:has-text("Create"), button[type="submit"]',
    modelSelector:    '[data-model], select[name="model"], button:has-text("Model")',
    aspectRatioBtn:   'button:has-text("16:9"), [data-ratio="16:9"]',
    progressBar:      '[role="progressbar"], .progress, .generating',
    resultVideo:      'video, a[href$=".mp4"], [data-status="completed"]',
    downloadBtn:      'button:has-text("Download"), a[download]',
    newGenerationBtn: 'button:has-text("New"), button:has-text("Create another"), button:has-text("+")',
  },
};

// ---------------------------------------------------------------------------
// Video prompts (mirrors video_prompts.json)
// ---------------------------------------------------------------------------

const SHOTS = [
  {
    id: 'shot_1',
    label: 'Opening (0:00–0:12)',
    prompt: `Cinematic opening shot. Interior, small Indian fashion design studio, pre-dawn. \
Warm tungsten light from a single overhead lamp. Rolls of colorful fabric stacked \
against the wall. A young Indian woman (late 20s, traditional salwar, hair tied back) \
carefully pins the hem of a garment on a dress form. Her hands are precise, confident. \
Camera begins as a slow dolly-in from wide to medium close-up on her hands. \
Photorealistic. Cinematic depth of field. Native ambient audio: soft fabric rustling, \
distant city sounds outside a window. No music. Color grade: warm shadows, soft gold \
highlights. Aspect ratio 16:9.`,
    durationSeconds: 12,
  },
  {
    id: 'shot_2',
    label: 'The Frustration (0:12–0:22)',
    prompt: `Medium close-up. Same young Indian woman sitting cross-legged on a low stool, phone \
in both hands, scrolling a shopping app. Screen glow on her face. Her expression shifts \
from hope to quiet resignation as she scrolls past identical sponsored listings. \
Subtle eye movement — she's looking for herself and can't find it. Handheld camera, \
slight natural sway. Muted color grade — slightly cooler, desaturated. 5 seconds. \
Native audio: soft UI tap sounds, a faint exhale.`,
    durationSeconds: 10,
  },
  {
    id: 'shot_3',
    label: 'Discovery (0:22–0:35)',
    prompt: `Close-up on phone screen then pulling back to reveal woman's face. She opens a clean, \
teal-accented marketplace app (UI shows her own profile at the top of a feed — no \
sponsored tags). Text on screen reads "Fair Reach. Your work. First." Slow pull-back \
reveals her face — eyes widen slightly, a small involuntary smile. Warm light returns \
to her face. Camera: smooth track-back with shallow depth of field keeping her sharp. \
Native audio: gentle notification chime, soft ambient room tone. Color grade returns \
to warm gold.`,
    durationSeconds: 13,
  },
  {
    id: 'shot_4',
    label: 'The Community (0:35–0:48)',
    prompt: `Multi-shot sequence. Four quick cuts, each 2–3 seconds. Shot A: Indian male photographer \
(30s, casual kurta) at a laptop reviewing a booking confirmation — he nods, satisfied. \
Shot B: Indian male makeup artist setting up brushes at a bridal dressing table, \
organized and confident. Shot C: Young Indian woman presenting a mood board to a client, \
pointing at fabric swatches. Shot D: A woman's hands carefully wrapping a handmade \
textile product in brown paper, tying string. Each shot: warm, natural light. \
Handheld, gentle camera movement. Consistent color grade across all four. \
Native ambient audio: soft background sounds matching each scene. No voiceover.`,
    durationSeconds: 13,
  },
  {
    id: 'shot_5',
    label: 'Platform Identity (0:48–1:00)',
    prompt: `Cinematic brand reveal sequence. Abstract motion of fabric folds, paint brush \
strokes, and light refractions — teal (#13A89E) and deep pink (#D91B5C) palette. \
These elements flow and coalesce into a clean logotype centered on a dark background. \
Text appears below: "Uepaki — For every Indian creator who was built for more." \
Camera: slow push-in to logo. Motion: elegant, not flashy. Native audio builds: \
subtle low musical swell (organic, not electronic). End on hold for 2 seconds. \
Aspect ratio 16:9. Photorealistic brand color accuracy essential.`,
    durationSeconds: 12,
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function log(msg) {
  const ts = new Date().toISOString();
  console.log(`[${ts}] ${msg}`);
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function saveJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

// ---------------------------------------------------------------------------
// Seedance automation steps
// ---------------------------------------------------------------------------

async function selectModel(page) {
  try {
    // Look for a model picker button / dropdown
    const modelBtn = page.locator(CONFIG.selectors.modelSelector).first();
    if (await modelBtn.isVisible({ timeout: 3000 })) {
      await modelBtn.click();
      // Try to pick "Seedance 2.0" or "2.0" from the dropdown
      const option = page.locator('li, option, [role="option"]').filter({ hasText: /2\.0/i }).first();
      if (await option.isVisible({ timeout: 3000 })) {
        await option.click();
        log('Selected model: Seedance 2.0');
      }
    }
  } catch {
    log('Model selector not found — assuming Seedance 2.0 is the default.');
  }
}

async function setAspectRatio(page) {
  try {
    const ratioBtn = page.locator(CONFIG.selectors.aspectRatioBtn).first();
    if (await ratioBtn.isVisible({ timeout: 3000 })) {
      await ratioBtn.click();
      log('Aspect ratio set to 16:9');
    }
  } catch {
    log('Aspect ratio button not found — skipping.');
  }
}

async function enterPrompt(page, prompt) {
  const textarea = page.locator(CONFIG.selectors.promptTextarea).first();
  await textarea.waitFor({ state: 'visible', timeout: 15000 });
  await textarea.click();
  await textarea.fill('');
  await textarea.fill(prompt);
  log(`Prompt entered (${prompt.length} chars)`);
}

async function clickGenerate(page) {
  const btn = page.locator(CONFIG.selectors.generateButton).first();
  await btn.waitFor({ state: 'visible', timeout: 10000 });
  await btn.click();
  log('Generate button clicked');
}

async function waitForResult(page, shot) {
  log(`Waiting for generation to complete (up to ${CONFIG.generationTimeout / 1000}s)…`);
  const deadline = Date.now() + CONFIG.generationTimeout;

  while (Date.now() < deadline) {
    // Check for a completed video element or status indicator
    const video = page.locator(CONFIG.selectors.resultVideo).first();
    if (await video.isVisible({ timeout: 1000 }).catch(() => false)) {
      log(`Shot "${shot.label}" — generation complete!`);
      return true;
    }
    await sleep(CONFIG.generationPollInterval);
    log('Still generating…');
  }

  log(`WARNING: Timed out waiting for shot "${shot.label}".`);
  return false;
}

async function captureResult(page, shot) {
  const screenshotPath = path.join(CONFIG.outputDir, `${shot.id}_result.png`);
  await page.screenshot({ path: screenshotPath, fullPage: false });
  log(`Screenshot saved: ${screenshotPath}`);

  // Try to grab a download link
  let videoUrl = null;
  try {
    const downloadBtn = page.locator(CONFIG.selectors.downloadBtn).first();
    if (await downloadBtn.isVisible({ timeout: 3000 })) {
      videoUrl = await downloadBtn.getAttribute('href');
    }
    if (!videoUrl) {
      const videoEl = page.locator('video').first();
      videoUrl = await videoEl.getAttribute('src');
    }
  } catch {
    log('Could not extract video URL automatically.');
  }

  const result = {
    shotId: shot.id,
    label: shot.label,
    status: 'submitted',
    screenshotPath,
    videoUrl,
    timestamp: new Date().toISOString(),
    prompt: shot.prompt,
  };

  saveJson(path.join(CONFIG.outputDir, `${shot.id}_result.json`), result);
  return result;
}

async function resetForNextShot(page) {
  try {
    const newBtn = page.locator(CONFIG.selectors.newGenerationBtn).first();
    if (await newBtn.isVisible({ timeout: 4000 })) {
      await newBtn.click();
      await sleep(1500);
      log('Ready for next shot.');
      return;
    }
  } catch { /* ignore */ }

  // Fallback: navigate to the base URL
  await page.goto(CONFIG.seedanceUrl, { waitUntil: 'networkidle' });
  await sleep(2000);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

(async () => {
  fs.mkdirSync(CONFIG.outputDir, { recursive: true });

  log('Launching browser…');
  const browser = await chromium.launch({
    headless: CONFIG.headless,
    executablePath: chromium.executablePath(),
  });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    userAgent:
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  const sessionLog = {
    project: 'Uepaki Seller Introduction',
    model: 'Seedance 2.0',
    startedAt: new Date().toISOString(),
    seedanceUrl: CONFIG.seedanceUrl,
    shots: [],
  };

  try {
    log(`Navigating to ${CONFIG.seedanceUrl}…`);
    await page.goto(CONFIG.seedanceUrl, { waitUntil: 'networkidle', timeout: 90_000 });
    await sleep(2000);

    // Take an initial screenshot to verify we landed on the right page
    await page.screenshot({ path: path.join(CONFIG.outputDir, 'landing_page.png') });
    log('Landing page screenshot saved.');

    // One-time setup
    await selectModel(page);

    // Generate each shot in sequence
    for (const shot of SHOTS) {
      log(`\n━━━ Processing ${shot.label} ━━━`);

      await setAspectRatio(page);
      await enterPrompt(page, shot.prompt);
      await clickGenerate(page);

      const completed = await waitForResult(page, shot);
      const result = await captureResult(page, shot);
      result.status = completed ? 'completed' : 'timeout';
      sessionLog.shots.push(result);

      if (shot !== SHOTS[SHOTS.length - 1]) {
        await resetForNextShot(page);
      }
    }

    sessionLog.finishedAt = new Date().toISOString();
    sessionLog.status = 'done';
    log('\nAll shots submitted successfully.');
  } catch (err) {
    log(`ERROR: ${err.message}`);
    await page.screenshot({ path: path.join(CONFIG.outputDir, 'error_state.png') });
    sessionLog.status = 'error';
    sessionLog.error = err.message;
  } finally {
    saveJson(path.join(CONFIG.outputDir, 'session_log.json'), sessionLog);
    log(`Session log saved: ${path.join(CONFIG.outputDir, 'session_log.json')}`);
    await browser.close();
  }
})();
