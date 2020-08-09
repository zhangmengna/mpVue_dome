import { RECEIVE_LIST, MOVIES_ARR } from './mutations-type'
import listData from '../datas/list-data'
const MOVIE_URL = 'http://t.yushu.im/v2/movie/top250';
export default {
    getListInfo({commit}){
        commit(RECEIVE_LIST, listData)
    },
    getMoviesArr({commit}, data){
        commit(MOVIES_ARR, data)       
    }
}