import React from 'react'
import { useState } from 'react';
import styles from './Card.module.scss';
const Card = (props) => {
    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded)
    }
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/heart-unlike.svg" alt="heart-unlike" />
            </div>
            <img width={133} height={112}src={props.imageUrl} alt="Sneakers" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                    <span>
                        Price:
                    </span>
                    <b>{props.price}</b>
                </div>
                <img onClick = {onClickPlus} className={styles.plus} width={15} heigth={15}src={isAdded ? '/img/checked.svg': '/img/Plus.svg'} alt="plus" />
            </div>
        </div>
    )
}

export default Card;

