//business logic
function Task(name) {
  this.taskOne = name;
}

//user interface logic
$(document).ready(function() {
  $("form#todo-form").submit(function(event) {
    event.preventDefault();
  });
});
