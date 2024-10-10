console.log('Dibby Content Script Loaded.');

const allowedWebsites = [
    'facebook.com',
    'zillow.com',
    'apartments.com',
    'trulia.com',
    'craigslist.org',
    'furnishedfinder.com',
    'homes.com',
    'rent.com',
    'realtor.com',
    'streeteasy.com',
    'redfin.com',
    'hotpads.com',
    'apartmentfinder.com'
];

// Check if the URL matches the condition
if (allowedWebsites.some(website => window.location.href.includes(website))) {
    // Create a white box container for the icon
    const container = document.createElement('div');
    container.id = 'dibby-floating-container';
    container.style.position = 'fixed';
    container.style.top = '80px';
    container.style.right = '20px';
    container.style.zIndex = '10000';
    container.style.width = '60px';
    container.style.height = '60px';
    container.style.backgroundColor = '#fff';
    container.style.border = '1px solid #ddd';
    container.style.borderRadius = '10px'; // Rounded corners for the white box
    container.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.cursor = 'pointer';

    // Add the Dibby icon image inside the container
    const dibbyIcon = document.createElement('img');
    dibbyIcon.src = chrome.runtime.getURL('dibby-icon.PNG'); 
    dibbyIcon.alt = 'Dibby Icon';
    dibbyIcon.style.width = '44px'; 
    dibbyIcon.style.height = '44px';

    // Append the image to the container
    container.appendChild(dibbyIcon);

    // Append the container to the body of the webpage
    document.body.appendChild(container);

    // Add click event listener to the container
    container.addEventListener('click', () => {
        console.log('Dibby icon clicked');
        chrome.runtime.sendMessage({ action: 'submitProperty' });
    });

    // Optional: Function to show status message (if needed)
    function showStatus(message, type) {
        const statusDiv = document.createElement('div');
        statusDiv.textContent = message;
        statusDiv.style.position = 'fixed';
        statusDiv.style.top = '150px';
        statusDiv.style.right = '20px';
        statusDiv.style.padding = '10px';
        statusDiv.style.border = '1px solid #ddd';
        statusDiv.style.borderRadius = '5px';
        statusDiv.style.backgroundColor = type === 'error' ? 'red' : 'green';
        statusDiv.style.color = '#fff';
        statusDiv.style.zIndex = '10001';
        document.body.appendChild(statusDiv);

        // Hide the message after 3 seconds
        setTimeout(() => {
            statusDiv.remove();
        }, 3000);
    }

    // Optional: Listen for messages to show status updates
    chrome.runtime.onMessage.addListener((message) => {
        if (message.action === 'showStatus') {
            showStatus(message.text, message.type);
        }
    });
}
