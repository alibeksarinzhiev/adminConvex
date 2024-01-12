import React from 'react';
import './comment.css'
import img1 from './755743646058281-removebg-preview 1.png'
import star from './оценка-звез-ы-30705393-removebg-preview 2.png'

const Comment = () => {
    return (
      <section className ='comment'>
       <div className = "comment__users">
        <p>Средний балл : </p>
           <h3>4,6</h3>
       </div>
          <div className="comment__text">
              <p>Отзывы :</p>
          </div>
          <div className="user__one">
              <img src={img1} alt=""/>
              <p>Яков Путин</p>
              <img src={star} alt=""/>
              <p className="slova">Помог ли вам отзыв </p>
              <button>Да</button>
              <button>Нет</button>
          </div>
      </section>
);
};

export default Comment;