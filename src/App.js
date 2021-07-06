import React from 'react';
import { CardInfo, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
    state = {
        data: {}
    }

    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData })
        console.log(this.state.data, 'App.js -- componentDidMount')
    }

    render(){
        const { data } = this.state;

        return (
            <div className={styles.container}>
                <CardInfo data={data}/>
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App; 