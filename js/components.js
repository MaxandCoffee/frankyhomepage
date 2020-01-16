export function addClasses(element, classes) {
     for(let i = 0; i < classes.length; i++) {
        element.classList.add(classes[i]);
    }
    
    return element
}

export function createImageComponent(soure, altText, classes) {
    const image = document.createElement('img');

    image.src = source;
    image.alt = altText;
    

    return addClasses(image, classes);

}

export function createParagraphComponent() {

}

export function createHeadingComponent(type, text, classes) {
    const heading = document.createElement(type);

    heading.innerHTML = text;

    return addClasses(heading, classes);

}

export function createLinkComponent() {

}

export function createButtonComponent(value, id, classes) {
    
    const button = document.createElement('button');
    
    button.innerHTML = value;
    button.type = 'button';
    button.id = id;
    
    return addClasses(button, classes);

}

export function createCarouselComponent(slides) {
    const innercontrols = '<fieldset class="controls"><legend class="visually-hidden">Carousel controls</legend><div class="control"><button aria-pressed="true" data-carousel-autoplay="" data-carousel-id="carousel_flowers">Autoplay</button></div><div class="control"><button data-carousel-direction="previous" data-carousel-id="carousel">Previous</button></div><div class="control"><input checked="" class="visually-hidden" id="carousel_panel_1" name="carousel" type="radio" value="carousel_panel_1" /><label for="carousel_panel_1"><span class="visually-hidden">Show panel 1</span></label></div><div class="control"><input class="visually-hidden" id="carousel_panel_2" name="carousel" type="radio" value="carousel_panel_2" /><label for="carousel_panel_2"><span class="visually-hidden">Show panel 2</span></label></div><div class="control"><input class="visually-hidden" id="carousel_panel_3" name="carousel" type="radio" value="carousel_panel_3" /><label for="carousel_panel_3"><span class="visually-hidden">Show panel 3</span></label></div><div class="control"><button data-carousel-direction="next" data-carousel-id="carousel">Next</button></div></fieldset><div class="visually-hidden" id="alerts"></div>'
    
    const carousel = document.createElement('div');
    
    carousel.classList.add('carousel');
    
    carousel.innerHTML = innercontrols;
    
    let num = 0;
    
    for (const i in slides){
        
        const panel = document.createElement('div');
        
        num = num + 1;
        
        panel.id = 'carousel_panel_' + num + '_panel';
        panel.classList.add('panel');
        
        panel.appendChild(createHeadingComponent(slides[i].headingType, slides[i].headingText, slides[i].headingClasses));
        
        carousel.appendChild(panel);
    }
    
    return carousel;

}