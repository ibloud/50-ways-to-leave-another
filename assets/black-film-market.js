const marketSessionsEnd = Date.parse('2026-12-05T11:00:00-08:00');

function updateBlackFilmMarket() {
  const now = Date.now();
  for (const link of document.querySelectorAll('[data-bfm-registration]')) {
    const open = now < Date.parse(link.dataset.bfmRegistration);
    link.hidden = !open;
    link.nextElementSibling.hidden = open;
  }
  const upcoming = now < marketSessionsEnd;
  for (const element of document.querySelectorAll('[data-bfm-prep]')) {
    element.hidden = !upcoming;
  }
  for (const element of document.querySelectorAll('[data-bfm-follow-up]')) {
    element.hidden = upcoming;
  }
}

updateBlackFilmMarket();
window.addEventListener('pageshow', updateBlackFilmMarket);
