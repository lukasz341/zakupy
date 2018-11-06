let todoForm = null;

const todoList = document.querySelector('#todoList');

document.addEventListener('DOMContentLoaded', function() {
   for (var key in localStorage) {
       if (localStorage.getItem(key)!= null) {
       addTask(JSON.parse(localStorage.getItem(key)));
       }
   }  
});

function savetoStorage(task) {  
const numberOfTasks = document.querySelectorAll('.todo-element');
         console.log('Liczba zadań: ' + numberOfTasks.length);
       localStorage.setItem(task, JSON.stringify(task));   
     const retrievedObject = localStorage.getItem(task); 
}

function addTask(text) {
    const todoList = document.querySelector('#todoList');
        //add div with new task
     const todo = document.createElement('DIV');
       todo.classList.add('todo-element');
       todoList.appendChild(todo);
     
       //add text to task
       const todoText = document.createElement('DIV');
       todoText.classList.add('todo-element-text');
        todoText.innerText=text;
       todo.appendChild(todoText);
       const textareaValue = document.querySelector('#todoMessage');
       textareaValue.value='';
      
      /*
      
       //add date
       const dateElement = document.createElement('DIV');
       dateElement.classList.add('todo-element-bar');
       const date = new Date();
       const dateText = 'Dodano: ' + date.getDate() + '-' + (date.getMonth()+1) + '-' + date.getFullYear() + ' godz.: ' + date.getHours() + ':' + date.getMinutes();
       dateElement.innerText= dateText;
       todo.appendChild(dateElement);
      
     */
       //add delete button
       const deleteButton = document.createElement('button');
       deleteButton.classList.add('todo-form-button');
       deleteButton.innerText='Usuń';
       todo.appendChild(deleteButton); 
}

// add new task to localstorage
const todoButton = document.querySelector ('#todo-button');
    todoButton.addEventListener('click', function(e) {     
     e.preventDefault();
       const textarea = document.querySelector ('textarea');
          savetoStorage(textarea.value);
         addTask(textarea.value);    
});

// delete task
todoList.addEventListener('click', function(e) {
        if (e.target.closest('.todo-form-button') !== null) {
            const numberOfTasks = document.querySelectorAll('.todo-element');
            localStorage.removeItem(e.target.closest('.todo-element').firstChild.innerText);
            e.target.closest('.todo-element').remove();        
        }
    });
  
    //search tasks
    const todoSearch= document.querySelector('input');
    todoSearch.addEventListener('input', function() {
    const val = this.value;
    const elems = todoList.querySelectorAll('.todo-element');

    [].forEach.call(elems, function(el) {
        const text = el.querySelector('.todo-element-text').innerText;

        if (text.indexOf(val) !== -1) {
            el.style.setProperty('display', '');
        } else {
            el.style.setProperty('display', 'none');
        }
    });
});

const clearButton=document.querySelector('#clear-button');
clearButton.addEventListener('click', function(e) { 
    e.preventDefault();
    if (confirm('Czy chcesz wyczyścić zapisane dane?')) {
        localStorage.clear();
        window.location.reload();
    }  
});

