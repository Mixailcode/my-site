// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // anchor.addEventListener('click', function (e) {
        // e.preventDefault();

        // document.querySelector(this.getAttribute('href')).scrollIntoView({
            // behavior: 'smooth'
        // });
    // });
// });

// document.addEventListener('DOMContentLoaded', function() {
    // var playButton = document.getElementById('playButton');
    // var audio = document.getElementById('backgroundMusic');
    
    // audio.volume = 0.2;

    // playButton.addEventListener('click', function() {
        // setTimeout(function() {
            // audio.play().catch(function(error) {
                // console.log('Error playing audio: ', error);
            // });
        // }, 5000);
    // });
    
// });

document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    scrollToTopBtn.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = scrollToTopBtn.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Modal and its elements
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalContent = document.getElementById("modal-content");
    const modalContacts = document.querySelector(".contacts");
    const modalClose = document.querySelector(".modal-close");

// Function to open the modal
    function openModal(id, jsonData, useInnerHTML = false) {
        const data = jsonData.find(item => item.id == id);
        if (data) {
            modalTitle.textContent = data.title;
            if (useInnerHTML) {
                modalContent.innerHTML = data.content; // Use innerHTML to render HTML content
            } else {
                modalContent.textContent = data.content; // Use textContent for plain text
            }
            modal.style.display = "block";
        }
    }

    // Event listeners for buttons to trigger modals
    document.querySelectorAll(".modal-trigger").forEach(button => {
        button.addEventListener("click", (event) => {
            const id = button.getAttribute("data-id");
            const useInnerHTML = button.classList.contains('get_btn'); // Check for 'get_btn' class

            // Prevent default action for links with class 'get_btn'
            if (button.classList.contains('get_btn')) {
                event.preventDefault();
            }

            openModal(id, jsonData, useInnerHTML);
        });
    });

    // Close the modal
    if (modalClose) {
        modalClose.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // Close the modal if clicked outside of it
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
