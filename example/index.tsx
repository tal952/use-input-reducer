import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useInputReducer from '../.';

const App = () => {
  const [{ name }, inputAttr] = useInputReducer({ name: '' });
  console.log('name: ' + name);
  return <input {...inputAttr('name')} />;
};

ReactDOM.render(<App />, document.getElementById('root'));
