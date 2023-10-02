
/* dark theme */
let display=0;
function dark(){
    if(display==0){
    document.querySelector(":root").style.setProperty('--white','black');
    document.querySelector(":root").style.setProperty('--head','rgb(75, 65, 65)');
    document.querySelector(":root").style.setProperty('--black','white');
    document.querySelector(":root").style.setProperty('--lite','rgb(75, 65, 65)');
    document.querySelector(":root").style.setProperty('--green','grey');
    document.querySelector(":root").style.setProperty('--litegreen','black');
    display=1;
    }
    else{
        document.querySelector(":root").style.setProperty('--white','lightyellow');
        document.querySelector(":root").style.setProperty('--head','rgb(103, 13, 13)');
        document.querySelector(":root").style.setProperty('--black','black');
        document.querySelector(":root").style.setProperty('--lite','white');
        document.querySelector(":root").style.setProperty('--green','green');
        document.querySelector(":root").style.setProperty('--litegreen','rgb(60, 192, 60)');
        display=0;
    }
}
/* CARD*/


function card(){
    const aa=document.getElementById("q");
    const bb=aa.getElementsByTagName("tr");
    let cc=bb.length; 
if(cc>1){
    document.getElementById("q").style.display='table';
    document.getElementById("p").style.display='table';
    document.getElementById("order").style.display='table';
}
else{
    document.getElementById("s").style.display='content';
    
}
}
const cart=[];

/*ORDER ITEM */
function ordered(name,price){
    const items={names:`${name}`,prices:`${price}`}
    alert ("ADDED SUCCESSFULLY")
    cart.push(items);
    adding()
}
function adding(){
    const top=document.getElementById("q");
    top.innerHTML="";

    const topp=document.createElement("table");

    const he1=document.createElement("tr");
    
    const he11=document.createElement("th");
    const he22=document.createElement("th");
    const he33=document.createElement("th");
    const he44=document.createElement("th");

    const he4=document.createTextNode("S.NO");
    const he5=document.createTextNode("PRODUCT NAME");
    const he6=document.createTextNode("PRICE");
    const he=document.createTextNode("");

    top.appendChild(topp)

    topp.appendChild(he1)

    he1.appendChild(he11);
    he1.appendChild(he22);
    he1.appendChild(he33);
    he1.appendChild(he44);


    he11.appendChild(he4);
    he22.appendChild(he5);
    he33.appendChild(he6);
    he44.appendChild(he);


    
    let total=0;
    
    for(var i=0; i<cart.length; i++){
        var tota=cart[i];
        var product=tota.names;
        var amount=Number(tota.prices);

    total+=amount;
    document.getElementById("total").innerHTML=`${total}`;


    const main=document.createElement("tr");
    const dec=top.getElementsByTagName("tr");
    let sno=dec.length; 
    document.getElementById("countt").innerHTML=sno;

    const c1=document.createElement("td");
    const c2=document.createElement("td");
    const c3=document.createElement("td");
    const c4=document.createElement("td");

    const a1=document.createTextNode(sno);
    const a2=document.createTextNode(product);
    const a3=document.createTextNode(amount);
    const a4=document.createElement("button");
    a4.innerHTML=`<i class="fa-solid fa-trash"></i>`;
    a4.style.backgroundColor='var(--head)'
    a4.style.color='red'
    a4.style.padding='0px';
    a4.style.fontWeight='100';



    a4.addEventListener('click',remove)
    
    

    topp.appendChild(main);
    
    main.appendChild(c1);
    main.appendChild(c2);
    main.appendChild(c3);
    main.appendChild(c4);

    c1.appendChild(a1);
    c2.appendChild(a2);
    c3.appendChild(a3);
    c4.appendChild(a4);
    
    }
   
}

function remove(){
    cart.splice(0, 1);
    adding()
  
}
/*ORDER */
function order(){
    if(cart.length>0){
    window.alert("SUCCESFULLY ORDERED");
    cart.splice(0,cart.length)
    adding()
    document.getElementById("total").innerHTML=0;
    document.getElementById("countt").innerHTML="";

    }
    else{
        document.getElementById("total").innerHTML=0;

    }
}
function pho(){
    document.getElementById("pho").style.display='grid';
    document.getElementById("lap").style.display='none';
    document.getElementById("gad").style.display='none';
    document.getElementById("ind").style.display='none';
    document.getElementById("phone").style.borderBottom='2px solid white'
    document.getElementById("laptop").style.borderBottom='none'
    document.getElementById("gadget").style.borderBottom='none'
    document.getElementById("carouselExampleInterval").style.display='none';
    document.getElementById("aaa").style.display='none';
    document.getElementById("bbb").style.display='none';
    document.getElementById("ccc").style.display='none';
    document.getElementById("carouselExampleInterval1").style.display='none';

}
function lap(){
    document.getElementById("pho").style.display='none';
    document.getElementById("lap").style.display='grid';
    document.getElementById("gad").style.display='none';
    document.getElementById("ind").style.display='none';
    document.getElementById("laptop").style.borderBottom='2px solid white'
    document.getElementById("phone").style.borderBottom='none'
    document.getElementById("gadget").style.borderBottom='none'
    document.getElementById("carouselExampleInterval").style.display='none';
    document.getElementById("aaa").style.display='none';
    document.getElementById("bbb").style.display='none';
    document.getElementById("ccc").style.display='none';
    document.getElementById("carouselExampleInterval1").style.display='none';

}
function gad(){
    document.getElementById("pho").style.display='none';
    document.getElementById("lap").style.display='none';
    document.getElementById("gad").style.display='grid';
    document.getElementById("ind").style.display='none';
    document.getElementById("gadget").style.borderBottom='2px solid white'
    document.getElementById("laptop").style.borderBottom='none'
    document.getElementById("phone").style.borderBottom='none'
    document.getElementById("carouselExampleInterval").style.display='none';
    document.getElementById("aaa").style.display='none';
    document.getElementById("bbb").style.display='none';
    document.getElementById("ccc").style.display='none';
    document.getElementById("carouselExampleInterval1").style.display='none';

}
function home(){
    document.getElementById("pho").style.display='none';
    document.getElementById("lap").style.display='none';
    document.getElementById("gad").style.display='none';
    document.getElementById("ind").style.display='grid';
    document.getElementById("gadget").style.borderBottom='none'
    document.getElementById("laptop").style.borderBottom='none'
    document.getElementById("phone").style.borderBottom='none'
    document.getElementById("carouselExampleInterval").style.display='grid';
    document.getElementById("aaa").style.display='grid';
    document.getElementById("bbb").style.display='grid';
    document.getElementById("ccc").style.display='grid';
    document.getElementById("carouselExampleInterval1").style.display='grid';


}
