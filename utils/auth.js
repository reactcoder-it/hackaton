import jwtDecode from 'jwt-decode'
import Cookie from 'js-cookie'

const getQueryParams = () => {
  const params = {}
  window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
    params[$1] = $3
  })
  return params
}

export const extractInfoFromHash = () => {
  if (!process.browser) {
    return undefined
  }
  const {id_token, state} = getQueryParams()
  return {token: id_token, secret: state}
}

export const setToken = (token) => {
  if (!process.browser) {
    return
  }
  const { userName, userRole } = jwtDecode(token)
  Cookie.set('user', userName)
  Cookie.set('role', userRole)
  Cookie.set('jwt', token)
}

export const unsetToken = () => {
  if (!process.browser) {
    return
  }
  Cookie.remove('jwt')
  Cookie.remove('user')
  Cookie.remove('role')
  Cookie.remove('secret')

  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now())
}

export const getUserFromServerCookie = (req) => {
  if (!req.headers.cookie) {
    return undefined
  }

  console.log(req.headers.cookie)

  const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
  if (!jwtCookie) {
    return undefined
  }
  const jwt = jwtCookie.split('=')[1]
  const { userName } = jwtDecode(jwt)
  return userName
}

export const getUserFromLocalCookie = () => {
  return Cookie.getJSON('user')
}

export const getUserRoleFromServerCookie = (req) => {
  if (!req.headers.cookie) {
    return undefined
  }

  console.log(req.headers.cookie)

  const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
  if (!jwtCookie) {
    return undefined
  }
  const jwt = jwtCookie.split('=')[1]
  const { userRole } = jwtDecode(jwt)
  return userRole
}

export const getUserRoleFromLocalCookie = () => {
  return Cookie.getJSON('role')
}

export const setSecret = (secret) => Cookie.set('secret', secret)

export const checkSecret = (secret) => Cookie.get('secret') === secret