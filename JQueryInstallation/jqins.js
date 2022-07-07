$("h1").addClass("big-title margin-50")



$("#hide").click(()=>{
    $("h1").animate({
        opacity:'0.5'
    }
    )
})
$("#show").click(()=>{
    $("h1").animate({opacity:1})
})