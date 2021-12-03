import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempPipe'
})
export class MyCustomPipe implements PipeTransform {

  transform(value: number, unit:string) {
    
if(value &&!isNaN(value)){
  
  if(unit==='C')
  {
var temp=(value-32)/1.8;
return temp.toFixed(2);
  }
  else if(unit==='F')
{
  var temp=(value*1.8)+32;
  return temp.toFixed(2);

}
}
return;
  }
  }
