<template>
    <div class="mvdetail_container">
        <img :src="moviesObj.images.large" alt="">
        <p class="movie_name">{{moviesObj.original_title}}</p>
        <div class="movie_concent">
            <span>评分：{{moviesObj.rating.average}}</span>
            <span>导演：{{moviesObj.directors[0].name}}</span>
            <span>主演：{{moviesObj.casta[0].name}}</span>
        </div>
        <button>我要观影</button>
    </div>    
</template>
<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            moviesObj:{}
        }
    },
    computed:{
        ...mapState(['moviesArr'])
    },
    beforeMount(){
        console.log(this.moviesArr,this.$mp.query.index)
        this.moviesObj = this.moviesArr[this.$mp.query.index]
        console.log(this.moviesObj)
    }
}
</script>
<style>
    .mvdetail_container{
        display: flex;
        flex-direction: column;
    }
    .mvdetail_container img{
        width: 70%;
        height: 700rpx;
        margin: 50rpx auto;
    }
    .movie_name {
        font-size: 40rpx;
        text-align: center;
        font-weight: bold;
    }
    .detail_content{
        display: flex;
        flex-direction: column;
        margin-left: 20%;
        margin-top: 30rpx;
        line-height: 50rpx;
        font-size: 26rpx;
    }
    button{
        width: 70%;
        height: 80%;
        background: greesn;
        line-height: 80rpx;
        color: #fff;
        font-size: 28rpx;
        margin-top: 20rpx;
    }
</style>