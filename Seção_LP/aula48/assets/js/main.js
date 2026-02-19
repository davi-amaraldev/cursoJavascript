const tasks = document.querySelector('.tasks');
const taskInput = document.querySelector('.input-task');
const sendButton = document.querySelector('.send-btn');

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
    deleteButton.classList.add('delete-btn');
    deleteButton.setAttribute('title', 'Apagar esta tarefa')
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

document.addEventListener('click', (e) => {
    const el = e.target;
    
    if (el.classList.contains('delete-btn')){
        el.parentElement.remove();
    }
})

function salvarTarefa(){}