import React from 'react';
import StoreCustom from './StoreCustom';
import StoreDogPick from './StoreDogPick';
import StoreCatPick from './StoreCatPick';

const StoreMain = () => {
    return (
        <div>
            <StoreCustom />
            <div>
                배너
            </div>
            <div>
                2배너
            </div>
            <StoreDogPick />
            <StoreCatPick />
        </div>
    );
};

export default StoreMain;