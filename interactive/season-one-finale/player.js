const player = document.querySelector('#player');
const title = document.querySelector('#scene-title');
const scene = document.querySelector('#scene');
const choices = document.querySelector('#choices');
const teaser = document.querySelector('#season-two-teaser');
const status = document.querySelector('#player-status');

async function startPlayer() {
  const response = await fetch('finale.json');
  if (!response.ok) throw new Error('Story unavailable');
  const source = await response.json();
  let story;

  function addButton(label, action) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'button secondary';
    button.textContent = label;
    button.addEventListener('click', action);
    choices.append(button);
  }

  function render(heading, moveFocus = true) {
    title.textContent = heading;
    scene.replaceChildren();
    choices.replaceChildren();
    while (story.canContinue) {
      const line = story.Continue().trim();
      if (!line) continue;
      const paragraph = document.createElement('p');
      paragraph.textContent = line;
      scene.append(paragraph);
    }
    for (const choice of story.currentChoices) {
      addButton(choice.text, () => {
        story.ChooseChoiceIndex(choice.index);
        render(choice.text === 'See what happens next' ? 'The request' : choice.text.replace('Start with the ', 'The '));
      });
    }
    teaser.hidden = story.currentChoices.length > 0;
    if (!teaser.hidden) {
      addButton('Replay and choose the other cut', () => restart(true));
    }
    if (moveFocus) title.focus();
  }

  function restart(moveFocus) {
    story = new inkjs.Story(source);
    render('Choose a cut', moveFocus);
  }

  player.hidden = false;
  restart(false);
}

startPlayer().catch(() => {
  player.hidden = true;
  status.textContent = 'The interactive player could not load. You can read both cuts as text below.';
});
