$(function () {
  $(".toDoList").on("click", ".toDoCheck", function () {
    $(this).parent(".toDoItem").slideUp();
    let item = $(this).parent(".toDoItem ").clone(true);
    $(".DoneList").append(item.css("display","none"));
    item.slideDown();
    $(this).parent(".toDoItem ").remove();
  });

  $(".DoneList").on("click",".toDoCheck",function() {
    let item = $(this).parent(".toDoItem ").clone(true);
    $(this).parent(".toDoItem ").slideUp();
    $(".toDoList").append(item.css("display","none"));
    item.slideDown();
    $(this).parent(".toDoItem ").remove();
  })
});
