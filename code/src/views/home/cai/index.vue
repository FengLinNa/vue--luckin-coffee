<template>
    <div id="box">
        <div class="header">
            <h4>Luckin coffee</h4>
            <div class="wei">
                <div class="left">
                    <span class="iconfont icon-dingwei"></span>
                    <p><span>康德大厦店</span><span>距您462m</span></p>
                </div>
                <div class="right">
                    <p>
                        <span>自提</span>
                        <span>外送</span>
                    </p>
                </div>
            </div>
            <div class="tu">
                <img src="../../../assets/img/1.png" alt="">
            </div>
        </div>
        <div class="mains">
            <div class="main-left">
            <p v-for="(item) in list" :key="item.id" :class="{active:item.id==curId}" @click="click(item.id)">{{item.item}}</p>
            </div>
            <div class="main-right">
                <div class="content" v-for="(item) in cur" :key="item.id" @click="click(item.id)">
                    <img :src="item.img" alt="">
                <ul>
                    <li>{{item.name}}</li>
                    <li>{{item.Ename}}</li>
                    <li>{{item.moren}}</li>
                    <li>{{item.price}}</li>
                </ul>
                </div>
            </div>
        </div>
        <footer>

        </footer>
    </div>
</template>

<script>
import "@/assets/fonts/iconfont.css"
// import axios from "axios"
import {mapState,mapMutations,mapActions} from "vuex"
export default {
    computed:{
        ...mapState({
            list:state=>state.left.list,
            curId:state=>state.left.curId,
            cur:state=>state.right.cur
        })
    },
    methods:{
        ...mapActions({
            getData:"left/getData",
            getDataR:"right/getDataR"
        }),
        ...mapMutations({
            leftClick:"left/click",
            rightClick:"right/click"
        }),
        click(id){
            this.leftClick(id);
            this.rightClick(id)
        }
    },
    created(){
        this.getData()
        this.getDataR()
    }
    // components:{
    // },
    // data(){
    //     return {
    //         newArr:[],
    //         active:0,
    //         arr:[]
    //     }
    // },
    // created(){
    //     this.axio(this.newArr[this.active])
    //     this.axioR(0)
        
    // },
    // methods:{
    //     chose(i){
    //         this.active = i
    //         this.axio(i)
    //         this.axioR(i)
    //     },
    //     axio(conn){
    //         axios.get(`/api/navLeft?status=${conn}`).then(res=>{
    //             this.newArr = res.data.data
    //         })
    //     },
    //     axioR(conn){
    //         axios.get(`/api/navRight?id=${conn}`).then(res => {
    //             this.arr = res.data.data
    //     })
    //     }
    // }
}
</script>


<style lang="scss" scoped>
*{
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
}
html,body,#box{
    width: 100%;
    height: 100%;
}
.header{
    width: 100%;
    height: 4.4rem;
    h4{
        width: 100%;
        height: 1rem;
        text-align: center;
        line-height: 1rem;
        font-size: 20px;
        font-weight: 800;
    }
    .wei{
        width: 100%;
        height: 1rem;
        display:flex;
        justify-content: space-around;
        align-items: center;
        .left{
            width: 45%;
            display:flex;
            justify-content: space-between;
            align-items: center;
            p{
                span{
                    width: 100%;
                    display: inline-block;
                }
            }
        }
        .right{
            width: 30%;
            height: .7rem;
            line-height: .6rem;
            border:1px solid skyblue;
            border-radius: 20px;
            p{
                display:flex;
                justify-content: space-around;
                align-items: center;
            }
        }
    }
    .tu{
        width: 100%;
        height: 2.5rem;
        img{
            width: 100%;
        }
    }
}
.mains{
    flex:1;
    display:flex;
    width: 100%;
    height: 65%;
}
.main-left{
    width: 30%;
    height: 100%;
    background:#eee;
    float: left;
    p{
        width: 100%;
        height: .7rem;
        line-height: .7rem;
        text-align: center;
        &.active{
            background:white;
        }
    }
}
.main-right{
    width: 70%;
    height: 100%;
    float: left;
    overflow: auto;
    .content{
        width: 100%;
        height: 2.5rem;
        img{
            width: 100px;
            height: 100px;
            float: left;
        }
        ul{
            float: left;
        }
    }
}
footer{
    width: 100%;
    height: 1rem;
}
</style>

