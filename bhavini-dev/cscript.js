

$("#less-content").hide();

$("#assert").on("click",function(){
    $("#less-content").show();
    $("#assert").hide()
})

$("#less").on("click",function(){
    $("#less-content").hide();
    $("#assert").show()
})