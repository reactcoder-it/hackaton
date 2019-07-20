import Head from 'next/head'
import Router from 'next/router'

import {
  getUserFromServerCookie,
  getUserFromLocalCookie,
  getUserRoleFromLocalCookie,
  getUserRoleFromServerCookie
} from '../../utils/auth'

const App = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        height: 100vh;
        width: 100vw;
      }
    `}</style>
  </div>
)

const Main = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        max-width: 1024px;
        margin: 0 auto;
        padding: 30px;
      }
    `}</style>
  </div>
)

export default Page => class DefaultPage extends React.Component {
  static getInitialProps (ctx) {
    const loggedUser = process.browser ? getUserFromLocalCookie() : getUserFromServerCookie(ctx.req)
    const userRole = process.browser ? getUserRoleFromLocalCookie() : getUserRoleFromServerCookie(ctx.req)

    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'

    const apiUrl = process.browser
      ? `${protocol}://${window.location.host}/api/auth/login`
      : `${protocol}://${ctx.req.headers.host}/api/auth/login`

    const pageProps = Page.getInitialProps && Page.getInitialProps(ctx)
    return {
      ...pageProps,
      loggedUser,
      currentUrl: ctx.pathname,
      isAuthenticated: !!loggedUser,
      apiUrl,
      userRole
    }
  }

  logout = (eve) => {
    if (eve.key === 'logout') {
      Router.push(`/?logout=${eve.newValue}`)
    }
  }

  componentDidMount () {
    window.addEventListener('storage', this.logout, false)
  }

  componentWillUnmount () {
    window.removeEventListener('storage', this.logout, false)
  }

  render () {
    const cssFiles = [
      'https://unpkg.com/normalize.css@5.0.0/normalize.css',
      "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    ]
    return (
      <div>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          {cssFiles.map((c, i) => <link key={i} href={c} rel='stylesheet' />)}
          <style>
            {`
            * {
              margin: 0;
              //font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
              font-family: Helvetica, sans-serif;
            }
            a {
              cursor: pointer;
            }
            `}
          </style>
          <title>Контроль.рф</title>
        </Head>
        <App>
          <Main>
            {/* <Header {...this.props} /> */}
            <Page {...this.props} />
          </Main>
        </App>
      </div>
    )
  }
}