$(window).resize(function(){
    $('html').css({'font-size':$(window).width()/3.9+"px"});
});

$(function(){
	$('html').css({'font-size':$(window).width()/3.9+"px"});

	$('.sub').click(function(){
		var name = $('.name').val();
		var ill = $('.ill').val();
		var phone = $('.phone').val(); 
		var bad = $('#bad').val(); 
		
		if (name=='' || ill=='' || phone=='') {
			alert('* 为必填项！');
			return false;
		}
		// if (ill=='') {
		// 	alert('* 为必填项！');
		// 	return false;
		// }
		// if (phone=='') {
		// 	alert('* 为必填项！');
		// 	return false;
		// }
		if(!(/^1[3|4|5|7|8][0-9]{9}$/.test(phone))){
			alert('请输入正确的手机号码');
			return false;
		}
		if (bad=='') {
			alert('请填写问题描述！');
			return false;
		}

		$.ajax({
			type : "post",
			url : "XXXXXX",
			// dataType : "json",
			data : {
				"name": name, 
				"ill": ill,
				"phone":phone,
				"bad" :bad,
			},
			success : function(data) {
				// window.laction.href = "";
			},
			error : function() {
				// alert("页面出错！");
			}
		});
		
	});
});