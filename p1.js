/*function sayhallow()
{
var x=4;
var  r=( x>15)? "hay":"bay";
alert(r);

}
function Chick( )
{
var  r=prompt("Eenter your age ");
alert ("your age is "+r);
let resalt =confirm("are you showr");
 (resalt==true)?alert("thanks"):alert("try agein")+Chick();

}
 function Chick( )
{ 
    var string ="Mahmoud Nasr";
    var x=string.length;*/
//alert("the length of the name is"+x);
   
//var Y=string.toUpperCase();
//alert(Y.bold());
//alert(string.substring(4 ,7))
//document.write(Y);
// var n = new Number(12783213.13213);
 // document.write(n.toString(2));

//}


/*
function Chick(){
    //var arr1=[2,4,8,5,1,3,5,132,5,7,8,9,5,32,1,,6,8,8,79,0,42,21,7,54,642,4,3142];
    var len=parseInt(prompt("please enter your lenght of array"));
var arr1=[];
    for(let a=0;a<len;a++){
        var num=prompt("enter array element of index:{ "+(a+1)+"}");
        arr1.push(num);
    }
    prompt
    alert("Your array befor sorting [ "+arr1+" ]");
    
    l=arr1.length;
    alert(l);
    l=parseInt(l);
   for(let i =0 ;i<l-1;i++){   
    i=parseInt(i);
     
    for(let j=i+1;j<l;j++){
        j=parseInt(j);

        if(arr1[j]<=arr1[i]){
    var x = arr1[i];
    arr1[i] = arr1[j] ;
         arr1[j] =x ;
        }
    }
   }
   alert("your array after sorting [ " + arr1 +" ]");
}*/













function Chick(){
    var reg=/^J.*t/i    ;

    var str="Javas cri vp  t";

    var resalt=str.split( " ");
    for (let word in str)  
      alert(resalt[word]);   

}
