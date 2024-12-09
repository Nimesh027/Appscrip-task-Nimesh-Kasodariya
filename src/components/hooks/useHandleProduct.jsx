import axios from 'axios';
import React, { useState } from 'react'

const useHandleProduct = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getProductList = async (url) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }
    return { getProductList, loading, error };
}

export default useHandleProduct
