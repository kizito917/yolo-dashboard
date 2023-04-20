// External imports
import * as React from 'react';
import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Grid from '@mui/material/Grid';


export default function Calendar() {
    const [date, setDate] = React.useState(new Date());
    return (
        <div className="bg-default rounded-md pt-4">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Grid container>
                    <Grid item xs={12} md={12}>
                    <DateCalendar date={date} onChange={(newDate) => setDate(newDate)} />
                    </Grid>
                </Grid>
            </LocalizationProvider>
        </div>
    );
}
