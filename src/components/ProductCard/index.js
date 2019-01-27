import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

// import './styles.scss';

const ProductCard = ({
    cta,
    ctaLink,
    currency,
    description,
    image,
    price,
    priceLabel,
    productLabel,
    title
}) => {
    return (
        <div className="ProductCard">
            {image && image.image && (
                <div className="ProductCard__image_wrapper">
                    <img
                        className="ProductCard__image"
                        src={image.image}
                        alt={image.alt}
                    />
                </div>
            )}
            {productLabel && (
                <div className="ProductCard__label">{productLabel}</div>
            )}
            {title && <h2 className="ProductCard__title">{title}</h2>}
            {description && (
                <p className="ProductCard__description">{description}</p>
            )}
            {priceLabel && currency && price && (
                <div className="ProductCard__price">
                    <p className="ProductCard__price_label">{priceLabel}</p>
                    <p className="ProductCard__price_value">{`${currency}${price}`}</p>
                </div>
            )}
            {cta && ctaLink && <Link to={ctaLink}>{cta}</Link>}
        </div>
    );
};

ProductCard.propTypes = {
    cta: PropTypes.string,
    ctaLink: PropTypes.string,
    currency: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.shape({
        image: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    }),
    price: PropTypes.number,
    priceLabel: PropTypes.string,
    title: PropTypes.string.isRequired
};

ProductCard.defaultProps = {
    cta: 'Shop Now',
    currency: '£'
};

export default ProductCard;

/*
cta: "Shop Now"
ctaLink: "/random/link/to/no/where"
currency: "£"
description: "Lets your pictures speak for themselves."
image: {path: "/images/product.jpg", alt: "Simple Canvas"}
price: 1500
priceLabel: "From"
productLabel: "bestseller"
title: "Simple Canvas"
*/
