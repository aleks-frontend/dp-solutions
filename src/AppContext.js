import React from 'react';

const AppContext = React.createContext();

class AppProvider extends React.Component {
    state = {
        pages: {
            home: { label: 'Home' },
            aboutMe: { label: 'About me' },
            technologies: { label: 'Technologies' },
            portfolio: { label: 'Portfolio' },
            testimonials: { label: 'Testimonials' },
            contact: { label: 'Contact' },
        },
        activePage: 'home'
    }

    setActivePage = (pageKey, event) => {
        event.preventDefault();
        this.setState({ activePage: pageKey });
    }

    render() {
        return (
            <AppContext.Provider value={{
                state: this.state,
                setActivePage: this.setActivePage
            }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export { AppContext, AppProvider };