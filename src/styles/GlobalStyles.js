import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

  :root {
    --primary: #6c63ff;
    --secondary: #232946;
    --accent: #eebbc3;
    --background: #16161a;
    --card-bg: rgba(35, 41, 70, 0.7);
    --glass-bg: rgba(44, 51, 89, 0.6);
    --border: rgba(255,255,255,0.08);
    --shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    --text: #fff;
    --text-secondary: #b8b8d1;
    --success: #2ecc71;
    --danger: #e74c3c;
    --warning: #f1c40f;
    --progress-bg: #232946;
    --progress-bar: linear-gradient(90deg, #6c63ff 0%, #eebbc3 100%);
    --radius: 18px;
    --transition: 0.3s cubic-bezier(.4,2,.3,1);
  }

  html, body, #root {
    height: 100%;
    background: linear-gradient(135deg, #232946 0%, #16161a 100%);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--text);
    letter-spacing: 0.01em;
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: background var(--transition), color var(--transition), box-shadow var(--transition);
  }

  a {
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
    transition: color var(--transition);
    &:hover {
      color: var(--accent);
    }
  }

  button {
    font-family: inherit;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: var(--radius);
    background: var(--primary);
    color: #fff;
    padding: 0.6em 1.5em;
    font-weight: 600;
    box-shadow: var(--shadow);
    transition: background var(--transition), box-shadow var(--transition);
    &:hover {
      background: var(--accent);
      box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.25);
    }
  }

  ::selection {
    background: var(--primary);
    color: #fff;
  }

  img {
    max-width: 100%;
    border-radius: var(--radius);
  }

  .glass {
    background: var(--glass-bg);
    box-shadow: var(--shadow);
    border-radius: var(--radius);
    border: 1.5px solid var(--border);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
`;

export default GlobalStyles; 