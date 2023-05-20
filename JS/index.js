const toggleElement = document.querySelector('.header-toggle')

let toggle = true
toggleElement.onclick = function() {
    // get element
    const body = document.querySelector('#body')
    const header = document.querySelector('header')
    const navbar = document.querySelector('#navbar')
    const bodyContent = document.querySelector('.body-content')
    const headingImg = document.querySelectorAll('.body-content-box-comic-heading')
    const chapterImg = document.querySelectorAll('.body-box2-item-infor-chap')

    if (toggle) {
        toggle = false

        body.style="background-color: #fff"
        header.style="background-color: #442d2f"
        navbar.style="background-color: #64681b"
        bodyContent.style="background-color: #fff"
        for(let a = 0; a < headingImg.length; a++) {
            headingImg[a].style="color: #333"
        }
        for(let a = 0; a < chapterImg.length; a++) {
            chapterImg[a].style="color: #333"
        }
    }else {
        toggle = true

        body.style="background-color: #333"
        header.style="background-color: #252525"
        navbar.style="background-color: #333"
        bodyContent.style="background-color: #252525"

        for(let a = 0; a < headingImg.length; a++) {
            headingImg[a].style="color: var(--text-color)"
        }
        for(let a = 0; a < chapterImg.length; a++) {
            chapterImg[a].style="color: var(--text-color)"
        }
    }
}
