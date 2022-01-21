const todoText = document.getElementsByClassName('todo-text')[0];
const todoBtn = document.getElementsByClassName('todo-btn')[0];
const inputTask = document.getElementsByClassName('input-task')[0];

const addTask = (task) => {
    const listItem = document.createElement('li');
    const showItem = inputTask.appendChild(listItem);
    showItem.innerHTML = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'delete';
    listItem.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', e => {
        deleteTask(deleteBtn);
    });
    
};

const deleteTask = (deleteBtn) => {
    const chosenItem = deleteBtn.closest('li');
    inputTask.removeChild(chosenItem);
};

todoBtn.addEventListener('click', e => {
    const task = todoText.value;
    addTask(task);
    todoText.value = '';
});
