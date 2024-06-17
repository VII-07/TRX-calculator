import React, { useState } from 'react';
import tronAppIcon from '../assets/2024-06-14_18.39.07-removebg-preview.svg'; // Update with your actual path
import '../style/SpinningIcon.css'; // Ensure you import the CSS file

const SpinningIcon: React.FC = () => {
    const [isFast, setIsFast] = useState(false);

    const handleClick = () => {
        setIsFast(true);
        setTimeout(() => {
            setIsFast(false);
        }, 1000); // Reset speed after 1 second
    };

    return (
        <img
            src={tronAppIcon}
            alt="tronAppIcon"
            className={`tronix__icon ${isFast ? 'tronix__icon--fast' : ''}`}
            onClick={handleClick}
        />
    );
};

export default SpinningIcon;