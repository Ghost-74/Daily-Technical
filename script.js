document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    // Mark as done
    li.addEventListener("click", function () {
        li.classList.toggle("done");
    });

    // Delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.className = "delete-btn";

    delBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(delBtn);

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}