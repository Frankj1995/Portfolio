const portfolioContainer1 = document.querySelector('.port-item-1');
const track1 = document.querySelector('.carousel-track-1');
const slides1 = Array.from(track1.children);
const nextButton1 = document.querySelector('.cbr-1');
const prevButton1 = document.querySelector('.cbl-1');
const dotsNav1 = document.querySelector('.carousel-nav-1');
const dots1 = Array.from(dotsNav1.children);
var clicked;

portfolioContainer1.addEventListener('click', e => {
  e.preventDefault();
  const modalToggle = e.target.closest('.portfolio-link');
  if (!modalToggle) return;

  const modal = modalToggle.parentNode.nextElementSibling;
  const closeButton = modal.querySelector('.modal-close');

  modalOpen = _ => {
    modal.classList.add('is-open')
    modal.style.animation = 'modalIn 500ms forwards';
    modal.style.overflowX = 'scroll';
    document.body.style.overflowY = 'hidden';
  };


  moveToSlide = (currentSlide, targetSlide) => {
    track1.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  };

  updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
  };

  hideShowArrows = (targetIndex) => {
    if (targetIndex === 0) {
      prevButton1.classList.add('is-hidden');
      nextButton1.classList.remove('is-hidden');
    } else if (targetIndex === 5) {
      prevButton1.classList.remove('is-hidden');
      nextButton1.classList.add('is-hidden');
    } else {
      prevButton1.classList.remove('is-hidden');
      nextButton1.classList.remove('is-hidden');
    }
  };

  nextSlide = _ => {
    const currentSlide = track1.querySelector('.current-slide');
    const targetSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav1.querySelector('.current-slide');
    const targetDot = currentDot.nextElementSibling;
    const targetIndex = dots1.findIndex(dot => dot === targetDot);
    moveToSlide(currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(targetIndex);
  }

  prevSlide = _ => {
    const currentSlide = track1.querySelector('.current-slide');
    const targetSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav1.querySelector('.current-slide');
    const targetDot = currentDot.previousElementSibling;
    const targetIndex = dots1.findIndex(dot => dot === targetDot);
    moveToSlide(currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(targetIndex);
  }

  nextDot = (e) => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;
    const currentSlide = track1.querySelector('.current-slide');
    const currentDot = dotsNav1.querySelector('.current-slide');
    const targetIndex = dots1.findIndex(dot => dot === targetDot);
    const targetSlide = slides1[targetIndex];
    moveToSlide(currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(targetIndex);
  }

  carouselShow = _ => {
    const slideWidth = slides1[0].getBoundingClientRect().width;

    setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + 'px';
    };

    slides1.forEach(setSlidePosition);

    nextButton1.addEventListener('click', nextSlide);

    prevButton1.addEventListener('click', prevSlide);

    dotsNav1.addEventListener('click', e => {
      nextDot(e);
    });
  };

  modalClose = _ => {
    modal.classList.remove('is-open');
    modal.removeEventListener('animationend', modalClose);
    nextButton1.removeEventListener('click', nextSlide);
    prevButton1.removeEventListener('click', prevSlide);
    dotsNav1.removeEventListener('click', e => {
      nextDot(e);
    });
  };

  closeButton.addEventListener('click', _ => {
    modal.style.animation = 'modalOut 500ms forwards';
    modal.addEventListener('animationend', modalClose);
    document.body.style.overflowY = 'scroll';
  });

  document.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
      modal.style.animation = 'modalOut 500ms forwards';
      modal.addEventListener('animationend', modalClose);
      document.body.style.overflowY = 'scroll';
    }
  });
  document.querySelector('.port-link').addEventListener('click', e => {
    e.stopPropagation();
  });
  modalOpen();
  carouselShow();
});


const portfolioContainer2 = document.querySelector('.port-item-2');
const track2 = document.querySelector('.carousel-track-2');
const slides2 = Array.from(track2.children);
const nextButton2 = document.querySelector('.cbr-2');
const prevButton2 = document.querySelector('.cbl-2');
const dotsNav2 = document.querySelector('.carousel-nav-2');
const dots2 = Array.from(dotsNav2.children);
var clicked;

