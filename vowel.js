var stm=document.getElementById("statement");
var val=document.getElementById("demo");
var contain=document.getElementById("container");
function stringEnter(){
  var str1= window.prompt("Enter a string to count the number of vowels");
  stm.innerHTML+=str1;
  var value=vowel_count(str1);
  val.innerHTML+=value;
 contain.style.display="block";
}

function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}

