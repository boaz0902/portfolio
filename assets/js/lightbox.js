// Lightbox Functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script starting...');
    
    const modal = document.getElementById('lightbox-modal');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeBtn = document.getElementById('lightbox-close');
    const zoomInBtn = document.getElementById('zoom-in-btn');
    const zoomOutBtn = document.getElementById('zoom-out-btn');
    const zoomResetBtn = document.getElementById('zoom-reset-btn');
    const zoomLevel = document.getElementById('zoom-level');
    
    console.log('Modal element:', modal);
    console.log('Image element:', lightboxImage);
    
    const lightboxImages = document.querySelectorAll('.lightbox-image');
    console.log('Found lightbox images:', lightboxImages.length);

    let currentZoom = 100;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let imageTranslateX = 0;
    let imageTranslateY = 0;

    // Open lightbox
    lightboxImages.forEach((img, index) => {
        console.log(`Setting up listener for image ${index}:`, img);
        
        img.style.cursor = 'pointer';
        
        img.addEventListener('click', function(e) {
            console.log('CLICK DETECTED on image', index);
            e.preventDefault();
            e.stopPropagation();
            
            try {
                const fullImageSrc = this.getAttribute('data-full') || this.src;
                console.log('Image source:', fullImageSrc);
                
                lightboxImage.src = fullImageSrc;
                console.log('Modal classList before:', modal.className);
                
                modal.classList.remove('hidden');
                modal.style.display = 'flex';
                
                console.log('Modal classList after:', modal.className);
                console.log('Modal display:', modal.style.display);
                
                document.body.style.overflow = 'hidden';
                currentZoom = 100;
                imageTranslateX = 0;
                imageTranslateY = 0;
                updateZoomDisplay();
                updateImageTransform();
                
                console.log('Modal should now be visible');
            } catch(err) {
                console.error('Error in click handler:', err);
            }
        });
    });

    // Close lightbox
    function closeLightbox() {
        console.log('Closing lightbox');
        modal.classList.add('hidden');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    closeBtn.addEventListener('click', function(e) {
        console.log('Close button clicked');
        e.stopPropagation();
        closeLightbox();
    });

    // Close when clicking on modal background
    modal.addEventListener('click', function(e) {
        console.log('Modal clicked, target:', e.target, 'modal:', modal);
        if (e.target === modal) {
            closeLightbox();
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (modal.classList.contains('hidden')) return;

        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === '+' || e.key === '=') {
            zoomIn();
        } else if (e.key === '-') {
            zoomOut();
        } else if (e.key === '0') {
            resetZoom();
        }
    });

    // Zoom controls
    function zoomIn() {
        if (currentZoom < 500) {
            currentZoom = Math.min(currentZoom + 10, 500);
            updateImageTransform();
            updateZoomDisplay();
        }
    }

    function zoomOut() {
        if (currentZoom > 50) {
            currentZoom = Math.max(currentZoom - 10, 50);
            updateImageTransform();
            updateZoomDisplay();
        }
    }

    function resetZoom() {
        currentZoom = 100;
        imageTranslateX = 0;
        imageTranslateY = 0;
        updateImageTransform();
        updateZoomDisplay();
    }

    zoomInBtn.addEventListener('click', zoomIn);
    zoomOutBtn.addEventListener('click', zoomOut);
    zoomResetBtn.addEventListener('click', resetZoom);

    // Mouse wheel zoom
    modal.addEventListener('wheel', function(e) {
        e.preventDefault();
        if (e.deltaY < 0) {
            zoomIn();
        } else {
            zoomOut();
        }
    }, { passive: false });

    // Drag functionality
    lightboxImage.addEventListener('mousedown', function(e) {
        if (currentZoom <= 100) return;
        isDragging = true;
        dragStartX = e.clientX - imageTranslateX;
        dragStartY = e.clientY - imageTranslateY;
        lightboxImage.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;

        imageTranslateX = e.clientX - dragStartX;
        imageTranslateY = e.clientY - dragStartY;

        const maxTranslateX = (currentZoom - 100) / 100 * lightboxImage.width / 2;
        const maxTranslateY = (currentZoom - 100) / 100 * lightboxImage.height / 2;

        imageTranslateX = Math.max(-maxTranslateX, Math.min(maxTranslateX, imageTranslateX));
        imageTranslateY = Math.max(-maxTranslateY, Math.min(maxTranslateY, imageTranslateY));

        updateImageTransform();
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
        lightboxImage.style.cursor = 'grab';
    });

    // Touch support for mobile
    lightboxImage.addEventListener('touchstart', function(e) {
        if (e.touches.length === 2) {
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];
            const initialDistance = Math.hypot(
                touch2.clientX - touch1.clientX,
                touch2.clientY - touch1.clientY
            );
            lightboxImage.dataset.initialDistance = initialDistance;
        } else if (e.touches.length === 1) {
            if (currentZoom <= 100) return;
            isDragging = true;
            dragStartX = e.touches[0].clientX - imageTranslateX;
            dragStartY = e.touches[0].clientY - imageTranslateY;
        }
    });

    document.addEventListener('touchmove', function(e) {
        if (!isDragging && !lightboxImage.dataset.initialDistance) return;

        if (e.touches.length === 2 && lightboxImage.dataset.initialDistance) {
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];
            const currentDistance = Math.hypot(
                touch2.clientX - touch1.clientX,
                touch2.clientY - touch1.clientY
            );
            const initialDistance = parseFloat(lightboxImage.dataset.initialDistance);
            const zoomChange = (currentDistance - initialDistance) / 10;
            currentZoom = Math.max(50, Math.min(500, currentZoom + zoomChange));
            updateImageTransform();
            updateZoomDisplay();
        } else if (isDragging && e.touches.length === 1) {
            imageTranslateX = e.touches[0].clientX - dragStartX;
            imageTranslateY = e.touches[0].clientY - dragStartY;
            updateImageTransform();
        }
    });

    document.addEventListener('touchend', function(e) {
        isDragging = false;
        delete lightboxImage.dataset.initialDistance;
    });

    // Update image transform
    function updateImageTransform() {
        lightboxImage.style.transform = `scale(${currentZoom / 100}) translate(${imageTranslateX}px, ${imageTranslateY}px)`;
    }

    // Update zoom level display
    function updateZoomDisplay() {
        zoomLevel.textContent = Math.round(currentZoom) + '%';
    }

});
