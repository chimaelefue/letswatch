import { useEffect, useState } from "react";


function useFetch(urls) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const responses = await Promise.all(urls.map(url => fetch(url)));
                const json = await Promise.all(responses.map(response => response.json()));
                setData(json);
            } 
            catch (e) {
                console.log(e);
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchData();

    }, [urls]);
    return [data, isLoading];
}

export default useFetch