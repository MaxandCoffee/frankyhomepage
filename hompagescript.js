
function addClasses(element, classes) {
     for(i = 0; i < classes.length; i++) {
        element.classList.add(classes[i]);
    }
    
    return element
}

function createImageComponent(soure, altText, classes) {
    const image = document.createElement('IMG');

    image.src = source;
    image.alt = altText;
    

    return addClasses(image, classes);

}

function createParagraphComponent() {

}

function createHeadingComponent(type, text, classes) {
    const heading = document.createElement(type);

    heading.innerHTML = text;

    return addClasses(heading, classes);

}

function createLinkComponent() {

}

function createButtonComponent(){

}

function createCarouselComponent() {

}

const jsonBlob = {
    'section1': {
        'headingType': 'H1',
        'headingText': 'This is a test',
        'headingClasses': ['main', 'important']
    }
}

const section1 = createHeadingComponent(jsonBlob.section1.headingType, jsonBlob.section1.headingText, jsonBlob.section1.headingClasses)

const body = document.getElementById('home');

body.innerHTML = section1.outerHTML;


