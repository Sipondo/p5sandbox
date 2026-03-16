let todos = [];
let loading = true;
let errorText = "";

function setup() {
  createCanvas(900, 460);
  textFont("monospace");
  fetchTodos();
}

function draw() {
  background(246);
  fill(20);
  textSize(20);
  text("API basics: fetch data from the web", 20, 36);

  textSize(14);
  if (loading) {
    text("Loading todos...", 20, 70);
    return;
  }

  if (errorText) {
    fill(200, 30, 30);
    text(errorText, 20, 70);
    return;
  }

  text("Loaded " + todos.length + " tasks from JSONPlaceholder", 20, 70);
  text("Press R to re-fetch", 20, 92);

  for (let i = 0; i < min(10, todos.length); i++) {
    var item = todos[i];
    var y = 130 + i * 28;
    fill(item.completed ? color(60, 170, 90) : color(210, 120, 40));
    circle(28, y - 6, 10);
    fill(20);
    text(item.title, 44, y);
  }
}

function fetchTodos() {
  loading = true;
  errorText = "";
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=18")
    .then((r) => r.json())
    .then((json) => {
      todos = json;
      loading = false;
    })
    .catch(() => {
      loading = false;
      errorText = "API request failed. Check internet or CORS policy.";
    });
}

function keyPressed() {
  if (key === "r" || key === "R") fetchTodos();
}
