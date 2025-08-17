(function($) {
  'use strict';
  $(function() {
    var body = $('body');
    var contentWrapper = $('.content-wrapper');
    var scroller = $('.container-scroller');
    var footer = $('.footer');
    var sidebar = $('.sidebar');

    //Add active class to nav-link based on url dynamically
    //Active class can be hard coded directly in html file also as required

    function addActiveClass(element) {
      if (current === "") {
        //for root url
        if (element.attr('href').indexOf("index.html") !== -1) {
          element.parents('.nav-item').last().addClass('active');
          if (element.parents('.sub-menu').length) {
            element.closest('.collapse').addClass('show');
            element.addClass('active');
          }
        }
      } else {
        //for other url
        if (element.attr('href').indexOf(current) !== -1) {
          element.parents('.nav-item').last().addClass('active');
          if (element.parents('.sub-menu').length) {
            element.closest('.collapse').addClass('show');
            element.addClass('active');
          }
          if (element.parents('.submenu-item').length) {
            element.addClass('active');
          }
        }
      }
    }

    var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
    $('.nav li a', sidebar).each(function() {
      var $this = $(this);
      addActiveClass($this);
    })

    $('.horizontal-menu .nav li a').each(function() {
      var $this = $(this);
      addActiveClass($this);
    })

    //Close other submenu in sidebar on opening any

    sidebar.on('show.bs.collapse', '.collapse', function() {
      sidebar.find('.collapse.show').collapse('hide');
    });


    //Change sidebar and content-wrapper height
    applyStyles();

    function applyStyles() {
      //Applying perfect scrollbar
      if (!body.hasClass("rtl")) {
        /*
        if ($('.sidebar-panel .tab-content .tab-pane.scroll-wrapper').length) {
          const settingsPanelScroll = new PerfectScrollbar('.sidebar-panel .tab-content .tab-pane.scroll-wrapper');
        }
        if ($('.chats').length) {
          const chatsScroll = new PerfectScrollbar('.chats');
        }*/
        if (body.hasClass("sidebar-fixed")) {
          if($('#sidebar').length) {
            var fixedSidebarScroll = new PerfectScrollbar('#sidebar .nav');
          }
        }
      }
    }

    $('[data-toggle="minimize"]').on("click", function() {
      if ((body.hasClass('sidebar-toggle-display')) || (body.hasClass('sidebar-absolute'))) {
        body.toggleClass('sidebar-hidden');
      } else {
        body.toggleClass('sidebar-icon-only');
      }
    });

    //checkbox and radios
    $(".form-check label,.form-radio label").append('<i class="input-helper"></i>');

    //Horizontal menu in mobile
    $('[data-toggle="horizontal-menu-toggle"]').on("click", function() {
      $(".horizontal-menu .bottom-navbar").toggleClass("header-toggled");
    });
    // Horizontal menu navigation in mobile menu on click
    var navItemClicked = $('.horizontal-menu .page-navigation >.nav-item');
    navItemClicked.on("click", function(event) {
      if(window.matchMedia('(max-width: 991px)').matches) {
        if(!($(this).hasClass('show-submenu'))) {
          navItemClicked.removeClass('show-submenu');
        }
        $(this).toggleClass('show-submenu');
      }        
    })

    $(window).scroll(function() {
      if(window.matchMedia('(min-width: 992px)').matches) {
        var header = $('.horizontal-menu');
        if ($(window).scrollTop() >= 70) {
          $(header).addClass('fixed-on-scroll');
        } else {
          $(header).removeClass('fixed-on-scroll');
        }
      }
    });
  });

  // focus input when clicking on search icon
  $('#navbar-search-icon').click(function() {
    $("#navbar-search-input").focus();
  });

  //Open submenu on hover in compact sidebar mode and horizontal menu mode
  $(document).on('mouseenter mouseleave', '.sidebar .nav-item', function(ev) {
    var body = $('body');
    var sidebarIconOnly = body.hasClass("sidebar-icon-only");
    var sidebarFixed = body.hasClass("sidebar-fixed");
    if (!('ontouchstart' in document.documentElement)) {
      if (sidebarIconOnly) {
        if (sidebarFixed) {
          if (ev.type === 'mouseenter') {
            body.removeClass('sidebar-icon-only');
          }
        } else {
          var $menuItem = $(this);
          if (ev.type === 'mouseenter') {
            $menuItem.addClass('hover-open')
          } else {
            $menuItem.removeClass('hover-open')
          }
        }
      }
    }
  });

  //레이어달력 -월일표시
  if($('.datepickerBox').length>0){
    $('.datepickerBox input').datepicker({
      monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월' ],
      dayNamesMin: ['일','월','화','수','목','금','토'],
      showOn : 'button',
      buttonImage : '../images/ic_calendar.png',
      buttonText : '날짜선택',
      dateFormat : 'yy-mm-dd',
      changeYear: true,
      changeMonth: true,
      //showButtonPanel : true,
      //closeText : '닫기',
      currentText : 'Today',
      showOtherMonths : true,
      selectOtherMonths : true,
      showMonthAfterYear : true
    });
  };


	//레이어팝업-닫기
  $(".popClose").click(function(){
		$(this).parent().hide();
		$(this).parent().prev('.dimmed').hide();
    });

	//레이어팝업-닫기
   $(".popup .btn01").click(function(){
      $(".popup").hide();
      $('.dimmed').hide();
    });

  //셀렉트메뉴
  $(function() {
    // $("select").selectmenu();
  } );

  //textarea 높이 자동조절
  function resize(obj) {
    obj.style.height = '1px';
    obj.style.height = (12 + obj.scrollHeight) + 'px';
  }

  //파일등록-인풋박스+버튼 | 20220908 추가
  $('.filebox button.btnX').hide();
  var fileTarget = $('.filebox input[type=file]'); 
  fileTarget.on('change', function(){ 
      var cur=$(this).val();
      $(this).next().val(cur);
      $(this).siblings('.btnX').show();

      $('.filebox button.btnX').click(function(){
          $(this).siblings('input').val('');
          $(this).hide();
      });	
  });  

	//faq
	$(".faqlist > li > .tit").click(function() {
		if($(this).parent("li").hasClass("unfold")){ //열려있으면
		$(this).parent("li").removeClass("unfold").addClass("fold"); //닫아주고
		} else { //닫혀있으면
		$(".faqlist > li").addClass('fold').removeClass("unfold");
		$(this).parent("li").removeClass("fold").addClass("unfold"); //클릭한 리스트는 열어준다
		}
	});


    //탭 상세장비 정보 List
    $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');

      $('ul.tabs li').removeClass('current');
      $('.tab-cont').removeClass('current');

      $(this).addClass('current');
      $("#"+tab_id).addClass('current');

  });

  // Tab Edit
  $('.widget-button .widget-edit').on('click', function(){
    $(this).toggleClass('edit-save');
    if($(this).hasClass('edit-save')){
      $(this).parent().prev('.tabEdit').removeAttr('disabled');
    } else{
      $(this).parent().prev('.tabEdit').attr('disabled', true);
    }
    
  })


})(jQuery);