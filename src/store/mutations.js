import { RECEIVE_LIST, MOVIES_ARR } from './mutations-type'

export default {
    [RECEIVE_LIST](state, {list_data}){
        state.listInfo = list_data
    },
    [MOVIES_ARR](state, data){
        state.moviesArr = data
    },
}