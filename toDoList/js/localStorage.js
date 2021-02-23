export function toStorage() {
  let itemLists = [];
  $(".toDoList li")
    .children(".text")
    .each(function () {
      let item = {
        todo: `${$(this).text()}`,
        done: false,
      };
      itemLists.push(item);
    });
  $(".DoneList li")
    .children(".text")
    .each(function () {
      let item = {
        todo: `${$(this).text()}`,
        done: true,
      };
      itemLists.push(item);
    });
  console.log(itemLists);
  localStorage.setItem("todo", JSON.stringify(itemLists));
}

export function getLocalStorage() {
  let itemLists = JSON.parse(localStorage.getItem("todo"));
  console.log(itemLists);
  itemLists.forEach((item) => {
    if (!item.done) {
      let li = $(`<li class="toDoItem toDoItem-Base"></li>`);
      addCheckBox(li);
      addSpan(li, item.todo);
      $(".toDoList").append(li);
      li.stop().slideDown();
    } else {
      let li = $(`<li class="toDoItem toDoItem-Base"></li>`);
      addCheckBox(li);
      li.children('.toDoCheck').prop('checked','checked');
      addSpan(li, item.todo);
      $(".DoneList").append(li);
      li.stop().slideDown();
    }
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
}
