import React, { useState } from 'react';
import MDBDatepicker from 'mdb-react-ui-kit/modules/MDBDatepicker';

export default function App() {
    const [datepickerValue, setDatepickerValue] = useState('');

    return (
        <MDBDatepicker value={datepickerValue} setValue={setDatepickerValue} inputStyle={{ width: '22rem' }} />
    );
}