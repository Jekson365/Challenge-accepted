$(document).ready(()=> {
    $(".productcontainer").on("click","img",function(){
        $(this).css({
            opacity:"50%",
            border:"2px solid #ff7d1b"
        })
        $(this).siblings("img").css({
            opacity:"100%",
            border:"none"
        })
    })
})
 