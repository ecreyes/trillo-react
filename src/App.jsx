import React from 'react';
import { Header, SideBar, Hotel } from './components';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className='content'>
        <SideBar/>
        <Hotel/>
      </div>
    </div>
  )
}

export default App;
