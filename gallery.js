document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('#thumbnails img');
    const featured = document.querySelector('#featured');
    const caption = document.querySelector('figcaption');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const largeImageSrc = thumbnail.src.replace('-small', '-large');
            featured.src = largeImageSrc;
            caption.textContent = thumbnail.alt;

            thumbnails.forEach(thumb => thumb.classList.add('inactive'));
            thumbnail.classList.remove('inactive');
        });
    });

    // Initially set all thumbnails except the first one to inactive
    thumbnails.forEach((thumb, index) => {
        if (index !== 0) {
            thumb.classList.add('inactive');
        }
    });
});
