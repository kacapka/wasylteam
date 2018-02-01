import React from 'react';

const BtnInsta = (props) => {
    return (
        <div className="btn-wrapper">
            <a className="app-button btn-follow"
            href="https://www.instagram.com/wasylteam/"
            target="_blanK" >
                {props.text}
            </a>
        </div>
    );
}

export default BtnInsta;