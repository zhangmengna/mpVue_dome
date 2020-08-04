import { RECEIVE_LIST } from './mutations-type'
import listData from '../datas/list-data'
export default {
    getListInfo({commit}){
        commit(RECEIVE_LIST, listData)
    }
}