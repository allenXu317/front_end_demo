import { toStorage } from "./localStorage.js";
$(function () {
  $(".toDoList").on("click", ".toDoCheck", function () {
    switchItem(".toDoItem", ".DoneList", $(this));
    toStorage();
  });

  $(".DoneList").on("click", ".toDoCheck", function () {
    switchItem(".toDoItem", ".toDoList", $(this));
    toStorage();
  });

  function switchItem(src, des, ele) {
    let item = ele.parent(src).clone(true);
    ele.parent(src).slideUp();
    $(des).append(item.css("display", "none"));
    item.slideDown();
    ele.parent(src).remove();
  }
});
