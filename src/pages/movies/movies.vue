<template>
    <div>
        <div @tap='toDetail(index)'
        class="movie_container" v-for="(item,index) in moviesArr" :key='index'>
            <img class="movie_img" :src="item.images.large" alt="">
            <div class="movie_info">
                <p class="name">{{item.original_title}}</p>
                <p class="time">年份：{{item.year}}</p>
                <p class="director">导演：{{item.directors[0].name}}</p>
            </div>
            <p class="movie_rating">{{item.rating.average}}</p>
        </div>
    </div>    
</template>
<script>
const MOVIE_URL = 'http://t.yushu.im/v2/movie/top250';
export default {
    data(){
        return{
            moviesArr:[]
        }
    },
    beforeMount(){
        //发送请求
        this.$fly.get(MOVIE_URL)
        .then((res)=>{
            let moviesArr = res.data.subjects
            console.log(moviesArr)
            this.$store.dispatch('getMoviesArr',moviesArr)
            this.moviesArr = moviesArr
        })
        .catch((err)=>{
            console.log(err)
        })
        
    },
    methods:{
        toDetail(index){
            wx.navigateTo({
                url:'/pages/movieDetail/main?index=' + index
            })
        }
    }
}
</script>
<style>
    .movie_container{
        display: flex;
        padding: 10rpx;
        border-bottom: 1rpx solid #eee;
    }
    .movie_img{
        width: 128rpx;
        height: 128rpx;
        margin-right: 20rpx;
    }
    .movie_info{
        width: 70%;
    }
    .movie_info .name{
        font-size: 32rpx;
        color: #333;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .movie_info .time{
        font-size: 2rpx;
        color: #999;
        margin: 5rpx 0;
    }
    .movie_info .director{
        font-size: 28rpx;
        color: #666;
    }
    .movie_container .movie_rating{
        font-size: 42rpx;
        font-weight: bold;
        color: red;
    }
</style>