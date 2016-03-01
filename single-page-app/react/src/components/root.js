import React from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import routes from '../routes';

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <Provider store={this.props.store}>
          <ReduxRouter>
            { routes }
          </ReduxRouter>
        </Provider>
      </div>
    );
  }
}
