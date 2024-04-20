import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Reemplaza con la URL de tu API real
        axios.get('/api/products')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error("Hubo un error al obtener los productos", error);
            });
    }, []);

    return (
        <div>
            <h2>Lista de Productos</h2>
            <div>
                {products.map(product => (
                    <div key={product.id}>
                        <Link to={`/producto/${product.id}`}>
                            <img src={product.image} alt={product.name} />
                            <p>{product.name}</p>
                            <p>${product.price}</p>
                        </Link>
                        {/* Aquí podrías agregar un botón para agregar al carrito */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
