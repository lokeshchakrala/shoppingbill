function submit(){
    var item=document.getElementById("itemname1").value;
     let name=document.getElementById("custname").value;
    var phone=document.getElementById("custphn").value;
    var quantity=document.getElementById("itemquant1").value;
    var price=document.getElementById("itemnum").value;
    
    
    if(item=="apple")
        {
             document.getElementById("cus1").innerHTML=name;
            document.getElementById("itemdis1").textContent="Apple";
            document.getElementById("cus2").innerHTML=quantity;
            document.getElementById("cus3").innerHTML=phone;
            document.getElementById("itemp").innerHTML=price;
            document.getElementById("cus4").innerHTML=price*quantity;
            
        }
    
    else if(item=="kiwi")
        {
             document.getElementById("cus1").innerHTML=name;
            document.getElementById("itemdis1").textContent="kiwi";
            document.getElementById("cus2").innerHTML=quantity;
            document.getElementById("cus3").innerHTML=phone;
            document.getElementById("itemp").innerHTML=price;
            document.getElementById("cus4").innerHTML=price*quantity;
           
            
        }
    else if(item=="banana")
        {
             document.getElementById("cus1").innerHTML=name;
            document.getElementById("itemdis1").textContent="Banana";
            document.getElementById("cus2").innerHTML=quantity;
            document.getElementById("cus3").innerHTML=phone;
            document.getElementById("itemp").innerHTML=price;
            document.getElementById("cus4").innerHTML=price*quantity;
           
            
        }
    else if(item=="graps")
        {
             document.getElementById("cus1").innerHTML=name;
            document.getElementById("itemdis1").textContent="Graps";
            document.getElementById("cus2").innerHTML=quantity;
            document.getElementById("cus3").innerHTML=phone;
            document.getElementById("itemp").innerHTML=price;
            document.getElementById("cus4").innerHTML=price*quantity;
           
            
        }
    
    else if(item=="pineapple")
        {
             document.getElementById("cus1").innerHTML=name;
            document.getElementById("itemdis1").textContent="Pine Apple";
            document.getElementById("cus2").innerHTML=quantity;
            document.getElementById("cus3").innerHTML=phone;
            document.getElementById("itemp").innerHTML=price;
            document.getElementById("cus4").innerHTML=price*quantity;
           
            
        }
    else{
        alert("Out of Stock");
    }
}