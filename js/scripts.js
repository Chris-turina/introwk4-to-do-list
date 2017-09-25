//business logic
function Task(name, details) {
  this.taskOne = name;
  this.taskDetails = details;

}

//user interface logic
$(document).ready(function() {
  $("form#todo-form").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#input-task").val();
    var inputtedDetails = $("textarea#task-details").val();

    var newTask = new Task(inputtedTask, inputtedDetails);

    $("ul#list-tasks").append("<li><span class='task'>" + newTask.taskOne + " </span><button type='button' class='remove'>remove</button></li>");

    $(".task").last().click(function() {
      $("#show-tasks").show();
      $("#show-tasks h2").text(newTask.taskOne);
      $(".task-one").text(newTask.taskOne);
      $(".task-details").text(newTask.taskDetails);
    });

    $("input#input-task").val("");
    $("textarea#task-details").val("");

  $("#remove-task").click(function(){
    $("#show-task .task-one").empty();
    $("#show-tasks").hide();

  });
  });
});
