import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SearchWeather from '~/pages/SearchWeather';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SearchWeather} />
    </Switch>
  );
}
