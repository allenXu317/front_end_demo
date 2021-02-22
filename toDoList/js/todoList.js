$(function () {
  $("#todo").on("change", function () {
    let li = $(`<li class="toDoItem toDoItem-Base"></li>`);
    addCheckBox(li);
    if ($(this).val() == "" || $(this).val() == " ") {
      alert("请输入内容！");
      return false;
    }
    addSpan(li, $(this).val());
    $(".toDoList").append(li);
    li.stop().slideDown();
  });

  function addCheckBox(ele) {
    let checkBox = $(`<input class="toDoCheck" type="checkbox"></input>`);
    ele.prepend(checkBox);
  }

  function addSpan(ele, value) {
    let span = $(`<span class="text">${value}</span>`);
    addDel(ele);
    ele.append(span);
  }

  function addDel(ele) {
    let del = $(`<i class="icon bi bi-x del"></i>`);
    del.on("click", function () {
      $(this).parent(".toDoItem").slideUp();
    });
    ele.append(del);
  }
});
