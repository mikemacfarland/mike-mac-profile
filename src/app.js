

const scrollItems = [
    {name:'Javascript',icon:''},
    {name:'CSS',icon:''},
    {name:'Sass',icon:''},
    {name:'Tailwind',icon:''},
    {name:'React',icon:''},
    {name:'HTML',icon:''},
    // {name:'Illustrator',icon:''},
    // {name:'Premier',icon:''},
    // {name:'Qwik',icon:''}
  ]

// variables
const scrollDisable = false

// sections
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
const contactLink = document.querySelector('.contact_link')
const sliders = document.querySelectorAll('.slider')
const skillsList = skills.querySelectorAll('li')

// initial opacity for elements in hero section
setTimeout(()=>{nameHeading.className='show'},300)
setTimeout(()=>{titleHeading.className='show'},700)
setTimeout(()=>{contactLink.classList.add('show')},1100)

// event listener for scrolling
window.addEventListener('scroll',()=>{

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

    // conditionals and expressions for setting element styles/classes based on scroll position
    getPos(nameHeading).elementTop < 120 ? nameHeading.className = 'hidden-left' : nameHeading.className = 'show'
    getPos(titleHeading).elementTop < 80 ? titleHeading.className = 'hidden-right' : titleHeading.className = 'show'
    getPos(contactLink).elementTop < 100 ? contactLink.className = ('hidden') : contactLink.className = ('show')
    if(getPos(aboutHeading).elementBottom > 100){
        aboutHeading.classList.add('show')
        setTimeout(()=>{aboutP.forEach((p)=>p.classList.add('show'))},400)
        setTimeout(()=>{techList.classList.add('show')},800)
    }
    getPos(skillsHeading).elementBottom > 80 ? skillsHeading.className = 'show' : skillsHeading.className = 'hidden'
    getPos(contactHeading).elementBottom > 100 ? contactHeading.className = 'show' : contactHeading.className = 'hidden-left'
    // if there are two contact links use this with a indexer
    // getPos(contactLink).elementBottom > 120 ? contactLink.className = 'show' : contactLink.className = 'hidden-right'

    // for screens smaller than 767px
    if(window.innerWidth < 1023){
        getPos(skillsList[0]).elementBottom > 80 ? skillsList[0].className = 'show' : skillsList[0].className = 'hidden'
        getPos(skillsList[1]).elementBottom > 80 ? skillsList[1].className = 'show' : skillsList[1].className = 'hidden'
        getPos(skillsList[2]).elementBottom > 80 ? skillsList[2].className = 'show' : skillsList[2].className = 'hidden'
    }

    // for screens larger than than 1023px
    if(window.innerWidth > 1023){
        getPos(skillsList[0]).elementBottom > 80 ? skillsList[0].className = 'show' : skillsList[0].className = 'hidden'
        getPos(skillsList[1]).elementBottom > 180 ? skillsList[1].className = 'show' : skillsList[1].className = 'hidden'
        getPos(skillsList[2]).elementBottom > 280 ? skillsList[2].className = 'show' : skillsList[2].className = 'hidden'
    }

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
