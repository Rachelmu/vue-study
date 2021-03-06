const moduleA = {
    state:{
        text: 'hello'
    },
    mutations: {
        addText(state, txt){
            state.text += txt
        }
    },
    actions: {
        setText({ commit }){
            commit('addText', 'world')
        }
    },
    getters: {
        getText(state){
            return state.text + '!'
        }
    }
}

export default moduleA