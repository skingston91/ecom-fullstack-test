import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import './styles.scss';

import defaultImage from '../../images/product.jpg';

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
    console.log(image.path);
    // // const loadedImages = require.context('../../images', true, /.jpg$/);
    // // console.log(loadedImages);
    // const imagePath = require('../../' + image.path);
    // console.log(imagePath);
    return (
        <div className="ProductCard">
            {image && image.path && (
                <div className="ProductCard__image_wrapper">
                    <img
                        className="ProductCard__image"
                        // src={image.path || defaultImage}
                        src={defaultImage}
                        alt={image.alt}
                    />
                </div>
            )}
            <div className="ProductCard__label_wrapper">
                {productLabel && (
                    <div className="ProductCard__label">{productLabel}</div>
                )}
            </div>
            <div className="ProductCard__content">
                {title && <h2 className="ProductCard__title">{title}</h2>}
                {description && (
                    <p className="ProductCard__description">{description}</p>
                )}
                <div>
                    {priceLabel && currency && price && (
                        <div className="ProductCard__price">
                            <p className="ProductCard__price_label">
                                {priceLabel}
                            </p>
                            <p className="ProductCard__price_value">{`${currency}${price}`}</p>
                        </div>
                    )}
                    {cta && ctaLink && (
                        <Link className="ProductCard__cta" to={ctaLink}>
                            {cta}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    cta: PropTypes.string,
    ctaLink: PropTypes.string,
    currency: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.shape({
        path: PropTypes.string.isRequired,
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
