


let y=document.getElementById("conform");

 y.disabled=true;      


add1=()=>{
    
let id = event.target.id

document.getElementById("foodcart").style.height="auto";
   
//console.log(id)    


//****************************************************creating element



let tr2=document.getElementById("carttr")
let td1=document.createElement("td")  ;
let tdid="carttd"+id
td1.setAttribute('id',tdid)
td1.setAttribute("class","carttd")
tr2.appendChild(td1)
console.log(document.getElementById(tdid).innerHTML)  

let td2=document.getElementById(tdid)
let div1=document.createElement("div");
let divid="cartdiv"+id
div1.setAttribute('id',divid)
div1.setAttribute("class","cartdiv")
td2.appendChild(div1)
//console.log(document.getElementById(divid).innerHTML)


//*****
let div2=document.getElementById(divid)

//******


let img1=document.createElement("img");
let imgid="cartimg"+id
img1.setAttribute('id',imgid)
img1.setAttribute("class","cartimg")
div2.appendChild(img1)
//console.log(document.getElementById(divid).innerHTML)


let pname=document.createElement("p");
let pnameid="cartname"+id
pname.setAttribute('id',pnameid)
pname.setAttribute("class","cartname")
div2.appendChild(pname)
//console.log(document.getElementById(divid).innerHTML)


let pcount=document.createElement("p");
let pcountid="cartcount"+id
pcount.setAttribute('id',pcountid)
pcount.setAttribute("class","cartcount")
div2.appendChild(pcount)
//console.log(document.getElementById(divid).innerHTML)


let pprice=document.createElement("p");
let ppriceid="cartprice"+id
pprice.setAttribute('id',ppriceid)
pprice.setAttribute("class","cartprice")
div2.appendChild(pprice)
//console.log(document.getElementById(divid).innerHTML)



let buttononem=document.createElement("button");
let buttononemid="onem"+id
buttononem.setAttribute('id',buttononemid)
buttononem.setAttribute("class","mpbutton1")
buttononem.setAttribute("type","button")
div2.appendChild(buttononem)
//console.log(document.getElementById(divid).innerHTML)


let buttontenm=document.createElement("button");
let buttontenmid="tenm"+id
buttontenm.setAttribute('id',buttontenmid)
buttontenm.setAttribute("class","mpbutton2")
buttontenm.setAttribute("type","button")
div2.appendChild(buttontenm)
//console.log(document.getElementById(divid).innerHTML)


let buttontenp=document.createElement("button");
let buttontenpid="tenp"+id
buttontenp.setAttribute('id',buttontenpid)
buttontenp.setAttribute("class","mpbutton3")
buttontenp.setAttribute("type","button")
div2.appendChild(buttontenp)
//console.log(document.getElementById(divid).innerHTML)


let buttononep=document.createElement("button");
let buttononepid="onep"+id
buttononep.setAttribute('id',buttononepid)
buttononep.setAttribute("class","mpbutton4")
buttononep.setAttribute("type","button")
div2.appendChild(buttononep)
//console.log(document.getElementById(divid).innerHTML)

let br=document.createElement("br")
div2.appendChild(br)
//console.log(document.getElementById(divid).innerHTML)


let buttonremove=document.createElement("button");
let buttonremoveid="r"+id
buttonremove.setAttribute('id',buttonremoveid)
buttonremove.setAttribute("class","removebutton")
buttonremove.setAttribute("type","button")
div2.appendChild(buttonremove)
//console.log(document.getElementById("carttr").innerHTML)



//***********************************************--


//★★★★★★★★★★Transfer  Values


let name=document.getElementById("name"+id).innerHTML;
let price=document.getElementById("price"+id).innerHTML;
let img=document.getElementById("img"+id).src;
//console.log(img)
//console.log(id,name,price)

document.getElementById("cartimg"+id).src=img
document.getElementById("cartname"+id).innerHTML=name;
document.getElementById("cartprice"+id).innerHTML=price;
//have some work


document.getElementById("cartcount"+id).innerHTML=1;

document.getElementById("onem"+id).innerHTML="-1"
document.getElementById("onem"+id).addEventListener("click",remove_1)

document.getElementById("onep"+id).innerHTML="+1"
document.getElementById("onep"+id).addEventListener("click",add_1);

document.getElementById("tenm"+id).innerHTML="-10"
document.getElementById("tenm"+id).addEventListener("click",remove_10)
document.getElementById("tenp"+id).innerHTML="+10" 
document.getElementById("tenp"+id).addEventListener("click",add_10);
document.getElementById("r"+id).innerHTML="remove"
document.getElementById("r"+id).addEventListener("click",remove)


//console.log(document.getElementById("carttr").innerHTML)


let y=document.getElementById("conform");
y.disabled=false;     
}






