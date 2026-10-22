(() => {
  const root = document.querySelector('[data-plyr-player]');
  if (!root) return;
  const load = root.querySelector('[data-load-plyr]');
  const unload = root.querySelector('[data-unload-plyr]');
  const holder = root.querySelector('[data-player-frame]');
  const status = root.querySelector('[data-player-status]');
  load.addEventListener('click', () => {
    if (holder.firstChild) return;
    const frame = document.createElement('iframe');
    frame.className = 'plyr-embed';
    frame.title = 'PLYR listening comparison for 50 Ways to Leave Another';
    frame.referrerPolicy = 'no-referrer';
    frame.allow = 'encrypted-media';
    frame.src = 'https://plyr.fm/embed/track/1117';
    holder.append(frame);
    load.hidden = true; unload.hidden = false; unload.focus();
    status.textContent = 'PLYR player requested. PLYR may receive connection data; playback is controlled by PLYR.';
  });
  unload.addEventListener('click', () => {
    holder.replaceChildren();
    load.hidden = false; unload.hidden = true; load.focus();
    status.textContent = 'Player unloaded. Data already received by PLYR is not erased.';
  });
})();
