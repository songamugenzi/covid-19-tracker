import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from '../Card/Card';
import styles from './CardInfo.module.css';

const CardInfo = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if(!confirmed) {
        return 'Retrieving latest data';
    }
    return (
        <div className={styles.container}>
            <Typography gutterBottom variant='h4' component='h2'>Global</Typography>
            <Grid container spacing={3} justifyContent='center'>
                <CardComponent
                    className={styles.infected}
                    cardTitle='Infected'
                    value={confirmed.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle='Number of active cases from COVID-19' 
                />
                <CardComponent
                    className={styles.recovered}
                    cardTitle='Recovered'
                    value={recovered.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle='Number of recoveries from COVID-19' 
                />
                <CardComponent
                    className={styles.deaths}
                    cardTitle='Deaths'
                    value={deaths.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle='Number of deaths caused by COVID-19' 
                />
            </Grid>
        </div>
    )
}

export default CardInfo
