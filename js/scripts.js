//business logic
function Task(name) {
  this.taskOne = name;
}

//user interface logic
$(document).ready(function() {
  $("form#todo-form").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#input-task").val();

    var newTask = new Task(inputtedTask);

    $("ul#list-tasks").append("<li><span class='task'>" + newTask.taskOne + "</span></li>");

    $(".task").last().click(function() {
      $("#show-tasks").show();
      $("#show-tasks h2").text(newTask.taskOne);
      $(".task-one").text(newTask.taskOne);
    });

    $("input#input-task").val("");
  });
});
