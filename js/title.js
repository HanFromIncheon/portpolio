$(document).ready(function () {

    menu();
    sideMenu();
    slide();


})

function menu() {
    //사이드 메뉴 오픈
    var btn = $('.menu-btn')
    var menu = $('.menu-wrap')

    menu.css({ 'left': -menu.innerWidth() })
    menu.removeClass('off')
    btn.on('click', function () {

        var isOn = menu.hasClass('on')
        console.log(isOn)

        if (isOn == true) {

            $('.category > ul').slideUp(0)//닫혔을때 모든 내부 리스트 닫힘
            menu.removeClass('on')
            menu.addClass('on')

            menu.stop().animate({ 'left': -menu.innerWidth() }, 300)
            menu.removeClass('on')
        } else {
            menu.addClass('on')
            menu.stop().animate({ 'left': 0 }, 300)
        }
        return false
    }

    )
}

function sideMenu() {
    //사이드 메뉴 내부 리스트 오픈
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

    $('.not').on('click', function () {
        alert('아직 준비중인 페이지입니다.')
    })

    //사이드 메뉴 오픈 중 외부 클릭시 닫힘
    $('body').on('click', function () {
        console.log('33')
        $('.category > ul').slideUp(0)//닫혔을때 모든 내부 리스트 닫힘
        menu.removeClass('on')
        menu.stop().animate({ 'left': -menu.innerWidth() }, 300)
    })
    //end
}

function slide(){
    var imgList = $('.imgList')
    var dots = $('.dot-list > li')
        

        imgList.css({'width':$('.imgs').innerWidth() * imgList.children().size()})
        imgList.children().css({'width':$('.imgs').innerWidth()})
        //console.log(imgList.css('width'))


    dots.on('click', function () {
        var itemNum = dots.index($(this))
        console.log(itemNum)


        console.log(imgList.children().innerWidth() * imgList.children().length)

        /*  imgList.children().animate({'margin-left':-imgList.children().innerWidth() * itemNum},3000)
         console.log(imgList.innerWidth() * itemNum) */
    })

}
