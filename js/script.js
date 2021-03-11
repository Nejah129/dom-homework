butnstagadd = document.getElementsByClassName("add")
buntnstagmins = document.getElementsByClassName("mins")
checkbutn=document.getElementsByClassName("check")
faskh=document.getElementsByClassName("image-logo-delate")
likelogo=document.getElementsByClassName("image-logo-like")


for( var i=0 ; i<butnstagadd.length ; i++){
    butnstagadd[i].addEventListener("click" ,add)
    checkbutn[i].addEventListener("click" , check )
    buntnstagmins[i].addEventListener("click" , mins )
    faskh[i].addEventListener("click" , faskhlo )
    likelogo[i].addEventListener("click" , likey)

}


function add(e){
    var buntnstagadd=e.target
    var tdElt = buntnstagadd.parentElement
    var inputstag =tdElt.querySelector(".qunatity")
    var qunatitys=Number(inputstag.value)
    qunatitys++
inputstag.value=qunatitys
var unitePriceelt=buntnstagadd.parentElement.parentElement.querySelector(".unite-price").innerHTML

var priceoOfArticl=unitePriceelt*qunatitys
var pricetag= buntnstagadd.parentElement.parentElement.querySelector(".price-of-prudct")
pricetag.innerHTML=priceoOfArticl





}
function check(e){
    var total=Number(document.getElementById("total").innerHTML)
    var totaltag=document.getElementById("total")
    
    var checktag=e.target
    if(checktag.checked===true){
        var price=Number(checktag.parentElement.parentElement.querySelector(".price-of-prudct").innerHTML)
        total=total+price
        totaltag.innerHTML=total
        var addtag=checktag.parentElement.parentElement.querySelector(".add")
        var mintag=checktag.parentElement.parentElement.querySelector(".mins")
        
            addtag.setAttribute("disabled",true)
            mintag.setAttribute("disabled",true)
            console.log(addtag)
        
        
    }
    else{
        var addtag=checktag.parentElement.parentElement.querySelector(".add")
        var mintag=checktag.parentElement.parentElement.querySelector(".mins")
        var price=Number(checktag.parentElement.parentElement.querySelector(".price-of-prudct").innerHTML)
        total=total-price
        totaltag.innerHTML=total
        addtag.removeAttribute("disabled") 
        mintag.removeAttribute("disabled") 


        
    }
    
}
function mins(e){
    var buntnstagmins=e.target
    var tdElt = buntnstagmins.parentElement
   
    var inputstagmin =tdElt.querySelector(".qunatity")
  
    var qunatitys=Number(inputstagmin.value)
    if(qunatitys>0){qunatitys--}
inputstagmin.value=qunatitys
var unitePriceelt=Number(buntnstagmins.parentElement.parentElement.querySelector(".unite-price").innerHTML)


var priceoOfArticl=unitePriceelt*qunatitys

var pricetag= (buntnstagmins.parentElement.parentElement.querySelector(".price-of-prudct"))
pricetag.innerHTML=priceoOfArticl

}
function faskhlo(e){
    var delatebuten=e.target
    
    var rowtab=delatebuten.parentElement.parentElement
    
    rowtab.remove()
}


function likey(e){
    var like=e.target
    like.style.color = "blue"
    
}

