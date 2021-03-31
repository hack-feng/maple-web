import Cookies from 'js-cookie'

const LoginKey = 'hasLogin'

export function getToken() {
  return sessionStorage.getItem('token')
  // return Cookies.get(LoginKey);
}

export function setToken() {
  return Cookies.set(LoginKey, "1")
}

export function removeToken() {
  // return sessionStorage.removeItem('token')
  return Cookies.remove(LoginKey)
}
