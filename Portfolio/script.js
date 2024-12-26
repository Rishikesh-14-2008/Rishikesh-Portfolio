// Wait until the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in effect to the content when the DOM is fully loaded
    const content = document.querySelector('.content');
    content.classList.add('fade-in');
});

// Define time container
const timeContainer = document.getElementById('time-container');

// Fetch current time in Chicago
async function fetchChicagoTime() {
    try {
        // Fetch current time data from WorldTimeAPI
        const response = await fetch('https://worldtimeapi.org/api/timezone/America/Chicago'); // Use HTTPS
        const data = await response.json();

        console.log('API Response:', data); // Debugging: Log API response

        // Check if the response was successful
        if (response.ok) {
            const chicagoTime = new Date(data.datetime).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            });

            // Update the time container with the fetched time
            timeContainer.textContent = `Current Time in Chicago: ${chicagoTime}`;
        } else {
            // If there was an error fetching the time
            timeContainer.textContent = `Error fetching time: ${data.message}`;
        }
    } catch (error) {
        // Log any errors and display a message
        console.error('Error fetching Chicago time:', error); // Debugging: Log errors
        timeContainer.textContent = `Failed to fetch time: ${error.message}`;
    }
}

// Call the function to fetch and display Chicago time
fetchChicagoTime();

// Particles.js configuration (for dynamic background effect)
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#ffcc00'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#fff'
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.1
      }
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'random',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  }
});
