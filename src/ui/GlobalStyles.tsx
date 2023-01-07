import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap');

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    resize: none;
    scrollbar-width: thin;
  }
	
  body {
    font-family: 'Josefin Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
		font-weight: 500;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  ::-webkit-scrollbar-button {
    background-repeat: no-repeat;
    width: 6px;
    height: 0;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 100;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }

  ::-webkit-resizer {
    background-repeat: no-repeat;
    width: 0;
    height: 0;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  span {
    word-break: break-word;
  }

  a {
    text-decoration: none;
    max-width: 100%;
  }

  button,
  svg,
  img {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  }
`
