import axios from "axios"

const state = {
    total:[],
    cur:[]
}

const mutations = {
    click(state,payload){
        state.cur = state.total.filter(item=>item.type == payload)
    },
    updataRight(state,payload){
        state.total = payload
    }
}

const actions = {
    getDataR({commit},payload){
        axios.get("/api/data").then(res=>{
            commit("updataRight",res.data.total)
        })
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}