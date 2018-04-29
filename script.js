//let todoList =null;
let todoForm = null;
//let todoSearch = null;
const todoList = document.querySelector('#todoList');

document.addEventListener('DOMContentLoaded', function() {
   for (var klucz in localStorage) {
       if (localStorage.getItem(klucz)!= null) {
       addTask(JSON.parse(localStorage.getItem( klucz )));
       }
   }

   
});



function savetoStorage(task) {
   
const ilosczadan = document.querySelectorAll('.todo-element');
         console.log('Liczba zadań: ' + ilosczadan.length);
        /*
         const zadanie ={
            'id': ilosczadan.length,
               'tresc': task
        };
      
      */
      
       localStorage.setItem(task, JSON.stringify(task));
      
     const retrievedObject = localStorage.getItem(task);
     
    console.log(JSON.parse(retrievedObject));
   
     console.log(localStorage.key(0));
    console.log(localStorage.key(1));
      console.log(localStorage.key(2))
}

function addTask(text) {
    const todoList = document.querySelector('#todoList');
   
   
        //dodanie div z nowym zadaniem
     const todo = document.createElement('DIV');
       todo.classList.add('todo-element');
      // todo.innerText= text;
       todoList.appendChild(todo);
     
       
       
      
       //dodanie tekstu do zadania
       const todoText = document.createElement('DIV');
       todoText.classList.add('todo-element-text');
        todoText.innerText=text;
       todo.appendChild(todoText);
      
      
      
       //dodanie daty
       const dateElement = document.createElement('DIV');
       dateElement.classList.add('todo-element-bar');
       const date = new Date();
       const dateText = 'Dodano: ' + date.getDate() + '-' + (date.getMonth()+1) + '-' + date.getFullYear() + ' godz.: ' + date.getHours() + ':' + date.getMinutes();
       dateElement.innerText= dateText;
       todo.appendChild(dateElement);
      
     
     
      
       //dodanie przycisku usuń
       const deleteButton = document.createElement('button');
       deleteButton.classList.add('todo-form-button');
       deleteButton.innerText='Usuń';
       todo.appendChild(deleteButton);
      
   
   
}

/*
document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.querySelector('#todoList');
    const todoForm = document.querySelector('#todoForm');
    const todoSearch = document.querySelector('#todoSearch');
   

   
});*/
// dodawanie zadania
const todoButton = document.querySelector ('#todo-button');
    todoButton.addEventListener('click', function(e) {
       
     e.preventDefault();
       const textarea = document.querySelector ('textarea');
      // for(var klucz in localStorage){
          savetoStorage(textarea.value);
         addTask(textarea.value);
         
      // }
});

// usuwanie zadania
todoList.addEventListener('click', function(e) {
        if (e.target.closest('.todo-form-button') !== null) {
            const ilosczadan = document.querySelectorAll('.todo-element');
            console.log(ilosczadan);
            localStorage.removeItem(e.target.closest('.todo-element').firstChild.innerText);
            e.target.closest('.todo-element').remove();
           
            console.log(e.target.closest('.todo-element').firstChild.innerText);
           
        }
    });

   
    //wyszukiwanie dodanych zadań
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

//addTask('test');