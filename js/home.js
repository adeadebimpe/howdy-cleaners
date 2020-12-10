let toggle = () =>{
    let toggleBar = document.querySelector('.toggle-menu')
    let sideBar = document.querySelector('.nav-menu')
    let contianer = document.querySelector('.header')

    
    toggleBar.addEventListener('click', ()=>{
        contianer.classList.toggle('active')
        sideBar.classList.toggle('active')
    })
}
toggle();
let setContact = () =>{
    let contactBtn = document.querySelector('.contact-btn')
    let contact = document.querySelector('.form')
    let contianer = document.querySelector('.form-container')

    
    contactBtn.addEventListener('click', ()=>{
        // contactBtn = contact;
        contact.classList.toggle('show')
        // contianer.classList.toggle('active')
    })
}
setContact();

