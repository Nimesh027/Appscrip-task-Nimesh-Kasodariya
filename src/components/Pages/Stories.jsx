import React from 'react';

const Stories = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#eef2f7',
      minHeight: '100vh',
    },
    heading: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#2c3e50',
      marginBottom: '30px',
      textAlign: 'center',
    },
    subHeading: {
      fontSize: '20px',
      fontWeight: 'lighter',
      color: '#34495e',
      marginBottom: '40px',
      textAlign: 'center',
    },
    storyContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      maxWidth: '1200px',
      width: '100%',
    },
    storyCard: {
      backgroundColor: '#ffffff',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
      borderRadius: '12px',
      padding: '20px',
      textAlign: 'center',
      transition: 'transform 0.3s, box-shadow 0.3s',
    },
    storyCardHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
    storyTitle: {
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#1abc9c',
      marginBottom: '15px',
    },
    storyDescription: {
      fontSize: '16px',
      color: '#7f8c8d',
      lineHeight: '1.8',
    },
  };

  const stories = [
    {
      title: 'The Journey Begins',
      description: 'Embark on a fascinating adventure filled with trials and triumphs. Discover how small steps lead to great accomplishments and inspire others along the way.',
    },
    {
      title: 'The Innovation Spark',
      description: 'Explore how a simple idea evolved into groundbreaking innovation. This story highlights creativity, collaboration, and the pursuit of excellence.',
    },
    {
      title: 'Faces of Resilience',
      description: 'A collection of powerful narratives showcasing resilience in the face of adversity. Learn how challenges were transformed into opportunities.',
    },
    {
      title: 'The Future of Dreams',
      description: 'Take a glimpse into a visionary journey that connects passion and purpose. This tale illuminates the path to shaping a brighter tomorrow.',
    },
    {
      title: 'Bridging Cultures',
      description: 'A heartfelt story of unity and understanding. Experience how bridging cultural divides fosters a sense of global community.',
    },
    {
      title: 'The Road Less Traveled',
      description: 'An inspiring account of courage and determination. Discover the extraordinary rewards of embracing the unknown.',
    },
    {
      title: 'Moments of Reflection',
      description: 'Reflect on pivotal moments that define a lifetime. These stories remind us to cherish the past while striving for a promising future.',
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Stories</h1>
      <p style={styles.subHeading}>Explore inspiring tales of courage, innovation, and unity that define our journey.</p>
      <div style={styles.storyContainer}>
        {stories.map((story, index) => (
          <div
            key={index}
            style={styles.storyCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = styles.storyCardHover.transform;
              e.currentTarget.style.boxShadow = styles.storyCardHover.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
            }}
          >
            <h2 style={styles.storyTitle}>{story.title}</h2>
            <p style={styles.storyDescription}>{story.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
