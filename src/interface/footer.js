import React from 'react';

function FooterPanel(props) {
    return (
        <footer className="bg-secondary main-footer text-center">
            {props.body}
        </footer>
    )

}

export default FooterPanel;