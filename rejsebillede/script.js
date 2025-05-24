// Image comparison slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const imageCompare = document.querySelector('.image-compare');
    const beforeImage = imageCompare.querySelector('img:first-child');
    const afterImage = imageCompare.querySelector('img:last-child');
    let isDown = false;

    function moveSlider(e) {
        if (!isDown) return;
        e.preventDefault();

        const rect = imageCompare.getBoundingClientRect();
        const x = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
        const position = (x - rect.left) / rect.width;
        
        // Constrain position between 0 and 1
        const constrainedPosition = Math.max(0, Math.min(1, position));
        
        // Update slider position
        slider.style.left = `${constrainedPosition * 100}%`;
        
        // Update image clip paths
        beforeImage.style.clipPath = `polygon(0 0, ${constrainedPosition * 100}% 0, ${constrainedPosition * 100}% 100%, 0 100%)`;
        afterImage.style.clipPath = `polygon(${constrainedPosition * 100}% 0, 100% 0, 100% 100%, ${constrainedPosition * 100}% 100%)`;
    }

    // Mouse events
    slider.addEventListener('mousedown', () => {
        isDown = true;
        imageCompare.classList.add('active');
    });

    window.addEventListener('mousemove', moveSlider);
    window.addEventListener('mouseup', () => {
        isDown = false;
        imageCompare.classList.remove('active');
    });

    // Touch events
    slider.addEventListener('touchstart', () => {
        isDown = true;
        imageCompare.classList.add('active');
    });

    window.addEventListener('touchmove', moveSlider);
    window.addEventListener('touchend', () => {
        isDown = false;
        imageCompare.classList.remove('active');
    });

    // Initialize slider position
    slider.style.left = '50%';
    beforeImage.style.clipPath = 'polygon(0 0, 50% 0, 50% 100%, 0 100%)';
    afterImage.style.clipPath = 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)';
});

// Quiz functionality
function checkAnswer(choice) {
    const result = document.getElementById('quiz-result');
    const quizImages = document.querySelectorAll('.quiz-images img');
    
    // Remove any existing highlight
    quizImages.forEach(img => {
        img.style.border = '';
        img.style.opacity = '1';
    });
    
    if (choice === 'A') {
        result.textContent = "❌ Forkert – billede A har dårligt lys og dårlig komposition.";
        quizImages[0].style.border = '3px solid #ff4444';
        quizImages[0].style.opacity = '0.7';
    } else {
        result.textContent = "✅ Korrekt! Billede B følger fototipsene med god brug af reglen om tredjedele og dybde.";
        quizImages[1].style.border = '3px solid #44ff44';
        quizImages[1].style.opacity = '0.7';
    }
}
  