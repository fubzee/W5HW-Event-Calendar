# Work Day Scheduler 
https://fubzee.github.io/W5HW-Event-Calendar/

### The Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. 

## How it works!

When you click on the URL, each hour of the work day, starting at 8:00 am in the morning and ending at 05:00 pm in the afternoon is displayed and allows the user to enter an event or avtivity planned for that hour:

![image](https://user-images.githubusercontent.com/94102473/148539389-a11a7bf6-c76d-4f31-a86d-2077b86eaebf.png

Depending on when you launch the calendar, the hour is represented with the following colour coding: 

- Grey - the hour/s is/have passed 
- Red - represents the current hour
- Green - available hours

Once an activity is entered and the save button is clicked, the activity for that hour is saved.  If you launch the calendar at another date / time the events captured are still available.  This means you can launch the calendar the day before and capture your activities planeed for the next day.  If you no longer want or need to the activity you can remove the activity from the calendar and save.  

The program uses the Moment.js library to work to display the current date : ![image](https://user-images.githubusercontent.com/94102473/148540417-a959cd43-9dc8-4491-bd93-af0510178aa4.png)
Hour values were dervived basedon the 24 hour clock to work out the colour coding of the schedule's hours.  


