<template>
    <div class="denglu">
        <header>
            <p><span class="iconfont icon-xiangzuo"></span></p>
            <p>账户登录</p>
            <p><span class="iconfont icon-gengduo"></span><span class="iconfont icon-guangpan"></span></p>
        </header>
        <main class="box">
            <p><img src="../../../assets/img/5.png" alt=""></p>
            <p><input type="text" placeholder="请输入手机号"></p> 
            <p><input type="text" placeholder="请输入手机验证码"></p>
            <p><button>确定</button></p>
            <h5>点击确定，既表示已阅读并同意<a href="#">《注册会员服务条款》</a></h5>
        </main>
    </div>
</template>
<style lang="scss">
*{
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
}
html,body,.denglu{
    width: 100%;
    height: 100%;
}
header{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.box{
    width: 100%;
    height: 90%;
    p{
        text-align: center;
        margin-top:.3rem;
        input{
            width: 80%;
            height: .7rem;
            border:0;
            border-bottom: 1px solid #ccc;
        }
        button{
            width: 80%;
            height: .7rem;
            background:skyblue;
            border:0;
            border-radius: 10px;
            color:white;
        }
    }
    h5{
        text-align: center;
        margin-top:.2rem;
    }
}
</style>

