import { useCallback, useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setLoading] = useState(true)

    async function getData(url, params){
        const readyUrl = params?._limit ? `${url}?_limit=${params._limit}` : url;
        const response = await fetch(readyUrl);
        return response.json();
    }

    useEffect(() => {
        getData(url)
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => setError(error));
    }, [url])

    const refetch = useCallback(({ params }) => {
        setLoading(true);
        getData(url, params)
            .then(data => {
                setData(data);
                setLoading(false)
            })
            .catch(error=>setError(error));
    }, [url])

    return {
        data,
        isLoading,
        error,
        refetch
    }
}