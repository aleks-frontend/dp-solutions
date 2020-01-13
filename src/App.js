import React, { Fragment } from 'react';
import Header from './components/UI/Header';
import Hero from './screens/Hero';
import AboutMe from './screens/AboutMe';
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
        <AboutMe />
      </Fragment>
    </AppProvider>
  );
}

export default App;
