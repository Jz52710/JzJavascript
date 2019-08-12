window.onload = function () {
    // let tvTopys1 = document.querySelectorAll("ul .tv-topys1")
    // let tvRight = document.querySelectorAll(".tv-bottom .tv-right")
    // let tvz = document.querySelectorAll("ul .tv-topys1 .tvz1")
    // tvRight[0].style.zIndex = 10
    // tvTopys1.forEach((item,index)=>{
    //     item.onmouseenter = function () {
    //         tvRight.forEach(function (item,index) {
    //             item.style.zIndex = 0
    //             tvz[index].style.color = "#333333"
    //             tvz[index].style.borderBottom = "none"
    //         })
    //         tvRight[index].style.zIndex = 10
    //         tvz[index].style.color = "#ff6700"
    //         tvz[index].style.borderBottom = "2px solid #ff6700"
    //     }
    // })
    let tvTopys1 = document.querySelectorAll("ul .tv-topys1 a")
    let tvRight = document.querySelectorAll(".tv-bottom .tv-right")
    tvTopys1.forEach(function (item, index) {
        item.onmouseenter = function () {
            tvTopys1.forEach(function (ti, t) {
                ti.classList.remove("tvzb")
            })
            this.classList.add("tvzb")
            tvRight.forEach(function (it, t) {
                it.classList.remove("tv-rightjs")
            })
            tvRight[index].classList.add("tv-rightjs")
        }
    })

    //轮播开始
    // let banner = document.querySelectorAll(".banners a .banners-lb1")
    // let now = 0
    // function run(type = 0) {
    //     if (type == 0) {
    //         now+=1
    //         if (now >= banner.length) {
    //             now = 0
    //         }
    //     }else {
    //         now-=1
    //         if (now < 0){
    //             now = banner.length-1
    //         }
    //     }
    //     banner.forEach(function (item, index) {
    //         item.classList.remove("banners-active")
    //     })
    //     banner[now].classList.add("banners-active")
    // }
    // setInterval(run,3000)
    //无缝轮播
    function banner(ceilsClassName,prevClassName,nextClassName,diansClassName,bannerClassName){
        let ceils = document.querySelectorAll(ceilsClassName)
        let width = ceils[0].offsetWidth
        let length = ceils.length
        let prev = document.querySelector(prevClassName)
        let next = document.querySelector(nextClassName)
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
        dians[0].style.border="2px solid rgba(0,0,0,0.3)"

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
                    item.style.border="2px solid rgba(0,0,0,0.3)"
                }else{
                    item.style.backgroundColor = "rgba(0,0,0,0.2)"
                    item.style.border = "2px solid rgba(0,0,0,0.3)"
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
        next.onclick = function(){
            if(flag){
                run()
            }
        }
        prev.onclick = function(){
            if(flag){
                run(1)
            }
        }
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
    banner(".banners a .banners-lb1",".banners .bannersz",".banners .bannersy",".bots .bot",".banners")
    // 置顶
    function TOP (topClassName){
        let Top = document.querySelector(topClassName)
        window.onscroll = function(){
            let scrollTop =document.documentElement.scrollTop || document.body.scrollTop
            if (scrollTop >= 1000) {
                Top.style.display = "block"
            }else {
                Top.style.display = "none"
            }
        }
        Top.onclick = function () {
            let Tops = document.documentElement || document.body
            Tops.scrollTop = 0
            // animate(Tops,{scrollTop:0},1000)
            }
    }
   TOP(".ydh1")
    //下面轮播
    function banner1(ceilsClassName,prevClassName,nextClassName,diansClassName,bannerClassName){
        let ceils = document.querySelectorAll(ceilsClassName)
        let width = ceils[0].offsetWidth
        let length = ceils.length
        let prev = document.querySelector(prevClassName)
        let next = document.querySelector(nextClassName)
        let dians = document.querySelectorAll(diansClassName)
        let now=0,after=0
        let banner = document.querySelector(bannerClassName)

        // 布局
        ceils.forEach(function(item,index){
            if(index!=0){
                item.style.left= width+"px"
            }
        })
        dians[0].style.backgroundColor="rgba(255,255,255,1)"
        dians[0].style.border="2px solid #FF6700"

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
                    item.style.backgroundColor = "rgba(255,255,255,1)"
                    item.style.border="2px solid #FF6700"
                }else{
                    item.style.backgroundColor = "#b0b0b0"
                    item.style.border = "2px solid #ffffff"
                }
            })

            after = now
        }

        // 前后按钮
        next.onclick = function(){
            if(flag){
                run()
            }
        }
        prev.onclick = function(){
            if(flag){
                run(1)
            }
        }
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
    banner1(".nrx-1 ul",".nr-z",".nr-y",".nrx1-lbd .lbds-1 .lbd-14",".nrx-1")
    banner1(".nrx-11 .ul1",".nr-z1",".nr-y1",".nrx1-lbd1 .lbds-11 .lbd-11",".nrx-11")
    banner1(".nrx-12 .ul2",".nr-z2",".nr-y2",".nrx1-lbd2 .lbds-12 .lbd-12",".nrx-12")
    banner1(".nrx-13 .ul3",".nr-z3",".nr-y3",".nrx1-lbd3 .lbds-13 .lbd-13",".nrx-13")
    //搜索回去
    let searchyc = document.querySelector(".searchyc")
    let input = document.querySelector(".search input")
    let ss = document.querySelector(".search .search-y")
    let searchleft = document.querySelector(".search .search-ziz")
    let searchRight = document.querySelector(".search .search-ziy")
    input.onclick = function () {
        searchyc.style.display = "block"
        searchyc.style.borderTop = "none"
        input.style.border = "1px solid #FF6700"
        ss.style.border = "1px solid #FF6700"
        ss.style.borderLeft = "none"
        searchleft.style.display = "none"
        searchRight.style.display = "none"
    }
    input.onblur = function () {
        searchyc.style.display = "none"
        input.style.border = "1px solid #e0e0e0"
        ss.style.border = "1px solid #e0e0e0"
        ss.style.borderLeft = "none"
        searchleft.style.display = "block"
        searchRight.style.display = "block"
    }
    //顶部选项卡
    function SelectCard(btnsClassName,consClassName){
        let btns = document.querySelectorAll(btnsClassName)
        let cons = document.querySelectorAll(consClassName)
        btns.forEach(function(item,index){
            item.onmouseenter = function(){
            // 清空所有按钮的类名
            btns.forEach(function(it,i){
                it.classList.remove("btnAction")
            })
            //设置当前的元素
            this.classList.add("btnAction")
            // 清空所有con的类名
            cons.forEach(function(it,i){
                it.classList.remove("conAction")
            })
            cons[index].classList.add("conAction")
        }
        })
    }
    SelectCard(".nav .nav-time1",".nav-ych .nav-yc")

}