var Now = new Date();

var TimeCheck =
  {
    "Day": convertDay(Now),
    "Month": convertMonth(Now),
    "Date": Now.getDate(),
    "Year": Now.getFullYear(),
    "Hours": convertHours(Now),
    "Minutes":convertMinutes(Now),
    "Seconds": convertSeconds(Now),
    "AMPM": convertAMPM(Now)
  };
var Lunch =
  {
    "Hours": 11,
    "Minutes": 0,
    "Seconds": 0,
    "AMPM": "AM"
  };

var dayEnd =
  {
    "Hours": 5,
    "Minutes": 0,
    "Seconds": 0,
    "AMPM": "PM"
  };

var seconds = 0;

var flag = 0;

function getTime()
{
  seconds++;
  flag++;
  var Now = new Date();
  var DeltaSeconds, DeltaMinutes, DeltaHours, DeltaAMPM, LunchSeconds, LunchMinutes, LunchHours, LunchAMPM, EndSeconds, EndMinutes, EndHours, EndAMPM;

  var TimeObject = {
    "Day": convertDay(Now),
    "Month": convertMonth(Now),
    "Date": Now.getDate(),
    "Year": Now.getFullYear(),
    "Hours": convertHours(Now),
    "Minutes":convertMinutes(Now),
    "Seconds": convertSeconds(Now),
    "AMPM": convertAMPM(Now)
  };
  document.getElementById("Day").innerHTML = TimeObject.Day;
  document.getElementById("Month").innerHTML = TimeObject.Month;
  document.getElementById("Date").innerHTML = TimeObject.Date;
  document.getElementById("Year").innerHTML = TimeObject.Year;
  document.getElementById("Hours").innerHTML = TimeObject.Hours;
  document.getElementById("Minutes").innerHTML = TimeObject.Minutes;
  document.getElementById("Seconds").innerHTML = TimeObject.Seconds;
  document.getElementById("AMPM").innerHTML = TimeObject.AMPM;



  if(TimeCheck.Seconds!== TimeObject.Seconds)
  {
    //document.getElementById('Seconds').style.color='green';
    DeltaSeconds = seconds%60;
    if((seconds%60)<10)
    {
      DeltaSeconds = "0" + DeltaSeconds;
    }

  }
  else if(TimeCheck.Seconds === TimeObject.Seconds && (seconds/60) >= 1)
  {
    //document.getElementById('Seconds').style.color='green';
    DeltaSeconds = seconds%60;
    if((seconds%60)<10)
    {
      DeltaSeconds = "0" + DeltaSeconds;
    }
  }else{
    DeltaSeconds = "00";
  }

  if(TimeCheck.Minutes!== TimeObject.Minutes)
  {
    //document.getElementById('Minutes').style.color='#28B';
    DeltaMinutes = Math.floor((seconds/60)%60);
    if((seconds/60)<10)
    {
      DeltaMinutes = "0" + DeltaMinutes;
    }
  }
  else
  {
    DeltaMinutes = "00";
  }

  if(TimeCheck.Hours!== TimeObject.Hours)
  {
    //document.getElementById('Hours').style.color='green';
    DeltaHours = Math.floor(seconds/3600);
    if((seconds/3600)<10)
    {
      DeltaHours = "0" + DeltaHours;
    }
  }
  else
  {
    DeltaHours = "00";
  }

  if(TimeObject.AMPM == "AM")
  {
    LunchHours = (Lunch.Hours - TimeObject.Hours);
    LunchMinutes = 60 - TimeObject.Minutes;
    if(LunchHours === 0){
      LunchHours = '00';
    }
    if(LunchMinutes === 60){
      LunchHours+1;
      LunchMinutes='00';
    }
    if(LunchMinutes<10)
    {
      LunchMinutes = "0" + LunchMinutes;
    }
    LunchSeconds = 60 - TimeObject.Seconds;
    if(LunchSeconds<10)
    {
      LunchSeconds = "0" + LunchSeconds;
    }
    if(LunchSeconds === 0 && LunchMinutes === 0 )
    {
      Lunch.Hours = Lunch.Hours - TimeObject.Hours;
    }
    document.getElementById("hoursUntil").innerHTML = LunchHours;
    document.getElementById("minutesUntil").innerHTML = LunchMinutes;
    document.getElementById("secondsUntil").innerHTML = LunchSeconds;
  }
  else if(TimeObject.AMPM == "PM" && TimeObject.Hours == 12 && TimeObject.Minutes < 30)
  {
    document.getElementById("Lunch").innerHTML = "TIME FOR LUNCH!";
    document.getElementById("Lunch").style.color='#14FF00';
    document.getElementById("Lunch").style.fontSize='40px';
    document.getElementById("Lunch").style.fontWeight='Bold';

    if((flag%2))
    {
      setWhite();
    }
  }
  else if(TimeObject.AMPM == "PM" && ((TimeObject.Hours == 12 && TimeObject.Minutes > 30) || TimeObject.Hours < 5))
  {
    EndHours = (dayEnd.Hours - TimeObject.Hours) - 1;
    EndMinutes = 59 - TimeObject.Minutes;
    if(EndMinutes<10)
    {
      EndMinutes = "0" + EndMinutes;
    }
    EndSeconds = 60 - TimeObject.Seconds;
    if(EndSeconds<10)
    {
      EndSeconds = "0" + EndSeconds;
    }
    if(EndSeconds === 0 && EndMinutes === 0 )
    {
      dayEnd.Hours = dayEnd.Hours - TimeObject.Hours;
    }
    document.getElementById("End").innerHTML = "Until End of Work Day";
    document.getElementById("hoursUntil").innerHTML = EndHours;
    document.getElementById("minutesUntil").innerHTML = EndMinutes;
    document.getElementById("secondsUntil").innerHTML = EndSeconds;
  }
  else
  {
    document.getElementById("Lunch").innerHTML = "Day has ended";
    document.getElementById("Lunch").style.fontSize='16px';
    document.getElementById("Lunch").style.color='#14FF00';
  }

  document.getElementById("DeltaHours").innerHTML = DeltaHours;
  document.getElementById("DeltaMinutes").innerHTML = DeltaMinutes;
  document.getElementById("DeltaSeconds").innerHTML = DeltaSeconds;

}

