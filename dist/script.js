"use strict";
/**
 * DOM element representing the progress container
 * @type {HTMLElement}
 */
const container = document.querySelector('.progress-container');
/**
 * DOM element representing the progress bar
 * @type {HTMLElement}
 */
const progressBar = document.querySelector('.progress');
/**
 * DOM element representing the status text
 * @type {HTMLElement}
 */
const statusText = document.querySelector('.status');
/**
 * MediaQueryList object that detects portrait orientation
 * @type {MediaQueryList}
 */
const portraitMatcher = window.matchMedia('(orientation: portrait)');
/**
 * Creates a debounce function to avoid excessive calculations during resize
 * @param {Function} func - The function to debounce
 * @param {number} [timeout=300] - The debounce timeout in milliseconds
 * @returns {Function} - The debounced function
 */
const debounce = (func, timeout = 300) => {
    let timer;
    return (...args) => {
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(() => func(...args), timeout);
    };
};
/**
 * Updates the container orientation based on screen dimensions
 * @returns {void}
 */
const updateContainerOrientation = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (!container) {
        console.error('Progress container element not found');
        return;
    }
    if (height > width) {
        // Portrait Orientation
        container.style.transform = 'rotate(90deg)';
        container.style.width = `${Math.floor(height * 0.75)}px`;
    }
    else {
        // Landscape Orientation
        container.style.transform = 'rotate(0deg)';
        container.style.width = '75%';
    }
};
/**
 * Updates the date and time, and adjusts the progress bar and status text accordingly
 * @returns {void}
 */
const updateDateTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const elapsed = hours * 3600 + minutes * 60 + seconds;
    const progress = elapsed / 86400;
    if (progressBar) {
        progressBar.setAttribute('style', `transform: scaleX(${progress})`);
    }
    if (statusText) {
        statusText.innerHTML = `${Number(progress * 100).toFixed(2)}%`;
    }
};
// Event Listeners
document.addEventListener('DOMContentLoaded', updateContainerOrientation);
portraitMatcher.addEventListener('change', debounce(updateContainerOrientation, 100));
window.addEventListener('resize', debounce(updateContainerOrientation, 100));
// Initialize and set timers
updateDateTime();
setInterval(updateDateTime, 1000);
//# sourceMappingURL=script.js.map