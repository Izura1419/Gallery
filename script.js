	var today = new Date();
	
	var hours = today.getHours();
	
var hello = (hours < 6) ? "Доброй ночи" : 
	(hours < 12) ? "Доброе утро" :
	(hours < 18) ? "Добрый день" :
	"Добрый вечер" ;
 

$(function(){
	$(".firstTxt").text(hello);
	$(".firstTxt").animate({opacity: true}, 2000, (function(){
		
		$(this).animate({top: "280px"}, 470,(function(){
			$(".inputName").animate({opacity: true}, 2000, (function(){
		
		$(this).animate({top: "320px"}, 470);
		
		}));
		
		}));
		
		}));
		
	});
var userName = ("inpukBox");

$(function () {
    $("#inpukBox").on('keypress', function (event) {
        if (event.keyCode === 13 && $(this).val()) {
            $("#aZachem").text($(this).val())
			
			$(".peredSpan").animate({opacity: "1"}, 2000, (function(){
		
		$(this).animate({top: "180px"}, 470,(function(){
			$(".spanTwo").animate({opacity: "1"}, 2000, (function(){
		
		$(this).animate({top: "230px"}, 500);
		
		}));
		
		}));
		
		}));
        }
		
    });
});

 $(function(){
	$(".chel").click(function(){
		$(this).animate({opacity : false}, 100, (function(){
			$(this).animate({width : "220px"},50,(function(){
				$(this).animate({opacity : true}, 500);
				$(this).animate({left : "240px"}, 300);
				$(this).animate({top : "405px"},200);
				$(".hrest").animate({top : "435px"},550);
				$(".hrest").animate({left : "545px"},550);
				$(".hrest").animate({opacity : true},450);
				$(".black").animate({opacity : true},500);
				$(".black").css({"zIndex":"2"},1);
				$(".sasuke").css({"zIndex":"1"},1);
				$(".musik").css({"zIndex":"1"},1);
			}));
		}));
	});	
});
$(function(){
	$(".hrest").click(function(){
		$(this).animate({opacity : false}, 150, (function(){
			$(".chel").animate({width : "150px"},50,(function(){
				$(this).animate({left : "0px"}, 500);
				$(this).animate({top : "450px"},500);
				$(this).animate({opacity : true}, 500);
				$(".black").animate({opacity : false},500);
				$(".black").css({"zIndex":"0.5"},1);
				$(".sasuke").css({"zIndex":"4"},1);
				$(".musik").css({"zIndex":"4"},1);
			}));
		}));
	});
});
$(function(){
	$(".sasuke").click(function(){
		$(this).animate({opacity : false}, 100, (function(){
			$(this).animate({width : "520px"},50,(function(){
				$(".black").css({"zIndex":"3"},1);
				$(this).css({"zIndex":"4"},1);
				$(this).animate({opacity : true}, 500);
				$(this).animate({left : "-90px"}, 300);
				$(this).animate({top : "435px"},200);
				$(".hrest").animate({top : "455px"},550);
				$(".hrest").animate({left : "675px"},550);
				$(".hrest").animate({opacity : true},450);
				$(".black").animate({opacity : true},500);
				$(".hrest").css({"zIndex":"4"},1);
				$(".chel").css({"zIndex":"1"},1);
				$(".musik").css({"zIndex":"1"},1);
			}));
		}));
	});	
});
$(function(){
	$(".hrest").click(function(){
		$(this).animate({opacity : false}, 150, (function(){
			$(".sasuke").animate({width : "350px"},50,(function(){
				$(this).animate({left : "0px"}, 500);
				$(this).animate({top : "410px"},500);
				$(this).animate({opacity : true}, 500);
				$(".black").animate({opacity : false},500);
				$(".black").css({"zIndex":"0.5"},1);
				$(".chel").css({"zIndex":"4"},1);
				$(".musik").css({"zIndex":"4"},1);
			}));
		}));
	});
});

$(function(){
	$(".musik").click(function(){
		$(this).animate({opacity : false}, 100, (function(){
			$(this).animate({width : "520px"},50,(function(){
				$(".black").css({"zIndex":"3"},1);
				$(this).css({"zIndex":"4"},1);
				$(this).animate({opacity : true}, 500);
				$(this).animate({left : "120px"}, 300);
				$(this).animate({top : "535px"},200);
				$(".hrest").animate({top : "515px"},550);
				$(".hrest").animate({left : "655px"},550);
				$(".hrest").animate({opacity : true},450);
				$(".black").animate({opacity : true},500);
				$(".hrest").css({"zIndex":"4"},1);
				$(".chel").css({"zIndex":"1"},1);
				$(".sasuke").css({"zIndex":"1"},1);
			}));
		}));
	});	
});
$(function(){
	$(".hrest").click(function(){
		$(this).animate({opacity : false}, 150, (function(){
			$(".musik").animate({width : "350px"},50,(function(){
				$(this).animate({left : "230px"}, 500);
				$(this).animate({top : "640px"},500);
				$(this).animate({opacity : true}, 500);
				$(".black").animate({opacity : false},500);
				$(".black").css({"zIndex":"0.5"},1);
				$(".chel").css({"zIndex":"4"},1);
				$(".sasuke").css({"zIndex":"4"},1);
			}));
		}));
	});
});