function convertDay(Now)
{
  var Temp;
  var Test;
  var Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  Temp = Now.getDay();
  Test = Days[Temp];
  return Test;
}
function convertMonth(Now)
{
  var Temp;
  var Test;
  var Month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  Temp = Now.getMonth();
  Test = Month[Temp];
  return Test;
}
function convertHours(Now)
{
  var Temp;

  Temp = Now.getHours();

  if(Temp === 12)
  {

  }
  else if(Temp == 24)
  {
    Temp = 12;
  }
  else
  {
    Temp = Temp%12;
  }

  return Temp;
}
function convertMinutes(Now)
{
  var Temp = "";

  Temp = Now.getMinutes();
  if(Temp<10)
  {
    Temp = "0" + Temp;
  }
  return Temp;
}
function convertSeconds(Now)
{
  var Temp = "";

  Temp = Now.getSeconds().toString();
  if(Temp<10)
  {
    Temp = "0" + Temp;
  }
  return Temp;
}

function convertAMPM(Now)
{
  var Temp;
  var x;

  Temp = Now.getHours();
  if(Temp >= 12)
  {
    x = "PM";
  }
  else
  {
    x = "AM";
  }
  return x;
}

function setWhite()
{
  document.getElementById("Lunch").style.color='#222';
}

function timeDifference(currentTime, alarmTime)
{
  var CTSecs = 0;
  var ATSecs = 0;
  var diffArray = [];
  CTsecs = currentTime.getHours() * 60;
  CTsecs = CTsecs + currentTime.getMinutes();
  CTsecs = CTsecs * 60;
  ATsecs = alarmTime.getHours() * 60;
  ATsecs = ATsecs + alarmTime.getMinutes();
  ATsecs = ATsecs * 60;
}

window.onload = function()
{
  setInterval(function(){getTime();}, 1000);
  if(console === undefined)
  {
    console=function(){};
  }
};