portfolioContainer2.addEventListener('click', e => {
  e.preventDefault();
  const modalToggle = e.target.closest('.portfolio-link');

  if (!modalToggle) return;

  const modal = modalToggle.parentNode.nextElementSibling;
  const closeButton = modal.querySelector('.modal-close');

  modalOpen = _ => {
    modal.classList.add('is-open')
    modal.style.animation = 'modalIn 500ms forwards';
    modal.style.overflowX = 'scroll';
    document.body.style.overflowY = 'hidden';
  };


  moveToSlide = (currentSlide, targetSlide) => {
    track2.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  };

  updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
  };

  hideShowArrows = (targetIndex) => {
    if (targetIndex === 0) {
      prevButton2.classList.add('is-hidden');
      nextButton2.classList.remove('is-hidden');
    } else if (targetIndex === 9) {
      prevButton2.classList.remove('is-hidden');
      nextButton2.classList.add('is-hidden');
    } else {
      prevButton2.classList.remove('is-hidden');
      nextButton2.classList.remove('is-hidden');
    }
  };

  nextSlide = _ => {
    const currentSlide = track2.querySelector('.current-slide');
    // console.log(currentSlide);
    const targetSlide = currentSlide.nextElementSibling;
    console.log(targetSlide);
    const currentDot = dotsNav2.querySelector('.current-slide');
    const targetDot = currentDot.nextElementSibling;
    const targetIndex = dots2.findIndex(dot => dot === targetDot);
    moveToSlide(currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(targetIndex);
  }

  prevSlide = _ => {
    const currentSlide = track2.querySelector('.current-slide');
    console.log('currentSlide: ' + currentSlide);
    const targetSlide = currentSlide.previousElementSibling;
    console.log('targetSlide: ' + targetSlide);
    const currentDot = dotsNav2.querySelector('.current-slide');
    const targetDot = currentDot.previousElementSibling;
    const targetIndex = dots2.findIndex(dot => dot === targetDot);
    moveToSlide(currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(targetIndex);
  }

  nextDot = (e) => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;
    const currentSlide = track2.querySelector('.current-slide');
    const currentDot = dotsNav2.querySelector('.current-slide');
    const targetIndex = dots2.findIndex(dot => dot === targetDot);
    const targetSlide = slides2[targetIndex];
    moveToSlide(currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(targetIndex);
  }

  carouselShow = _ => {
    const slideWidth = slides2[0].getBoundingClientRect().width;

    setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + 'px';
    };

    slides2.forEach(setSlidePosition);

    nextButton2.addEventListener('click', nextSlide);

    prevButton2.addEventListener('click', prevSlide);

    dotsNav2.addEventListener('click', e => {
      nextDot(e);
    });
  };

  modalClose = _ => {
    modal.classList.remove('is-open');
    modal.removeEventListener('animationend', modalClose);
    nextButton2.removeEventListener('click', nextSlide);
    prevButton2.removeEventListener('click', prevSlide);
    dotsNav2.removeEventListener('click', e => {
      nextDot(e);
    });
  };

  closeButton.addEventListener('click', _ => {
    modal.style.animation = 'modalOut 500ms forwards';
    modal.addEventListener('animationend', modalClose);
    document.body.style.overflowY = 'scroll';
  });

  document.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
      modal.style.animation = 'modalOut 500ms forwards';
      modal.addEventListener('animationend', modalClose);
      document.body.style.overflowY = 'scroll';
    }
  });

  modalOpen();
  carouselShow();
});


const portfolioContainer3 = document.querySelector('.port-item-3');
const track3 = document.querySelector('.carousel-track-3');
const slides3 = Array.from(track3.children);
const nextButton3 = document.querySelector('.cbr-3');
const prevButton3 = document.querySelector('.cbl-3');
const dotsNav3 = document.querySelector('.carousel-nav-3');
const dots3 = Array.from(dotsNav3.children);
var clicked;

