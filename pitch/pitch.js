/* Page-local reading controls; no storage, accounts, network or data collection. */
'use strict';
const pitchBody = document.querySelector('body.series-pitch');
if (pitchBody) {
  const controls = document.querySelector('.pitch-reading');
  controls.hidden = false;
  document.querySelector('#pitch-theme').addEventListener('click', (event) => {
    const light = event.currentTarget.getAttribute('aria-pressed') !== 'true';
    pitchBody.dataset.reading = light ? 'light' : 'dark';
    event.currentTarget.setAttribute('aria-pressed', String(light));
  });
  document.querySelector('#pitch-size').addEventListener('click', (event) => {
    const large = event.currentTarget.getAttribute('aria-pressed') !== 'true';
    pitchBody.dataset.large = String(large);
    event.currentTarget.setAttribute('aria-pressed', String(large));
  });
}
