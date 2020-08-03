<template>
    <div class="listContainer">
        <swiper indicator-dots='true' indicator-color='pink' indicator-active-color='green'>
            <swiper-item>
                <img src="/static/detail/swiper/01.jpg" alt="">
            </swiper-item>
            <swiper-item>
                <img src="/static/detail/swiper/02.jpg" alt="">
            </swiper-item>
            <swiper-item>
                <img src="/static/detail/swiper/03.jpg" alt="">
            </swiper-item>
            <swiper-item>
                <img src="/static/detail/swiper/04.jpg" alt="">
            </swiper-item>
        </swiper>
        <!-- 一个评论列表 -->
        <div>
            <ListItme/>
        </div>
        
    </div>

</template>

<script>
 import ListItme from '../listItem/listItem.vue'
 export default {
     components:  {ListItme},
 }
</script>

<style scoped>
    .listContainer swiper{
        width: 100%;
        height: 400rpx;
    }
    .listContainer swiper img{
        width: 100%;
        height: 100%;
    }
    
</style>