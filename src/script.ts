/**
 * DOM element representing the progress container
 * @type {HTMLElement}
 */
const container = document.querySelector('.progress-container') as HTMLElement | null;
/**
 * DOM element representing the progress bar
 * @type {HTMLElement}
 */
const progressBar = document.querySelector('.progress') as HTMLElement | null;
/**
 * DOM element representing the status text
 * @type {HTMLElement}
 */
const statusText = document.querySelector('.status') as HTMLElement | null;
/**
 * DOM element representing the time text
 * @type {HTMLElement}
 */
const timeText = document.querySelector('.time') as HTMLElement | null;


/**
 * MediaQueryList object that detects portrait orientation
 * @type {MediaQueryList}
 */
const portraitMatcher: MediaQueryList = window.matchMedia('(orientation: portrait)');

interface Callback<T = unknown, R = unknown> {
  // eslint-disable-next-line no-unused-vars
  (...args: T[]): R;
}

/**
 * Creates a debounce function to avoid excessive calculations during resize
 * @param {Function} func - The function to debounce
 * @param {number} [timeout=300] - The debounce timeout in milliseconds
 * @returns {Function} - The debounced function
 */
const debounce = (func: Callback<unknown, void>, timeout: number = 300) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: unknown[]) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => func(...args), timeout);
  };
};

/**
 * Updates the container orientation based on screen dimensions
 * @returns {void}
 */
const updateContainerOrientation = (): void => {
  const width: number = window.innerWidth;
  const height: number = window.innerHeight;

  if (!container) {
    console.error('Progress container element not found');
    return;
  }

  if (height > width) {
    // Portrait Orientation
    //container.style.transform = 'rotate(90deg)';
    //container.style.width = `${Math.floor(height * 0.75)}px`;
    container.classList.add('portrait');
  } else {
    // Landscape Orientation
    //container.style.transform = 'rotate(0deg)';
    //container.style.width = '75%';
    container.classList.remove('portrait');
  }
};

/**
 * Updates the date and time, and adjusts the progress bar and status text accordingly
 * @returns {void}
 */
const updateDateTime = (): void => {
  const date: Date = new Date();
  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();
  const seconds: number = date.getSeconds();

  const elapsed: number = hours * 3600 + minutes * 60 + seconds;
  const progress: number = elapsed / 86400;

  if (progressBar) {
    progressBar.setAttribute('style', `transform: scaleX(${Number(progress).toFixed(3)})`);
  }
  if (statusText) {
    statusText.innerHTML = `${Number(progress * 100).toFixed(2)}%`;
  }
  if (timeText) {
    const h = hours.toString().padStart(2, '0');
    const m = minutes.toString().padStart(2, '0');
    const s = seconds.toString().padStart(2, '0');
    timeText.innerHTML = `${h}:${m}:${s}`;
  }
  requestAnimationFrame(updateDateTime);
};

// Event Listeners
document.addEventListener('DOMContentLoaded', updateContainerOrientation);
portraitMatcher.addEventListener('change', debounce(updateContainerOrientation, 100));
window.addEventListener('resize', debounce(updateContainerOrientation, 100));

// Initialize and set timers
requestAnimationFrame(updateDateTime);