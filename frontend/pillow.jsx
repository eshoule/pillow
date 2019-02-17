import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = {
      entities: { users: { [window.currentUser.id]: window.currentUser }},
      session: { id: window.currentUser.id },
      ui: { filters: JSON.parse(window.filters.replace(/&quot;/g,'"'))}
    }
    delete window.filters;
    delete window.currentUser;
  } 

  const store = configureStore(preloadedState);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});