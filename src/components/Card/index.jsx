import React from 'react'
import { useState } from 'react';
import styles from './Card.module.scss';
import AppContext from '../../context';

const Card = ({title, imageUrl, price, onPlus, onFavorite, favorited=false}) => {
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(favorited);

    const onClickPlus = () => {
        onPlus({title, imageUrl, price});
        setIsAdded(!isAdded)
    }
    const onClickFavorite = () => {
        onFavorite({title,imageUrl, price});
        setIsFavorite(!isFavorite)
    }

    return (
        <div className={styles.card}>
            <div onClick={onClickFavorite} className={styles.favorite}>
                <img src={isFavorite ? "/img/heart-like.svg":"/img/heart-unlike.svg"} alt="heart-unlike" />
            </div>
            <img width={133} height={112}src={imageUrl} alt="Sneakers" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>
                        Price:
                    </span>
                    <b>{price}</b>
                </div>
                <img onClick = {onClickPlus} className={styles.plus} width={15} heigth={15}src={isAdded ? '/img/checked.svg': '/img/Plus.svg'} alt="plus" />
            </div>
        </div>
    )
}

export default Card;

