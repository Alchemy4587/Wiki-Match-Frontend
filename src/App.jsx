import React from 'react';
import MoreDescription from './more-description';
import ConfirmEditData from './edit-data';
import Congratulations from './congratulations';

function App() {
    return (
        <div className="p-4 w-full">
            <MoreDescription />
            <ConfirmEditData />
            <Congratulations />
        </div>
    );
}

export default App;
