function openModal(imageSrc, description) {
    const modal = document.getElementById('modal');
    const modalContent = modal.querySelector('.modal-content');
    const modalDescription = document.querySelector('.modal-description');

    // Clear existing content in modalContent
    modalContent.innerHTML = '';

    // Create image element
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = 'Modal Image';
    img.classList.add('modal-image');

    // Append image and description to modal content
    modalContent.appendChild(img);
    modalDescription.textContent = description;
    modalContent.appendChild(modalDescription);

    // Show the modal
    modal.style.display = 'flex';
    modalContent.classList.add('show');
}

function openVideoModal(videoSrc, description) {
    const modal = document.getElementById('modal');
    const modalContent = modal.querySelector('.modal-content');
    const modalDescription = document.querySelector('.modal-description');

    // Clear existing content in modalContent
    modalContent.innerHTML = '';

    // Create video element
    const video = document.createElement('video');
    video.src = videoSrc;
    video.controls = true;
    video.autoplay = true;
    video.classList.add('modal-video');

    // Append video and description to modal content
    modalContent.appendChild(video);
    modalDescription.textContent = description;
    modalContent.appendChild(modalDescription);

    // Show the modal
    modal.style.display = 'flex';
    modalContent.classList.add('show');
}

function closeModal() {
    const modal = document.getElementById('modal');
    const modalContent = modal.querySelector('.modal-content');

    // Stop video playback if there is any video element
    const video = modalContent.querySelector('video');
    if (video) {
        video.pause();
        video.src = ""; // Clear video source to stop loading
    }

    modal.style.display = 'none';
    modalContent.classList.remove('show');
}
