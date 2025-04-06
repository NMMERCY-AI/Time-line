// Intersection Observer for timeline items
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

// Observe all timeline items
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        observer.observe(item);
    });
});

// Media Navigation Functions
function prevMedia(button) {
    const container = button.closest('.media-container');
    const mediaItems = container.querySelectorAll('.media-item');
    const currentIndex = Array.from(mediaItems).findIndex(item => item.style.display === 'block');
    const prevIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
    
    mediaItems.forEach(item => item.style.display = 'none');
    mediaItems[prevIndex].style.display = 'block';
}

function nextMedia(button) {
    const container = button.closest('.media-container');
    const mediaItems = container.querySelectorAll('.media-item');
    const currentIndex = Array.from(mediaItems).findIndex(item => item.style.display === 'block');
    const nextIndex = (currentIndex + 1) % mediaItems.length;
    
    mediaItems.forEach(item => item.style.display = 'none');
    mediaItems[nextIndex].style.display = 'block';
}

// Initialize media containers
document.addEventListener('DOMContentLoaded', function() {
    const mediaContainers = document.querySelectorAll('.media-container');
    
    mediaContainers.forEach(container => {
        const mediaItems = container.querySelectorAll('.media-item');
        if (mediaItems.length > 0) {
            mediaItems.forEach((item, index) => {
                item.style.display = index === 0 ? 'block' : 'none';
            });
        }
    });
}); 