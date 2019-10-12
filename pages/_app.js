import App from "next/app"
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: "#0070f3"
  }
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        {/* <NProgress /> */}
      </ThemeProvider>
    )
  }
}

export default MyApp
