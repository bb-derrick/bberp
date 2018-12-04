import React from 'react';
import { Link } from 'react-router-dom';

const AppHeader = () => {
    return (
            <Link to="/">
                <header className="App-header">
                    <span>SSC Roll Call</span>
                </header>
            </Link>
        )
};

export default AppHeader;

