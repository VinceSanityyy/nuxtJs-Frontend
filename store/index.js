

export const state = () => ({
    loginModalShow: false,
    authenticated: false,
    todos:[],
    isCollapse: false
})
  
export const mutations = {
    showModal(state, data) {
      state.loginModalShow = data;
    },
    ifAuth(state,data){
      state.authenticated = data;
    },
    setTodos(state,data){
      state.todos = data
    },
    setCollapse(state,data){
      state.isCollapse = data
    }
}

export const actions = {
   getTodos({commit}){
    return new Promise((resolve,reject)=>{
       this.$axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((response)=>{
          resolve(response)
          // console.log(response.data)
          commit('setTodos',response.data)
        }).catch((err)=>{
          reject(err)
        })
    })
  },
  async login({commit},email,password){
     await console.log()
  }
}

