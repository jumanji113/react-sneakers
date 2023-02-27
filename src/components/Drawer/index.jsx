import React from 'react'

const Drawer = ({items =[], onClose}) => {
  return (
    <div className="overlay">
        <div className="drawer">
            <h2 className="d-flex mb-30 justify-between">Корзина <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" /></h2>
            <div className="items">
                {items.map(obj => 
                <div className="cartItem d-flex align-center mb-20">
                    <img className="cartItemImg" src={obj.imageUrl} alt='imgCartItem' />
                    <div className="mr-20 d-flex flex-column">
                        <p className="mb-5">{obj.title}</p>
                        <b>{obj.price}</b>
                    </div>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                </div>)}
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