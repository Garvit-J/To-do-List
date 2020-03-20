//check off specific todos by clicking
$("ul").on("click", "li",function()
{ $(this).toggleClass("completed");
});

//click on X to delete todos
$("ul").on("click", "span",function(event)
{
 $(this).parent().fadeOut(500,function(){
     $(this).remove();
 });
 event.stopPropagation();
});

$("input[type='text']").keypress(function(event)
{//checking if enter
 if(event.which===13)
 {
  //taking the new todo text
  var newtodo=$(this).val();
  $(this).val("");
  //create new li
  $("ul").append( "<li> <span><i class='fa fa-trash'></i></span> "+ newtodo + "</li>");

 }
});

$(".fa-edit").click(function(){
$("input[type='text']").fadeToggle();
});