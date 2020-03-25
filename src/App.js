import React, { Component } from 'react';
import ContainerHome from './app/home/ContainerHome';
import HomeContentContainer from './app/home/HomeContentContainer'
class App extends Component {
  render() {
    return (
      <div className="App">
        <ContainerHome>
          <HomeContentContainer />
        </ContainerHome>
      </div>
    );
  }
}

export default App;