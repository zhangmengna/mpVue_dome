import { RECEIVE_LIST } from './mutations-type'

export default {
    [RECEIVE_LIST](state, {list_data}){
        state.listInfo = list_data
    }
}