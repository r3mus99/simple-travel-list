import React, { useState, useCallback } from 'react';
import '../App.css';
import ItemButton from './content/ItemButton';
import SectionHidden from './SectionHidden';
import SectionHeader from './SectionHeader';
import SectionVisible from './SectionVisible';

const Section = (props) => {
    const {header, items, color, backgroundColor} = props.section;
    const [itemsChecked, setItemsChecked] = useState([]);
    const [itemsHidden, setItemsHidden] = useState([]);
    const [itemsVisible, setItemsVisible] = useState(items);

    const isItemChecked = useCallback(
        (item) => itemsChecked.includes(item),
        [itemsChecked]
    );

    const isItemVisible = useCallback(
        (item) => itemsVisible.includes(item),
        [itemsVisible]
    );

    const handleItemChange = useCallback(
        (item) => {
            if (isItemChecked(item)) {
                setItemsChecked((prev) => prev.filter((h) => h !== item));
            } else {
                setItemsChecked((prev) => [...prev, item]);
            }
        },
        [isItemChecked]
    );

    const handleItemVisibilityChange = useCallback(
        (item) => {
            if (isItemVisible(item)) {
                setItemsVisible((prev) => prev.filter((h) => h !== item));
                setItemsHidden((prev) => [...prev, item]);
            } else {
                setItemsHidden((prev) => prev.filter((h) => h !== item));
                setItemsVisible((prev) => [...prev, item]);
            }
        },
        [isItemVisible]
    );

    const mapItem = useCallback(
        (item) => (
            <ItemButton
                key={item}
                label={item}
                color={color}
                id={item}
                onChange={handleItemChange}
                onVisibilityChange={handleItemVisibilityChange}
                checked={isItemChecked(item)}
                visible={isItemVisible(item)}
            />
        ),
        [handleItemChange, handleItemVisibilityChange, isItemChecked, isItemVisible]
    );

    const itemsVisibleMapped = itemsVisible.map(mapItem);
    const itemsHiddenMapped = itemsHidden.map(mapItem);

    const itemsCheckedLength = itemsChecked.filter(isItemVisible).length;
    const progress =
        itemsVisible.length > 0
            ? (itemsCheckedLength / itemsVisible.length) * 100
            : 0;

    return (
        <div className="Section" style={{backgroundColor: backgroundColor}}>
            <SectionHeader
                header={header}
                color={color}
                itemsChecked={itemsCheckedLength}
                itemsAll={itemsVisible.length}
            />
            <SectionVisible items={itemsVisibleMapped} progress={progress} />
            <SectionHidden items={itemsHiddenMapped} />
        </div>
    );
};

export default Section;
