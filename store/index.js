export const state = () => ({
    loginModalShow: false
})
  
export const mutations = {
    showModal(state, data) {
      state.loginModalShow = data;
    },
}