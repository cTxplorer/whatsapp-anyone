import { useEffect, useState } from 'react';
import HomePage from '../components/HomePage';
import { CountryContext } from '../context/CountryContext';

const App = () => {
    const [countryFromIp, setCountryFromIp] = useState();

    useEffect(() => {
        const lastSelectedCountryIso2 = localStorage.getItem("lastSelectedCountryIso2");
        if (lastSelectedCountryIso2) {
            setCountryFromIp(lastSelectedCountryIso2);
        } else {
            fetch('http://ip-api.com/json/?fields=16387')
            .then(res => res.json())
            .then((res) => {
                if (res?.status === 'success' && res.countryCode) {
                    setCountryFromIp(res.countryCode.toLowerCase());
                } else {
                    setCountryFromIp('in')
                }
            })
            .catch(err => console.error(err));
        }
    }, []);
    return (
        <CountryContext.Provider value={countryFromIp}>
            <HomePage />
        </CountryContext.Provider>
    )
};

export default App;