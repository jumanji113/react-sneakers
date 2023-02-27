import React from 'react'

const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img className="headerLogo" src="/img/logo.png" alt="logo"/>
                <div>
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex align-center">
                <li onClick={props.onClickCart}className="mr-30 cu-p">
                    <img width={18} height={18} src='/img/Group.svg' alt='cart'/>
                    <span>1250руб</span>
                </li>
                <li>
                    <img width={18} height={18} src='/img/Union.svg' alt='user'/>
                </li>
            </ul>
     </header>
  )
}

export default Header