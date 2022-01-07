var dateEl = document.querySelector("#currentDay");
var containerEl = document.querySelector(".container");
var timeEl = document.querySelector(".hour");
var activityEl = document.querySelector(".description");
var saveEl = document.querySelector(".saveBtn");
var indexEl = document.querySelector("#id");
var rowEl = document.getElementsByClassName(".row");
var today = moment();
var index = 0;
var schedule = {
    stHour : ["08","09","10","11","12","13","14","15","16","17"],
    activity :["","","","","","","","","",""]
};  
      
$(document).ready(function()
{

    $("#currentDay").text(today.format("dddd, MMM Do, YYYY"));
    loadSchedule();
    setSchedule();

    function loadSchedule()
    {
         if (localStorage.getItem("schedule.activity") != null)
         {
             schedule.activity = JSON.parse(localStorage.getItem("schedule.activity"));
         }
    }     

    function setSchedule()
    {
      var todayHour = today.format("HH");

      for (var i = 0; i < schedule.stHour.length; i++)
        {
            activityEl = schedule.activity[i];
            $("#".concat(i)).val(activityEl);
               
            var checkHour = schedule.stHour[i];

            if (checkHour == todayHour)
            {
                $("#".concat(i)).addClass("present");
                console.log("new PRESENT");
            }
            else
            { 
                if (checkHour < todayHour)
                {
                    $("#".concat(i)).addClass("past");
                    console.log("new PAST");
                }
                else
                {
                    $("#".concat(i)).addClass("future");
                    console.log("new FUTURE");
                }
            }
        }    
    }
    
    function saveSchedule(index)
    {
        schedule.activity[index] =  $("#".concat(index)).val();
        window.localStorage.setItem("schedule.activity",JSON.stringify(schedule.activity)); 
    }

    document.getElementById("saveBtn0").addEventListener("click",function(){saveSchedule(0)});
    document.getElementById("saveBtn1").addEventListener("click",function(){saveSchedule(1)});
    document.getElementById("saveBtn2").addEventListener("click",function(){saveSchedule(2)});
    document.getElementById("saveBtn3").addEventListener("click",function(){saveSchedule(3)});
    document.getElementById("saveBtn4").addEventListener("click",function(){saveSchedule(4)});
    document.getElementById("saveBtn5").addEventListener("click",function(){saveSchedule(5)});
    document.getElementById("saveBtn6").addEventListener("click",function(){saveSchedule(6)});
    document.getElementById("saveBtn7").addEventListener("click",function(){saveSchedule(7)});
    document.getElementById("saveBtn8").addEventListener("click",function(){saveSchedule(8)});
    document.getElementById("saveBtn9").addEventListener("click",function(){saveSchedule(9)});
});