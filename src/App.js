import { useState } from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import axios from 'axios';

// const arr = [
//     {     "title": "Мужские Кроссовки Nike Blazer Mid Suede", 
//            "price": 12999, 
//            "imageUrl": "/img/1.jpg"
//        },
//        {
//            "title": "Мужские Кроссовки Nike Air Max 270", 
//            "price": 12999, 
//            "imageUrl": "/img/2.jpg"
//        },
//        {
//            "title": "Мужские Кроссовки Nike Blazer Mid Suede", 
//            "price": 8499, 
//            "imageUrl": "/img/3.jpg"
//        },
//        {
//            "title": "Кроссовки Puma X Aka Boku Future Rider", 
//            "price": 8999, 
//            "imageUrl": "/img/4.jpg"
//        },
//        {
//            "title": "Мужские Кроссовки Curry 8", 
//            "price": 15199, 
//            "imageUrl": "/img/5.jpg"
//        },
//        {
//            "title": "Мужские Кроссовки Nike Kyrie 7", 
//            "price": 11299, 
//            "imageUrl": "/img/6.jpg"
//        },
//        {
//            "title": "Мужские Кроссовки Jordan Air Jordan 11", 
//            "price": 10799, 
//            "imageUrl": "/img/7.jpg"
//        },
//        {
//            "title": "Мужские Кроссовки Nike LeBron XVIII", 
//            "price": 16499, 
//            "imageUrl": "/img/8.jpg"
//        },
//        {
//            "title": "Мужские Кроссовки Nike XVIII Low", 
//            "price": 13999, 
//            "imageUrl": "/img/9.jpg"
//        },
//        {
//            "title": "Мужские Кроссовки Nike XVIII Low", 
//            "price": 13999, 
//            "imageUrl": "/img/9.jpg"
//        },
//        {
//            "title": "Мужские Кроссовки Nike XVIII Low", 
//            "price": 13999, 
//            "imageUrl": "/img/9.jpg"
//        },
   
//    ]


function App() {
    const [items, setItems] =useState([]);
    const [cartOpened, setCartOpened] = useState();
    axios
            .get(
                'https://63fbb0896deb8bdb81497757.mockapi.io/items',
            )
            .then((res) => {
                setItems(res.data);

            });

    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer onClose ={() => setCartOpened(false)}/>}
            <Header onClickCart={() => setCartOpened(true)}/>
            <div className="content p-40">
                <div className="d-flex align-center mb-40 justify-between">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search" />
                        <input placeholder="Поиск...." />
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    {items.map((obj)=><Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />)}
                </div>
            </div>
        </div>
    );
}

export default App;
