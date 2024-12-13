import React, { useState } from 'react';

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: 'Smartphone', category: 'Electronics', price: 699, rating: '4.5/5', description: 'A high-end smartphone with great features.', image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' },
    { id: 2, name: 'Wireless Headphones', category: 'Accessories', price: 199, rating: '4.7/5', description: 'Noise-cancelling wireless headphones.', image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
    { id: 3, name: 'Running Shoes', category: 'Footwear', price: 120, rating: '4.3/5', description: 'Comfortable running shoes for everyday use.', image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' },
    { id: 4, name: 'Smartwatch', category: 'Wearables', price: 299, rating: '4.6/5', description: 'Track your fitness with style.', image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg' },
    { id: 5, name: 'Backpack', category: 'Lifestyle', price: 89, rating: '4.8/5', description: 'Durable backpack for all your essentials.', image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg' },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const buyNow = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      textAlign: 'center',
      fontSize: '2.5rem',
      marginBottom: '20px',
      color: '#333',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
      padding: '10px',
    },
    card: {
      background: '#f9f9f9',
      border: '1px solid #ddd',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '20px',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease',
      height: '100%',
    },
    cardImage: {
      maxWidth: '100%',
      borderRadius: '8px',
      height: 'auto',
      objectFit: 'cover',
    },
    name: {
      fontSize: '1.6rem',
      color: '#222',
      marginBottom: '10px',
    },
    details: {
      fontSize: '1rem',
      color: '#555',
      marginBottom: '10px',
    },
    button: {
      marginTop: '10px',
      padding: '12px 20px',
      fontSize: '1rem',
      color: '#fff',
      background: '#007BFF',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background 0.3s',
      width: '100%',
    },
    buttonSecondary: {
      marginTop: '10px',
      padding: '12px 20px',
      fontSize: '1rem',
      color: '#fff',
      background: '#28a745',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background 0.3s',
      width: '100%',
    },
    cardHover: {
      transform: 'scale(1.05)',
    },
    modal: {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: modalVisible ? 'flex' : 'none',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center',
      width: '80%',
      maxWidth: '400px',
    },
    closeModalButton: {
      marginTop: '20px',
      padding: '10px 20px',
      background: '#dc3545',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Shop</h1>
      <div style={styles.grid}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{ ...styles.card, ...(product.id === selectedProduct?.id ? styles.cardHover : {}) }}
          >
            <img src={product.image} alt={product.name} style={styles.cardImage} />
            <h2 style={styles.name}>{product.name}</h2>
            <p style={styles.details}>Category: {product.category}</p>
            <p style={styles.details}>Price: ${product.price}</p>
            <p style={styles.details}>Rating: {product.rating}</p>
            <p style={styles.details}>{product.description}</p>
            <button style={styles.button} onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            <button style={styles.buttonSecondary} onClick={() => buyNow(product)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
      <h2 style={styles.title}>Cart</h2>
      {cart.length === 0 ? (
        <p style={styles.details}>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} style={styles.details}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}

      {/* Modal for confirmation */}
      {modalVisible && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h2>Are you sure you want to purchase this item?</h2>
            <p>{selectedProduct.name}</p>
            <button style={styles.closeModalButton} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
