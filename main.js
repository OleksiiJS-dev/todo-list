const todoList = document.querySelector('#todo-list')
const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')
//dobavlyaem listener dlya knopki button
todoForm.addEventListener('submit', formHandler)
//__________________________________________________
// function formHandler(event) { //script dlya dobavvlenyya tega li na stranicu 
//     event.preventDefault();
//     //poluchaem zanchenie iz formi vvoda, nazvanie novoi zadachi
//     const taskText = todoInput.value;
//     //sozdaem teg li, kotoriy budet dobavlen v razmetku kak nocaya zadacha
//     const li = `<li>${taskText}</li>`;
//     //dobavlenie tega li na stranicy html faila
//     todoList.insertAdjacentHTML('beforeend', li);
//     //ochischaem pole vvoda
//     todoInput.value = '';
//     //perenos focusa na pole vvoda
//     todoInput.focus();
// }
//__________________________________________________

function formHandler(event) { //better version dlya vzaimodeistviya s novimi spiskami, s pomoschyy sozdamiya elementa
    event.preventDefault(); //otkluchenie default povedeniya brauzera

    const taskText = todoInput.value; //znachenie novoi zadachi v peremenyy dlya poluchenia texta

    const newTask = document.createElement('li'); //sozdanie TEGA LI vmeste s taskText
    newTask.innerText = taskText;
    

    const deleteBtn = document.createElement('button'); //dobavlenie knopki udalit element spiska todo
    deleteBtn.setAttribute('role', 'button');
    deleteBtn.innerText = 'Удалить';
    deleteBtn.style['margin-left'] = '15px';
    newTask.append(deleteBtn);
    
    deleteBtn.addEventListener('click', function() {
        this.closest('li').remove();
    }); //funciya dlya udalenia dobavlennogo elementa knopki udalit
    // this obraschaetsa k roditelskomu blijaeshemu blocky, s pomoschyou closest
    
    
    
    
    //dobavlenie na stranicu
    todoList.append(newTask);

    todoInput.value = ''; //clear pole vvoda

    todoInput.focus(); //autofocus na pole vvoda
}
// function deleteTask() {
        
// }