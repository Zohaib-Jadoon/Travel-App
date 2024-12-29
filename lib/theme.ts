export const theme = {
  colors: {
    primary: '#ff6b6b',
    secondary: '#feca57',
    background: '#f7f1e3',
    text: '#2d3436',
    textLight: '#ffffff',
    card: '#ffffff',
    cardHover: '#ffeaa7',
    navHover: '#ff8787',
    navActive: '#ff5252',
  },
  fonts: {
    body: '"Lato", sans-serif',
    heading: '"Playfair Display", serif',
  },
  animations: {
    buttonHover: 'transform transition-transform duration-300 hover:scale-105',
    fadeIn: 'animate-fadeIn',
    slideIn: 'animate-slideIn',
    navLink: 'transition-all duration-300 ease-in-out hover:bg-primary hover:text-white active:bg-navActive',
  },
  buttons: {
    primary: 'bg-primary text-white hover:bg-opacity-90',
    secondary: 'bg-secondary text-text hover:bg-opacity-90',
  },
  inputs: {
    default: 'border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary',
  },
}

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Playfair+Display:wght@400;700&display=swap');

  :root {
    --color-primary: ${theme.colors.primary};
    --color-secondary: ${theme.colors.secondary};
    --color-background: ${theme.colors.background};
    --color-text: ${theme.colors.text};
    --color-text-light: ${theme.colors.textLight};
    --color-card: ${theme.colors.card};
    --color-card-hover: ${theme.colors.cardHover};
    --color-nav-hover: ${theme.colors.navHover};
    --color-nav-active: ${theme.colors.navActive};
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideIn {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes swipeRight {
    from { transform: translateX(-10px); opacity: 0.7; }
    to { transform: translateX(0); opacity: 1; }
  }

  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out;
  }

  .animate-slideIn {
    animation: slideIn 0.5s ease-out;
  }

  .animate-swipe {
    animation: swipeRight 0.3s ease-out;
  }

  body {
    font-family: ${theme.fonts.body};
    background-color: var(--color-background);
    color: var(--color-text);
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .nav-link {
    position: relative;
    overflow: hidden;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-primary);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .nav-link:hover::after {
    transform: translateX(0);
  }
`

