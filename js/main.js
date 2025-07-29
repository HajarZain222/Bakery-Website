const images = document.querySelectorAll('.images-container .image img');
const sliderModal = document.getElementById('imageSlider');
const sliderImage = document.querySelector('.slider-image');
const closeBtn = document.querySelector('.close-btn');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;
const imageSources = [...images].map(img => img.src);


document.querySelectorAll('.overlay').forEach((overlay, index) => {
    overlay.addEventListener('click', () => {
        if (sliderImage && sliderModal) {
        currentIndex = index;
        sliderImage.src = imageSources[currentIndex];
        sliderModal.classList.add('active');
        }
    });
});


if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        sliderModal.classList.remove('active');
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % imageSources.length;
        sliderImage.src = imageSources[currentIndex];
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
        sliderImage.src = imageSources[currentIndex];
    });
}

if (sliderImage) {
    sliderImage.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % imageSources.length;
        sliderImage.src = imageSources[currentIndex];
    });
}

if (sliderModal) {
    sliderModal.addEventListener('click', (e) => {
        if (e.target === sliderModal) {
        sliderModal.classList.remove('active');
        }
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const replyBtn = document.querySelector("#replyBtn");
    const replyBox = document.querySelector(".replying-to");
    const formTitle = document.getElementById("form-title");

    if (!replyBtn || !replyBox || !formTitle) return;

    replyBtn.addEventListener("click", () => {
        // Show the reply box
        replyBox.style.display = "block";

        // Focus the textarea
        const textarea = document.querySelector(".leave-comment .message textarea");
        if (textarea) {
            setTimeout(() => {
                textarea.focus();
            }, 50);
        }

        // Change form title to 'Cancel Reply'
        formTitle.innerHTML = `Cancel Reply`;

        // Style and hover class
        formTitle.classList.add("hoverable-title");

        formTitle.addEventListener("click", cancelReply);
    });

    function cancelReply() {
        replyBox.style.display = "none";
        formTitle.innerHTML = "Leave a Comment";
        formTitle.style.cursor = "default";
        formTitle.style.color = "";
        formTitle.classList.remove("hoverable-title");

        formTitle.removeEventListener("click", cancelReply);
    }
});


const imagesOfSlider = document.querySelectorAll('.slider img');
const dots = document.querySelectorAll('.dot');

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        imagesOfSlider.forEach(img => img.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));

        currentIndex = parseInt(dot.getAttribute('data-index'));

        imagesOfSlider[currentIndex].classList.add('active');
        dot[currentIndex].classList.add('active');
    });
});

setInterval(() => {
    imagesOfSlider[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + 1) % imagesOfSlider.length;

    imagesOfSlider[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}, 5000);




