$(function () {

    
//遮罩画布
    var screen = $('#screen');

//登录框
    var login = $('#login');
    login.center(350, 250).resize(function () {
        if (login.css('display') == 'block') {
            screen.lock();
        }
    });
    $('#header .login').click(function () {
        login.center(350, 250).css('display', 'block');
        screen.lock().animate({
            attr : 'o',
            target : 30,
            t : 30,
            step : 10
        });
    });
    $('#login .close').click(function () {
        login.css('display', 'none');
        //先执行渐变动画，动画完毕后再执行关闭unlock
        screen.animate({
            attr : 'o',
            target : 0,
            t : 30,
            step : 10,
            fn : function () {
                screen.unlock();
            }
        });
    });

    //注册框
    var reg = $('#reg');
    reg.center(600, 550).resize(function () {
        if (reg.css('display') == 'block') {
            screen.lock();
        }
    });
    $('#header .reg').click(function () {
        reg.center(600, 550).css('display', 'block');
        screen.lock().animate({
            attr : 'o',
            target : 30,
            t : 30,
            step : 10
        });
    });
    $('#reg .close').click(function () {
        reg.css('display', 'none');
        screen.animate({
            attr : 'o',
            target : 0,
            t : 30,
            step : 10,
            fn : function () {
                screen.unlock();
            }
        });
    });
        //拖拽
    login.drag($('#login h2').last());
    reg.drag($('#reg h2').last());
    
});











