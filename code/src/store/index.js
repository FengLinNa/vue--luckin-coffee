import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import Logger from "vuex/dist/logger"

import left from "./modules/left"
import right from "./modules/right"

export default new Vuex.Store({
    modules:{
        left,
        right
    },
    plugins:[Logger()]
})