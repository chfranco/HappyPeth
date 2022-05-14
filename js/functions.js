window.addEventListener("load", () => {
    document.body.classList.remove("preload")
})

document.addEventListener('DOMContentLoaded', () =>{
    const nav = document.querySelector(".nav")

    document.querySelector("#btnNav").addEventListener("click", ()=>{
        nav.classList.add("nav-open")
    })

    document.querySelector(".nav-overlay").addEventListener("click", ()=>{
        nav.classList.remove("nav-open")
    })


    document.querySelector(".close").addEventListener("click", ()=>{
        nav.classList.remove("nav-open")
    })

})