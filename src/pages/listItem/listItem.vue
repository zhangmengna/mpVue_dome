<template>
    <div class="itemContainer">
        <div class="userDate">
            <img src="/static/avatar/0.png" alt="">
            <span>2020.01.21</span>
        </div>
        <p class="movieName">龙猫</p>
        <img src="/static/detail/swiper/04.jpg" alt="">
        <div class="comment">为了方便妻子草壁靖子养病，草壁达郎决定带着两个女儿草壁皋月和草壁梅搬到草壁靖子所在疗养院附近的乡下，父女三人入住了一间年久失修的老房子。小姐妹俩很快发现看似平凡无奇的乡下有很多神奇的事物，无人居住的房屋里能聚能散还能飞的“煤灰”、森林里的小精灵、森林的主人龙猫和笑口常开的猫巴士。</div>
        <div class="getLove">
            <img src="/static/icon/star.png" alt="">
            <span>10w</span>
            <img src="/static/icon/view.png" alt="">
            <span>100w</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .itemContainer{
        padding-bottom: 10rpx;
        border-bottom: 1rpx solid #333
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