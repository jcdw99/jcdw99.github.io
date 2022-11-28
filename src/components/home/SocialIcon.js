import React from 'react';

function SocialIcon(props) {
    const {link, icon, label, visible} = props;
    return (
        <a target="_blank" aria-label={label} style={{visibility: visible ? 'visible':'hidden'}}
           rel="noopener noreferrer" href={link}>
            <i className={icon} aria-hidden="true"/>
        </a>
    );
}

export default SocialIcon;