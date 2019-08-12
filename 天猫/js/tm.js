window.onload = function () {
    // tmcxFqx[0].style.zIndex = 10
    // tmcxjrfq.forEach((item,index) =>{
    //     item.onmouseenter = function () {
    //         tmcxFqx.forEach(function (item, index) {
    //             item.style.zIndex = 0
    //             tmcxjrfqp[index].style.color = "#000000"
    //             tmcxjrfq[index].style.backgroundColor = "#ffffff"
    //         })
    //         tmcxFqx[index].style.zIndex = 10
    //         tmcxjrfqp[index].style.color = "#ffffff"
    //         tmcxjrfq[index].style.backgroundColor = "#00B262"
    //     }
    // })
    //选项卡
    let tmcxjrfq = document.querySelectorAll(".tmcx-fqtop li")
    let tmcxFqx = document.querySelectorAll(".tmcx-fqs .tmcx-fqx")

    // let btn = document.querySelectorAll(".banner-bj .bots .bot")
    // let lb = document.querySelectorAll(".banner .banner-bj .banner-bj1")
    //
    // btn.forEach(function (item, index) {
    //     item.onmouseenter = function () {
    //         btn.forEach(function (its,i) {
    //             its.classList.remove("bot1")
    //         })
    //         this.classList.add("bot1")
    //         lb.forEach(function (its,i) {
    //             its.classList.remove("banner-lb1")
    //         })
    //         lb[index].classList.add("bannner-lb1")
    //     }
    // })

    tmcxjrfq.forEach(function (item, index) {
        item.onmouseenter = function () {
            tmcxjrfq.forEach(function (it,i) {
                it.classList.remove("tmcxjrfq")
            })
            this.classList.add("tmcxjrfq")
            tmcxFqx.forEach(function (it,i) {
                it.classList.remove("tmcx-fqx1")
            })
            tmcxFqx[index].classList.add("tmcx-fqx1")
        }
    })
    //轮播图
    function bannertm(bannersMaxClassName,bannersliClassName,btnDclassName){
        let banners = document.querySelectorAll(bannersMaxClassName)
        let banner = document.querySelector(bannersliClassName)
        let btn = document.querySelectorAll(btnDclassName)
        let now = 0
        function run() {
            now+=1
            if (now >= banners.length) {
                now = 0
            }
            banners.forEach(function (item, index) {
                item.classList.remove("banner-lb")
            })
            banners[now].classList.add("banner-lb")

            btn.forEach(function (item, index) {
                item.classList.remove("bot1")
            })
            btn[now].classList.add("bot1")
        }
        let t = setInterval(run,3000)
        banner.onmouseenter = function () {
            clearInterval(t)
        }
        window.onblur = function(){
            clearInterval(t)
        }
        window.onfocus = function(){
            t = setInterval(run,3000)
        }
        banner.onmouseleave = function () {
            t = setInterval(run,3000)
        }
        btn.forEach(function (item, index) {
            item.onclick = function () {
                btn.forEach(function (item,a) {
                    item.classList.remove("bot1")
                })
                btn[index].classList.add("bot1")

                banners.forEach(function (item,i) {
                    item.classList.remove("banner-lb")
                })
                banners[index].classList.add("banner-lb")
                now = index
            }
        })
    }
    bannertm(".banner .banner-bj .banner-bj1",".banner-bj",".banner-bj .bots .bot")


    //楼层
    function flor(leftnavName,florName,leftnavliName,searchName){
        let nav = document.querySelector(leftnavName)
        let boxs = document.querySelectorAll(florName)
        let navleft = document.querySelectorAll(leftnavliName)
        let header = document.querySelector(searchName)
        let arr = []
        boxs.forEach(function (item) {
            arr.push(item.offsetTop)
        })

        window.onscroll = function () {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            let value = boxs[0].offsetTop-300
            if (scrollTop >value) {
                nav.style.transform = "scale(1,1)"
            }else {
                nav.style.transform = "scale(0,0)"
            }
            if (scrollTop > 900) {
                header.style.top = "0"
            }else {
                header.style.top = "-50px"
            }

        //实现楼层
            let index = arr.findIndex((item)=>{
                if(scrollTop-500 < item){
                    return item
                }
            })

            navleft.forEach(function (item,i) {
                if (i == index) {
                    item.style.backgroundColor = "#EA5F8D"
                }else{
                    item.style.backgroundColor = ""
                }
            })
        }

        navleft.forEach(function (item, index) {
            item.onclick = function () {
                let ele =document.documentElement || document.body
                animate(ele,{scrollTop:arr[index]},500)
            }
        })
    }
    flor("nav",".tmcs-boxjs",".nav-zhong .nav-zhong1",".tops")

    //置顶
    let Top = document.querySelector(".nav-hdb")
    Top.onclick = function(){
        let Tops =document.documentElement || document.body
        animate(Tops,{scrollTop: 0},1000)
    }



}