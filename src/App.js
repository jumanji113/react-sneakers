

function App() {
  return (
    <div className="wrapper clear">
       <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img className="headerLogo" src="/img/logo.png" alt="logo"/>
                <div>
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex align-center">
                <li className="mr-30">
                    <img width={18} height={18} src='/img/Group.svg' alt='cart'/>
                    <span>1250руб</span>
                </li>
                <li>
                    <img width={18} height={18} src='/img/Union.svg' alt='user'/>
                </li>
            </ul>
        </header>
        <div className="content p-40">
            <h1 className="mb-40">Все кроссовки</h1>

            <div className="d-flex">
                <div className="card">
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

                <div className="card">
                    <img width={133} height={112}src="/img/2.jpg" alt="Sneakers" />
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

                <div className="card">
                    <img width={133} height={112}src="/img/3.jpg" alt="Sneakers" />
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

                <div className="card">
                    <img width={133} height={112}src="/img/4.jpg" alt="Sneakers" />
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
            </div>
        </div>
    </div>
  );
}

export default App;
