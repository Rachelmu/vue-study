import { createStore } from 'vuex'
import moduleA from './modules/moduleA'
export default createStore({
  state: {
    groups: [1]
  },
  // mutations,
  // actions,
  modules: {
    moduleA
  },
  getters:{
    getGroups(state){
      return state.groups
    }
  }
})
