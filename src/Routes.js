import React, { Fragment } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import  EstadoList  from './components/EstadosList';
import  DateList  from './components/DateList';
import  CountriesList  from './components/CountriesList';
import  Form  from './components/Form';

const Routes = () => {

    return (
        <BrowserRouter>
            <Fragment>
                <Switch>
                    <Route exact path="/" component={EstadoList} />
                    <Route exact path="/data" component={DateList} />
                    <Route exact path="/countries" component={CountriesList} />
                    <Route exact path="/form" component={Form} />
                </Switch>
            </Fragment>
        </BrowserRouter>
    )
}
export default Routes;