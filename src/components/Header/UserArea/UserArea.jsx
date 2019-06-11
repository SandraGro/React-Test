import React from 'react';
import withRouter from 'react-router-dom/withRouter';
const UserArea = ({location}) => (
    <>
    {location.pathname === '/' ? 'logged Out' :'Logged In'}
    </>
);

export default withRouter(UserArea);