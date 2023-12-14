import React, { useState } from 'react';

function App() {
    const [isPopoutOpen, setIsPopoutOpen] = useState(false);

    const openPopout = () => {
        setIsPopoutOpen(true);
    };

    const closePopout = () => {
        setIsPopoutOpen(false);
    };

    return (
        <div>
            <button onClick={openPopout}>Open Popout</button>
            {isPopoutOpen && (
                <div className="popout">
                    <p>This is the popout content</p>
                    <button onClick={closePopout}>Close</button>
                </div>
            )}
        </div>
    );
}

export default App;
