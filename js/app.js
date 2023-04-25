AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const questionList = document.querySelector('.questions__list')
const questionItem = document.querySelectorAll('.question__item')
const questionItemArrow = document.querySelectorAll('.question__item-arrow')
const questionItemTxt = document.querySelectorAll('.question__item-txt')
const questionTxt = document.querySelectorAll('.question__item-request')


questionList.addEventListener('click', function ({ target }) {
    let index = [...questionItem].indexOf(target);
    let indexArrow = [...questionItemArrow].indexOf(target);
    let indexTxt = [...questionItemTxt].indexOf(target);

    if (target == questionItemArrow[indexArrow]) {
        index = [...questionItemArrow].indexOf(target);
    }
    else if (target == questionItemTxt[indexTxt]) {
        index = [...questionItemTxt].indexOf(target);
    }

    questionItem[index].classList.toggle('active')
    questionTxt[index].classList.remove('aos-animate')
    setTimeout(() => { questionTxt[index].classList.add('aos-animate'); }, 1);
});
