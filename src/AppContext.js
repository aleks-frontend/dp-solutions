import React from 'react';
import { pageEnums } from './helpers';

const AppContext = React.createContext();

class AppProvider extends React.Component {
    state = {
        pages: {
            [pageEnums.HOME]: { label: 'Home' },
            [pageEnums.ABOUTME]: { label: 'About me' },
            [pageEnums.TECHNOLOGIES]: { label: 'Technologies' },
            [pageEnums.PORTFOLIO]: { label: 'Portfolio' },
            [pageEnums.TESTIMONIALS]: { label: 'Testimonials' },
            [pageEnums.CONTACT]: { label: 'Contact' },
        },
        activePage: pageEnums.HOME,
        activeNavItem: pageEnums.HOME,
        headerMinified: false
    }

    setActivePage = (pageKey, event) => {
        event.preventDefault();
        this.setState({ activePage: pageKey });
    }

    toggleHeaderMinified = (visibility) => {
        this.setState({ headerMinified: visibility });
    }

    render() {
        return (
            <AppContext.Provider value={{
                state: this.state,
                setActivePage: this.setActivePage,
                toggleHeaderMinified: this.toggleHeaderMinified
            }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export { AppContext, AppProvider };