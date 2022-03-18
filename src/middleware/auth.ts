export default (param: any): any => {
  const { next, auth, skip } = param
  if (!auth.getAuth()) {
    return skip({
      name: 'Login'
    })
  }
  const data = auth.getAuthDecode()
  if (data && ((data.exp - 1800) * 1000) <= new Date().getTime()) {
    return skip({
      name: 'Login'
    })
  }
  return next()
}