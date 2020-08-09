<template>
    <div @tap='toDeatil' class="itemContainer">
        <div class="userDate">
            <img :src='item.avatar' alt="">
            <span>{{item.date}}</span>
        </div>
        <p class="movieName">{{item.title}}</p>
        <img :src="item.detail_img" alt="">
        <div class="comment">{{item.detail_content}}</div>
        <div class="getLove">
            <img :src='item.detail_love_image1' alt="">
            <span>{{item.love_count}}</span>
            <img :src="item.detail_love_image2" alt="">
            <span>{{item.attention_count}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props:['item','index'],
    methods: {
        toDeatil(){
            wx.navigateTo({
                url:'/pages/detail/main?index='+this.index
            })
        }
    }
}
</script>
<style scoped>
    .itemContainer{
        display: flex;
        flex-direction: column;
        border-bottom: 1rpx solid #eee;
        margin-bottom: 10rpx;
    }
    .itemContainer .userDate{
        padding: 10rpx 20rpx;
    }
    .itemContainer .userDate img{
        width:50rpx;
        height: 50rpx;
        margin-right: 20rpx;
        vertical-align: middle;
    }
    .itemContainer .userDate span{
        font-size: 24rpx;
    }
    .itemContainer .movieName{
        font-size: 20px;
        font-weight: bold;
        padding: 0 20rpx 10rpx;
    }
    .itemContainer img{
        width: 100%;
        height: 400rpx;
        margin-bottom: 10rpx;
    }
    .itemContainer .comment{
        font-size: 28rpx;
        text-indent: 56rpx;
        letter-spacing: 5rpx;
        padding: 10rpx;
    }
    .itemContainer .getLove{
        padding: 10rpx;
        font-size: 28rpx;
    }
    .itemContainer .getLove img{
        width: 32rpx;
        height: 32rpx;
        vertical-align: middle;
    }
    .getLove span{
        margin:0rpx 10rpx;
    }
</style>