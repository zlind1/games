
export default class Cookie {
  static exists(key) {
    return document.cookie.indexOf(`${key}=`) !== -1
  }
  static get(key) {
    if (Cookie.exists(key)) {
      return document.cookie
        .split('; ')
        .find(row => row.startsWith(key))
        .split('=')[1]
    }
    return null
  }
  static set(key, value) {
    document.cookie = `${key}=${value}`
  }
  static delete(key) {
    document.cookie = `${key}=;max-age=0`
  }
}
