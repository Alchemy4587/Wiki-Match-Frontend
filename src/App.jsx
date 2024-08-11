import React from 'react';
import MoreDescription from './more-description';
import ConfirmEditData from './edit-data';
import Congratulations from './congratulations';
import SelectDropDown from './slect-dropdown';

function App() {
    return (
        <div className="p-4 w-full">
            <MoreDescription />
            <ConfirmEditData />
            <Congratulations />
            <SelectDropDown />
        </div>
    );
}

export default App;
