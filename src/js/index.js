/**
 * Created by Administrator on 2017/6/30.
 */
window.onresize = function(){
    if ($(window).width()> 1080){
      $('#slide1 img').attr('src','./src/images/laptop1.jpg');
    };
    if ($(window).width() <=1080 && $(window).width() > 740){
        $('#slide1 img').attr('src','./src/images/laptop2.jpg');
    };

    if ($(window).width()<= 740){
        $('#slide1 img').attr('src','./src/images/laptop3.jpg');
    };
    if ($(window).width()> 1080){
        $('#slide2 img').attr('src','./src/images/surfac1.jpg');
    };
    if ($(window).width() <=1080 && $(window).width() > 740){
        $('#slide2 img').attr('src','./src/images/surfac2.jpg');
    };

    if ($(window).width()<= 740){
        $('#slide2 img').attr('src','./src/images/surfac3.jpg');
    };
    if($(window).width()> 990){
        $('.footer-menugroups dl').attr('class','column')
    }
    if($(window).width()< 990 && $(window).width()> 770){
        $('.footer-menugroups dl').attr('class','five wide tablet column')
    }
    if($(window).width()< 770){
        $('.footer-menugroups dl').attr('class','eight wide mobile column')
    }
};

if ($(window).width()> 1080){
    $('.theme-dark img').attr('src','./src/images/laptop1.jpg');
};
if ($(window).width() <=1080 && $(window).width() > 740){
    $('.theme-dark img').attr('src','./src/images/laptop2.jpg');
};
if ($(window).width()<= 740){
    $('.theme-dark img').attr('src','./src/images/laptop3.jpg');
};
if ($(window).width()> 990){
     $('.footer-menugroups dl').attr('class','column')
}
if($(window).width()< 990 && $(window).width()> 770){
    $('.footer-menugroups dl').attr('class','five wide tablet column')
}
if($(window).width()< 770){
    $('.footer-menugroups dl').attr('class','eight wide mobile column')
}
var oPp = document.getElementsByClassName('play-pause');
var oCu = document.getElementsByClassName('content_ul');
var oLb = document.getElementsByClassName('left_btn');
var oRb = document.getElementsByClassName('right_btn');
function  onc(a,b,c) {
    c.onclick=function () {
        if (a.className == 'theme-dark') {
            a.setAttribute('class', 'theme-light')
        } else {
            a.setAttribute('class', 'theme-dark')
        }
        if (b.className == 'theme-dark') {
            b.setAttribute('class', 'theme-light')
        } else {
            b.setAttribute('class', 'theme-dark')
        }
    }
}
onc(oCu[0].children[0],oCu[0].children[1],oLb[0]);
onc(oCu[0].children[0],oCu[0].children[1],oRb[0]);
for(var i=0;i<oPp[0].children.length; i++){
    oPp[0].children[i].index = i;
    oPp[0].children[i].onclick=function () {
        if (this.id == 'dark'){
            if(this.index == 0){
                this.setAttribute('id','light');
                oPp[0].children[1].setAttribute('id','dark');
            }
            if(this.index == 1){
                this.setAttribute('id','light');
                oPp[0].children[0].setAttribute('id','dark');
            }
        }
    }
}
for(var i=0;i<oPp[1].children.length; i++){
    oPp[1].children[i].index = i;
    oPp[1].children[i].onclick=function () {
        if (this.id == 'dark1'){
            if(this.index == 0){

                this.setAttribute('id','light1');
                oPp[1].children[1].setAttribute('id','dark1');
            }
            if(this.index == 1){
                this.setAttribute('id','light1');
                oPp[1].children[0].setAttribute('id','dark1');
            }
        }
    }
}






