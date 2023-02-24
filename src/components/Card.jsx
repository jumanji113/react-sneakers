import React from 'react'

const Card = () => {
  return (
    <div className="card">
    <div className="favorite">
        <img src="/img/heart-unlike.svg" alt="heart-unlike" />
    </div>
    <img width={133} height={112}src="/img/1.jpg" alt="Sneakers" />
    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
    <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
            <span>
                Price:
            </span>
            <b>12 999 руб.</b>
        </div>
        <button className="button">
            <img width={11} heigth={11}src="/img/plus.svg" alt="" />
        </button>
    </div>
 </div>
  )
}

export default Card;

