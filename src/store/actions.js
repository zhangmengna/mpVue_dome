import { RECEIVE_LIST, RECEIVE_MOVIES } from './mutations-type'
import listData from '../datas/list-data'
const MOVIE_URL = 'http://t.yushu.im/v2/movie/top250';
export default {
    getListInfo({commit}){
        commit(RECEIVE_LIST, listData)
    },
    getMoviesArr({commit}){
        commit(RECEIVE_MOVIES,moviesArr)       
    }
}