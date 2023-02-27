import { useState, useEffect } from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import axios from 'axios';

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [cartOpened, setCartOpened] = useState();
    useEffect(() => {
        axios
            .get(
                'https://63fbb0896deb8bdb81497757.mockapi.io/items',
            )
            .then((res) => {
                setItems(res.data);

            });
    },[]);
    
    const onAddToCart = (obj) => {
        setCartItems(prev=>[...prev, obj]);
    }

    const onChangeSearchInput = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value);
    }

    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer items={cartItems} onClose ={() => setCartOpened(false)}/>}
            <Header onClickCart={() => setCartOpened(true)}/>
            <div className="content p-40">
                <div className="d-flex align-center mb-40 justify-between">
                    <h1>{searchValue? `Поиск по запросу "${searchValue}"` : 'Все кроссовки'}</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search" />
                        {searchValue && <img onClick ={() => setSearchValue('')} className="clear cu-p" src="/img/btn-remove.svg" alt="Remove" />}
                        <input onChange={onChangeSearchInput} value ={searchValue} placeholder="Поиск...." />
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    {items.filter(item=>item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index)=><Card 
                    key={index}
                    title={item.title}
                    price={item.price}
                    imageUrl={item.imageUrl} 
                    onFavorite={() => console.log('ADDING FAVORITE')}
                    onPlus={(obj)=>onAddToCart(obj)}/>)}
                </div>
            </div>
        </div>
    );
}

export default App;
