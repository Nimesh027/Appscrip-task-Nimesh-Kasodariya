import React from 'react';

const About = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f9',
      height: '100vh',
      textAlign: 'center',
    },
    heading: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '20px',
    },
    paragraph: {
      fontSize: '18px',
      color: '#555',
      lineHeight: '1.6',
      maxWidth: '800px',
    },
    image: {
      width: '100%',
      maxWidth: '300px',
      margin: '20px 0',
      borderRadius: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="About Us"
        style={styles.image}
      />
      <p style={styles.paragraph}>
        Welcome to our application! We are dedicated to providing the best
        experience for our users. Our platform is designed with simplicity and
        functionality in mind, making it accessible to everyone. Thank you for
        choosing us!
      </p>
    </div>
  );
};

export default About;
