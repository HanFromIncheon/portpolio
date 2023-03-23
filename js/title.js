$(document).ready(function () {

    notOpen();
    menu();
    sideMenu();
    slide();
    monthly_slider();
    process_list();

})

function notOpen(){ //앵커태그 연결시 알림
    $('.not').on('click', function () {
        alert('아직 준비중인 페이지입니다.')
    })
}

function menu() { //사이드 메뉴 오픈
   
    var btn = $('.menu-btn')
    var menu = $('.menu-wrap')

    menu.css({ 'left': -menu.innerWidth() })

    btn.on('click', function () {

        var isOn = menu.hasClass('on')
        console.log(isOn)

        if (isOn == true) {

            $('.category > ul').slideUp(0)//닫혔을때 모든 내부 리스트 닫힘
            menu.removeClass('on')
            menu.addClass('on')

            menu.stop().animate({ 'left': -menu.innerWidth() }, 300)
            menu.removeClass('on')

            $('.burger-btn').attr("src",'images/list.svg')
        } else {
            menu.addClass('on')
            menu.stop().animate({ 'left': 0 }, 300)
            $('.burger-btn').attr("src",'images/close.png')
        }
        return false
    }

    )
}

function sideMenu() {//사이드 메뉴 내부 리스트 오픈
    
    var listBtn = $('.category')
    var menuS = $('.category > ul')

    listBtn.on('click', function () {

        var listIsOn = menuS.hasClass('on')
        console.log(listIsOn)

        if (listIsOn == true) {

            menuS.removeClass('on')
            menuS.addClass('on')

            $(this).children('ul').stop().slideUp(500)
            menuS.removeClass('on')
        } else {
            menuS.addClass('on')
            $(this).children('ul').stop().slideDown(500)
        }

        return false
    })
    //end 

    //사이드 메뉴 오픈 중 외부 클릭시 닫힘
    var menu = $('.menu-wrap')

    $('body').on('click', function () {
        $('.category > ul').slideUp(0)//닫혔을때 모든 내부 리스트 닫힘
        menu.removeClass('on')
        menu.stop().animate({ 'left': -menu.innerWidth() }, 300)
    })
    //end
}

function slide(){ //upcycling 이미지 슬라이더
    var imgList = $('.imgList')
    var dots = $('.dot-list > li')
    var timer = 1;
        

        imgList.css({'width':$('.imgs').innerWidth() * imgList.children().size()})
        imgList.children().css({'width':$('.imgs').innerWidth()})
        //console.log(imgList.css('width'))

        timer = setInterval(onPlay, 3000)


    dots.on('click', function () {
        var itemNum = dots.index($(this))
        console.log(itemNum)


        console.log(imgList.children().innerWidth() * imgList.children().length)

         imgList.stop().animate({'margin-left':-imgList.children().innerWidth() * itemNum},1000)
         console.log(imgList.innerWidth() * itemNum)

         $(this).addClass('on')
        $(this).siblings().removeClass('on')
        current = itemNum

        clearInterval(timer)
        setTimeout(function(){
            timer = setInterval(onPlay, 3000)
        },3000)

    })


    var current = 0;

    function onPlay() {
        current += 1
        imgList.animate({ 'margin-left': -imgList.children().innerWidth() * (current) }, 1000)

        dots.removeClass('on')
        dots.eq(current).addClass('on')

        if (current == 5) {
            current = -1
        }
    }

    imgList.on('mouseenter',function(){
        clearInterval(timer)
    })
    imgList.on('mouseleave',function(){
        timer = setInterval(onPlay, 2000)
    })




}

function monthly_slider(){ //monthly 아이템 슬라이더


    var mContent = $('.monthly-content')
    var logos = $('.club-item > li')
        

    mContent.css({'width':$('.monthly').innerWidth() * mContent.children().size()})
    mContent.children().css({'width':$('.monthly').innerWidth()})
    var backArr = ['000000','c20046','83c0ed','001c41','052646','ed1a3b','2e98d2']
    


    logos.on('click', function () {
        var cNum = logos.index($(this))
        console.log(cNum)

        mContent.stop().animate({'margin-left':-mContent.children().innerWidth() * cNum, },1000,function(){
            $('.content-box').css({'background-color':'#'+backArr[cNum]})
        })

        return false
    })

}

function process_list(){ //process 리스트 슬라이더

    var descript = $('.descript-list')
    var process =$('.process-img')

    var step = $('.step > li')
    var cNum = 0;
        

    descript.children().hide()
    descript.children().eq(cNum).show()
    process.children().hide()
    process.children().eq(cNum).show()


    step.on('click', function () {
        var cNum = step.index($(this))
        console.log(cNum)

        $('.step > li').removeClass('on')
        $(this).addClass('on')

        descript.children().hide()
        descript.children().eq(cNum).fadeIn(500)
        process.children().hide()
        process.children().eq(cNum).fadeIn(500)
  

        return false
    })
}

