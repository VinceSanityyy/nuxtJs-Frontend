export const state = () => ({
    loginModalShow: false
  })
  
  export const mutations = {
    setvariant(state, data) {
      state.loginModalShow = data;
    },
  }