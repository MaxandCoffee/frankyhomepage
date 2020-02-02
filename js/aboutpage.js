import * as components from './components.js';
import * as ajax from './ajax.js';
import * as helpers from './helpers.js';
import('./animateonscroll.js');

const heroElement ={"slide1": { "sectionType": "slide", "headingType": "H1", "headingText": "This is a test", "paragraph": "This is some text. This is some more text. And even some more as well.", "textClasses": ["center", "dark"], "imagesources": ["https://dg74ia9jc0hae.cloudfront.net/mobile-tressor1.JPG", "https://dg74ia9jc0hae.cloudfront.net/tablet-tressor1.JPG", "https://dg74ia9jc0hae.cloudfront.net/desktop-tressor1.JPG"] }}

 

function createSections() {
    const heroElementWrapper = document.getElementById('heroElement');
    const myStoryWrapper = document.getElementById('myStory');
    const socialMediaWrapper = document.getElementById('socialMedia');
    
    heroElementWrapper.appendChild(components.createCarouselComponent(heroElement));
    myStoryWrapper.innerHTML = components.createCustomMyStoryComponent();
    socialMediaWrapper.innerHTML = components.createCustomSocialMediaComponent();
}


createSections(); 