# Book Haven – Responsive Bookstore Web App

Book Haven is a lightweight, fully-responsive bookstore application built with plain HTML, CSS (Bootstrap 5), and vanilla JavaScript. It lets users browse a catalogue of books, add them to a shopping cart, and perform a mock checkout—all without a backend.

## Preview
Open `index.html` in your browser and resize the window or view it on different devices to see the responsive layout in action.

## Features

* Mobile-first, responsive design powered by [Bootstrap 5](https://getbootstrap.com/)
* Dynamic book grid rendered from a JavaScript array
* Shopping cart with item quantity management and real-time total calculation
* Modal-based cart interface for an unobtrusive user experience
* Simple checkout flow (client-side alert for demo purposes)

## Folder Structure

```
/workspace
│  index.html       # Main page and layout
│  styles.css       # Custom styles
│  script.js        # Book data & cart logic
└─ README.md        # This documentation
```

## Getting Started

1. Clone or download this repository.
2. Serve the project with any static server (or simply open `index.html` directly):

```bash
# Using Python (v3)
python -m http.server 8000
# Then visit http://localhost:8000 in your browser
```

No build steps or dependencies are required.

## Customising

* **Adding/Editing books** – Open `script.js` and modify the `books` array (update IDs, titles, prices, and image URLs).
* **Styling** – Extend `styles.css` or override Bootstrap classes as needed.
* **Backend integration** – Replace the mock JavaScript array with API calls and implement real checkout logic.

## License
This project is released under the MIT License. Feel free to use it in your own projects.