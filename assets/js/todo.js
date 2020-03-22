
//click on a li to mark it complete. click again to unmark
$('li').click(function()
{
    $(this).toggleClass("done");
});

//click on a span to delete a list item
$('span').click(function(event)
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
    $('ul').append("<li><span>X</span> "+nitem+"<\li>");
  }
});
