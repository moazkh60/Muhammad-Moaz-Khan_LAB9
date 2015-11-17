(function(){

  angular.module('App',[]).controller('TableController',TableController);
  
  function TableController(){
    var current=this,
        date=new Date(),
        dates=[31,28,31,30,31,30,31,31,30,31,30,31],
        months=["January", "February", "March", "April", "May", "June","July", "August",
				 "September", "October", "November", "December"];
    
    current.month		=	date.getMonth();
    current.monthName	=	months[current.month];
    current.year		=   date.getFullYear();
    current.todaysDate  =	date.getDate();
    
    var monthStartDate  	=	new Date(date.getFullYear(), current.month,1);
    current.monthStartDay	=	monthStartDate.getDay();
    var weeksInMonth 		=	Math.floor((dates[current.month]+date.getDay())/7);
    
    dates[1]+=CheckLeapYear(current.year)?1:0;   
    current.week=[];
    date_number=1;
    for(i=0; i < weeksInMonth; i++){
      current.week[i]=[];
      
      for(j=0; j<7; j++){
        if(i==0 && j < current.monthStartDay){ // Setting first week       
          current.week[i][j]="";
        }
        else{
          if(date_number <= dates[current.month]){
            current.week[i][j]=date_number;
            date_number++;
          }          
        }
      }// end for dates
    }// end for week
    
    function CheckLeapYear(year){
      return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }
      
  }
})();