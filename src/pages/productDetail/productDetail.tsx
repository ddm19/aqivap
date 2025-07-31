import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './productDetail.scss';

interface Product {
    id: number;
    name: string;
    subtitle: string;
    price: string;
    imageUrl: string;
    description: string;
}

const PRODUCTS: Product[] = [
    {
        id: 1,
        name: 'Cool Mint 50ml',
        subtitle: 'Mentol intenso',
        price: '14,99 €',
        imageUrl: 'https://x-bar.co/wp-content/uploads/2023/11/xbar-eliquids-50ml-coolmint1.png',
        description: 'Un e-líquido refrescante con un mentol puro que despierta los sentidos y aporta una gran sensación de frescor en cada inhalación.'
    },
];

const ProductDetailPage: React.FC = () => {
    const { id = '1' } = useParams<{ id: string }>();
    const product = PRODUCTS.find(p => p.id === Number(id)) || PRODUCTS[0];

    return (
        <div className="productPage">
            <div className="productPage__container container">
                <div className="productPage__media">
                    <img src={product.imageUrl} alt={product.name} className="productPage__image" />
                </div>
                <div className="productPage__details">
                    <h1 className="productPage__title">{product.name}</h1>
                    <p className="productPage__subtitle">{product.subtitle}</p>
                    <span className="productPage__price">{product.price}</span>
                    <p className="productPage__description">{product.description}</p>
                    <button className="button button--primary productPage__button">Añadir al carrito</button>
                    <Link to="/products" className="button button--outline productPage__back">← Volver</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;