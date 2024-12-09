import React, { useState } from "react";

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleMessage = (e) => {
        setEmail(e.target.value);
    };

    const styles = {
        footer: {
            backgroundColor: "#000000",
            color: "#ffffff",
            padding: "20px 10px",
            fontFamily: "'Simplon Norm', sans-serif",
        },
        footerContainer: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            maxWidth: 1200,
            margin: "0 auto",
            gap: 30,
        },
        footerSection: {
            flex: "1 1 calc(33.333% - 20px)",
            minWidth: 250,
            boxSizing: "border-box",
        },
        footerTitle: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "10px",
        },
        footerSubtitle: {
            fontWeight: "bold",
            marginTop: "15px",
        },
        footerWrapper: {
            display: "flex",
            flexWrap: "nowrap",
            gap: "10px",
            marginTop: "15px",
            alignItems: "center",
        },
        footerInput: {
            padding: "10px",
            width: "100%",
            maxWidth: 300,
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "1rem",
            boxSizing: "border-box",
        },
        footerButton: {
            border: "solid 1px #ffffff",
            borderRadius: "8px",
            padding: "10px",
            background: "black",
            color: "white",
            textAlign: "center",
            cursor: "pointer",
            flex: "1 1 auto",
        },
        listTitle: {
            fontSize: "1.2rem",
            marginBottom: "10px",
            fontWeight: "bold",
        },
        list: {
            padding: 0,
            listStyleType: "none",
            lineHeight: 1.8,
        },
        listItem: {
            marginBottom: "5px",
        },
        iconsContainer: {
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBlock:15
        },
        smallText: {
            fontSize: "0.8rem",
            lineHeight: 1.5,
            marginTop: "10px",
        },
        divider: {
            borderBottom: "1px solid #ffffff",
            margin: "25px 0",
        },
        responsiveInput: {
            width: "100%",
        },
        responsiveButton: {
            marginTop: 10,
        },
        centerText: {
            textAlign: "center",
            marginTop: "20px",
            fontSize: "0.9rem",
        },
        country_code: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 5,
            marginBlock:10
        }
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.footerContainer}>
                {/* First Section */}
                <div style={styles.footerSection}>
                    <div style={styles.footerTitle}>BE THE FIRST TO KNOW</div>
                    <p>Sign up for updates from mettā muse.</p>
                    <div style={styles.footerWrapper}>
                        <input
                            style={styles.footerInput}
                            type="email"
                            value={email}
                            name="email"
                            placeholder="Enter Your E-mail"
                            onChange={handleMessage}
                        />
                        <button
                            style={styles.footerButton}
                            onMouseOver={(e) => (e.target.style.background = "#ffffff")}
                            onMouseOut={(e) => (e.target.style.background = "black")}
                        >
                            SUBSCRIBE
                        </button>
                    </div>
                </div>

                {/* Second Section */}
                <div style={styles.footerSection}>
                    <h5 style={styles.listTitle}>CONTACT US</h5>
                    <p style={{marginBlock:10}}>+44 221 133 5360</p>
                    <p>customercare@mettamuse.com</p>
                    <h6 style={styles.footerSubtitle}>CURRENCY</h6>
                    <p style={styles.country_code}>
                        <span>
                            <img src="/icons/usa.svg" alt="usa" />
                        </span>{" "}
                        USD +
                    </p>
                    <small style={styles.smallText}>
                        Transactions will be completed in Euros and a currency reference is
                        available on hover.
                    </small>
                </div>
            </div>
            <div style={styles.divider}></div>

            {/* Additional Sections */}
            <div style={styles.footerContainer}>
                <div style={styles.footerSection}>
                    <h4 style={styles.listTitle}>mettā muse</h4>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>About us</li>
                        <li style={styles.listItem}>Stories</li>
                        <li style={styles.listItem}>Artisans</li>
                        <li style={styles.listItem}>Boutiques</li>
                        <li style={styles.listItem}>Contact Us</li>
                        <li style={styles.listItem}>EU Compliances Docs</li>
                    </ul>
                </div>
                <div style={styles.footerSection}>
                    <h4 style={styles.listTitle}>Quick Links</h4>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>Orders & Shipping</li>
                        <li style={styles.listItem}>Join/Login as a Seller</li>
                        <li style={styles.listItem}>Payment & Pricing</li>
                        <li style={styles.listItem}>Return & Refunds</li>
                        <li style={styles.listItem}>FAQs</li>
                        <li style={styles.listItem}>Privacy Policy</li>
                        <li style={styles.listItem}>Terms & Conditions</li>
                    </ul>
                </div>
                <div style={styles.footerSection}>
                    <h4 style={styles.listTitle}>Follow Us</h4>
                    <div style={styles.iconsContainer}>
                        <img src="/icons/facebook.svg" alt="Facebook" />
                        <img src="/icons/instagram.svg" alt="Instagram" />
                    </div>
                    <h4 style={styles.listTitle}>mettā muse Accepts</h4>
                    <div style={styles.iconsContainer}>
                        <img src="/icons/gpay.svg" alt="gpay" />
                        <img src="/icons/master.svg" alt="master" />
                        <img src="/icons/paypal.svg" alt="paypal" />
                        <img src="/icons/amex.svg" alt="Amex" />
                        <img src="/icons/apay.svg" alt="apay" />
                        <img src="/icons/opay.svg" alt="opay" />
                    </div>
                </div>
            </div>
            <div style={styles.centerText}>
                Copyright © 2023 mettamuse. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
