import App from "next/app"
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from "@apollo/react-hooks"
import { HttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.github.com/graphql",
    credentials: 'same-origin',
    fetch
  })
})

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
        <NProgress />
      </ApolloProvider>
    )
  }
}

export default MyApp
