window.onload = function () {
    //轮播
    function Banner (bannertuClassName,bannerMaxClassName,prevleftClassName,nextrightClassName,btnClassName){
        let ceils = document.querySelectorAll(bannertuClassName)
        let banner = document.querySelector(bannerMaxClassName)
        let prev = document.querySelector(prevleftClassName)
        let next = document.querySelector(nextrightClassName)
        let dians = document.querySelectorAll(btnClassName)

        let now = 0
        function run(type=0){
            if(type==0){
             // 正向
                now+=1
                if(now>=ceils.length){
                    now=0
                }

            }else{
            //逆向
                now-=1
                if(now<0){
                    now = ceils.length-1
                }
            }


            ceils.forEach(function(item,index){
                item.classList.remove("banner-lb")
            })
            ceils[now].classList.add("banner-lb")

            dians.forEach(function (item, index) {
                item.classList.remove("bot1")
            })
            dians[now].classList.add("bot1")
        }

        let t = setInterval(run,3000)

        banner.onmouseenter = function(){
            clearInterval(t)
        }
        banner.onmouseleave = function(){
            t = setInterval(run,3000)
        }

        next.onclick = function(){
            run()
        }

        prev.onclick = function(){
            run(1)
        }

        dians.forEach(function(item,index){
            item.onclick = function(){
                dians.forEach(function (item,a) {
                        item.classList.remove("bot1")
                    })
                    dians[index].classList.add("bot1")

                ceils.forEach(function(item,i){
                    item.classList.remove("banner-lb")
                })
                ceils[index].classList.add("banner-lb")
                now = index
            }
        })
    }
    Banner(".banner .banners img",".banners",".btnz",".btny",".banner .bots .bot")
    //置顶
    let Top = document.querySelector(".tops")
    Top.onclick = function () {
        let Tops =document.documentElement || document.body
        Tops.scrollTop = 0
    }
}