export function TxtSlice (txt:string,maxLength:number=50):string{
  if(txt.length>maxLength){
    return txt.slice(0,maxLength)+'...';
  }
  return txt;
}