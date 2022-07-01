import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const Calendar = () => {
    return (
        <div className='flex justify-center'>
            <DayPicker
                required
                mode="single"
            />
        </div>
    );
};

export default Calendar;