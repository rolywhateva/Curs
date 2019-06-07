class randomWeatherGenerator{
    constructor(min,max)
    {
    
        this.min=min;
        this.max=max;
        this.getTemperature=()=>Math.round(Math.random()*(max-min+1)+min);
        
    }
       giveTemperature(id)
       {
           let value = this.getTemperature()+"C";
           let targetElement = document.getElementById(id);
           if(targetElement!=null)
              targetElement.innerHTML=value;
           else 
           {
               console.log(this);
               console.log(`Can't give value  ${value} to id #${id}`);
           }
       }
}
class randomLocationGenerator{
    constructor()
    {
        this.locations = ["Paris","Rome","Barcelona","London","Bucharest","Chisinau","Budapest","Oradea","Cluj","Timisoara","Vien","Oslo","Prague"];
        this.getLocation=()=>Math.round(Math.random()*(this.locations.length-1));

    }
    giveLocation(id){
        let debug  = this.getLocation();
        let value = this.locations[debug];
        console.log(debug);
        let targetElement = document.getElementById(id);
        if(targetElement!=null)
           targetElement.innerHTML=value;
        else 
        {
            console.log(this);
            console.log(`Can't give value  ${value} to id #${id}`);
        }
    }


}
let currentLink=null;
function  activeLink(link)
{ 
    
     if(currentLink!=null)
     {
         currentLink.classList.remove("active");
         if(currentLink==link)
         {
             currentLink=null;
             return;
         }
     }
    currentLink = link;
    currentLink.classList.add("active");
}


window.onload = function () 
{ 

    let tempgenerator = new randomWeatherGenerator(-20,40);

    tempgenerator.giveTemperature("temp");

    let cityGenerator = new randomLocationGenerator();
    cityGenerator.giveLocation("location-name");

    
}




