

$("#read-less").hide();

$("#read-more").on("click", function(){
    $("#read-less").show();
})

$("#read").on("click", function(){
    $("#read-less").hide();
})

$("#b-menu").hide()
$("#up-aero").hide()

$("#a-menu").on("click",function(){
    $("#b-menu").toggle()
    $("#up-aero").show()
    $("#down-aero").hide()
})

$("#b-menu1").hide()
$("#up-aero1").hide()

$("#a-menu1").on("click",function(){
    $("#b-menu1").toggle()
    $("#up-aero1").show()
    $("#down-aero1").hide()
})

$("#b-menu2").hide()
$("#up-aero2").hide()

$("#a-menu2").on("click",function(){
    $("#b-menu2").toggle()
    $("#up-aero2").show()
    $("#down-aero2").hide()
})

$("#less-content").hide();

$("#assert").on("click",function(){
    $("#less-content").show();
    $("#assert").hide()
})

$("#less").on("click",function(){
    $("#less-content").hide();
    $("#assert").show()
})

