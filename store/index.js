export const strict = false

export const state = () => {
  return {
    user: null
  }
}

export const getters = {
  isAuthenticated (state) {
    return !!state.user
  }
}
