
const navbar = document.getElementById("navbar");


const bardIcon = document.getElementById("bardIcon");
const menu = document.getElementById("menu");

const serviceBtn = document.getElementById("service-btn");
const serviceMenu = document.getElementById("service-menu");

const blogBtn = document.getElementById("blog-btn");
const blogMenu = document.getElementById("blog-menu");



console.log(menu)
bardIcon.onclick = () => {
    const classFound = menu.classList.contains("top-[-400%]");
    if (classFound) {
        menu.classList.remove("top-[-400%]");
        menu.classList.add("top-[80px]")
    } else {
        menu.classList.remove("top-[80px]");
        menu.classList.add("top-[-400%]")
    }
}
document.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navbar.classList.add("!bg-white");
    } else {
        navbar.classList.remove("!bg-white");
    }

});

const pathName=window.location.pathname;
const navLinks = document.querySelectorAll("#navbar li a"); 

console.log(pathName)
navLinks.forEach((link)=>{
    const href=link.getAttribute("href");
    console.log(link)
    console.log(href);
    let source;
    if(href.includes("#")){
        source=href.split("#")[1]
    }else{
        source=href.split(".")[0]

    }
    if(pathName.includes(`${source}`)){
        link.classList.add("active");
    }else{
        link.classList.remove("active");
    }
})

serviceBtn.addEventListener("mouseenter",()=>{
    serviceMenu.classList.remove("hidden")
    void serviceMenu.offsetWidth
    serviceMenu.classList.add("fade-up")
})
serviceBtn.addEventListener("mouseleave",()=>{
    serviceMenu.classList.add("hidden")
    void serviceMenu.offsetWidth
    serviceMenu.classList.add("fade-up")
})


blogBtn.addEventListener("mouseenter",()=>{
    blogMenu.classList.remove("hidden")
    void blogMenu.offsetWidth
    blogMenu.classList.add("fade-up")
})
blogBtn.addEventListener("mouseleave",()=>{
    blogMenu.classList.add("hidden")
    void blogMenu.offsetWidth
    blogMenu.classList.add("fade-up")
})