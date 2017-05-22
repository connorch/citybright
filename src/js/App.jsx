import React from 'react';
import GoogleMap from './components/Map.jsx';
import Navigation from './components/Navigation.jsx'
import TestBody from './components/TestBody.jsx'

class App extends React.Component {
   render() {
      return (
        <div>
          <Navigation />
          <TestBody />
        </div>
      );
   }
}

export default App;