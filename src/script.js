document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.getElementById('playButton');
    var audio = document.getElementById('backgroundMusic');
    
    audio.volume = 0.2;

    playButton.addEventListener('click', function() {
        setTimeout(function() {
            audio.play().catch(function(error) {
                console.log('Error playing audio: ', error);
            });
        }, 5000);
    });
    
});


document.addEventListener("DOMContentLoaded", () => {
    
    // Modal and its elements
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalContent = document.getElementById("modal-content");
    const modalClose = document.querySelector(".modal-close");

    // Function to open the modal
    function openModal(id, jsonData) {
        const data = jsonData.find(item => item.id == id);
        if (data) {
            modalTitle.textContent = data.title;
            modalContent.textContent = data.content;
            modal.style.display = "block";
        }
    }

    // Event listeners for buttons to trigger modals
    document.querySelectorAll(".modal-trigger").forEach(button => {
        button.addEventListener("click", () => {
            const id = button.getAttribute("data-id");
            openModal(id, jsonData);
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