portfolioContainer3.addEventListener('click', e => {
  e.preventDefault();
  const modalToggle = e.target.closest('.portfolio-link');

  if (!modalToggle) return;

  const modal = modalToggle.parentNode.nextElementSibling;
  const closeButton = modal.querySelector('.modal-close');

  modalOpen = _ => {
    modal.classList.add('is-open')
    modal.style.animation = 'modalIn 500ms forwards';
    modal.style.overflowX = 'scroll';
    document.body.style.overflowY = 'hidden';
  };


  moveToSlide = (currentSlide, targetSlide) => {
    track3.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  };

  updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
  };

  hideShowArrows = (targetIndex) => {
    if (targetIndex === 0) {
      prevButton3.classList.add('is-hidden');
      nextButton3.classList.remove('is-hidden');
    } else if (targetIndex === 2) {
      prevButton3.classList.remove('is-hidden');
      nextButton3.classList.add('is-hidden');
    } else {
      prevButton3.classList.remove('is-hidden');
      nextButton3.classList.remove('is-hidden');
    }
  };

  nextSlide = _ => {
    const currentSlide = track3.querySelector('.current-slide');
    // console.log(currentSlide);
    const targetSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav3.querySelector('.current-slide');
    const targetDot = currentDot.nextElementSibling;
    const targetIndex = dots3.findIndex(dot => dot === targetDot);
    moveToSlide(currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(targetIndex);
  }

  prevSlide = _ => {
    const currentSlide = track3.querySelector('.current-slide');
    console.log('currentSlide: ' + currentSlide);
    const targetSlide = currentSlide.previousElementSibling;
    console.log('targetSlide: ' + targetSlide);
    const currentDot = dotsNav3.querySelector('.current-slide');
    const targetDot = currentDot.previousElementSibling;
    const targetIndex = dots3.findIndex(dot => dot === targetDot);
    moveToSlide(currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(targetIndex);
  }

  nextDot = (e) => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;
    const currentSlide = track3.querySelector('.current-slide');
    const currentDot = dotsNav3.querySelector('.current-slide');
    const targetIndex = dots3.findIndex(dot => dot === targetDot);
    const targetSlide = slides3[targetIndex];
    moveToSlide(currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(targetIndex);
  }

  carouselShow = _ => {
    const slideWidth = slides3[0].getBoundingClientRect().width;

    setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + 'px';
    };

    slides3.forEach(setSlidePosition);

    nextButton3.addEventListener('click', nextSlide);

    prevButton3.addEventListener('click', prevSlide);

    dotsNav3.addEventListener('click', e => {
      nextDot(e);
    });
  };

  modalClose = _ => {
    modal.classList.remove('is-open');
    modal.removeEventListener('animationend', modalClose);
    nextButton3.removeEventListener('click', nextSlide);
    prevButton3.removeEventListener('click', prevSlide);
    dotsNav3.removeEventListener('click', e => {
      nextDot(e);
    });
  };

  closeButton.addEventListener('click', _ => {
    modal.style.animation = 'modalOut 500ms forwards';
    modal.addEventListener('animationend', modalClose);
    document.body.style.overflowY = 'scroll';
  });

  document.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
      modal.style.animation = 'modalOut 500ms forwards';
      modal.addEventListener('animationend', modalClose);
      document.body.style.overflowY = 'scroll';
    }
  });

  document.querySelector('.port-link2').addEventListener('click', e => {
    e.stopPropagation();
  });

  modalOpen();
  carouselShow();
});



const portfolioContainer4 = document.querySelector('.port-item-4');
const track4 = document.querySelector('.carousel-track-4');
const slides4 = Array.from(track4.children);
const nextButton4 = document.querySelector('.cbr-4');
const prevButton4 = document.querySelector('.cbl-4');
const dotsNav4 = document.querySelector('.carousel-nav-4');
const dots4 = Array.from(dotsNav4.children);
var clicked;

portfolioContainer4.addEventListener('click', e => {
  e.preventDefault();
  const modalToggle = e.target.closest('.portfolio-link');

  if (!modalToggle) return;

  const modal = modalToggle.parentNode.nextElementSibling;
  const closeButton = modal.querySelector('.modal-close');

  modalOpen = _ => {
    modal.classList.add('is-open')
    modal.style.animation = 'modalIn 500ms forwards';
    modal.style.overflowX = 'scroll';
    document.body.style.overflowY = 'hidden';
  };


  moveToSlide = (currentSlide, targetSlide) => {
    track4.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  };

  updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
  };

  hideShowArrows = (targetIndex) => {
    if (targetIndex === 0) {
      prevButton4.classList.add('is-hidden');
      nextButton4.classList.remove('is-hidden');
    } else if (targetIndex === 4) {
      prevButton4.classList.remove('is-hidden');
      nextButton4.classList.add('is-hidden');
    } else {
      prevButton4.classList.remove('is-hidden');
      nextButton4.classList.remove('is-hidden');
    }
  };

  nextSlide = _ => {
    const currentSlide = track4.querySelector('.current-slide');
    // console.log(currentSlide);
    const targetSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav4.querySelector('.current-slide');
    const targetDot = currentDot.nextElementSibling;
    const targetIndex = dots4.findIndex(dot => dot === targetDot);
    moveToSlide(currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(targetIndex);
  }

  prevSlide = _ => {
    const currentSlide = track4.querySelector('.current-slide');
    const targetSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav4.querySelector('.current-slide');
    const targetDot = currentDot.previousElementSibling;
    const targetIndex = dots4.findIndex(dot => dot === targetDot);
    moveToSlide(currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(targetIndex);
  }

  nextDot = (e) => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;
    const currentSlide = track4.querySelector('.current-slide');
    const currentDot = dotsNav4.querySelector('.current-slide');
    const targetIndex = dots4.findIndex(dot => dot === targetDot);
    const targetSlide = slides4[targetIndex];
    moveToSlide(currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(targetIndex);
  }

  carouselShow = _ => {
    const slideWidth = slides4[0].getBoundingClientRect().width;

    setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + 'px';
    };

    slides4.forEach(setSlidePosition);

    nextButton4.addEventListener('click', nextSlide);

    prevButton4.addEventListener('click', prevSlide);

    dotsNav4.addEventListener('click', e => {
      nextDot(e);
    });
  };

  modalClose = _ => {
    modal.classList.remove('is-open');
    modal.removeEventListener('animationend', modalClose);
    nextButton4.removeEventListener('click', nextSlide);
    prevButton4.removeEventListener('click', prevSlide);
    dotsNav4.removeEventListener('click', e => {
      nextDot(e);
    });
  };

  closeButton.addEventListener('click', _ => {
    modal.style.animation = 'modalOut 500ms forwards';
    modal.addEventListener('animationend', modalClose);
    document.body.style.overflowY = 'scroll';
  });

  document.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
      modal.style.animation = 'modalOut 500ms forwards';
      modal.addEventListener('animationend', modalClose);
      document.body.style.overflowY = 'scroll';
    }
  });

  document.querySelector('.port-link3').addEventListener('click', e => {
    e.stopPropagation();
  });

  modalOpen();
  carouselShow();
});



