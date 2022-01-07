import React from "react";
import './App.css';
import books from "./booklist";
function App() {
  return (
   <section className="booklist">
   {books.map((book)=>{
    //const{img,title,author}=book;
    return(
      <Book key={book.id} book={book}/>
    );
   }
   
   )}
   </section>
  );
}

const Book=(props)=>{
const {img,title,author}=props.book;

const clickhandler=()=>{
  alert("hello world");
}

  return(
  <article className="book" onMouseOver={()=>{console.log(title)}}>
  <img src={img} alt={title}/>
  <h1 onClick={clickhandler}>{title}</h1>
  <h4>{author}</h4> 
  <button type="button" onClick={clickhandler}>alert</button> 
  </article>
  )
}

/*
... is spread operator that shows all properties in object

function App() {
  return (
   <section className="booklist">
   {books.map((book)=>{
    return(
      <Book key={book.id} {...book}/>
    );
   }
   
   )}
   </section>
  );
}
*/


/*
this was also possible

const Book=({{img,title,author}})=>{

  return(
  <article className="book">
  <img src={img} alt={title}/>
  <h1>{title}</h1>
  <h4>{author}</h4>  
  </article>
  )
}
*/


export default App;
