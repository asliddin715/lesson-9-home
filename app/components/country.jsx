import React, { useState, useEffect } from 'react';

const Country = ({ countryCode }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://covid-19-data.p.rapidapi.com/country/all?format=json&code=${countryCode}`;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'bfa5349199msh69ac9744710c567p19fbc8jsn40e6efcf4e1d',
                    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
                }
            };
            
            try {
                const response = await fetch(url, options);
                const result = await response.text();
                console.log(result);
            } catch (error) {
                console.error(error);
            }finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [countryCode]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            {data && (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            )}
        </div>
    );
};

export default Country;
