$(document).ready(function(){
	//gnb_menu
	$("#menu li").on('mouseenter', function(){
		$(this).find('ul:first').show(); // effect 1
	});
	$("#menu li").on('mouseleave', function(){
		$(this).find('ul:first').hide();
	});

	$(".depth1 li").mouseover(function(){
		$(this).removeClass('hide').addClass('show');
	});
	$(".depth1 li").mouseleave(function(){
		$(this).removeClass('show').addClass('hide');
	});

	$(".depth2 li").mouseover(function(){
		$(this).removeClass('hide').addClass('show');
		$(this).parents('.depth1').removeClass('hide').addClass('show');
	});
	$(".depth2 li").mouseleave(function(){
		$(this).removeClass('show').addClass('hide');
		$(this).parents('.depth1').removeClass('show').addClass('hide');
	});

	$(".depth3 li").mouseover(function(){
		$(this).removeClass('hide').addClass('show');
		$(this).parents('.depth2').removeClass('hide').addClass('show');
		$(this).parents().parents('.depth1').removeClass('show').addClass('hide');
	});
	$(".depth3 li").mouseleave(function(){
		$(this).removeClass('show').addClass('hide');
		$(this).parents('.depth2').removeClass('show').addClass('hide');
		$(this).parents().parents('.depth1').removeClass('show').addClass('hide');
	});

	//gnb_etc
	$(document).click(function(e){
		if(!$(e.target).hasClass('mys')){
			$('.my_lists').hide();
			$(this).parents().parents('.nav_item').removeClass('show').addClass('hide');
		}
	});

	$('.mys').click(function(){
		if($(this).parents().parents('.nav_item').hasClass('hide')){
			$('.nav_item').addClass('hide').removeClass('show');
			$('.nav_item').find('.my_lists').hide();

			$(this).parents().parents('.nav_item').removeClass('hide').addClass('show');
			$(this).parents().parents('.nav_item').find('.my_lists').show();
		} else {
			$(this).parents().parents('.nav_item').removeClass('show').addClass('hide');
			$(this).parents().parents('.nav_item').find('.my_lists').hide();
		}
	});

	$('.my_lists li').click(function(){
		$(this).parents().parents('.nav_item').removeClass('show').addClass('hide');
	});

	$(".langs > li").click(function () {
		$(".languages .mys").text($(this).text());
	});

	//gnb_search
	$(".searchs, .search_pop").on("click", function() {
		//$("#search_popup").dialog("open");
		if ($("#search_popup").dialog("open") ) {
			$(this).addClass('on');
		};
		$('.nav_item').removeClass('show').addClass('hide');
	});
	$(".search_close").on("click", function() {
		$('.searchs').removeClass('on');
	});
		
	//file
	$("#file").on('change',function(){
		var fileName = $("#file").val();
		$(".upload_name").val(fileName);
	});

	//tabs
	$(".tab_tit li").click(function() {
		var idx = $(this).index();
		$(".tab_tit li").removeClass("on");
		$(".tab_tit li").eq(idx).addClass("on");
		$(".tab_cont > div").hide();
		$(".tab_cont > div").eq(idx).show();
	});
	$(".tab_tit2 li").click(function() {
		var idx = $(this).index();
		$(".tab_tit2 li").removeClass("on");
		$(".tab_tit2 li").eq(idx).addClass("on");
		$(".tab_cont2 > div").hide();
		$(".tab_cont2 > div").eq(idx).show();
	});
    
	//modal
	$(".modal_layer").dialog({
		autoOpen:false,
		resizable:false,
		modal:true,
		draggable:false,
		height:"auto",
		width:"auto",
		open:function(event, ui){
			$(this).parents('.ui-dialog').attr('tabindex', -1)[0].focus();
		}
	});
	$(".modal_btn .close").on("click", function() {
			$(".modal_layer").dialog("close");
	});

	$( "#tabs" ).tabs();
	$( "#tabs2" ).tabs();


	//modal_lay
	$(".modal_close").on('click',function(){
		$("#modal").hide();
		$(".modal_wrap").hide();

		$("html, body").removeClass("hidden");
		posY = $(window).scrollTop(posY);
	});

	//scroll
	// $('.tbl_list_body').overlayScrollbars({ overflowBehavior : {
	//     x : "hidden",
	//     y : "scroll"
	// }});
  $(".tbl_list_body").overlayScrollbars({ });

	//faq
	$(".faqlist > li > .tit").click(function() {
		if($(this).parent("li").hasClass("unfold")){ //열려있으면
		$(this).parent("li").removeClass("unfold").addClass("fold"); //닫아주고
		} else { //닫혀있으면
		$(".faqlist > li").addClass('fold').removeClass("unfold");
		$(this).parent("li").removeClass("fold").addClass("unfold"); //클릭한 리스트는 열어준다
		}
	});

});

//modal_lay
function openModal(modalname){
	document.get
	$("#modal").show();
	$("."+modalname).show();

	posY = $(window).scrollTop();
	$("html, body").addClass("hidden");
	$(".contents").css("top",-posY);
}


