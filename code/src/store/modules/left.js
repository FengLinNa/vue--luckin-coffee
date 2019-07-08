import axios from "axios"
const state = {
    list:[],
    curId:1,
}

const mutations = {
    click(state,payload){
        state.curId = payload
    },
    updateLeft(state,payload){
        state.list = payload
    }
}

const actions = {
    getData({commit},payload){
        axios.get("/api/data").then(res=>{
            console.log(res.data,"4444444444")
            commit("updateLeft",res.data.list)
        })
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}