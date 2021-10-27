/*
1. DOM Selection
2. Event Listener
3. Basic Validation
4. Creating Elements
5. Append
*/

/*============================================
               DOM Selection
=============================================*/
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const message = document.querySelector('#message');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

/*============================================
               Event Listener
=============================================*/
btn.addEventListener('click', (e) =>{
  
  e.preventDefault();

  if(title.value == '' && author.value == '' && year.value == '' && message.value){
    alert('Bhai sobgulu fillap kora');
  }else{
    const newRow = document.createElement('tr');
    newRow.style.textTransform = 'capitalize';
    
    // Creating new title
    const newTitle = document.createElement('th');
    newTitle.innerHTML = title.value; // newTitle ar vettor value past korlam
    newRow.appendChild(newTitle); // bap chenailan: (bap: newRow, pola: newTitle)
    
    const newAuthor = document.createElement('th');
    newAuthor.innerHTML = author.value;
    newAuthor.style.color = 'red';
    newRow.appendChild(newAuthor);

    const newYear = document.createElement('th');
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);

    const newMessage = document.createElement('th');
    newMessage.innerHTML = message.value;
    newMessage.style.color= 'red';
    newRow.appendChild(newMessage);


    //  bap ra tar bap mana polar dadara chenailam

    bookList.appendChild(newRow);  //bookList = dada, newRow = bap, and newtitle,newAuthor, newYear = pola

    // Empty befor submit
    title.value ='';
    author.value ='';
    year.value ='';
    message.value ='';

  }
})

