(() => {
  const photos = [
    {
      src: 'images/z7871488733373_967e56cac703da5d620a280a57503876.jpg',
      alt: 'Ảnh cá nhân 1',
    },
    {
      src: 'images/z7871488746086_25747fb09e1368d8a02c3c5a5afa7d49.jpg',
      alt: 'Ảnh cá nhân 2',
    },
    {
      src: 'images/z7871488747837_4a48ad29d8dc08d98beb4df8aee3eead.jpg',
      alt: 'Ảnh cá nhân 3',
    },
    {
      src: 'images/z7871488758299_eac3e20674fd8d2dcf3bbcf480329d2e.jpg',
      alt: 'Ảnh cá nhân 4',
    },
    {
      src: 'images/z7871488774521_0409abc1b67caeb64ed54a80c06fdf0b.jpg',
      alt: 'Ảnh cá nhân 5',
    },
  ];

  const image = document.getElementById('gallery-image');
  const prevButton = document.getElementById('gallery-prev');
  const nextButton = document.getElementById('gallery-next');

  if (!image || !prevButton || !nextButton) {
    return;
  }

  let currentIndex = 0;
  let lastRippleAt = 0;

  const updateImage = () => {
    const photo = photos[currentIndex];
    image.src = photo.src;
    image.alt = photo.alt;
  };

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    updateImage();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % photos.length;
    updateImage();
  });

  const createRipple = (clientX, clientY) => {
    const ripple = document.createElement('div');
    ripple.className = 'mouse-ripple';
    ripple.style.left = `${clientX}px`;
    ripple.style.top = `${clientY}px`;
    document.body.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
  };

  document.addEventListener('pointermove', (event) => {
    if (event.pointerType !== 'mouse') {
      return;
    }

    const now = Date.now();
    if (now - lastRippleAt < 70) {
      return;
    }

    lastRippleAt = now;
    createRipple(event.clientX, event.clientY);
  });
})();