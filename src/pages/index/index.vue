<template>
    <div class="container">
        <img v-if="isShow" class="userImage" :src="userInfo.avatarUrl" alt="">
        <button v-else class="btn" open-type='getUserInfo' @getuserinfo ='getUserInfo'>授权用户信息</button>
        <p class="userName">Hello {{userInfo.nickName}}</p>
        <div class="goDetail">
            <p>开始小程序之旅</p>           
        </div>
    </div>
    
</template>
<script>
    export default{
        data(){
            return{
                userInfo:{},
                isShow:false,//用户没有授权
            }
        },
        beforeMount(){
            console.log('....beforeMount....')
            //获取用户信息
            this.handleGetUserInfo()
        },
        methods: {
            handleGetUserInfo(){
                wx.getUserInfo({
                    success: (data) => {
                        console.log('获取信息成功',data)
                        this.userInfo = data.userInfo
                        this.isShow = true
                    },
                    fail: (data) => {
                        console.log('获取信息失败',data)
                    }
                })
            },
            getUserInfo(data){
                console.log('getUserInfo',data)
                //用户是否授权
                if(data.mp.detail.userInfo){
                    //授权
                    this.handleGetUserInfo()
                }
            }
        }
    }
    

</script>
<style scropd>
    page{
        background-Color: #39f158;
    }
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .userImage{
        width: 200rpx;
        height: 200rpx;
        border-radius: 50%;
        margin: 100rpx 0;
    }
    .btn{
        margin: 100rpx 0;
    }
    .userName{
        font-size: 40rpx;
        font-weight: bold;

    }
    .goDetail{
        width: 300rpx;
        margin: 100rpx auto;
        font-size: 30rpx;
        padding: 20rpx;
        text-align: center;
        border: 1rpx solid #ffffff;
        border-radius: 10rpx;
    }
</style>