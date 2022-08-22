import React from 'react'
import S from './cardProduto.module.css'

const CardProduto = ({img, name, description, listPrice, salePrice, installment, value}) => {
    return (
        <div className={$.containerCard}>
            <div className={$.containerImg}>
                <img src={img} alt="" />
            </div>
            <h4>{name}</h4>
            <p>{description}</p>
            <p>De: R${listPrice}</p>
            <p>Por: R${salePrice}</p>
            <p>ou {installment} x de R$ {value}</p>
            <button type='button'>Comprar</button>
        </div>
    )
}

export default CardProduto