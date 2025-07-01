
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('I LOVE U').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};

setTimeout(() => {
  document.getElementById('blur-layer').style.backdropFilter = 'blur(5px)';

  const ending = document.getElementById('ending-text');
  ending.style.display = 'block';

  void ending.offsetWidth;
  ending.style.animation = 'credit-roll 250s linear forwards';

  setTimeout(() => {
    document.getElementById('blur-layer').style.backdropFilter = 'blur(0px)';
  }, 110000); 

}, 10000); 