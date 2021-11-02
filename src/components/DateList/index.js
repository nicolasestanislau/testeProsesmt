import React, { useState } from 'react';

import { getDate } from '../../services/api'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Estado from '../Estado';

const DateList = () => {
    const [dateSelect, setDateSelect] = useState([]);
    const [dateErro, setErro] = useState('');

    const [data, setData] = useState('');

    const handleChangeDate = (event) => {
        setData(event.target.value);
    };

    const searchDate = (date2) => {
        var dateFormat = data.replace('-', '');
        date2 = dateFormat.replace('-', '');
        if (data !== '') {
            getDate(date2)
                .then(({ data }) => {
                    setDateSelect(data.data);

                })
                .catch(err => setErro(err))
        }


    };

    return (

        <div>
            <h1>Lista por data</h1>
            <h1>Status: </h1>
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
                <TextField onChange={handleChangeDate}
                    type="date"
                    variant="outlined"
                    value={data}
                    style={{ marginRight: '10px' }} />
                <Button onClick={searchDate} variant="contained">Buscar</Button>
            </div>
            <div>
                {dateErro ? <h1>Someting wrong</h1> : (Object.values(dateSelect).map(s => (

                    <div key={s.uid}>
                        <div>{s.state}</div>
                        <div>{s.uf}</div>
                        <div>{s.datetime}</div>
                        <Estado
                            cases={s.cases}
                            deaths={s.deaths}
                            refuses={s.refuses}
                            suspects={s.suspects} />
                    </div>
                )))
                }
            </div>
        </div>
    );
}

export default DateList;
