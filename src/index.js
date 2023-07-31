import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function BookList(){
  return <div className='booklist'>
            <Book/> 
            <Book/> 
            <Book/> 
            <Book/> 
        </div>
}
const Author = 'Abid Ali';
const Book = () =>{
  let title = "Intresting Facts for Curious minds"
  return <article className="book">
          <img src="./images/img.jpeg" alt="Intresting Facts for Curious minds"/>
          <h2>{title}</h2>
          <h4>{Author.toUpperCase()}</h4>
          {/* <p>{let x=6;}</p> */}
          <p>{6+6}</p>
        </article>
}   


const Message = () => {
  return <p>This is the Message!</p>;
}


ReactDOM.render(
  <BookList/>,
  document.getElementById('root')
);