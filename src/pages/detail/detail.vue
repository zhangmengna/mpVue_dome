<template>
    <div class="detail_container">
        <img class="detail_img" :src="dataObj.detail_img" alt="">
        <img @tap='handlePlayMusic' class="music_img" 
            :src="isMusicPlay?'/static/music/music-start.png':'/static/music/music-stop.png'" alt="">
        <div class="userDate">
            <img :src='dataObj.avatar' alt="">
            <span>{{dataObj.author}}</span>
            <span>发布于</span>
            <span>{{dataObj.date}}</span>
        </div>
        <p class="movieName">龙猫简介</p>
        <div class='do_container'>
            <div class="collect_share">
               <img @tap='handleCollection' :src="isCollected?'/static/icon/collection.png':'/static/icon/collection-anti.png'" alt="">
               <img src="/static/icon/share-anti.png" alt=""> 
            </div>            
            <div class="line"></div>
        </div>
        <Button>转发此文</Button>  
        <p class="content">{{dataObj.detail_content}}</p>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import isPlayObj from '../../datas/isPlay'
export default {
    beforeMount(){
        //获取对象的index
        this.index = this.$mp.query.index
        
        //预处理storage
        let oldStorage = wx.getStorageSync('isCollected')
        if(!oldStorage){
            wx.setStorage({
                key:'isCollected',
                data:{}
            })
        }else{
            //用户缓存过
            this.isCollected = (oldStorage[this.index] ? true :false)
        }
        // 判断当前页面加载时候音乐是否播放
        this.isMusicPlay = (isPlayObj.pageIndex === this.index && isPlayObj.isPlay?true:false)
        //监听音乐的播放与暂停
        wx.getBackgroundAudioManager(()=>{
            console.log('播放')
            this.isMusicPlay = true
            isPlayObj.pageIndex = this.index
            isPlayObj.isPlay = true
        })
        wx.getBackgroundAudioManager(() => {
            console.log('暂停')
            this.isMusicPlay = false
            isPlayObj.isPlay = false
        })
    },
    data(){
        return{
            index:0,
            dataObj:{},
            isCollected:false,
            isMusicPlay: false
        }
    },
    computed:{
         ...mapState(['listInfo'])
     },
    mounted() {
        let index = this.$mp.query.index
        this.dataObj = this.listInfo[this.index]
        console.log(this.dataObj)
    },
    methods:{
        handleCollection(){
            this.isCollected = !this.isCollected
            let title =  this.isCollected ? '收藏成功':'取消收藏'
            wx.showToast({
                title,
                icon:'success'
            })
            //读取是否由本地收藏
            let oldStorage = wx.getStorageSync('isCollected')
            oldStorage[this.index] = this.isCollected
            //将本次设置缓存到本地
            wx.setStorage({
                key: 'isCollected',
                data:oldStorage
            })            
        },
        handlePlayMusic(){
            this.isMusicPlay = !this.isMusicPlay
            let {dataUrl, title} = this.dataObj.music
            console.log(dataUrl, title)
            if(this.isMusicPlay){
                wx.getBackgroundAudioManager({
                    dataUrl,
                    title
                })
            }else{
                wx.getBackgroundAudioManager()
            }
        }
    }
}
</script>
<style scoped>
    .detail_container{
        display: flex;
        flex-direction:column;
    }
    .detail_container .detail_img{
        width: 100%;
        height: 460rpx;
    }
    .detail_container .music_img{
        position: absolute;
        top: 200rpx;
        left: 50%;
        margin-left: -30rpx;
        width: 60rpx;
        height: 60rpx;
    }
    .userDate{
        padding: 20rpx;
    }
    .userDate img{
        width:50rpx;
        height: 50rpx;
        margin-right: 20rpx;
        vertical-align: middle;
    }
    .userDate span{
        font-size: 26rpx;
    }
    .movieName{
        font-size: 20px;
        font-weight: bold;
        padding: 10rpx;
    }
    .do_container{
        position: relative;
    }
    .collect_share {
        float: right;
        margin-right: 30rpx;
    }
    .collect_share img{        
        width: 80rpx;
        height: 80rpx;
        margin-right: 20rpx;
    }
    .do_container .line{
        position: absolute;
        top: 40rpx;
        left: 5%;
        width: 90%;
        border: 1rpx solid #eee;
        height: 2rpx;
        background: rad;
        z-index: -1;
    }
    .content{
        font-size: 28rpx;
        text-indent: 56rpx;
        letter-spacing: 5rpx;
    }
</style>