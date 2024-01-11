import { useEffect, useState } from "react";


export default function UseFetchHook({ url, options = {} }) {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData() {
            setPending(true)
            try {
                const res = await fetch(url, { ...options });
                const result = await res.json();
                setData(result)
                setError(null)
                setPending(false)

            } catch (e) {
                setError(`${e}.Some Error Occured`);
                setPending(false)
            }
        }
        fetchData();

    }, [url]);


    return { data, error, pending };
}