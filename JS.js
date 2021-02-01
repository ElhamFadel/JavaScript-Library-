const Library = [
    {
        title: "A Game Of Thrones",
        author: "George R. R. Martin",
        numberOfPages:694,
        Language:"English",
        image: "https://img.com/bookimg.jpeg"
     },
     {
        title: "A Game Of Thrones",
        author: "George R. R. Martin",
        numberOfPages:694,
        Language:"English",
        image: "https://img.com/bookimg.jpeg"
     },
     {
        title: "A Game Of Thrones",
        author: "George R. R. Martin",
        numberOfPages:694,
        Language:"English",
        image: "https://img.com/bookimg.jpeg"
     },
];
// =================== DOM ===================== //
//group__books__row 
const container__book = document.querySelector(".group__books__row");
{/* <div class="book read">
                
                <h2 class="title">A Game Of Thrones</h2>
                <p>By:&nbsp;George R. R. Martin </p>
               <p> Number of pages:&nbsp; 694</p>
               <p> Language:&nbsp; English</p>
               <p class="container_toggle_btn">
                   <span class="read_toggle_label">Mark as read:</span>
                   <span class="wrapper__toggle"><span class="btn__toggle"></span></span>
               </p>
            </div> */}
const book = document.createElement("div");
//add Class
book.classList.add("book");
book.classList.add("read");
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
title.textContent="A Game Of Thrones";//change it
//append child
book.appendChild(title);
{/* <h2 class="title">A Game Of Thrones</h2> */}
//
const auther = document.createElement("p");
//add class 
auther.classList.add("auther");
//add text 
auther.innerHTML="By:&nbsp;George R. R. Martin";//change it
//append child
book.appendChild(auther);
{/* <p>By:&nbsp;George R. R. Martin </p> */}
//
const numPage = document.createElement("p");
//add class 
numPage.classList.add("number__page");
//add text 
numPage.innerHTML="Number of pages:&nbsp; 694";//change it
//append child
book.appendChild(numPage);
{/* <p> Number of pages:&nbsp; 694</p> */}
//
const language = document.createElement("p");
//add class 
language.classList.add("number__page");
//add text 
language.innerHTML="Language:&nbsp; English";//change it
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
btnToggle.classList.add("btn__toggle");
//add text 
label.innerHTML="Mark as read:";//change it
//append child

book.appendChild(toggle);
toggle.appendChild(label);
containerToggle.appendChild(btnToggle);
toggle.appendChild(containerToggle);

{/* <p class="container_toggle_btn">
    <span class="read_toggle_label">Mark as read:</span>
    <span class="wrapper__toggle"><span class="btn__toggle"></span></span>
</p> */}
//toggel read not read 
function toggleReadNot(e){
    const book = document.querySelector(".book");
    const bool = book.classList.contains("read");
    if(bool){
     book.classList.add("not_read");
     book.classList.remove("read");
     e.target.style.transform = "translateX(16px)";
    }else{
        book.classList.remove("not_read");
        book.classList.add("read");
        e.target.style.transform = "translateX(0px)";
    }

}
document.querySelector(".btn__toggle").addEventListener("click",toggleReadNot);
//clear book 
function deleteBook(){
    if (window.confirm("You are about to delete a book from your library?")) {
       console.log("Hello World");
      }
}
document.querySelector(".btn__close").addEventListener("click",deleteBook);






