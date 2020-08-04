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
            <ListItme v-for="(item,index) in listInfo" :key='item.postId' :item='item'/>
        </div>
        
    </div>

</template>

<script>
 import { mapState } from 'vuex'
 import ListItme from '../listItem/listItem.vue'
 export default {
     beforeMount(){
         this.$store.dispatch('getListInfo')
     },

     computed:{
         ...mapState(['listInfo'])
     },
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