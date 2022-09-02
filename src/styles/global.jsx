import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
  --background: #E5E5E5;
  --orange: #db6300;
  --light: #CFCFCF;
  --disabled:#DDDDDD;
  --dark: #262A34;
  --green: #32BF00;
  --red:  #CC3300;
  --white: #FFFFFF;

  font-size: 10px;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background: var(--background);
  -webkit-font-smoothing: antialiased;
  font-family: 'Montserrat', sans-serif;
}

textarea,
button {
	font-family: 'Roboto', sans-serif;
}

h1 {
	color: var(--orange);
	font-style: normal;
	font-weight: 700;
	font-size: 2.4rem;
	line-height: 2.9rem;
	letter-spacing: -0.1rem;
}

`
