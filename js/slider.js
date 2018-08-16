// var stSlide;
// 		function startSlide(){
// 			stSlide=setInterval(function (){
// 				changeImge()
// 			},1000)
// 		}
// 		startSlide()
// 		function changeImge(){
// 			var imgAddr=document.getElementById("main_slider").src;
// 			console.log(imgAddr.lastIndexOf("/"))
// 			var imageNo=imgAddr.substring(imgAddr.lastIndexOf("/")+1,imgAddr.lastIndexOf("/")+2)
// 			imageNo++;
// 			if(imageNo==7){
// 				imageNo=1;
// 			}
// 			document.getElementById("main_slider").src="images/"+imageNo+".jpg"
// 		}
// 		document.getElementById("main_slider").onmouseover=function (){
// 			clearInterval(stSlide)
// 		}
// 		document.getElementById("main_slider").onmouseout=function (){
// 			startSlide()
// 		}

// var newStudent={
// 			fname:"",
// 			tel:"",
// 			city:""			
// 		}
// 	function getTheValues(){
		
// 		newStudent.fname=document.getElementById("fname").value
// 		newStudent.lname=document.getElementById("lname").value
// 		newStudent.tel=document.getElementById("tel").value
// 		newStudent.address=document.getElementById("address").value
// 		newStudent.city=document.getElementById("city").value
// 		newStudent.state=document.getElementById("state").value
// 		newStudent.zip=document.getElementById("zip").value
// 		for(a in newStudent){
// 			newStudent[a]=document.getElementById(a).value
// 		}
// 		localStorage.setItem("newStudent",JSON.stringify(newStudent))
// 		clearForm()
// 	}
// 	function clearForm(){
// 		for(a in newStudent){
// 			document.getElementById(a).value=""
// 		}
// 	}
	
var slide;
		function changeImg(){
			var imgAdr=document.getElementById("main_slider").src;
			
			var imgNo=imgAdr.substring(imgAdr.lastIndexOf("/")+1,imgAdr.lastIndexOf("/")+2)
			
			imgNo++
			if(imgNo==7){
				imgNo=1
			}
			document.getElementById("main_slider").src="images/"+imgNo+".jpg"
		}
		var slide;
		function startSlide(){
			 slide=setInterval(function (){
				changeImg()
				showSlides()
			},1000)
		}
		startSlide();


		document.getElementById('main_slider').onmouseover=function(){
			clearInterval(slide)
		}
		document.getElementById("main_slider").onmouseover=function (){
			clearInterval(slide)
		}
		document.getElementById("main_slider").onmouseout=function (){
			startSlide()
		}
		function begin_slide() {
			startSlide()
		}

		function stop_slide() {
			clearInterval(slide)
		}
		



		var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("inner_comments");
  //var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block"; 
  //dots[slideIndex-1].className += " active";
}



  setInterval(function(){
showSlides();
  });       


  $(function () {
  	$('#toggleThis').click(function(){
  		$('#vcontent').slideToggle(300);
  	})
  })
  $(function () {
  	$('#toggleThis1').click(function(){
  		$('#vcontent1').slideToggle(300);
  	})
  })
  $(function () {
  	$('#toggleThis2').click(function(){
  		$('#vcontent2').slideToggle(300);
  	})
  })

  $(document).ready(function(){
  	$(".set").on("click", function(){
  		if($(this).hasClass('active')){
  			$(this).removeClass("active");
  			$(this).siblings('.content').slideUp(200);
  			$(".set i").removeClass("fa-minus").addClass("fa-plus");
  		}else{
  			$(".set i").removeClass("fa-minus").addClass("fa-plus");
  			$(this).find("i").removeClass("fa-plus").addClass("fa-minus");
  			$(".set").removeClass("active");
  			$(this).addClass("active");
  			$('.content').slideUp(200);
  			$(this).siblings('.content').slideDown(200);
  		}
  	})
  })