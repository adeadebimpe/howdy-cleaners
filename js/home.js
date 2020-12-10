let toggle = () =>{
    let toggleBar = document.querySelector('.toggle-menu')
    let sideBar = document.querySelector('.nav')

    toggleBar.addEventListener('click', ()=>{
        toggleBar.classList.toggle('active');
        sideBar.classList.toggle('active');
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

