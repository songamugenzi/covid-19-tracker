import axios from 'axios';

const globalURL = 'https://covid19.mathdro.id/api';
const usaURL = 'https://api.covidtracking.com/v1/us/daily.json';

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(globalURL)

        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.log(error)
    }
}

