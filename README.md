# Linear Clock

A minimalist, terminal-styled linear clock that displays the progress of the day as a percentage and visual progress bar.

## Features

- Visual progress bar representing time elapsed in the current day (0-100%)
- Real-time updates every second
- Responsive design that works in both portrait and landscape orientations
- Terminal/retro computer aesthetic with green CRT-style animations
- Percentage display showing exact day progress

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/com-henderson5.git
   cd com-henderson5
   ```

2. Open the project:
   ```
   # Install dependencies if needed
   npm install
   
   # Open index.html in your browser
   open index.html   # on macOS
   # or
   xdg-open index.html   # on Linux
   # or simply double-click the file in your file explorer
   ```

## How It Works

The Linear Clock represents the 24-hour day as a linear progress bar:

- 0% = 00:00:00 (midnight)
- 25% = 06:00:00 (6 AM)
- 50% = 12:00:00 (noon)
- 75% = 18:00:00 (6 PM)
- 100% = 23:59:59 (end of day)

The current time is calculated and converted to a percentage of the day. This percentage is then used to scale the progress bar and update the display.

## Technologies

- HTML5
- CSS3 (with animations)
- JavaScript (ES6+)
- Responsive design with media queries

## Documentation

API documentation can be generated using JSDoc:

```
npm run jsdoc
```

## License

ISC
