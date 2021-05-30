function starttime()
{
	er=setInterval("fun11()",1000)
}
var sec=59;
var min=2;
var er;
function fun11()
{
	if(min==0 && sec==0)
	{
		clearIntervals(er);
	}
	else if(sec==0)
	{
		min--;
		sec=59;
	}
	
	realtimer.innerHTML=min+":"+sec+" min left";
	
		sec--;
	

} 
