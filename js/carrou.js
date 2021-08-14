$(document).ready(function(){
    $("#myCarousel").on("slide.bs.carousel",function(e){
        var $e = $(e.relatedtarget);
        var idx = $e.index();
        var itemsPerSlide = 4;
        var totalItems = $(".carousel-item").length;

        if(idx >= totalItems -(itemsPerSlide - 1)){
            var it = itemsPerSlide - (totalItems - idx);
            for (var i=0; i<it; i++){
                //agregar diapositiva al final
                if (e.direction == "left"){
                    $(".carousel-item")
                                    .eq(i)
                                    .appendTo(".carousel-inner");
                }else{
                    $(".carousel-item")
                                    .eq(0)
                                  .appendTo($(this).find(".carousel-inner"));
                }
            }
        }
    })
})