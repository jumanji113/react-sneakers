import React from 'react'

const Drawer = ({items =[], onClose, onRemove}) => {
  return (
    <div className="overlay">
        <div className="drawer">
            <h2 className="d-flex mb-30 justify-between">Корзина <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" /></h2>
            
            {
            items.length > 0 ? 
            <>
                    <div className="items">
                {items.map(obj => 
                <div className="cartItem d-flex align-center mb-20">
                    <img className="cartItemImg" src={obj.imageUrl} alt='imgCartItem' />
                    <div className="mr-20 d-flex flex-column">
                        <p className="mb-5">{obj.title}</p>
                        <b>{obj.price}</b>
                    </div>
                    <img onClick ={()=>onRemove(obj.id)} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" />
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
            </>
        
            : <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
                <img className='mb-20 ' src="/img/cartEmpty.png" alt="cartEmpty" />
                <h2>Корзина пустая</h2>
                <p>Добавьте хотя бы 1 пару кросовок, чтобы сделать заказ</p>
                <button  onClick ={onClose}className="greenButton">Вернутся назад <img src="/img/arrow.png" alt="Arrow" />
                </button>
            </div>
            }

            
        </div>
    </div>

  )
}

export default Drawer