/**
 * Awards & Achievements Modal and Image Navigation
 * Handles modal display, image switching, and keyboard navigation
 */

// Awards Data
const awardsData = {
    webdev: {
        title: 'Best in Web Development',
        subtitle: 'Outstanding Achievement',
        description: 'Recognized for exceptional skills in full-stack web development, creating innovative and scalable solutions that deliver exceptional user experiences and meet complex business requirements.',
        images: [
            'assets/images/webdev1.jfif',
            'assets/images/webdev.jpg'
        ]
    },
    design: {
        title: 'Best in UI/UX Design',
        subtitle: 'Design Excellence',
        description: 'Awarded for crafting intuitive, aesthetically pleasing user interfaces with meticulous attention to detail, creating designs that are both beautiful and highly functional across all devices.',
        images: [
            'assets/images/uix1.jfif',
            'assets/images/uix.jpg'
        ]
    }
};

// Modal State
let awardsModalState = {
    isOpen: false,
    currentAward: null,
    currentImageIndex: 0
};

// DOM Elements
const awardsModal = document.getElementById('awards-modal');
const awardsModalClose = document.getElementById('awards-modal-close');
const awardsModalOverlay = document.getElementById('awards-modal-overlay');
const awardsModalPrev = document.getElementById('awards-modal-prev');
const awardsModalNext = document.getElementById('awards-modal-next');
const awardsModalTitle = document.getElementById('awards-modal-title');
const awardsModalSubtitle = document.getElementById('awards-modal-subtitle');
const awardsModalDescription = document.getElementById('awards-modal-description');
const awardsModalImage = document.getElementById('awards-modal-image');
const awardsModalCounter = document.getElementById('awards-modal-counter');
const awardImagePreviews = document.querySelectorAll('.award-image-preview');

/**
 * Initialize Awards Section
 */
function initAwards() {
    addEventListeners();
}

/**
 * Add all event listeners
 */
function addEventListeners() {
    // Modal close buttons
    awardsModalClose.addEventListener('click', closeAwardsModal);
    awardsModalOverlay.addEventListener('click', closeAwardsModal);

    // Navigation buttons
    awardsModalPrev.addEventListener('click', previousImage);
    awardsModalNext.addEventListener('click', nextImage);

    // Image dots
    const dots = document.querySelectorAll('[id^="awards-modal-dot-"]');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToImage(index));
    });

    // Award card images
    awardImagePreviews.forEach((preview, index) => {
        const isWebdev = index === 0;
        preview.addEventListener('click', () => {
            const awardKey = isWebdev ? 'webdev' : 'design';
            openAwardsModal(awardKey);
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
}

/**
 * Open Awards Modal
 * @param {string} awardKey - The key of the award to display
 */
function openAwardsModal(awardKey) {
    if (!awardsData[awardKey]) return;

    awardsModalState.currentAward = awardKey;
    awardsModalState.currentImageIndex = 0;
    awardsModalState.isOpen = true;

    const award = awardsData[awardKey];

    // Update modal content
    awardsModalTitle.textContent = award.title;
    awardsModalSubtitle.textContent = award.subtitle;
    awardsModalDescription.textContent = award.description;

    updateModalImage();

    // Show modal with animation
    awardsModal.classList.remove('hidden');
    setTimeout(() => {
        awardsModal.classList.add('opacity-100');
    }, 10);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

/**
 * Close Awards Modal
 */
function closeAwardsModal() {
    awardsModalState.isOpen = false;

    awardsModal.classList.remove('opacity-100');
    setTimeout(() => {
        awardsModal.classList.add('hidden');
    }, 300);

    // Restore body scroll
    document.body.style.overflow = 'auto';
}

/**
 * Update Modal Image and UI
 */
function updateModalImage() {
    const award = awardsData[awardsModalState.currentAward];
    const imageIndex = awardsModalState.currentImageIndex;

    // Update image
    awardsModalImage.src = award.images[imageIndex];
    awardsModalImage.alt = `${award.title} - Image ${imageIndex + 1}`;

    // Update counter
    awardsModalCounter.textContent = `${imageIndex + 1} / ${award.images.length}`;

    // Update dots
    updateDots();

    // Update button states
    updateButtonStates();
}

/**
 * Update indicator dots
 */
function updateDots() {
    const dots = document.querySelectorAll('[id^="awards-modal-dot-"]');
    dots.forEach((dot, index) => {
        if (index === awardsModalState.currentImageIndex) {
            dot.classList.remove('bg-[#1E293B]', 'hover:bg-[#3B82F6]/50');
            dot.classList.add('bg-[#3B82F6]');
        } else {
            dot.classList.add('bg-[#1E293B]', 'hover:bg-[#3B82F6]/50');
            dot.classList.remove('bg-[#3B82F6]');
        }
    });
}

/**
 * Update button states (enable/disable prev/next)
 */
function updateButtonStates() {
    const award = awardsData[awardsModalState.currentAward];
    const imageIndex = awardsModalState.currentImageIndex;

    // Previous button
    if (imageIndex === 0) {
        awardsModalPrev.classList.add('opacity-50', 'cursor-not-allowed');
        awardsModalPrev.disabled = true;
    } else {
        awardsModalPrev.classList.remove('opacity-50', 'cursor-not-allowed');
        awardsModalPrev.disabled = false;
    }

    // Next button
    if (imageIndex === award.images.length - 1) {
        awardsModalNext.classList.add('opacity-50', 'cursor-not-allowed');
        awardsModalNext.disabled = true;
    } else {
        awardsModalNext.classList.remove('opacity-50', 'cursor-not-allowed');
        awardsModalNext.disabled = false;
    }
}

/**
 * Show Previous Image
 */
function previousImage() {
    if (awardsModalState.currentImageIndex > 0) {
        awardsModalState.currentImageIndex--;
        updateModalImage();
    }
}

/**
 * Show Next Image
 */
function nextImage() {
    const award = awardsData[awardsModalState.currentAward];
    if (awardsModalState.currentImageIndex < award.images.length - 1) {
        awardsModalState.currentImageIndex++;
        updateModalImage();
    }
}

/**
 * Go to Specific Image
 * @param {number} index - Image index
 */
function goToImage(index) {
    const award = awardsData[awardsModalState.currentAward];
    if (index >= 0 && index < award.images.length) {
        awardsModalState.currentImageIndex = index;
        updateModalImage();
    }
}

/**
 * Handle Keyboard Navigation
 * Arrow keys: left/right for prev/next
 * ESC: close modal
 */
function handleKeyboardNavigation(event) {
    if (!awardsModalState.isOpen) return;

    switch (event.key) {
        case 'ArrowLeft':
            event.preventDefault();
            previousImage();
            break;
        case 'ArrowRight':
            event.preventDefault();
            nextImage();
            break;
        case 'Escape':
            event.preventDefault();
            closeAwardsModal();
            break;
    }
}

/**
 * Add CSS Animation for Modal
 */
function addModalAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes awards-open {
            from {
                opacity: 0;
                transform: scale(0.95) translateY(20px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }

        .animate-awards-open {
            animation: awards-open 0.3s ease-out forwards;
        }

        #awards-modal {
            transition: opacity 0.3s ease-out;
        }

        #awards-modal.opacity-100 {
            opacity: 1;
        }

        #awards-modal:not(.opacity-100) {
            opacity: 0;
        }

        #awards-modal-image {
            transition: transform 0.3s ease-out;
        }

        #awards-modal.hidden {
            display: none !important;
        }

        @media (max-width: 768px) {
            #awards-modal {
                padding: 1rem;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    addModalAnimationStyles();
    initAwards();
});
