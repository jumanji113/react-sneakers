import { useState, useEffect } from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import axios from 'axios';

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
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
        axios
            .get(
                'https://63fbb0896deb8bdb81497757.mockapi.io/Cart',
            )
            .then((res) => {
                setCartItems(res.data);

            });
    },[]);
    
    const onAddToCart = (obj) => {
        axios.post('https://63fbb0896deb8bdb81497757.mockapi.io/Cart', obj);
        setCartItems(prev=>[...prev, obj]);
    }

    const onRemoveCart = (id) => {
        axios.delete(`https://63fbb0896deb8bdb81497757.mockapi.io/Cart/${id}`);
        setCartItems(prev=>prev.filter(item => item.id !== id));
    }

    const onAddToFavorite = (obj) => {
        setFavorites(prev=>[...prev, obj]);
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer items={cartItems} onClose ={() => setCartOpened(false)} onRemove={onRemoveCart}/>}
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
                    onFavorite={(obj) => onAddToFavorite(obj)}
                    onPlus={(obj)=>onAddToCart(obj)}/>)}
                </div>
            </div>
        </div>
    );
}

export default App;
