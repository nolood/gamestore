import React from 'react';
import {useNavigate} from "react-router-dom";
import './BackBtnStyle.scss'

const BackBtn = () => {
    const navigate = useNavigate()
    return (
        <div className='backbtn' onClick={() => navigate(-1)}>
            Back
        </div>
    );
};

export default BackBtn;
