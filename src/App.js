import React from 'react';
import { useQuery } from 'urql';
import logo from './logo.svg';
import './App.css';

const getHello = `
  query {
    hello
  }
`;

function QueryValue() {
  const [res] = useQuery({
    query: getHello,
    variables: { limit: 10 },
  });

  if (res.fetching) {
    return 'Loading...';
  }

  if (res.error) {
    console.log(res.error);
    return 'Oh no!';
  }


  if (res.data && res.data.hello) {
    return <pre>{res.data.hello}</pre>;
  }

  return <div>QueryValue</div>

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <QueryValue />
    </div>
  );
}

export default App;
