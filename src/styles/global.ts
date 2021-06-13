import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --white:#fff;
  --background: #F2F3F5;
  --gray-line: #DCDDE0;
  --text: #666666;
  --title: #2E384D;
  --red: #E83F5B;
  --black-primary: rgb(19, 17, 14);
  --green: rgb(96, 191, 131);
  --green-dark: rgb(58, 146, 90);
  --yellow: rgb(253, 224, 94);
  --yellow-dark: rgb(249, 203, 4);
  --yellow-darker: rgb(181, 148, 3);
  --yellow-accent: rgb(255, 255, 0);
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body {
  background: var(--background);
  color: var(--text);
}

body, input, textarea, button, p {
  font: 400 1rem "Barlow", sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`;
