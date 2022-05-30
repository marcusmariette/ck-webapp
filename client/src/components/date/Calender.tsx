import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


export default function BookingSelector() {

    /* Setup: These variables are required throughout the booking process  */
    const [dateTimeInput, setValue] = React.useState< Date | null >(new Date(),);
    const [nameInput, setName] = React.useState('');
    const [disableButton, setBool] = React.useState(true);
    const [feedbackMessage, setMsg] = React.useState('');
    const [retry, setRetry] = React.useState(false)
    const minTime = new Date();
    const maxTime = new Date();
    minTime.setHours(9);
    minTime.setMinutes(0);
    maxTime.setHours(16);
    maxTime.setMinutes(59);
    
    
    /* Execution: This method carries out all the logic regarding booking avaliability and data storage. */
    const checkAvaliability = (date: Date| null, name) => { 
        var bookings;
        let bool = false;   
        if (localStorage.getItem('bookings')== null){
            bookings = {name: [], date: [], time: []};
        }else{
            bookings = JSON.parse(localStorage.getItem('bookings')!);
        }
        if(date == null){
            setMsg("Error: Date and Time cannot be of type NULL, please reform your input.");
            bool = true;
            return feedbackMessage;
        }else{
            var dateString = fixFormat(date.getDate()) + '/' + fixFormat(date.getMonth()) + '/' + date.getFullYear();
            var timeString =  fixFormat(date.getHours()) + ':' + fixFormat(date.getMinutes());
            var dateAlert = fixFormat(date.getDate()) + '/' + fixFormat(date.getMonth()+1) + '/' + date.getFullYear();;
            if (bookings.date.includes(dateString)){
                bookings.date.forEach(function(element,index) 
                {
                    if((element === dateString) && (bookings.time[index] === timeString))
                    {
                        bool = true;
                    }
                });               
            }
            if(bool)
            {
                setRetry(bool);
                return;
            }else{
            bookings.name.push(name);
            bookings.date.push(dateString);
            bookings.time.push(timeString);
            localStorage.setItem("bookings", JSON.stringify(bookings));
            setMsg("Congratulations " + name + ", You have successfully booked for the " + dateAlert + " at " + digital(date.getHours()) + ':' + fixFormat(date.getMinutes()) + AmPm(date.getHours()) + ".");
            return feedbackMessage;  
            }     
        }
    } 

    /* Display: This method disables timeslots on the calender if they are in the past. */
    const minTimeFix = (input: Date|null) => {
        var now = new Date();
        if (input != null){
            if ((now.getDate() === input.getDate()) && (now.getMonth() === input.getMonth()) && (now.getFullYear() === input.getFullYear())){
                if ((now.getHours() > minTime.getHours())){
                    return now;
                }
            }else{
                return minTime;
            }
        }
        return minTime;
    }
    /* Display: this method formats numbers for a nicer display. */
    const fixFormat = (number) => {
        if (number < 10){
            return ("0" + number.toString());
        }else{
            return number.toString();
        }
    }

    /* Display: this method formats numbers for a nicer display. */
    const digital = (hour) =>{
        if (hour > 12){
            hour -= 12;
            return hour.toString();
        }else{
            return hour.toString();
        }
    }

    /* Display: this method formats numbers for a nicer display. */
    const AmPm = (hour) => {
        if (hour < 12)
            return 'am'
        else{ 
            return 'pm'
        }

    }

    /* Submit: Submits form and loads next page if form entries are valid, otherwise displays an error message. */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!retry){
            localStorage.setItem('message', JSON.stringify(feedbackMessage));
            setRetry(false);
            window.location.pathname = '/booking-success';
        }else{
            alert("Please select another date as we are fully booked for the timeslot selected.")
            window.location.pathname = '/booking';
            setRetry(false);
        }
        
    }
    
  return (
    <> 
        <Grid marginLeft = "40px" >
            <form onSubmit={handleSubmit}>
                <Grid marginTop = "20px">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                        minDate={(new Date())}
                        minTime = {minTimeFix(dateTimeInput)}
                        maxTime = {maxTime}
                        minutesStep={30}
                        label="Please Select a Date & Time:"
                        inputFormat='dd/MM/yyy hh:mm aaa'
                        renderInput={(params) => <TextField {...params} />}
                        value={dateTimeInput}
                        onChange={(newValue) => {
                            setValue(newValue);
                            setBool(false);
                        }}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid justifyContent="center" marginBottom="20px">
                    <TextField 
                    required 
                    id="outlined-basic" 
                    label="Booking Name:" 
                    variant="outlined" 
                    sx={{ minWidth: '88%', marginTop: '4%'}}
                    value = {nameInput}
                    onChange = {(newValue) => {setName(newValue.target.value)}}
                    />
                    <Button  
                    disabled = {disableButton} 
                    onClick = {() => checkAvaliability(dateTimeInput, nameInput)} //change this to submit the form later
                    variant='contained' 
                    type='submit' 
                    sx={{ minWidth: '88%', marginTop: '4%'}}
                    >
                        Book
                    </Button>
                </Grid>
            </form>
        </Grid>
    </>
  );
};