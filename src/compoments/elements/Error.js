import React from "react";

const Error = ({ touched, message }) => {
    if (!touched) {
        return <div className={'form_pop invalid'}>&nbsp;</div>
    }
    if (message) {
        return <div className={'form_pop invalid'}>{message}</div>
    }
    return <div className={'form_pop valid'}>Great!</div>;
};

export default Error;