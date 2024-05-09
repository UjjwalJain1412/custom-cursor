var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove", function(hi){
    crsr.style.left = hi.x+ "px"
    crsr.style.top = hi.y+ "px"
})