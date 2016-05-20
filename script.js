$(document).ready(function() {
    $("form").submit(function(e){
        e.preventDefault();
        $url = $("input").val();
        $("body").append($("<div class='imgBlock'><img id='img'></div>").fadeIn("slow"));
        $("img:last").attr("src", $url);
        $("input").val("");
    });
    
    $("body").on("click", "#img", function(){
        $(this).slideUp("slow",function(){
            $(this).parent(".imgBlock").remove();
        });
    });
});
