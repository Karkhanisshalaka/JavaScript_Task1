function Second_Largest() {
    let a = 10, b = 50, c = 30, largest=0, smallest=0;
    
    if(a==b || b==c || a==c)
    {
        console.log("Numbers Shoud be Different");
    }
    // find Largest
    if(a>=b && a>=c)
    {
        largest=a;
    
    } else if(b>=a && b>=c){
        
        largest=b;
    
    }else{
        largest=c;
     }
    
    // Find Smallest
    if(a<=b && a<=c)
    {
    smallest=a;
    
    }else if(b<=a && b<=c){
    
        smallest=b;
    
    }else{
        smallest=c;
    }
    SecondLargest= (a+b+c) - (largest+smallest)
    console.log("Second Largest No. is" +SecondLargest);      
    
}

Second_Largest();