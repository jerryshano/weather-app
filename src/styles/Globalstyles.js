import { createGlobalStyle } from "styled-components";

// 1. #7B7554 2. #17183B 3. #A11692 4. #FF4F79 5. #FFB49A

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
  background-color: #FFB49A;
  color: #17183B;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`;
export default GlobalStyles;
