import React from 'react';
import ContainerHome from './app/home/ContainerHome';
import HomeContentContainer from './app/home/HomeContentContainer';

function App() {
  return (
    <div className="App">
        <ContainerHome>
          <HomeContentContainer />
        </ContainerHome>
    </div>
  );
}

export default App;
