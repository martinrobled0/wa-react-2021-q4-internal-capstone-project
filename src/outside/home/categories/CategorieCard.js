import React from 'react';
import { CardWrapper } from './CategorieCard.styled';

export const CategorieCard = (
    {name, main_image}
) => {
    const {url, alt} = main_image;
    return (
        <CardWrapper>
            <div className="CardWrapper-title">{name}</div>
            <img src={url} alt={alt}/>
        </CardWrapper>
    )
}