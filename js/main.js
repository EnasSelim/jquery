/// <reference types="../@types/jquery"/>

$('.openNav').on("click",function(){
   $('.sidenav').show().animate({width:"250px"},500)
   $('#home-content').animate({marginLeft:"150px"},500)
})

$('.closebtn').on("click",function(){
   $('.sidenav').animate({width:"0px"},500).hide(100)
   $('#home-content').animate({marginLeft:"0px"},500)
})

$('.sidenav a[href^="#"]').on('click',function(){
   $('.sidenav a').removeClass('active')
   $(this).addClass('active')
   let Href=$(this).attr('href')
   let sectionOffset =$(Href).offset().top
   $('body').animate({scrollTop:sectionOffset},800)
})

$('#sliderDown h3').on('click',function(){
   $('.meal-img').slideUp(1000)
   $(this).next().slideDown(1000)
})

let countDown= new Date("mar 21,2024 23:59:59").getTime()
console.log(countDown)

let counter =setInterval(() => {
   let dateNow=new Date().getTime();
   let dateDiff =countDown -dateNow;
   let days = Math.floor(dateDiff /(1000 *60 *60*24));
   let hours = Math.floor(dateDiff %(1000 *60 *60*24) /(1000*60*60));
   let min = Math.floor(dateDiff %(1000 *60 *60) /(1000*60));
   let sec = Math.floor(dateDiff %(1000 *60 ) /1000);

   $('.days').html(days+" D");
   $('.hours').html(hours+" h");
   $('.min').html(min+" m");
   $('.sec').html(sec+" s");

   if(dateDiff<0){
      clearInterval(counter)
   }
},1000)

let count=$('#counter'),
    textArea=$('textarea'),
    maxLength=textArea.attr('maxlength');
  

textArea.on('input',
function(){
    count.html(maxLength - this.value.length +" Character")
}) 
    
$(function(){
   $('#loading').fadeOut(1000,function () {
      $('body').css('overflow','auto')
   })
})    
