import axios from 'axios';

const globalURL = 'https://covid19.mathdro.id/api';
const usaURL = 'https://covid19.mathdro.id/api/daily';


export const fetchData = async (country) => {
    let tempURL = globalURL;

    if(country) {
        tempURL = `${globalURL}/countries/${country}`
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(tempURL)

        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        return error;
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(usaURL);

        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
        return error;
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${globalURL}/countries`);

        return countries.map((country) => country.name);
    } catch (error) {
        return error;
    }
}
