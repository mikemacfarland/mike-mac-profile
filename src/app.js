

const scrollItems = [
    {name:'Javascript',icon:''},
    {name:'CSS',icon:''},
    {name:'Sass',icon:''},
    {name:'Tailwind',icon:''},
    {name:'React',icon:''},
    {name:'HTML',icon:''},
    {name:'Illustrator',icon:''},
    {name:'Premier',icon:''},
    {name:'Qwik',icon:''}
  ]

//   sections
const about = document.querySelector('#about')
const skills = document.querySelector('#skills')
const contact = document.querySelector('#contact')

// elements
const nameHeading = document.querySelector('#h1-1')
const titleHeading = document.querySelector('#h1-2')
const aboutHeading = about.querySelector('h1')
const skillsHeading = skills.querySelector('h1')
const contactHeading = contact.querySelector('h1')
const aboutP = about.querySelectorAll('p')
const techList = about.querySelector('.tech_list')
const contactBtns = document.querySelectorAll('.contact')
const sliders = document.querySelectorAll('.slider')
const skillsList = skills.querySelectorAll('li')

// initial opacity for elements in hero section
setTimeout(()=>{nameHeading.className='show'},300)
setTimeout(()=>{titleHeading.className='show'},700)
setTimeout(()=>{contactBtns[0].classList.add('show')},1100)

// event listener for scrolling
window.addEventListener('scroll',()=>{
const scroll = window.scrollY
const getPos = (el)=>{
    const scrollData ={
        scrollHeight:document.body.scrollHeight,
        windowHeight:window.innerHeight,
        windowTop:window.scrollY,
        elementBottom:window.innerHeight - el.getBoundingClientRect().bottom,
        elementTop:el.getBoundingClientRect().top,
        windowBottom:window.scrollY + window.innerHeight
    }
    return scrollData
}

console.log(getPos(skillsHeading))

    // conditionals and expressions for setting element styles/classes based on scroll position
    getPos(nameHeading).elementTop < 120 ? nameHeading.className = 'hidden-left' : nameHeading.className = 'show'
    getPos(titleHeading).elementTop < 80 ? titleHeading.className = 'hidden-right' : titleHeading.className = 'show'
    getPos(contactBtns[0]).elementTop < 100 ? contactBtns[0].classList.remove('show') : contactBtns[0].classList.add('show')
    if(getPos(aboutHeading).elementBottom > 100){
        aboutHeading.classList.add('show')
        setTimeout(()=>{aboutP.forEach((p)=>p.classList.add('show'))},400)
        setTimeout(()=>{techList.classList.add('show')},800)
    }
    getPos(skillsHeading).elementBottom > 130 ? skillsHeading.classList.add('show') : skillsHeading.classList.remove('show')

    skillsList.forEach((skill)=>{
        getPos(skill).elementBottom > 130 ? skill.classList.add('show') : skill.classList.remove('show') 
    })
    
    getPos(contactHeading).elementBottom > 100 ? contactHeading.className = 'show' : contactHeading.className = 'hidden-left'
    getPos(contactBtns[1]).elementBottom > 140 ? contactBtns[1].className = 'show' : contactBtns[1].className = 'hidden-right'
})

const Bullet =(item)=> {
    return (
        `<li class='bullet'>
            <div class='bullet_icon'></div>
            <p>${item.name}</p>
        </li>`
    )
}

const ScrollItem = (item)=> {
    return (
    `<div class='_item' ><p>*</p>${item.name}</div>`
    )
}

scrollItems.map((item)=>{
    techList.innerHTML += Bullet(item)
    sliders.forEach((slider)=>{
        slider.innerHTML += ScrollItem(item)
    })
})
