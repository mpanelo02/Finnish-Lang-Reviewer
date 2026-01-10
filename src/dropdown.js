// Drop down option
document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.getElementById("topicDropdown");
    const containers = {
        "b1ChapterQ": ".chapterQB1-container",
        "b1Chapter9": ".chapter9B1-container",
        "b1Chapter8": ".chapter8B1-container",
        "b1Chapter8p": ".chapter8pB1-container",
        "b1Chapter5": ".chapter5B1-container",
        "b1Chapter4": ".chapter4B1-container",

        "b2Chapter1": ".chapter1B2-container",
        "b2Chapter2": ".chapter2B2-container",
        "b2Chapter3": ".chapter3B2-container",
        "b2Chapter4": ".chapter4B2-container"
    };

    // Function to stop all audio players
    function stopAllAudioPlayers() {
        // Get all audio elements on the page
        const allAudioElements = document.querySelectorAll('audio');
        
        allAudioElements.forEach(audio => {
            try {
                audio.pause();
                audio.currentTime = 0;
            } catch (e) {
                console.error("Error stopping audio:", e);
            }
        });
        
        // Also stop the audio player variables
        const audioPlayers = [audioPlayerQB1, audioPlayer9, audioPlayer8, audioPlayer8p, audioPlayer5, audioPlayer4];
        audioPlayers.forEach(player => {
            if (player && typeof player.pause === 'function') {
                try {
                    player.pause();
                    player.currentTime = 0;
                } catch (e) {
                    console.error("Error stopping player:", e);
                }
            }
        });
    }

    dropdown.addEventListener("change", () => {
        // Stop all audio before switching topics
        stopAllAudioPlayers();
        
        // Hide all containers
        Object.values(containers).forEach(selector => {
            const container = document.querySelector(selector);
            if (container) {
                container.hidden = true;
            }
        });

        // Show selected container
        const selectedContainer = document.querySelector(containers[dropdown.value]);
        if (selectedContainer) {
            selectedContainer.hidden = false;
        }
    });
});