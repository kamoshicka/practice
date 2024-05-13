const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');
const mainImage = document.querySelector('.gallery-image img');
const thumbImages = document.querySelectorAll('.gallery-thumbnails img');
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li');
const menuOptions= {
  duration: 1400,
  easing: 'ease',
  fill: 'forwards',
};
const animateFade = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        {
          opacity: [0, 1],
          filter: ['blur(.4rem)', 'blur(0)'],
          translate: ['0 4rem', 0],
        },
        {
          duration: 2000,
          easing: 'ease',
          fill: 'forwards',
        }
      );
    }
  });
};
const fadeObserver = new IntersectionObserver(animateFade);
const fadeElements = document.querySelectorAll('.fadein');

fadeElements.forEach((fadeElement) => {
  fadeObserver.observe(fadeElement);
});


menuOpen.addEventListener('click', () => {
 menuPanel.animate({translate: ['100vw', 0]}, menuOptions);
 menuItems.forEach((menuItem, index) => {
  menuItem.animate (
    {
      opacity: [0, 1],
      translate: ['2rem', 0],
    },
    {duration: 2400,
      delay: 300 * index,
      easing: 'ease',
      fill: 'forwards',
    }
  );
 });
});

menuClose.addEventListener('click', () => {
  menuPanel.animate({translate: [0, '100vw']}, menuOptions);
  menuItems.forEach((menuItem) => {
    menuItem.animate({opacity:[1, 0]}, menuOptions);
  });
});


window.addEventListener('load', () => {
  loadingAreaGrey.animate( {
    opacity: [1,0],
    visiblity: 'hidden',
    zIndex: -1
  },{
    duration: 2000,
    delay: 1200,
    easing:'ease',
    fill: 'forwards',
  });

  loadingAreaGreen.animate(
    {
      translate: ['0 100vh', '0 0', '0 -100vh'],
      zIndex: -1
    }, {
      duration: 2000,
      delay: 800,
      easing: 'ease',
      fill: 'forwards',
    }
  );

  loadingText.animate(
    [{
        opacity: 1,
        offset: .8
      }, {
        opacity:0,
        offset: 1
      },],
      {
        duration: 1200,
        easing: 'ease',
        fill: 'forwards',
      }
  );
});


for (let i = 0; i < thumbImages.length; i++) {
  thumbImages[i].addEventListener('mouseover', (event) => {
    mainImage.src = event.target.src;
    mainImage.animate([
      { opacity: 0 }, 
      { opacity: 1 }
    ], {
      duration: 500,  
      fill: 'forwards' 
    });
  });
}