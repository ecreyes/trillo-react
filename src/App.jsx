import React from 'react';
import { Header, SideBar } from './components';

const App = () => {
  return (
    <div className='container'>
      <Header></Header>
      <div className='content'>
        <SideBar/>
        <main className='hotel-view'>
          hotel view
        </main>
      </div>
    </div>
  )
}

export default App;
