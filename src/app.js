

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
const about = document.querySelector('.section_about')
const skills = document.querySelector('.section_skills')
const contact = document.querySelector('#contact')
const projects = document.querySelector('.section_projects')

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
const portraitProjs = projects.querySelectorAll('.portrait')
const squareProjs = projects.querySelectorAll('.square')

// initial opacity for elements in hero section
setTimeout(()=>{nameHeading.className='show'},300)
setTimeout(()=>{titleHeading.className='show'},700)
setTimeout(()=>{contactLink.classList.add('show')},1100)

// event listener for scroll
window.addEventListener('scroll',()=>{


const getPos = (el,pos)=>{
    // const scrollData ={
    //     // scrollHeight:document.body.scrollHeight,
    //     // windowHeight:window.innerHeight,
    //     // windowBottom:window.scrollY + window.innerHeight,
    //     // windowTop:window.scrollY,
    //     elementTop:el.getBoundingClientRect().top,
    //     elementBottom:window.innerHeight - el.getBoundingClientRect().bottom
    // }

    // TOP is determined from top of viewport to top of element 
    // CENTER is determined from bottom of viewport to center of element
    // BOTTOM is determined from bottom of viewport to bottom of element

    // @TODO can add logic to determine distance as well ?
    const scrollData = pos === 'top' ? el.getBoundingClientRect().top : pos === 'center' ?  -(el.getBoundingClientRect().bottom - (el.getBoundingClientRect().height / 2) - window.innerHeight) : window.innerHeight - el.getBoundingClientRect().bottom
    return scrollData
}

    // conditionals and expressions for setting element styles/classes based on scroll position
    getPos(nameHeading,'top') < 120 ? nameHeading.className = 'hidden-left' : nameHeading.className = 'show'
    getPos(titleHeading,'top') < 80 ? titleHeading.className = 'hidden-right' : titleHeading.className = 'show'
    getPos(contactLink,'top') < 100 ? contactLink.className = ('hidden') : contactLink.className = ('show')
    if(getPos(aboutHeading) > 100){
        aboutHeading.classList.add('show')
        setTimeout(()=>{aboutP.forEach((p)=>p.classList.add('show'))},400)
        setTimeout(()=>{techList.classList.add('show')},800)
    }

    // project section
    if(getPos(projects.querySelector('h1')) > 100) projects.querySelector('h1').className = 'show'
    if(getPos(projects.querySelector('h2')) > 100) projects.querySelector('h2').className = 'show'
    if(getPos(projects.querySelector('p')) > 100) projects.querySelector('p').className = 'show'
    

    // project 
    if(getPos(portraitProjs[0],'center') > 250){
        portraitProjs[0].classList.add('scaleup')
        setTimeout(()=>{portraitProjs[1].classList.add('scaleup')},200)
        setTimeout(()=>{squareProjs[1].classList.add('scaleup')},650)
        setTimeout(()=>{squareProjs[0].classList.add('scaleup')},850)
    }

    // skills section heading
    getPos(skillsHeading) > 80 ? skillsHeading.className = 'show' : skillsHeading.className = 'hidden'
    
    // for screens smaller than < 1023px
    if(window.innerWidth < 1023){
        getPos(skillsList[0]) > 80 ? skillsList[0].className = 'show' : skillsList[0].className = 'hidden'
        getPos(skillsList[1]) > 80 ? skillsList[1].className = 'show' : skillsList[1].className = 'hidden'
        getPos(skillsList[2]) > 80 ? skillsList[2].className = 'show' : skillsList[2].className = 'hidden'
    }

    // contact section
    getPos(contactHeading) > 100 ? contactHeading.className = 'show' : contactHeading.className = 'hidden-left'
    // if there are two contact links use this with a indexer
    // getPos(contactLink) > 120 ? contactLink.className = 'show' : contactLink.className = 'hidden-right'

    // for screens larger than than 1023px
    if(window.innerWidth > 1023){
        getPos(skillsList[0]) > 80 ? skillsList[0].className = 'show' : skillsList[0].className = 'hidden'
        getPos(skillsList[1]) > 180 ? skillsList[1].className = 'show' : skillsList[1].className = 'hidden'
        getPos(skillsList[2]) > 280 ? skillsList[2].className = 'show' : skillsList[2].className = 'hidden'
    }

})



// bullet for about section list
const Bullet =(item)=> {
    return (
        `<li class='bullet'>
            <div class='bullet_icon'></div>
            <p>${item.name}</p>
        </li>`
    )
}

// scroll itrem for marquee
const ScrollItem = (item)=> {
    return (
    `<div class='_item' ><p>*</p>${item.name}</div>`
    )
}

// set scroll and marquee items
scrollItems.map((item)=>{
    techList.innerHTML += Bullet(item)
    sliders.forEach((slider)=>{
        slider.innerHTML += ScrollItem(item)
    })
})
