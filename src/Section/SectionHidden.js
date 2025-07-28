import React, {useState} from 'react';
import '../App.css';
import ExpandButton from './content/ExpandButton';

const SectionHidden = ({ items }) => {
    const [contentVisible, setContentVisible] = useState(false);

    return (
        <div>
            {items.length ? (
                    <ExpandButton
                        contentVisible={contentVisible}
                        onClick={() => setContentVisible(prev => !prev)}
                    />
                ) : null}
            {contentVisible ? items : null}
        </div>
    );
};

export default SectionHidden;
