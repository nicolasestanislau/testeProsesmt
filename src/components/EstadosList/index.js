import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { getTask } from '../../services/api'

import Estado from '../Estado';

const EstadosList = () => {
    const [estados, setStatus] = useState([]);
    const [estado, setEstado] = useState([]);
    const [uf, setUf] = useState('');
    const handleChange = (event) => {
        setUf(event.target.value);
        getTask(event.target.value)

            .then(({ data }) => {
                setEstado(data);
            })
    };

    // get todos os estados
    useEffect(() => {
        api.get('')
            .then(({ data }) => {
                setStatus(data.data);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return (

        <div>
            <InputLabel id="demo-simple-select-helper-label">Estados</InputLabel>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={uf}
                label="Estado"
                onChange={handleChange}
                style={{minWidth: '300px'}}
                
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {(Object.values(estados).map(u => (
                    <MenuItem key={u.uid} value={u.uf}>{u.state}</MenuItem>
                )))}
            </Select>
            <h1>Status: </h1>
            <div>
                {uf ? (
                    <div>
                        <div>{estado.state}</div>
                        <div>{estado.uf}</div>
                        <Estado
                            cases={estado.cases}
                            deaths={estado.deaths}
                            refuses={estado.refuses}
                            suspects={estado.suspects} />
                    </div>
                )
                    : (Object.values(estados).map(s => (

                        <div key={s.uid}>
                            <div>{s.state}</div>
                            <div>{s.uf}</div>
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

export default EstadosList;
