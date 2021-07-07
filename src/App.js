import React from 'react';
import { CardInfo, Chart, CountryPicker } from './components';
import { fetchData } from './api';
import styles from './App.module.css';
import banner from './images/covid-tracker-banner.png';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount(){
        const data = await fetchData();

        this.setState({ data })
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country)

        this.setState({ data, country });
    }

    render(){
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={banner} alt='Covid-19 title'/>
                <CardInfo data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App; 