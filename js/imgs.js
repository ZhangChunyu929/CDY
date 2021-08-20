// Nothing special here. Only animation preview

function demoAnimation() {
  let targetElements = [].slice.call(document.getElementsByClassName('wgh-slider-target'));
  let targetInputMode = targetElements[0].nodeName.toLowerCase() === 'input' && targetElements[0].type === 'radio';
  let targetIds = targetElements.map(element => element.getAttribute('id'));
  let targetIndex = 0;

  let triggerElements = [].slice.call(document.getElementsByClassName('wgh-slider-item__trigger'));
  let timeoutId;

  function changeSlide() {
    triggerElements[++targetIndex].click();
    if (targetIndex < Math.floor(targetElements.length / 2)) setTimeout(changeSlide, 1200);
  }

  changeSlide();
}

if (document.location.pathname.indexOf('fullcpgrid') > -1) {
  demoAnimation();
}

if (document.getElementsByClassName('wgh-slider-target')[0].nodeName.toLowerCase() !== 'input') {
  let resetBtn = document.createElement('button');
  resetBtn.type = 'button';
  resetBtn.textContent = 'Reset Hash URL';

  resetBtn.onclick = () => {
    document.location.hash = '';
  };

  document.body.insertBefore(resetBtn, document.body.firstChild);
}