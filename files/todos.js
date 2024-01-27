function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        var li = document.createElement('li');
        var taskText = document.createTextNode(taskInput.value);

        // Criar botão de exclusão
        var deleteButton = document.createElement('button');
        deleteButton.appendChild(document.createTextNode('Excluir'));
        deleteButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Adicionar elementos à lista
        li.appendChild(taskText);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = '';
    }
}