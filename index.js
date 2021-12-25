$(document).ready(()=> {
    $(".productcontainer").on("click","img",function(){
        $(this).css({
            opacity:"50%",
            border:"2px solid #ff7d1b"
        })
        $(this).parent(".imageslider").siblings(".mainimage").css({
            backgroundImage:"url("+ $(this).attr("src") +")"
        })
        $(this).siblings("img").css({
            opacity:"100%",
            border:"none"
        })
    })
    let y = 0 
    $("#btn1").click(()=> {
        y = y - 1
        $("#counter").text(y)
    })
    $("#btn2").click(()=> {
        y = y + 1
        $("#counter").text(y)
    })
    
    
})
