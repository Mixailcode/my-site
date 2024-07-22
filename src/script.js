document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var audio = document.getElementById('backgroundMusic');
		// Set the volume to 50%
		audio.volume = 0.5;
        audio.play().catch(function(error) {
            console.log('Error playing audio: ', error);
        });
    }, 5000); // 5000 milliseconds = 5 seconds
});

document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.getElementById('playButton');
    var audio = document.getElementById('backgroundMusic');
    
    // Set the volume to 50%
    audio.volume = 0.2;

    playButton.addEventListener('click', function() {
        setTimeout(function() {
            audio.play().catch(function(error) {
                console.log('Error playing audio: ', error);
            });
        }, 5000); // 5000 milliseconds = 5 seconds
    });
});
