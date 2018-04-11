var numbers=[54,2,78,1,24];
var aux;
var i;
var j;

 for( i=0; (i-1)<numbers.length; i++ )
    for( var j=(i+1); j<numbers.length; j++) {
      
      if ( numbers[i]>numbers[j] ) 
      {
         aux = numbers[j];
         numbers[j] = numbers[i];
         numbers[i] = aux;
		 
      }
    }
  
     
    for( i=0; i<=numbers.length; i++ )
{
    console.log(numbers[i]);
}


