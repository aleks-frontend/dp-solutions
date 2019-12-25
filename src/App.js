import React, { Fragment } from 'react';
import Header from './components/UI/Header';
import Hero from './components/UI/Hero';
import { AppProvider } from './AppContext';

function App() {
  const sectionRefs = {
    homeRef: React.createRef(null),
    aboutMeRef: React.createRef(null),
    testimonialsRef: React.createRef(null)
  }

  return (
    <AppProvider>
      <Fragment>
        <Header />
        <Hero id="home" forwardedRef={sectionRefs.homeRef} />
      </Fragment>
    </AppProvider>
  );
}

export default App;
