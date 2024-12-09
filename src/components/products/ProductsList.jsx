import React, { useState } from 'react';
import Modal from '../UserInterface/Modal';

const ProductCard = ({ product, onClick }) => {
    return (
        <div style={styles.productCard} onClick={() => onClick(product)}>
            <img src={product.image} alt={product.title} style={styles.productImage} />
            <div style={styles.productContent}>
                <div style={styles.productTitle}>{product.title}</div>
                <div style={styles.productActions}>
                    <span style={styles.signinAction}>Sign in</span> or Create an account to see pricing
                    <span style={styles.actionIcon}><img src="/icons/like.svg" alt="Logo" /></span>
                </div>
            </div>
        </div>
    );
};

const ProductsList = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleCardClick = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };
    return (
        <div>
            <div style={styles.productList}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onClick={handleCardClick} />
                ))}
            </div>
            <Modal product={selectedProduct} onClose={closeModal} />
        </div>
    );
};

const styles = {
    productCard: {
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center',
        maxWidth: '250px',
        height: '350px',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    productImage: {
        width: '100%',
        height: '200px',
        objectFit: 'contain',
        borderRadius: '4px',
    },
    productContent: {
        textAlign: 'left',
        marginTop: 'auto',
    },
    productTitle: {
        color: '#000',
        fontSize: '14px',
        fontWeight: 'bold',
        marginBottom: '12px',
    },
    productActions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#c2c2c2',
        fontSize: '10px',
    },
    signinAction: {
        borderBottom: '1px solid',
        cursor: 'pointer',
    },
    actionIcon: {
        fontSize: '16px',
        marginLeft: '3px',
    },
    productList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        justifyContent: 'center',
        marginBlock: 25,
    },
};

export default ProductsList;
