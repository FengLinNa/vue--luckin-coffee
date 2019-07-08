<template>
    <div id="app">
        <div class="mains">
            <router-view></router-view>
        </div>
        <footer>
            <router-link to="/home/start" tag="dl">
                <dt class="iconfont icon-shouye"></dt>
                <dd>首页</dd>
            </router-link>
            <router-link to="/home/cai" tag="dl">
                <dt class="iconfont icon-didian"></dt>
                <dd>菜单</dd>
            </router-link>
            <router-link to="/home/dingdan" tag="dl">
                <dt class="iconfont icon-didian"></dt>
                <dd>订单</dd>
            </router-link>
            <router-link to="/home/car" tag="dl">
                <dt class="iconfont icon-gouwuche"></dt>
                <dd>购物车</dd>
            </router-link>
            <router-link to="/home/my" tag="dl">
                <dt class="iconfont icon-wode"></dt>
                <dd>我的</dd>
            </router-link>
        </footer>
    </div>
</template>
<script>
import "@/assets/fonts/iconfont.css"
export default {
    
}
</script>

<style lang="scss">
*{
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
}
html,body{
    width: 100%;
    height: 100%;
}
#app{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.mains{
    display: flex;
    flex:1;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
footer{
    width: 100%;
    height: 1rem;
    display:flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    background:white;
    dl{
        &.active{
        color:red;
    }
    }
}
</style>



