document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const heading = section.querySelector('h2');
        if (heading) {
            heading.addEventListener('click', () => {
                section.classList.toggle('collapsed');
            });
        }
    });

    // Add zoom functionality
    const profileImage = document.getElementById('profile-image');
    const zoomContainer = document.getElementById('zoom-container');
    const zoomedImage = document.getElementById('zoomed-image');

    profileImage.addEventListener('click', () => {
        zoomedImage.src = profileImage.src;
        zoomContainer.classList.add('active');
    });

    zoomContainer.addEventListener('click', () => {
        zoomContainer.classList.remove('active');
    });
});
