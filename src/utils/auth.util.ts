import jwtDecode from 'jwt-decode'
import Cookies from 'js-cookie'

const storageKey = "bookstoreSecret"

export const getAuth = (): any => {
  const auth = Cookies.get(storageKey)
  console.log('auth',auth)
  return auth
}
// 2 
export const getAuthDecode = (): any => {
  const auth = Cookies.get(storageKey)
  return auth ? jwtDecode(auth) : null
}
// 1
export const setAuthUser = (token: any): any => {
  const decoded: any = jwtDecode(token)
  const date = decoded.maxAge * 1000
  Cookies.set(storageKey, token, {
    expires: new Date(date)
  })
  return true
}

export const clearAuth = (): any => {
  Cookies.remove(storageKey)
}

export const getAuthToken = (): any => {
  const token = { key: '', value: '' }

  if (Cookies.get(storageKey)) {
    token.key = 'Authorization'
    token.value = `Bearer ${Cookies.get(storageKey)}`
  }

  return token
}

export default {
  setAuthUser,
  getAuth,
  getAuthToken,
  clearAuth,
  getAuthDecode
}