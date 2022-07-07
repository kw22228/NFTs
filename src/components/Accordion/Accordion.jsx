import React, { useState } from 'react';
import * as s from './Accordion.style';

import { Minus } from '../../Icons/Minus';
import { Plus } from '../../Icons/Plus';

const Accordion = ({ title, children }) => {
    const [collapse, setCollapse] = useState(false);

    return (
        <s.Container onClick={() => setCollapse(prev => !prev)}>
            <s.Title>
                <s.Name>
                    <span>{title}</span>
                </s.Name>
                <s.Indicator>{collapse ? <Minus /> : <Plus />}</s.Indicator>
            </s.Title>
            <s.Reveal clicked={collapse}>{children}</s.Reveal>
        </s.Container>
    );
};

export default Accordion;