const portfolioContainer5 = document.querySelector('.port-item-5');
const track5 = document.querySelector('.carousel-track-5');
const slides5 = Array.from(track5.children);
const nextButton5 = document.querySelector('.cbr-5');
const prevButton5 = document.querySelector('.cbl-5');
const dotsNav5 = document.querySelector('.carousel-nav-5');
const dots5 = Array.from(dotsNav5.children);
var clicked;

portfolioContainer5.addEventListener('click', e => {
  e.preventDefault();
  const modalToggle = e.target.closest('.portfolio-link');

  if (!modalToggle) return;

  const modal = modalToggle.parentNode.nextElementSibling;
  const closeButton = modal.querySelector('.modal-close');

  modalOpen = _ => {
    modal.classList.add('is-open')
    modal.style.animation = 'modalIn 500ms forwards';
    modal.style.overflowX = 'scroll';
    document.body.style.overflowY = 'hidden';
  };


  moveToSlide = (currentSlide, targetSlide) => {
    track5.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  };

  updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
  };

  hideShowArrows = (targetIndex) => {
    if (targetIndex === 0) {
      prevButton5.classList.add('is-hidden');
      nextButton5.classList.remove('is-hidden');
    } else if (targetIndex === 11) {
      prevButton5.classList.remove('is-hidden');
      nextButton5.classList.add('is-hidden');
    } else {
      prevButton5.classList.remove('is-hidden');
      nextButton5.classList.remove('is-hidden');
    }
  };

  nextSlide = _ => {
    const currentSlide = track5.querySelector('.current-slide');
    const targetSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav5.querySelector('.current-slide');
    const targetDot = currentDot.nextElementSibling;
    const targetIndex = dots5.findIndex(dot => dot === targetDot);
    moveToSlide(currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(targetIndex);
  }

  prevSlide = _ => {
    const currentSlide = track5.querySelector('.current-slide');
    const targetSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav5.querySelector('.current-slide');
    const targetDot = currentDot.previousElementSibling;
    const targetIndex = dots5.findIndex(dot => dot === targetDot);
    moveToSlide(currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(targetIndex);
  }

  nextDot = (e) => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;
    const currentSlide = track5.querySelector('.current-slide');
    const currentDot = dotsNav5.querySelector('.current-slide');
    const targetIndex = dots5.findIndex(dot => dot === targetDot);
    const targetSlide = slides5[targetIndex];
    moveToSlide(currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(targetIndex);
  }

  carouselShow = _ => {
    const slideWidth = slides5[0].getBoundingClientRect().width;

    setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + 'px';
    };

    slides5.forEach(setSlidePosition);

    nextButton5.addEventListener('click', nextSlide);

    prevButton5.addEventListener('click', prevSlide);

    dotsNav5.addEventListener('click', e => {
      nextDot(e);
    });
  };

  modalClose = _ => {
    modal.classList.remove('is-open');
    modal.removeEventListener('animationend', modalClose);
    nextButton5.removeEventListener('click', nextSlide);
    prevButton5.removeEventListener('click', prevSlide);
    dotsNav5.removeEventListener('click', e => {
      nextDot(e);
    });
  };

  closeButton.addEventListener('click', _ => {
    modal.style.animation = 'modalOut 500ms forwards';
    modal.addEventListener('animationend', modalClose);
    document.body.style.overflowY = 'scroll';
  });

  document.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
      modal.style.animation = 'modalOut 500ms forwards';
      modal.addEventListener('animationend', modalClose);
      document.body.style.overflowY = 'scroll';
    }
  });

  document.querySelector('.port-link3').addEventListener('click', e => {
    e.stopPropagation();
  });

  modalOpen();
  carouselShow();
});
