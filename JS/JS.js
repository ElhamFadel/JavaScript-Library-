const Library = [
    
];
// =================== DOM ===================== //

const numReadBook = document.querySelector(".read__book > .number");
const numNotRead = document.querySelector(".notRead__book > .number");
//add book
document.querySelector(".addBook").addEventListener("click",function(){
    document.querySelector(".modale").style.display = "flex";
});
// close Modal


    document.querySelector(".close").addEventListener("click",function(){
        document.querySelector(".modale").style.display = "none";
      });


//button add in modal
document.querySelector(".add").addEventListener("click",handleSave);
function handleSave(){
    document.querySelector(".modale").style.display = "none";
    const titleValue = document.querySelector("#title").value;
    document.querySelector("#title").value="";
    const autherValue = document.querySelector("#auther").value;
    document.querySelector("#auther").value="";
    const numberPage = document.querySelector("#numberPage").value;
    document.querySelector("#numberPage").value="";
    const languageValue = document.querySelector("#language").value;
    document.querySelector("#language").value="";
    const newObject = 
        {
            title:titleValue ,
            author: autherValue,
            numberOfPages:numberPage,
            Language:languageValue,
            image: "https://img.com/bookimg.jpeg"
         }
         Library.push(newObject);
         //edite totalBook

        //  console.log(Library.length-1)
          addHtmlElement(Library.length-1);
    
}





