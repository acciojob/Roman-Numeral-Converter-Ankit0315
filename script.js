function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	function convert(num)
		{ 
  if(num < 1)
  { return "";}
  if(num >= 40)
  { return "XL" + convert(num - 40);}
			
  if(num >= 10)
  { return "X" + convert(num - 10);}
  if(num >= 9)
  { return "IX" + convert(num - 9);}
  if(num >= 5)
  { return "V" + convert(num - 5);}
  if(num >= 4)
  { return "IV" + convert(num - 4);}
  if(num >= 1)
  { return "I" + convert(num - 1);}  
}

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
