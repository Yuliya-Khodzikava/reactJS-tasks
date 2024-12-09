import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export function useFetch(url, params = {}) {
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const getData = useCallback((params) => {
        setLoading(true);

        axios({
            method: 'GET',
            url,
            ...params,
        })
        .then((response) => {
        setData(response.data);
        setError(null);
        })
        .catch((error) => {
        setError(error);
        setData(null);
        })
        .finally(() => {
        setLoading(false);
        });
    }, [url])

    useEffect(() => {
        getData(params);
    }, []);

    return {
        data,
        isLoading,
        error,
        refetch: getData
    }
}