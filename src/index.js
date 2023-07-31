import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


const Author = 'Abid Ali';
const title = "Intresting Facts for Curious minds";
const img ='./images/img.jpeg';
function BookList(){
  return <div className='booklist'>
            <Book jobs="developer" /> 
            <Book jobs="developer"  />  
        </div>
}
const Book = (props) =>{ 
  console.log(props);
  return <article className="book">
          <img src={img} alt="Intresting Facts for Curious minds"/>
          <h2>{title}</h2>
          <h4>{Author.toUpperCase()}</h4>
           {console.log(props)}
        </article>
}   


const Message = () => {
  return <p>This is the Message!</p>;
}


ReactDOM.render(
  <BookList/>,
  document.getElementById('root')
);