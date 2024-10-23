


$(".open").on("click",function(){
    $(".menu").animate( {width:"250px"},50)
    $(".content").animate( {marginLeft:"250px"},50)
    $(".open").addClass("moving");
})
$(".close").on("click",function(){
    $(".menu").animate( {width: "0px"},50)
     $(".content").animate( {marginLeft:"0px"},50)
     $(".open").removeClass("moving");
})

// ! scroll

$(".menuLinks a").on("click",function(){


  
    let currentSection = $(this).attr("href");
    let sectionOffset = $(currentSection).offset().top;
    $("html , body").animate( {scrollTop : sectionOffset},2000)
   
})

// ! slides

$(".slides h3").on("click",function(){

   $(".slide").not($(this).next()).slideUp(1000);
   $(this).next().slideToggle(1000);
})


//! countDown

window.onload = function(){
    countDown()
}
    

    
// ! countDown function

function countDown(){

    const date = new Date("Oct 30, 2024 9:37:25").getTime();
    console.log(date);

    let x = setInterval(function(){


        let now = new Date().getTime();

        let timeDifference = date - now;

        let days = Math.floor(      timeDifference / (1000*60*60*24));
        let hours = Math.floor((    timeDifference % (1000*60*60*24)) / (1000*60*60));
        let minutes = Math.floor((  timeDifference % (1000*60*60)) / (1000*60));
        let seconds = Math.floor((  timeDifference % (1000*60)) / 1000);


        $(".days").html(`${days} D`)
        $(".hours").html(`${hours} h`)
        $(".minutes").html(`${minutes} m`)
        $(".seconds").html(`${seconds} s`)
    },1000)

}

// ! Message

const maxLength = 100;

$("textarea").keyup(function(){

    let currentLength = $(this).val().length;

    let remaining = maxLength - currentLength;

    if(remaining < 0){

        $("form p span").html("your available character finished ")
    }else{
        $("form p span").html(remaining)
    }
})