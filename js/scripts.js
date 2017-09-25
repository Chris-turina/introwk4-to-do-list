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

    $("ul#list-tasks").append("<li><span class='task'>" + newTask.taskOne + " </span><span class= 'btn btn-primary'>Remove Task</span></li>");

    $(".task").last().click(function() {
      $("#show-tasks").show();
      $("#show-tasks h2").text(newTask.taskOne);
      $(".task-one").text(newTask.taskOne);
      $(".task-details").text(newTask.taskDetails);
    });

    $("#list-tasks li").children(".btn").click(function() {
      $(this).parent().remove();
      $("#show-tasks").hide();
    });

    // $("#list-tasks").children("li").click(function() {
    //   $(this).remove();
    // });

    $("input#input-task").val("");
    $("textarea#task-details").val("");

  // $("#remove-task").click(function(){
  //   $("#show-task .task-one").empty();
  //   $("#show-tasks").hide();
  //
  // });
  });
});
