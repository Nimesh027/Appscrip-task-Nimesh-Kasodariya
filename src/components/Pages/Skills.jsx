import React from 'react';

const Skills = () => {
  const products = [
    { name: 'Smartphone', category: 'Electronics', price: '$699', rating: '4.5/5' },
    { name: 'Wireless Headphones', category: 'Accessories', price: '$199', rating: '4.7/5' },
    { name: 'Running Shoes', category: 'Footwear', price: '$120', rating: '4.3/5' },
    { name: 'Smartwatch', category: 'Wearables', price: '$299', rating: '4.6/5' },
    { name: 'Backpack', category: 'Lifestyle', price: '$89', rating: '4.8/5' },
  ];

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
      marginBottom: '10px',
      color: '#333',
    },
    description: {
      textAlign: 'center',
      fontSize: '1.2rem',
      marginBottom: '30px',
      color: '#666',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
      padding: '10px',
    },
    card: {
      background: '#f9f9f9',
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      textAlign: 'center',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s, box-shadow 0.3s',
    },
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
    },
    name: {
      fontSize: '1.5rem',
      color: '#222',
      marginBottom: '10px',
    },
    details: {
      fontSize: '1rem',
      color: '#555',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>✨ Popular Products ✨</h1>
      <p style={styles.description}>
        Browse through our list of top-rated products across various categories. Each product is highly recommended by our customers.
      </p>
      <div style={styles.grid}>
        {products.map((product, index) => (
          <div key={index} style={styles.card}>
            <h2 style={styles.name}>{product.name}</h2>
            <p style={styles.details}>Category: {product.category}</p>
            <p style={styles.details}>Price: {product.price}</p>
            <p style={styles.details}>Rating: {product.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
