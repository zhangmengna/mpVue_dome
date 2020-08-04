<template>
    <div class="detail_container">
        <img src="/static/detail/swiper/02.jpg" alt="">
        <div class="userDate">
            <img src='/static/avatar/2.png' alt="">
            <span>新华社发布于2009</span>
        </div>
        <p class="movieName">龙猫简介</p>
        <div class='do_container'>
            <div class="collect_share">
               <img src="/static/icon/collection.png" alt="">
               <img src="/static/icon/share-anti.png" alt=""> 
            </div>            
            <div class="line"></div>
        </div>
        <Button>转发此文</Button>  
        <p class="content">为了方便妻子草壁靖子养病，草壁达郎决定带着两个女儿草壁皋月和草壁梅搬到草壁靖子所在疗养院附近的乡下，父女三人入住了一间年久失修的老房子。小姐妹俩很快发现看似平凡无奇的乡下有很多神奇的事物，无人居住的房屋里能聚能散还能飞的“煤灰”、森林里的小精灵、森林的主人龙猫和笑口常开的猫巴士。</p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .detail_container{
        display: flex;
        flex-direction:column;
    }
    .detail_container img{
        width: 100%;
        height: 460rpx;
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
        height: 2rpx;
        background: rad;
        /* z-index: -1; */
    }
    .content{
        font-size: 28rpx;
        text-indent: 56rpx;
        letter-spacing: 5rpx;
    }
</style>