import { useEffect, useState } from 'react';
import HomePage from '../components/HomePage';
import DarkMode from '../components/DarkMode';
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
    return <DarkMode>
        <CountryContext.Provider value={countryFromIp}>
            <HomePage />
        </CountryContext.Provider>
        </DarkMode>
};

export default App;