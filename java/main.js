let a=document.querySelector("a.a1")
console.log(a);
a.addEventListener("mouseenter",function(e){
    if(e.target.nextElementSibling){
       e.target.nextElementSibling.style.display="block"
    }

})
a.addEventListener("mouseleave",function(e){
    if(e.target.nextElementSibling){
        e.target.nextElementSibling.style.display="none"
    }

})


let ab=document.querySelector("a.a2")
console.log(ab);
ab.addEventListener("mouseenter",function(e){
    if(e.target.nextElementSibling){
        e.target.nextElementSibling.style.display="block"
    }

})
ab.addEventListener("mouseleave",function(e){
    if(e.target.nextElementSibling){
        e.target.nextElementSibling.style.display="none"
    }

})


let abc=document.querySelector("a.a3")
console.log(ab);
abc.addEventListener("mouseenter",function(e){
    if(e.target.nextElementSibling){
        e.target.nextElementSibling.style.display="block"
    }

})
abc.addEventListener("mouseleave",function(e){
    if(e.target.nextElementSibling){
        e.target.nextElementSibling.style.display="none"
    }

})
let i=document.querySelector("i")
console.log(i);
i.addEventListener("click",function(e){
    if(e.target.nextElementSibling.style.display==="none"){
        e.target.nextElementSibling.style.display="block"
    }else{
        e.target.nextElementSibling.style.display="none"

    }

})
