import React, { useState } from 'react';

const Filter = () => {
    const [activeTab, setActiveTab] = useState(null);
    const [checkedOptions, setCheckedOptions] = useState({
        all: true,
        'idealFor': [],
        'occasion': [],
        'work': [],
        'fabric': [],
        'segment': [],
        'suitableFor': [],
        'rawMaterials': [],
        'pattern': []
    });

    const tabs = [
        { id: 'all', label: 'Customizable', options: [] },
        {
            id: 'idealFor', label: 'Ideal For', options: ['Man', 'Woman', 'Both'],
        },
        {
            id: 'occasion', label: 'Occasion', options: ['Casual', 'Formal', 'Party'],
        },
        {
            id: 'work', label: 'Work', options: ['Office', 'Freelance', 'Contract'],
        },
        {
            id: 'fabric', label: 'Fabric', options: ['Cotton', 'Wool', 'Linen'],
        },
        {
            id: 'segment', label: 'Segment', options: ['Luxury', 'Budget', 'Middle Class'],
        },
        {
            id: 'suitableFor', label: 'Suitable For', options: ['Summer', 'Winter', 'Rainy'],
        },
        {
            id: 'rawMaterials', label: 'Raw Materials', options: ['Wood', 'Metal', 'Plastic'],
        },
        {
            id: 'pattern', label: 'Pattern', options: ['Solid', 'Striped', 'Checked'],
        },
    ];

    const handleTabClick = (tabId) => {
        setActiveTab(activeTab === tabId ? null : tabId); 
    };

    const handleCheckboxChange = (tabId, option) => {
        const updatedOptions = { ...checkedOptions };
        if (updatedOptions[tabId].includes(option)) {
            updatedOptions[tabId] = updatedOptions[tabId].filter((item) => item !== option);
        } else {
            updatedOptions[tabId].push(option);
        }
        setCheckedOptions(updatedOptions);
    };

    const handleSelectAll = (tabId) => {
        const updatedOptions = { ...checkedOptions };
        if (updatedOptions[tabId].length === tabs.find((tab) => tab.id === tabId).options.length) {
            updatedOptions[tabId] = [];
        } else {
            updatedOptions[tabId] = tabs.find((tab) => tab.id === tabId).options;
        }
        setCheckedOptions(updatedOptions);
    };

    return (
        <div style={styles.filterSidebar}>
            {tabs.map((tab) => (
                <div key={tab.id} style={styles.tabContainer}>
                    <div
                        style={styles.tabHeader}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        <span>{tab.label}</span>
                        <span style={styles.arrow}>{activeTab === tab.id ? <img src="/icons/downaerrow.svg" alt="Arrow" /> : <img style={styles.arrowStyle} src="/icons/leftaerrow.svg" alt="Arrow" />}</span>
                    </div>
                    {activeTab === tab.id && (
                        <div style={styles.tabContent}>
                            {tab.options.map((option) => (
                                <div key={option} style={styles.checkboxWrapper}>
                                    <input
                                        type="checkbox"
                                        checked={checkedOptions[tab.id].includes(option)}
                                        onChange={() => handleCheckboxChange(tab.id, option)}
                                        style={styles.checkbox}
                                    />
                                    <span>{option}</span>
                                </div>
                            ))}
                            <div style={styles.checkboxWrapper}>
                                <input
                                    type="checkbox"
                                    checked={checkedOptions[tab.id].length === tab.options.length}
                                    onChange={() => handleSelectAll(tab.id)}
                                    style={styles.checkbox}
                                />
                                <span>Select All</span>
                            </div>
                        </div>
                    )}
                    <div style={styles.tabBorder}></div>
                </div>
            ))}
        </div>
    );
};

const styles = {
    filterSidebar: {
        width: '250px',
        backgroundColor: '#fff', 
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        border: '1px solid #ddd',
        borderRadius: '8px', 
        marginRight: '20px',
        maxHeight: '100vh',
        overflowY: 'auto',
        marginTop:25
    },
    tabContainer: {
        marginBottom: '10px',
    },
    tabHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '10px',
        fontWeight: 'bold',
    },
    arrow: {
        fontSize: '12px',
        marginLeft: '10px',
    },
    tabContent: {
        padding: '10px 0',
        paddingLeft: '10px',
    },
    checkboxWrapper: {
        display: 'flex',
        alignItems: 'center',
        padding: '5px 0',
        borderRadius: '5px', 
    },
    checkbox: {
        marginRight: '10px',
    },
    tabBorder: {
        borderBottom: '1px solid #ddd',
        margin: '10px 0',
    },
    arrowStyle: {
        transform: 'rotate(180deg)',
    }
};

export default Filter;
