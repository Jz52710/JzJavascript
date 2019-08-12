window.onload = function () {
//无缝轮播
    function banner(ceilsClassName,prevClassName,nextClassName,diansClassName,bannerClassName){
        let ceils = document.querySelectorAll(ceilsClassName)
        let width = ceils[0].offsetWidth
        let length = ceils.length
        // let prev = document.querySelector(prevClassName)
        // let next = document.querySelector(nextClassName)
        let dians = document.querySelectorAll(diansClassName)
        let now=0,after=0
        let banner = document.querySelector(bannerClassName)

        // 布局
        ceils.forEach(function(item,index){
            if(index!=0){
                item.style.left= width+"px"
            }
        })
        dians[0].style.backgroundColor="rgba(255,255,255,0.3)"
        // dians[0].style.border="2px solid rgba(0,0,0,0.3)"

        // 开关思想
        let flag = true
        // 轮播
        function run(type=0){
            flag = false
            if(type==0){
                // 下一张
                now+=1
                if(now>=length){
                    now = 0
                }
                ceils[now].style.left=width+"px"
                animate(ceils[now],{left:0},500)
                animate(ceils[after],{left:-width},500,function(){
                    flag = true
                })
            }else{
                // 上一张
                now-=1
                if(now<0){
                    now = length-1
                }
                ceils[now].style.left=-width+"px"
                animate(ceils[now],{left:0},500)
                animate(ceils[after],{left:width},500,function(){
                    flag=true
                })
            }
            dians.forEach(function(item,index){
                if(index==now){
                    item.style.backgroundColor = "rgba(255,255,255,0.3)"
                    // item.style.border="2px solid rgba(0,0,0,0.3)"
                }else{
                    item.style.backgroundColor = "rgba(0,0,0,0.2)"
                    // item.style.border = "2px solid rgba(0,0,0,0.3)"
                }
            })

            after = now
        }
        // 自动轮播
        let t = setInterval(run,2000)
        // 移入暂停
        banner.onmouseenter = function(){
            clearInterval(t)
        }
        window.onblur = function(){
            clearInterval(t)
        }
        window.onfocus = function(){
            t = setInterval(run,2000)
        }
        banner.onmouseleave = function(){
            t = setInterval(run,2000)
        }

        // 前后按钮
        // next.onclick = function(){
        //     if(flag){
        //         run()
        //     }
        // }
        // prev.onclick = function(){
        //     if(flag){
        //         run(1)
        //     }
        // }
        // 轮播点
        dians.forEach(function(item,index){
           item.onclick=function(){
                let dianIndex = now
                if(index>dianIndex){
                    now=index-1
                    run()
                }else if(index<dianIndex){
                    now =index+1
                    run(1)
                }
           }
        })
    }
    banner(".banners .banner img",""," ",".bots .bot",".banners")
//搜索
    let searchs = document.querySelector(".searchs")
    let aside = document.querySelector("aside")
    window.onscroll = function () {
        let scrollTop =document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop >= 100) {
            searchs.style.top = "0"
        }else {
            searchs.style.top = "-1.2rem"
        }
        if (scrollTop >= 700) {
            aside.style.display = "block"
        }else{
            aside.style.display = "none"
        }
    }
    aside.onclick = function () {
        let Topa = document.documentElement || document.body
        animate(Topa,{scrollTop:0},1000)
    }
}
