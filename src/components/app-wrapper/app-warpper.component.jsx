import React from 'react';

export function AppWrapper({ children }) {
    return (<div className="wrapper">
        <div className="card frame">
            {children}
        </div>
    </div>);
}