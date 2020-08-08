import { RECEIVE_LIST, RECEIVE_MOVIES } from './mutations-type'

export default {
    [RECEIVE_LIST](state, {list_data}){
        state.listInfo = list_data
    },
    [RECEIVE_MOVIES](state, {moviesArr}){
        state.moviesArr = moviesArr
    },
}