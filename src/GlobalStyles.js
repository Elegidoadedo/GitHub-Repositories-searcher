import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
  background: #f7f8fb;
  box-sizing: border-box;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul, li, h1, h2, h3, h4, p, button, span {
    margin: 0;
  }

.primary-button{
  background-color: #fafbfc;
  border-color: rgba(27,31,35, .15);
  box-shadow: 0 1px 0 rgba(27, 31,35,.4);
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 800;
  text-align: center;
  width: 200px;
  cursor: pointer;
}
`;