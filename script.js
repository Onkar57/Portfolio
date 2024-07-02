console.log("Hello World");
function main() {
    const nav = document.querySelector(".nav")
    const ham = document.querySelector(".ham")
    ham.addEventListener("click", () => {
        nav.style.left = "0"
    })
document.querySelector(".cross").addEventListener("click",()=>{
    nav.style.left = "-100%"
})

}
main()