let enabled = true;
const alertAudio = new Audio("/sounds/alert.mp3");

export function playAlert() {
  if (!enabled) return;

  try {
    alertAudio.currentTime = 0;
    alertAudio.play().catch(() => {});
  } catch {
    // intentionally ignored
  }
}

export function toggleAlert() {
  enabled = !enabled;
  return enabled;
}
