import { useState, useEffect } from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import AppContext from './context';

import Home from './pages/Home';
import Favorites from './pages/Favorites';



function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [cartOpened, setCartOpened] = useState();
    // const [isLoading, setIsLoading] = useState(true);
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
         axios
            .get(
                'https://6384c0c94ce192ac60624a72.mockapi.io/favorite',
            )
            .then((res) => {
                setFavorites(res.data);

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
        axios.post('https://6384c0c94ce192ac60624a72.mockapi.io/favorite/', obj);
        setFavorites(prev=>[...prev, obj]);
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <AppContext.Provider
            value={{
                items,
                cartItems,
                favorites,
                onAddToFavorite,
                onAddToCart,
                setCartOpened,
                setCartItems,
            }}>
            <div className="wrapper clear">
                {cartOpened && <Drawer items={cartItems} onClose ={() => setCartOpened(false)} onRemove={onRemoveCart}/>}
                <Header onClickCart={() => setCartOpened(true)}/>
                <Routes>
                    <Route path="/" element={<Home
                            items={items}
                            cartItems={cartItems}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            onChangeSearchInput={onChangeSearchInput}
                            onAddToFavorite={onAddToFavorite}
                            onAddToCart={onAddToCart}
                        />}
                    ></Route>
                    <Route path="favorites" element={<Favorites/>}></Route>
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
