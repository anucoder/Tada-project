//
// var lis = document.querySelectorAll("li");
//
//
//
// for(var i=0;i<lis.length;i++)
// {
//   lis[i].addEventListener("mouseover",function()
//   {
//     this.classList.add("selected");
//   });
//   lis[i].addEventListener("mouseout",function()
//   {
//     this.classList.remove("selected");
//   });
//   lis[i].addEventListener("click",function()
//   {
//     this.classList.toggle("done");
//   });
// }


// **************************************
//            jQuery Version
// *************************************

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
