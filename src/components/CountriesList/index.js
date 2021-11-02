import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { getCountrie } from '../../services/api'

import Estado from '../Estado';

const CountriesList = () => {
    const [countries, setCountries] = useState([]);
    const [countrie, setCountrie] = useState([]);
    const [pais, setPais] = useState('');

    const handleChange = (event) => {
        setPais(event.target.value);
        getCountrie(event.target.value)

            .then(({ data }) => {
                setCountrie(data.data);
            })
    };

    // get todos os estados
    useEffect(() => {
        api.get('countries')
            .then(({ data }) => {
                setCountries(data.data);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (

        <div>
            <InputLabel id="demo-simple-select-helper-label">Países</InputLabel>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={pais}
                label="Estado"
                onChange={handleChange}
                style={{minWidth: '300px'}}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {(Object.values(countries).map(u => (
                    <MenuItem key={u.country} value={u.country}>{u.country}</MenuItem>
                )))}
            </Select>
            <h1>Status: </h1>
            <div>
                {pais ? (
                    <div>
                        <div>{countrie.country}</div>
                        <Estado
                            cases={countrie.cases}
                            deaths={countrie.deaths}
                            refuses={countrie.recovered}
                            suspects={countrie.confirmed} />
                        {countrie.state}
                    </div>
                )
                    : (Object.values(countries).map(s => (

                        <div key={s.country}>
                            <div>{s.country}</div>
                            <Estado
                                cases={s.cases}
                                deaths={s.deaths}
                                refuses={s.recovered}
                                suspects={s.confirmed} />

                        </div>
                    )))
                }
            </div>
        </div>
    );

}

export default CountriesList;
