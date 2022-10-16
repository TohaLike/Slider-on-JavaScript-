const backBtn = document.querySelector('.btn__back');
const nextBtn = document.querySelector('.btn__go');
const slider = document.querySelector('.slider__content');

let offset = 0; 

nextBtn.addEventListener('click', () => {
    if (offset === -2208) return;
    nextSlide();
});

backBtn.addEventListener('click', () => {
    if (offset === 0) return;
    backSlide();
});

function nextSlide() {
    offset -= 552;
    slider.style.left = offset + 'px';
    backBtn.style.visibility = 'visible';
    backBtn.style.opacity = '1';
    if (offset === -2208) {
        nextBtn.style.visibility = 'hidden';
        nextBtn.style.opacity = '0';
    };
};

function backSlide() {
    offset += 552;
    slider.style.left = offset + 'px';
    nextBtn.style.visibility = 'visible';
    nextBtn.style.opacity = '1';
    if (offset === 0) {
        backBtn.style.visibility = 'hidden';
        backBtn.style.opacity = '0';
    };
};



    
