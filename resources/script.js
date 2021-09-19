var type = new Typed('.typing-text',{
    strings : ["","React Developer","Web designer","Freelancer","Web Developer"],
    typeSpeed : 100,
    loop : true
});

let themeColor = document.querySelectorAll('.theme-toggler span');
themeColor.forEach(color => color.addEventListener('click', ()=>{
    let background = color.style.background;
    document.querySelector('body').style.background = background;
}));
