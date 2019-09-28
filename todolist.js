/* let liList = $("li");
$(liList).on("click", function(){
    $(this).toggleClass("special");
}); */


/* $("button").on("click", function(){
    let todoText = $("#todoinput").val();
    let images = $("<span class='image'><i class='far fa-trash-alt'></i></span>");
    let li = $("<li></li>").text(todoText).on("click", function(){
        $(this).toggleClass("special");
    }).on("mouseenter", function(){
       images.removeClass("image"); 
    }).on("mouseleave", function(){
        images.addClass("image ")
    })
    li.prepend(images);
    $("ul").append(li);
    
}); 
 */


 $("ul").on("click", "span", function(){
     $(this).parent().remove();
 });

 $("ul").on("click", "li", function(){
     $(this).toggleClass("compelete");
 });

 $("input[type = 'text']").keypress(function(event){
    if(event.which === 13){
        $(this).val()
        let todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
    };
 });