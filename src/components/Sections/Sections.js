import React from 'react';

import Section from './Section/Section';

import './Sections.scss';

const Sections = props => {
    return (
        <div className="Sections">            
            <Section>
                {props.left}
            </Section>
            <Section>
                {props.right}
            </Section>
        </div>
    );
};

export default Sections;