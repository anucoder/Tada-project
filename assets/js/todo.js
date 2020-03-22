
//click on a li to mark it complete. click again to unmark
$('ul').on('click','li',function()
{
    $(this).toggleClass("done");
});

//click on a span to delete a list item
$('ul').on('click','span',function(event)
{
  $(this).parent().fadeOut(300,function()
  {
    $(this).remove();
  });
  event.stopPropagation();
});

//adding a new item to List
$("input[type='text'").keypress(function(event)
{
  if(event.which === 13)
  {
    //grabbing new list item
    var nitem = $(this).val();
    $(this).val("");
    //adding to ul
   $('ul').append("<li><span><i class='fas fa-trash-alt'></i></span> "+nitem+"</li>");
  }
});

//toggle the + Niconne
$(".fa-plus").click(function()
{
  $("input[type='text'").fadeToggle();
})
