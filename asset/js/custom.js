$(document).ready(function() {
    var school = $(window);
    var page = $('html, body');
    
    $('#updateEmailSave,#updatePhoneSave').hide();
    $('.uncheck').hide()
    $('.uncheck2').hide()

    // sidebar toggle
    $('#menuToggleBar,#menuToggleBar2').on('click',function(){
        $('#sidebarMenu').addClass('show');
    })
    $('#menuToggleClose').on('click',function(){
        $('#sidebarMenu').removeClass('show');
    })


    // home video function
    $('.videoPlay').on('click',function(){
        $(this).hide();
        $('#home3Video').trigger('play');
        $('#home3Video').attr("controls", "1");
    })

    
    // overview video function
    $('.videoPlayOverview').on('click',function(){
        $(this).hide();
        $('#overview3Video').trigger('play');
        $('#overview3Video').attr("controls", "1");
    })


    // my class filter active
    $('select').niceSelect();

    // function for membership toggle
    $('#upgrateBtn').on('click',function(){
        $('#membershipPlanItem1').addClass('hide');
        $('#membershipPlanItem2').addClass('show');
        return false;
    })


    $('#memberPause').on('click',function(){
        $('#membershipPlanItem2').removeClass('show');
        $('#membershipPlanItem3').addClass('show');
        $('.endDate').addClass('dissbale');
        return false;
    })


    $('#resumePlanBtn').on('click',function(){
        $('#membershipPlanItem2').addClass('show');
        $('#membershipPlanItem3').removeClass('show');
        $('.endDate').removeClass('dissbale');
        return false;
    })


    // form email attr
    $('#updateEmail').on('click',function(){
        $('input#email').removeAttr('readonly');
        $('input#email').focus();
        $(this).hide();
        $('#updateEmailSave').show();
    })

    $('#updateEmailSave').on('click',function(){
        $('input#email').attr("readonly", "1");
        $(this).hide();
        $('#updateEmail').show();
    })


    // phone form attr
    $('#updatePhone').on('click',function(){
        $('input#phone').removeAttr('readonly');
        $('input#phone').focus();
        $(this).hide();
        $('#updatePhoneSave').show();
    })

    $('#updatePhoneSave').on('click',function(){
        $('input#phone').attr("readonly", "1");
        $(this).hide();
        $('#updatePhone').show();
    })

    // smoth scroll
    $('.dateBarContent ul li a').on('click',function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 900);
    })

    // overview date select
    $('.dateSelect').on('click',function(){
        $('.dateSelect').removeClass('active');
        $(this).toggleClass('active');
        return false;
    })


    // book class button toggle
    $('#bookClassBtnAdd').on('click',function(){
        $('#overviewBottomFixContent1').hide();
        $('#overviewBottomFixContent2').show();
        return false;
    })
    $('#cancelClassBtn').on('click',function(){
        $('#overviewBottomFixContent1').show();
        $('#overviewBottomFixContent2').hide();
        return false;
    })


    // assignment love active
    $('.assignmentMainitem ul li #assignLove').on('click',function(){
        $(this).toggleClass('active');
        return false;
    })


    // assignment show popup
    $('.assignmentMainitem').on('click',function(){
        $('#assignmentPopup').addClass('show');
        return false;
    })
    $('#assignmentPopupClose,#assignmentPopupCloseMobile').on('click',function(){
        $('#assignmentPopup').removeClass('show');
    })
    


    // header fix book class calender
    school.on('scroll',function(){
        if (school.scrollTop() > 50) {
            $('#dateBar').addClass('animated slideInDown fix')
        } else {
            $('#dateBar').removeClass('animated slideInDown fix')
        }
    })





    // mobile social
    $('.check').on('click',function(){
        $('.check').hide();
        $('.uncheck').show();
    })
    $('.uncheck').on('click',function(){
        $('.check').show();
        $('.uncheck').hide();
    })
    // mobile social
    $('.check2').on('click',function(){
        $('.check2').hide();
        $('.uncheck2').show();
    })
    $('.uncheck2').on('click',function(){
        $('.check2').show();
        $('.uncheck2').hide();
    })



    // slider form worksop mobile
    $('.overViewMainContentItemSliderMobile').owlCarousel({
        stagePadding: 20,
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.overViewMainContentItemMobile2').owlCarousel({
        stagePadding: 50,
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })



    // my class mobile date select function
    $('#myClassItemMobileList li').on('click',function(){
        $('#myClassItemMobileList li').removeClass('active');
        $(this).toggleClass('active');
    })



    // my class video trigger
    $('.videoPlayMyClass1').on('click',function(){
        $(this).hide();
        $('.myClassVideo1').trigger('play');
        $('.myClassVideo1').attr("controls", "1");
    })

    $('.videoPlayMyClass2').on('click',function(){
        $(this).hide();
        $('.myClassVideo2').trigger('play');
        $('.myClassVideo2').attr("controls", "1");
    })

    $('.videoPlayMyClass3').on('click',function(){
        $(this).hide();
        $('.myClassVideo3').trigger('play');
        $('.myClassVideo3').attr("controls", "1");
    })

    $('.videoPlayMyClass4').on('click',function(){
        $(this).hide();
        $('.myClassVideo4').trigger('play');
        $('.myClassVideo4').attr("controls", "1");
    })



});