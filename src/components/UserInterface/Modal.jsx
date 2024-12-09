import React from 'react';

const Modal = ({ product, onClose }) => {
    if (!product) return null;

    return (
        <div style={styles.modalOverlay}>
            <div style={styles.modal}>
                <button style={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <img src={product.image} alt={product.title} style={styles.modalImage} />
                <div style={styles.modalContent}>
                    <h2 style={styles.modalTitle}>{product.title}</h2>
                    <p style={styles.modalInfo}>
                        <strong>Category:</strong> {product.category}
                    </p>
                    <p style={styles.modalInfo}>
                        <strong>Description:</strong> {product.description}
                    </p>
                    <p style={styles.modalInfo}>
                        <strong>Price:</strong> ${product.price.toFixed(2)}
                    </p>
                    <p style={styles.modalInfo}>
                        <strong>Rating:</strong> {product.rating.rate} ⭐ ({product.rating.count} reviews)
                    </p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modal: {
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '20px',
        width: '90%',
        maxWidth: '500px',
        textAlign: 'center',
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        fontSize: '24px',
        cursor: 'pointer',
    },
    modalImage: {
        width: '100%',
        height: '200px',
        objectFit: 'contain',
        borderRadius: '4px',
        marginBottom: '20px',
    },
    modalContent: {
        textAlign: 'left',
        lineHeight: '1.6',
    },
    modalTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '10px',
        textAlign: 'center',
    },
    modalInfo: {
        fontSize: '14px',
        color: '#333',
        marginBottom: '8px',
    },
};

export default Modal;
