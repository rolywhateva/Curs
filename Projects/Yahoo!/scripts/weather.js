(function(){
  export default  class RandomWeatherGenerator{
        constructor(min,max)
        {
        
            this.min=min;
            this.max=max;
            this.getTemperature=()=>Math.round(Math.random()*(max-min+1)+min);
        
        }
           giveTemperature(id)
           {
               let value = getTemperature();
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
}());
  






