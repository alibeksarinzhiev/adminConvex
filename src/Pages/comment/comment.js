import React from 'react';
import './comment.css'
import img1 from './755743646058281-removebg-preview 1.png'
import star from './оценка-звез-ы-30705393-removebg-preview 2.png'
import img2 from './5b2b8f6255fd8.jpg 1.png'
import startwo from './оценка-звез-ы-30705393-removebg-preview 1.png'
import img3 from './0001161509_001_20200615093705853-removebg-preview 1.png'

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
              <div className="img__one">
              <img src={img1} alt=""/>
              </div>
              <div className="putin">
              <p>Яков Путин</p>
              </div>
              <div className="star__img">
              <img src={star} alt=""/>
              </div>
              <div className="text__one">
              <p>Помог ли вам отзыв </p>
              </div>
              <button>Да</button>
              <button>Нет</button>
          </div>

          <div className="user__two">
              <div className="img__two">
                  <img src={img2} alt=""/>
              </div>
              <div className="artem">
              <p>Артем Цой</p>
              </div>
              <div className="startwo__img">
                  <img src={startwo} alt=""/>
              </div>
              <div className="text__zero">
                  <p>Недавно я с группой покупал здесь инструменты, мне здесь безумно понравились барабаны.
                      Я не умею на них играть, но они мне понравились. Минус в том что здесь нет хорошой гитары
                      Инадзумы.</p>
              </div>
              <div className="text__two">
                  <p>Помог ли вам отзыв </p>
              </div>
              <button>Да</button>
              <button>Нет</button>
          </div>

          <div className="user__two">
              <div className="img__two">
                  <img src={img3} alt=""/>
              </div>
              <div className="artem">
                  <p>Ким Со Хон </p>
              </div>
              <div className="startwo__img">
                  <img src={star} alt=""/>
              </div>
              <div className="text__zero">
                  <p>Купил здесь кигуруми-Пикачу. Покупка сама хорошая, доставили в течении 2 недель, мотериалы
                      хорошие, мне понравилось его ушки</p>
              </div>
              <div className="text__two">
                  <p>Помог ли вам отзыв </p>
              </div>
              <button>Да</button>
              <button>Нет</button>
          </div>

      </section>
    );
};

export default Comment;