function addHtmlElement (index){
    //group__books__row 
    const container__book = document.querySelector(".group__books__row");
    const book = document.createElement("div");
    //add Class
    book.classList.add("book");
    book.classList.add("not_read");
    book.classList.add(index);
    //increase number not read
    numNotRead.textContent=Number(numNotRead.textContent)+1;
    //append child
    container__book.appendChild(book);
    {/* <div class="book read"></div> */}
    
    const button = document.createElement("button");
    //add class 
    button.classList.add("btn__close");
    //add text 
    button.textContent="x";
    //append child
    book.appendChild(button);
    {/* <button class="btn__close">x</button> */}
    const title = document.createElement("h2");
    //add class 
    title.classList.add("title");
    //add text 
    
    title.textContent=Library[index].title;//change it
    //append child
    book.appendChild(title);
    {/* <h2 class="title">A Game Of Thrones</h2> */}
    //
    const auther = document.createElement("p");
    //add class 
    auther.classList.add("auther");
    //add text 
    auther.innerHTML="By:&nbsp;"+Library[index].author;//change it
    //append child
    book.appendChild(auther);
    {/* <p>By:&nbsp;George R. R. Martin </p> */}
    //
    const numPage = document.createElement("p");
    //add class 
    numPage.classList.add("number__page");
    //add text 
    numPage.innerHTML="Number of pages:&nbsp; "+Library[index].numberOfPages;//change it
    //append child
    book.appendChild(numPage);
    {/* <p> Number of pages:&nbsp; 694</p> */}
    //
    const language = document.createElement("p");
    //add class 
    language.classList.add("number__page");
    //add text 
    language.innerHTML="Language:&nbsp;"+Library[index].Language;//change it
    //append child
    book.appendChild(language);
    {/* <p> Language:&nbsp; English</p> */}
    //
    const toggle = document.createElement("p");
    const label = document.createElement("span");
    const containerToggle = document.createElement("span");
    const btnToggle = document.createElement("span");
    //add Class
    toggle.classList.add("container_toggle_btn");
    label.classList.add("read_toggle_label");
    containerToggle.classList.add("wrapper__toggle");
    containerToggle.classList.add(index);
    btnToggle.classList.add("btn__toggle");
    //add text 
    label.innerHTML="Mark as read:";//change it
    //append child
    
    book.appendChild(toggle);
    toggle.appendChild(label);
    containerToggle.appendChild(btnToggle);
    toggle.appendChild(containerToggle);
    document.querySelectorAll(".btn__toggle")[index].addEventListener("click",toggleReadNot);
    document.querySelectorAll(".btn__close")[index].addEventListener("click",deleteBook);
    }
  
        function toggleReadNot(e){
            // const book = document.querySelectorAll(".book")[index].parentElement.parentElement;
            const book = e.target.parentElement.parentElement.parentElement;
            const bool = book.classList.contains("read");
            if(bool){
             book.classList.add("not_read");
             book.classList.remove("read");
             e.target.style.transform = "translateX(16px)";
             numNotRead.textContent =Number(numNotRead.textContent)+1;
             numReadBook.textContent = Number(numReadBook.textContent)-1;
            }else{
                book.classList.remove("not_read");
                book.classList.add("read");
                e.target.style.transform = "translateX(0px)";
                numNotRead.textContent =Number(numNotRead.textContent)-1;
             numReadBook.textContent =Number(numReadBook.textContent)+1;
            }
        
        }
        
        //clear book 
        function deleteBook(e){
            if (window.confirm("You are about to delete a book from your library?")) {
             e.target.parentElement.style.display="none";
             const index = e.target.parentElement.classList[2];
             console.log(e.target.parentElement.classList[2])//to get index 
             if(e.target.parentElement.classList[1]==="not_read"){
                numNotRead.textContent =Number(numNotRead.textContent)-1;
             }else{
                numReadBook.textContent = Number(numReadBook.textContent)-1;
             }
             //then remove it from array
             Library.shift(index);
             totalBook.textContent = Number(totalBook.textContent)-1;
              }
        }
//Edite total Book number 

