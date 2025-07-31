// ProductsPage.tsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './products.scss';

interface Product {
    id: number;
    name: string;
    subtitle: string;
    price: string;
    productUrl: string;
}

const ProductsPage: React.FC = () => {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const category = params.get('category') || 'todos';
    const navigate = useNavigate();


    const products: Product[] = [
        { id: 1, name: 'Cool Mint 50ml', subtitle: 'Mentol intenso', price: '14,99 €', productUrl: 'https://x-bar.co/wp-content/uploads/2023/11/xbar-eliquids-50ml-coolmint1.png' },
        { id: 2, name: 'Strawberry Blast 50ml', subtitle: 'Fresa jugosa', price: '14,99 €', productUrl: 'https://www.bazardelvapeo.com/wp-content/uploads/2023/06/ske-crystal-strawberry-blast.jpg' },
        { id: 3, name: 'Vainilla Clásica 50ml', subtitle: 'Dulzura suave', price: '14,99 €', productUrl: 'https://upload.vapeo24.com/producto/md/vanilla-biscuit-50ml-ivg-desert.webp' },
        { id: 4, name: 'Tabaco Vintage 50ml', subtitle: 'Sabor auténtico', price: '14,99 €', productUrl: 'https://siemprevapor.com/7513-large_default/vintage-juliet-100ml-blackout.jpg' },
        { id: 5, name: 'Kit Inicio Aqivap', subtitle: 'Dispositivo + líquido 10ml', price: '29,99 €', productUrl: 'kitinicio.jpg' },
        { id: 6, name: 'Pack 3x50ml Sabores', subtitle: 'Frutas Mix, Menta y Vainilla', price: '19,99 €', productUrl: 'sabores.jpg' },
        { id: 7, name: 'Mod Tank 80W', subtitle: 'Potencia ajustable y pantalla OLED', price: '39,99 €', productUrl: 'modtank.jpg' },
        { id: 8, name: 'Vape Pen Desechable', subtitle: 'Sabor a Mango Helado', price: '9,99 €', productUrl: 'https://kannastar.com/wp-content/uploads/2023/01/H2GO-Disposable-Vape-Pen-768x768.png' },
        { id: 9, name: 'Batería Externa 18650', subtitle: 'Alta capacidad', price: '12,50 €', productUrl: 'https://sapporet.es/15631-thickbox_default/bateria-p26s-18650-2600mah-35a-molicel.jpg' },
        { id: 10, name: 'Cargador USB Doble', subtitle: 'Carga rápida', price: '15,00 €', productUrl: 'https://m.media-amazon.com/images/I/710eN1trOgL.jpg' },
        { id: 11, name: 'Resistencias de Repuesto', subtitle: 'Pack de 5 unidades', price: '8,99 €', productUrl: 'https://www.vaposeleccion.com/3932-large_default/resistencia-gtx-02ohm-mesh-vaporesso.jpg' },
        { id: 12, name: 'Pod System Compacto', subtitle: 'Ideal para sales de nicotina', price: '24,99 €', productUrl: 'https://www.vapeonuranddena.com/2656-large_default/xros-4-mini-1000mah-vaporesso.jpg' },
        { id: 13, name: 'Líquido Sales de Nicotina', subtitle: 'Sabor a Tabaco Suave', price: '9,99 €', productUrl: 'https://www.vapeototal.net/blog/wp-content/uploads/2022/03/halo-tribeca-salt.jpg' },
        { id: 14, name: 'Kit Avanzado Sub-Ohm', subtitle: 'Gran producción de vapor', price: '59,99 €', productUrl: 'https://admin.elementvape.com/media/catalog/product/p/i/pioneer4you_ipv_v-it_sub-ohm_mesh_tank_front.jpg' },
        { id: 15, name: 'Algodón Orgánico para RBA', subtitle: 'Máxima absorción', price: '4,50 €', productUrl: 'https://www.vaposeleccion.com/4096-large_default/algodon-cotton-bacon-prime-wick-n-vape.jpg' },
        { id: 16, name: 'Drip Tip Personalizado', subtitle: 'Resina epoxi de colores', price: '7,99 €', productUrl: 'https://yovapeo.es/10607-large_default/drip-tip-810-boquilla-plana-as281.jpg' },
        { id: 17, name: 'Base de Glicerina Vegetal (VG)', subtitle: '1 Litro, USP Grado', price: '18,00 €', productUrl: 'https://vaposeleccion.com/4096-large_default/algodon-cotton-bacon-prime-wick-n-vape.jpg' },
        { id: 18, name: 'Base de Propilenglicol (PG)', subtitle: '1 Litro, USP Grado', price: '16,00 €', productUrl: 'https://vaposeleccion.com/4096-large_default/algodon-cotton-bacon-prime-wick-n-vape.jpg' },
        { id: 19, name: 'Aroma Concentrado Fresa', subtitle: '10ml, para e-líquidos DIY', price: '5,99 €', productUrl: 'https://www.urba-vap.com/6533-big_default_2x/fresa-dekang-aroma-concentrado-40ml.jpg' },
    ];

    return (
        <div className="productsPage"> <section className="productsPage__hero"> <div className="container"> <h1 className="productsPage__title">Productos {category !== 'todos' ? `- ${category}` : ''}</h1> <p className="productsPage__subtitle">Explora nuestra selección de {category === 'todos' ? 'productos' : category}</p> </div> </section>

            <section className="productsPage__filters">
                <div className="container">
                    <label htmlFor="sort" className="productsPage__label">Ordenar por:</label>
                    <select id="sort" className="productsPage__select">
                        <option value="relevancia">Relevancia</option>
                        <option value="precio-asc">Precio: menor a mayor</option>
                        <option value="precio-desc">Precio: mayor a menor</option>
                    </select>
                </div>
            </section>

            <section className="productsPage__grid">
                {products.map(prod => (
                    <div key={prod.id} className="card card--grid productsPage__card" onClick={() => navigate("/product/1")}>
                        <div className="card__media">
                            <div className="productsPage__image">
                                <img src={prod.productUrl} alt={prod.name} className="productsPage__image" />
                            </div>
                        </div>
                        <div className="card__content">
                            <h3 className="card__title"><Link to={prod.productUrl}>{prod.name}</Link></h3>
                            <p className="card__subtitle">{prod.subtitle}</p>
                            <div className="card__footer">
                                <span className="productsPage__price">{prod.price}</span>
                                <Link to={prod.productUrl} className="button button--primary button--small">Ver producto</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>


    );
};

export default ProductsPage;
