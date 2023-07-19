let envelopeOpened = false;

function toggleEnvelope() {
  const envelope = document.querySelector('.envelope');
  const openButton = document.getElementById('openButton');
  const nextButton = document.querySelector('.next-button');

  if (!envelopeOpened) {
    envelope.classList.add('open');
    envelopeOpened = true;
    openButton.style.display = 'none';
    nextButton.style.display = 'inline-block';
    nextButton.style.top = 'auto';
    nextButton.style.left = 'auto';
    nextButton.style.bottom = '10px';
    nextButton.style.right = '10px';
    nextButton.textContent = 'Next';
  } else {
    openButton.style.display = 'none';
  }
}

function openEnvelope() {
  if (envelopeOpened) {
    const envelope = document.querySelector('.envelope');
    envelope.querySelector('.envelope-back').style.left = '0';
    envelope.querySelector('.envelope-back').style.opacity = '1';
  }
}
