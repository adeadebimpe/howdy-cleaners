let toggle = () =>{
    let toggleBar = document.querySelector('.toggle-menu')
    let sideBar = document.querySelector('.menu-nav')
    let contianer = document.querySelector('.nav')
    
    toggleBar.addEventListener('click', ()=>{
        contianer.classList.toggle('active')
    })
}
toggle();