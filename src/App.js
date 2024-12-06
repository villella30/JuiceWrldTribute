import React from 'react';
import './App.css';
import Headers from './components/Headers';
import Content from './components/Content';
import Albums from './components/Albums';
import Songs from './components/Songs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Headers />
      <Content />
      <Albums />
      <Songs />
      <Footer />
    </div>
  );
}

export default App;
