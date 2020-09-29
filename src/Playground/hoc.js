import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>This is my info: {props.info}</h1>
    </div>
);

const adminInfo = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is classified info. Please dont share</p>}
            <WrappedComponent {...props}/>
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please try again!</p>}
            
        </div>
    )
};

const AdminInfo = adminInfo(Info);
const RequireAuthentication = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='Check this out ' />, document.getElementById('app'));
ReactDOM.render(<RequireAuthentication isAuthenticated={false} info='Check new ' />, document.getElementById('app'));