import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductsList from '../products/ProductsList';
import useHandleProduct from '../hooks/useHandleProduct';
import Filter from '../UserInterface/Filter';

const Home = () => {
    const location = useLocation();
    const { getProductList, loading, error } = useHandleProduct();
    const [currentPath, setCurrentPath] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState('RECOMMENDED');
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        if (location.pathname === '/') {
            setCurrentPath('shop');
        } else {
            setCurrentPath(location.pathname);
        }
    }, [location]);

    useEffect(() => {
        fetchProductdata();
    }, []);

    const fetchProductdata = async () => {
        const result = await getProductList('https://fakestoreapi.com/products');
        if (result) {
            setProducts(result);
            setFilteredProducts(result);
        }
    };

    const handleSort = (option) => {
        setSelectedSort(option);
        setIsDropdownOpen(false);

        let sortedProducts = [...products];
        switch (option) {
            case 'NEWEST FIRST':
                sortedProducts = sortedProducts.sort((a, b) => b.id - a.id);
                break;
            case 'POPULAR':
                sortedProducts = sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
                break;
            case 'PRICE : HIGH TO LOW':
                sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case 'PRICE : LOW TO HIGH':
                sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
                break;
            default:
                sortedProducts = products;
        }
        setFilteredProducts(sortedProducts);
    };

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div style={{ padding: 20 }}>
                <span style={styles.navigation_list}>Home </span>
                <span style={{ marginLeft: 5 }}> {currentPath.toUpperCase()}</span>
            </div>
            {loading ? (
                <div style={styles.loader}>Loading...</div>
            ) : error ? (
                <div style={styles.errorMessage}>Something went wrong: {error.message}</div>
            ) : (
                <div style={styles.shop_container}>
                    <div style={styles.title_wrapper}>
                        <h1 style={styles.title}>DISCOVER OUR PRODUCTS</h1>
                        <p style={styles.description}>
                            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh
                            amet mi ut elementum dolor.
                        </p>
                    </div>
                    <div style={styles.filter_section}>
                        <div
                            style={styles.filter_button}
                            onClick={() => setIsFilterVisible(!isFilterVisible)}
                        >
                            {screenWidth < 568 ? (
                                <span style={{color:'#000000'}}>Filter</span>
                            ) : (
                                <>
                                    <span style={{color:'#000000'}}>{products.length} ITEMS</span>
                                    <span style={{borderBottom:'solid 2px', color:'gray', marginLeft: 20, display: 'flex', alignItems: 'center'}}>
                                        <img src="/icons/leftaerrow.svg" alt="Logo" />
                                        <span>{isFilterVisible ? "   HIDE FILTER" : "SHOW FILTER"}</span>
                                    </span>
                                </>
                            )}
                        </div>
                        <div style={styles.verticalLine}></div>
                        <div
                            style={styles.recommend_button}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            {selectedSort} &#9662;
                        </div>
                        {isDropdownOpen && (
                            <div style={styles.dropdownMenu}>
                                {['RECOMMENDED', 'NEWEST FIRST', 'POPULAR', 'PRICE : HIGH TO LOW', 'PRICE : LOW TO HIGH'].map(
                                    (option) => (
                                        <div
                                            key={option}
                                            style={styles.dropdownItem}
                                            onClick={() => handleSort(option)}
                                        >
                                            {option}
                                        </div>
                                    )
                                )}
                            </div>
                        )}
                    </div>
                    <div style={{ display: 'flex' }}>
                        {isFilterVisible && screenWidth > 470 &&<Filter />}
                        <div style={styles.productsContainer}>
                            <ProductsList products={filteredProducts} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

const styles = {
    navigation_list: {
        color: '#c2c2c2',
        borderRight: 'solid 2px',
        fontSize: 16,
    },
    shop_container: {
        width: '90%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
    },
    title_wrapper: {
        marginBottom: '20px',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: '10px',
    },
    description: {
        fontSize: '16px',
        color: '#555',
        lineHeight: 1.5,
    },
    filter_section: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
        border: 'solid 1px',
        borderColor: '#c2c2c2',
        padding: '10px',
        borderInline: 'none',
        position: 'relative',
    },
    filter_button: {
        display:'flex',
        fontSize: '14px',
        fontWeight: 'bold',
        backgroundColor: '#fff',
        cursor: 'pointer',
        textTransform: 'uppercase',
    },
    recommend_button: {
        fontSize: '14px',
        fontWeight: 'bold',
        backgroundColor: '#fff',
        cursor: 'pointer',
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    verticalLine: {
        width: '2px',
        height: '40px',
        backgroundColor: '#c2c2c2',
        margin: '0 10px',
    },
    dropdownMenu: {
        position: 'absolute',
        top: '100%',
        right: 0,
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 1,
        width: '200px',
        border: '1px solid #c2c2c2',
    },
    dropdownItem: {
        padding: '10px',
        cursor: 'pointer',
        textAlign: 'left',
        borderBottom: '1px solid #c2c2c2',
        backgroundColor: '#fff',
    },
    loader: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '20px',
        color: '#555',
        fontWeight: 'bold',
        padding: '20px',
    },
    errorMessage: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '18px',
        color: 'red',
        fontWeight: 'bold',
        padding: '20px',
    },
    productsContainer: {
        flex: 1,
    },
};

export default Home;
