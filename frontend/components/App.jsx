import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Modal from './splash/modal';
import NavBarContainer from './navbar/navbar_container';
import SplashPage from './splash/splash_page';
import SearchResultsContainer from './search/search_results_container';
import FilterBarContainer from './filters/filter_bar_container';
import ErrorPage from './splash/error_page';

const home = "/homes";
const sell = "/homes/for-sale";
const sellSearch = "/homes/for-sale/:query";
const rent = "/homes/for-rent";
const rentSearch = "/homes/for-rent/:query";

const App = () => (
  <div>
    <Modal />
    <NavBarContainer />

    {[home, sell, sellSearch, rent, rentSearch].map(path => 
      <Route exact path={path} component={FilterBarContainer} key={path}/>
    )}
    
    <Switch>
      {[home, sell, sellSearch, rent, rentSearch].map(path => 
        <Route exact path={path} component={SearchResultsContainer} key={path}/>
      )}

      {["/", "/buy", "/rent", "/sell", "/find-your-home"].map(path => 
        <Route exact path={path} component={SplashPage} key={path}/>
      )}

      <Route path="/" component={ErrorPage} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;