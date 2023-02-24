import React from 'react'

const Drawer = () => {
  return (
    <div style={{display:'none'}}className="overlay">
        <div className="drawer">
            <h2 className="d-flex mb-30 justify-between">Корзина <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" /></h2>
            <div className="items">
                <div className="cartItem d-flex align-center mb-20">
                    <div className="cartItemImg" style={{backgroundImage: 'url(/img/2.jpg)'}} />
                    <div className="mr-20 d-flex">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                </div>
            </div>
            <div className="cartTotalBlock">
                <ul>
                    <li >
                        <span>Итого:</span>
                        <div></div>
                        <b>21 498 руб. </b>
                    </li>
                    <li >
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>1074 руб. </b>
                    </li>
                </ul>
                <button className="greenButton">Сделать заказ <img src="/img/arrow.png" alt="Arrow" />
                </button>
            </div>
        </div>
    </div>

  )
}

export default Drawer