add2=()=>{

 let id = event.target.id
  
  
 let price=document.getElementById("price"+id).innerHTML;
 price=parseInt(price); 
    
 let count=document.getElementById("cartcount"+id).innerHTML;

 count=parseInt(count)
 count=count+1
// console.log( parseInt(count))
 document.getElementById("cartcount"+id).innerHTML=count;
 document.getElementById("cartprice"+id).innerHTML=price*count;

 let y=document.getElementById("conform");
y.disabled=false;        
}








add_1=()=>{
 
 
 let id = event.target.id
 
 
 
  
    
let id1=id.charAt(id.length-2); 
let id2=id.charAt(id.length-1); 
 
 
 let price=document.getElementById("price"+id1+id2).innerHTML;
 price=parseInt(price);   
 //console.log(id,id1,id2)
   
 let count=document.getElementById("cartcount"+id1+id2).innerHTML;

 count=parseInt(count)
 count=count+1;
// console.log( parseInt(count))
 document.getElementById("cartcount"+id1+id2).innerHTML=count;           
 document.getElementById("cartprice"+id1+id2).innerHTML=price*count;   

let y=document.getElementById("conform");
y.disabled=false;     
}



add_10=()=>{
let id = event.target.id

 
   
let id1=id.charAt(id.length-2); 
let id2=id.charAt(id.length-1); 
 let price=document.getElementById("price"+id1+id2).innerHTML;
 price=parseInt(price);    
 //console.log(id,id1,id2)
   
 let count=document.getElementById("cartcount"+id1+id2).innerHTML;

 count=parseInt(count)
 count=count+10;
// console.log( parseInt(count))
 document.getElementById("cartcount"+id1+id2).innerHTML=count;           
 document.getElementById("cartprice"+id1+id2).innerHTML=price*count;   

let y=document.getElementById("conform");
y.disabled=false;     
}




remove_10=()=>{   
 let id = event.target.id
 
 
   
let id1=id.charAt(id.length-2); 
let id2=id.charAt(id.length-1); 
 let price=document.getElementById("price"+id1+id2).innerHTML;
 price=parseInt(price); 
//console.log(id,id1,id2)
   
 let count=document.getElementById("cartcount"+id1+id2).innerHTML;

 count=parseInt(count)
 
// console.log( parseInt(count))
if(count>10){
 count=count-10;
 document.getElementById("cartcount"+id1+id2).innerHTML=count;     
 document.getElementById("cartprice"+id1+id2).innerHTML=price*count;      
}
 else{
    remove()
}

    
}



remove_1=()=>{
    
 let id = event.target.id
 
 
 
    
let id1=id.charAt(id.length-2); 
let id2=id.charAt(id.length-1); 
 let price=document.getElementById("price"+id1+id2).innerHTML;
 price=parseInt(price); 
 //console.log(id,id1,id2)
   
 let count=document.getElementById("cartcount"+id1+id2).innerHTML;

 count=parseInt(count)
// console.log( parseInt(count))
 if(count>1){
 count=count-1;
 document.getElementById("cartcount"+id1+id2).innerHTML=count;   
 document.getElementById("cartprice"+id1+id2).innerHTML=price*count        
}
 else if(count==1){
    remove()
}

}






remove=()=>{
    
let id = event.target.id
   
let id1=id.charAt(id.length-2); 
let id2=id.charAt(id.length-1); 
//console.log("carttd"+id1+id2) 
let td=document.getElementById("carttd"+id1+id2);
let tr=document.getElementById("carttr");
tr.removeChild(td);  
let y=document.getElementById("conform");
y.disabled=true;     
}










add=()=>{
let id = event.target.id

let check=document.getElementById("carttd"+id);


//console.log(check)
if (check==null){
    add1()
    }

else{
  add2()
}
    
    

}














