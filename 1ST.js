 //sort the array and find sum of its elements

var array=[6,78,34,90,8,1,7,13,45,3,23],count=0,temp1,temp2,val;  //variable declartion
 console.log("Given Array = "+array); 
  for(temp1=0;temp1<=array.length;temp1++)
     {
        for(temp2=temp1+1;temp2<=array.length-1;temp2++)
           {
             if(array[temp1]>array[temp2])
               {
                 val=array[temp1];
                 array[temp1]=array[temp2];                  //using selection sort algorithm
                 array[temp2]=val;
               }
           }
     }
 console.log("Sorted array = "+array);
 val=0;
  for(temp1=0;temp1<array.length;temp1++)
     {
       val=val+array[temp1];
     }
 console.log("Sum of array elements = "+val);
 
