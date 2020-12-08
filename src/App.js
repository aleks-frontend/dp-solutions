import React, { Fragment } from 'react';
import Header from './components/UI/Header';
import Hero from './screens/Hero';
import AboutMe from './screens/AboutMe';
import Technologies from './screens/Technologies';
import { AppProvider } from './AppContext';

const App = () => {
  const [ activeNavItemState, setActiveNavItemState ] = React.useState({
    activeNavItem: ''
  });
  
  const [ headerMinifiedState, setHeaderMinifiedState ] = React.useState({
    headerMinified: false
  });

  const toggleHeaderMinified = (visibility) => {
    setHeaderMinifiedState({...headerMinifiedState, headerMinified: visibility});
  }
  
  const setActiveNavItem = (section) => {
    setActiveNavItemState({...activeNavItemState, activeNavItem: section});
  }

  return (
    <AppProvider>
      <Fragment>
        <Header 
          headerMinified={headerMinifiedState.headerMinified} 
          activeNavItemState={activeNavItemState}
        />
        <Hero 
          toggleHeaderMinified={toggleHeaderMinified}
          setActiveNavItem={setActiveNavItem}
        />
        <AboutMe setActiveNavItem={setActiveNavItem} />
        <Technologies setActiveNavItem={setActiveNavItem} />
      </Fragment>
    </AppProvider>
  );
}

export default App;
