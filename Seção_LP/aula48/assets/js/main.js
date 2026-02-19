const tasks = document.querySelector('.tasks');
const taskInput = document.querySelector('.input-task');
const sendButton = document.querySelector('.send-btn')

function createLi(){
    const li = document.createElement('li')
    return li;  
}

taskInput.addEventListener('keypress', (e) => {
    if (e.keyCode === 13){
        if(!taskInput.value) return
        createTask(taskInput.value);
    }
})

function clearInput(){
    taskInput.value = '';
    taskInput.focus();
}

function createDeleteButton(li){
    li.innerHTML += ' ';
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Apagar';
    li.appendChild(deleteButton);
}

function createTask(taskText){
    const li = createLi();
    li.innerText = taskText;
    tasks.appendChild(li);
    clearInput();
    createDeleteButton(li);
}

sendButton.addEventListener('click', () => {
    if(!taskInput.value) return;

    createTask(taskInput.value)
})