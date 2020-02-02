import * as helpers from './helpers.js';

export function addClasses(element, classes) {
    if (classes){
        for(let i = 0; i < classes.length; i++) {
            element.classList.add(classes[i]);
        }
    } 
    
    return element
}

export function createImageComponent(source) {
    const pictureElm = document.createElement('picture');
    const imageElm = document.createElement('img');
    const sourceElmMobile = document.createElement('source');
    const sourceElmTablet = document.createElement('source');
    const sourceElmDesktop = document.createElement('source');
    const sourceElmLandscape = document.createElement('source');
    const imageClasses = ['w3-opacity-min', 'editable'];
                       
    sourceElmTablet.srcset = source[1];
    sourceElmTablet.media = '(min-width: 450px)';
    sourceElmLandscape.srcset = source[1];
    sourceElmLandscape.media = '(orientation: landscape)';
    sourceElmDesktop.srcset = source[2];
    sourceElmDesktop.media = '(min-width: 800px)';
    imageElm.src = source[0];

    pictureElm.appendChild(sourceElmMobile);
    pictureElm.appendChild(sourceElmTablet);
    pictureElm.appendChild(sourceElmDesktop);
    pictureElm.appendChild(imageElm);
 
                               
    return addClasses(pictureElm, imageClasses);
               
}
               
export function createParagraphComponent(text) {
    const paragraph = document.createElement('p');
    const paragraphClasses = ['editable'];

    paragraph.innerHTML = text;

    return addClasses(paragraph, paragraphClasses);;
}

export function createHeadingComponent(type, text) {
    const heading = document.createElement(type);
    const headingClasses = ['editable'];

    heading.innerHTML = text;

    return addClasses(heading, headingClasses);
}

export function createLinkComponent(hrefval, text, target) {
    const link = document.createElement('a');

    link.href = hrefval;
    link.innerHTML = text;
    link.alt = 'go to' + target;
    const classes = ['button', 'w3-button', 'w3-padding-large', 'editable']

    return addClasses(link, classes);
}

export function createButtonComponent(value, id, classes) {
   
    const button = document.createElement('button');
   
    button.innerHTML = value;
    button.type = 'button';
    button.id = id;
   
    return addClasses(button, classes);
}

export function createCustomMyStoryComponent(){
    const mystoryblob = '<div class="dive_in">' +
    '<h1 class="maxcan_animate-slideBottom">My Story</h1>' +
    '<div class="w3-row-padding w3-center">' +
    '<div class="w3-col m4 maxcan_animate-slideBottom">' +
        '<div class="flip-card">' +
        '<div class="flip-card-inner">' +
            '<div class="flip-card-front">' +
                '<img src="https://www.w3schools.com/w3images/p1.jpg" style="width:100%">' +
                '<p>1975</p>' +
            '</div>' +
            '<div class="flip-card-back">' +
              '<img src="https://www.w3schools.com/w3images/p1.jpg" style="width:100%">' +
              '<p>1975 <br/>' +
              'I was born and blah blah blah</p>' +
            '</div>' +
        '</div>' +
          '</div>' +
    '</div>' +

      '<div class="w3-col m4 maxcan_animate-slideBottom">' +
        '<div class="flip-card">' +
        '<div class="flip-card-inner">' +
            '<div class="flip-card-front">' +
                '<img src="https://www.w3schools.com/w3images/p2.jpg" style="width:100%">' +
            '</div>' +
            '<div class="flip-card-back">' +
              '<img src="https://www.w3schools.com/w3images/p2.jpg" style="width:100%">' +
              '<p>1975 <br/>' +
              'I was born and blah blah blah</p>' +
            '</div>' +
        '</div>' +
          '</div>' +
    '</div>' +

      '<div class="w3-col m4 maxcan_animate-slideBottom">' +
        '<div class="flip-card">' +
        '<div class="flip-card-inner">' +
            '<div class="flip-card-front">' +
                '<img src="https://www.w3schools.com/w3images/p3.jpg" style="width:100%">' +
            '</div>' +
            '<div class="flip-card-back">' +
              '<img src="https://www.w3schools.com/w3images/p3.jpg" style="width:100%">' +
              '<p>1975 <br/>' +
              'I was born and blah blah blah</p>' +
            '</div>' +
        '</div>' +
          '</div>' +
    '</div>' +

      '<div class="w3-col m4 maxcan_animate-slideBottom">' +
        '<div class="flip-card">' +
        '<div class="flip-card-inner">' +
            '<div class="flip-card-front">' +
                '<img src="https://www.w3schools.com/w3images/p4.jpg" style="width:100%">' +
            '</div>' +
            '<div class="flip-card-back">' +
              '<img src="https://www.w3schools.com/w3images/p4.jpg" style="width:100%">' +
              '<p>1975 <br/>' +
              'I was born and blah blah blah</p>' +
            '</div>' +
        '</div>' +
          '</div>' +
    '</div>' +

     '<div class="w3-col m4 maxcan_animate-slideBottom">' +
        '<div class="flip-card">' +
        '<div class="flip-card-inner">' +
            '<div class="flip-card-front">' +
                '<img src="https://www.w3schools.com/w3images/p5.jpg" style="width:100%">' +
            '</div>' +
            '<div class="flip-card-back">' +
              '<img src="https://www.w3schools.com/w3images/p5.jpg" style="width:100%">' +
             '<p>1975 <br/>' +
              'I was born and blah blah blah</p>' +
            '</div>' +
        '</div>' +
          '</div>' +
    '</div>' +

      '<div class="w3-col m4 maxcan_animate-slideBottom">' +
        '<div class="flip-card">' +
        '<div class="flip-card-inner">' +
            '<div class="flip-card-front">' +
                '<img src="https://www.w3schools.com/w3images/p6.jpg" style="width:100%">' +
            '</div>' +
            '<div class="flip-card-back">' +
              '<img src="https://www.w3schools.com/w3images/p6.jpg" style="width:100%">' +
              '<p>1975 <br/>' +
              'I was born and blah blah blah</p>' +
            '</div>' +
        '</div>' +
          '</div>' +
    '</div>' +
    '<div class="w3-col m4 maxcan_animate-slideBottom">' +
        '<div class="flip-card">' +
        '<div class="flip-card-inner">' +
            '<div class="flip-card-front">' +
                '<img src="https://www.w3schools.com/w3images/p7.jpg" style="width:100%">' +
            '</div>' +
            '<div class="flip-card-back">' +
              '<img src="https://www.w3schools.com/w3images/p7.jpg" style="width:100%">' +
              '<p>1975 <br/>' +
              'I was born and blah blah blah</p>' +
            '</div>' +
        '</div>' +
          '</div>' +
    '</div>' +
    '<div class="w3-col m4 maxcan_animate-slideBottom">' +
        '<div class="flip-card">' +
        '<div class="flip-card-inner">' +
            '<div class="flip-card-front">' +
                '<img src="https://www.w3schools.com/w3images/p8.jpg" style="width:100%">' +
            '</div>' +
            '<div class="flip-card-back">' +
              '<img src="https://www.w3schools.com/w3images/p8.jpg" style="width:100%">' +
              '<p>1975 <br/>' +
              'I was born and blah blah blah</p>' +
            '</div>' +
        '</div>' +
          '</div>' +
    '</div>' +
    '<div class="w3-col m4 maxcan_animate-slideBottom">' +
        '<div class="flip-card">' +
        '<div class="flip-card-inner">' +
            '<div class="flip-card-front">' +
                '<img src="https://www.w3schools.com/w3images/p1.jpg" style="width:100%">' +
            '</div>' +
            '<div class="flip-card-back">' +
              '<img src="https://www.w3schools.com/w3images/p1.jpg" style="width:100%">' +
              '<p>1975 <br/>' +
              'I was born and blah blah blah</p>' +
            '</div>' +
        '</div>' +
          '</div>' +
    '</div>' +
    '<div class="w3-col m4 maxcan_animate-slideBottom">' +
        '<div class="flip-card">' +
        '<div class="flip-card-inner">' +
            '<div class="flip-card-front">' +
                '<img src="https://www.w3schools.com/w3images/p2.jpg" style="width:100%">' +
            '</div>' +
            '<div class="flip-card-back">' +
              '<img src="https://www.w3schools.com/w3images/p2.jpg" style="width:100%">' +
              '<p>1975 <br/>' +
              'I was born and blah blah blah</p>' +
            '</div>' +
        '</div>' +
          '</div>' +
    '</div>' +
    '<div class="w3-col m4 maxcan_animate-slideBottom">' +
        '<div class="flip-card">' +
        '<div class="flip-card-inner">' +
            '<div class="flip-card-front">' +
                '<img src="https://www.w3schools.com/w3images/p3.jpg" style="width:100%">' +
            '</div>' +
            '<div class="flip-card-back">' +
              '<img src="https://www.w3schools.com/w3images/p3.jpg" style="width:100%">' +
              '<p>1975 <br/>' +
              'I was born and blah blah blah</p>' +
            '</div>' +
        '</div>' +
          '</div>' +
    '</div>' +
    '<div class="w3-col m4 maxcan_animate-slideBottom">' +
        '<div class="flip-card">' +
        '<div class="flip-card-inner">' +
            '<div class="flip-card-front">' +
                '<img src="https://www.w3schools.com/w3images/p4.jpg" style="width:100%">' +
            '</div>' +
            '<div class="flip-card-back">' +
              '<img src="https://www.w3schools.com/w3images/p4.jpg" style="width:100%">' +
              '<p>1975 <br/>' +
              'I was born and blah blah blah</p>' +
            '</div>' +
        '</div>' +
          '</div>' +
    '</div>' +
    '<div class="w3-col m4 maxcan_animate-slideBottom">' +
        '<div class="flip-card">' +
        '<div class="flip-card-inner">' +
            '<div class="flip-card-front">' +
                '<img src="https://www.w3schools.com/w3images/p5.jpg" style="width:100%">' +
            '</div>' +
            '<div class="flip-card-back">' +
              '<img src="https://www.w3schools.com/w3images/p5.jpg" style="width:100%">' +
              '<p>1975 <br/>' +
              'I was born and blah blah blah</p>' +
            '</div>' +
        '</div>' +
          '</div>' +
    '</div>' +
    '<div class="w3-col m4 maxcan_animate-slideBottom">' +
        '<div class="flip-card">' +
        '<div class="flip-card-inner">' +
            '<div class="flip-card-front">' +
                '<img src="https://www.w3schools.com/w3images/p6.jpg" style="width:100%">' +
            '</div>' +
            '<div class="flip-card-back">' +
              '<img src="https://www.w3schools.com/w3images/p6.jpg" style="width:100%">' +
             '<p>1975 <br/>' +
              'I was born and blah blah blah</p>' +
            '</div>' +
        '</div>' +
          '</div>' +
    '</div>' +
    
    '</div>'
    '</div>';
    
    return mystoryblob;
}

export function createCustomDiveInComponent(){
    const diveInHtmlBlob = '<div class="dive_in">' +
    '<h1 class="maxcan_animate-slideBottom">View More</h1>' +
    '<div class="w3-row-padding w3-center">' +
    '<div class="w3-col m4 maxcan_animate-slideBottom">' +
        '<div class="flip-card">' +
        '<div class="flip-card-inner">' +
            '<div class="flip-card-front">' +
                '<img src="https://www.w3schools.com/w3images/p1.jpg" style="width:100%">' +
                '<p>Blog</p>' +
            '</div>' +
            '<div class="flip-card-back">' +
              '<img src="https://www.w3schools.com/w3images/p1.jpg" style="width:100%">' +
              '<p>Blog</p>' +
            '</div>' +
        '</div>' +
          '</div>' +
    '</div>' +

      '<div class="w3-col m4 maxcan_animate-slideBottom">' +
        '<div class="flip-card">' +
        '<div class="flip-card-inner">' +
            '<div class="flip-card-front">' +
                '<img src="https://www.w3schools.com/w3images/p2.jpg" style="width:100%">' +
                '<p>About</p>' +
            '</div>' +
            '<div class="flip-card-back">' +
              '<img src="https://www.w3schools.com/w3images/p2.jpg" style="width:100%">' +
              '<p>About</p>' +
            '</div>' +
        '</div>' +
          '</div>' +
    '</div>' +

      '<div class="w3-col m4 maxcan_animate-slideBottom">' +
        '<div class="flip-card">' +
        '<div class="flip-card-inner">' +
            '<div class="flip-card-front">' +
                '<img src="https://www.w3schools.com/w3images/p3.jpg" style="width:100%">' +
                '<p>Contact</p>' +
            '</div>' +
            '<div class="flip-card-back">' +
              '<img src="https://www.w3schools.com/w3images/p3.jpg" style="width:100%">' +
              '<p>Contact</p>' +
            '</div>' +
        '</div>' +
          '</div>' +
    '</div>' +

      '<div class="w3-col m4 maxcan_animate-slideBottom">' +
        '<div class="flip-card">' +
        '<div class="flip-card-inner">' +
            '<div class="flip-card-front">' +
                '<img src="https://www.w3schools.com/w3images/p4.jpg" style="width:100%">' +
                '<p>Night Stand</p>' +
            '</div>' +
            '<div class="flip-card-back">' +
              '<img src="https://www.w3schools.com/w3images/p4.jpg" style="width:100%">' +
              '<p>Night Stand</p>' +
            '</div>' +
        '</div>' +
          '</div>' +
    '</div>' +

     '<div class="w3-col m4 maxcan_animate-slideBottom">' +
        '<div class="flip-card">' +
        '<div class="flip-card-inner">' +
            '<div class="flip-card-front">' +
                '<img src="https://www.w3schools.com/w3images/p5.jpg" style="width:100%">' +
                '<p>Downloads</p>' +
            '</div>' +
            '<div class="flip-card-back">' +
              '<img src="https://www.w3schools.com/w3images/p5.jpg" style="width:100%">' +
              '<p>Downloads</p>' +
            '</div>' +
        '</div>' +
          '</div>' +
    '</div>' +

      '<div class="w3-col m4 maxcan_animate-slideBottom">' +
        '<div class="flip-card">' +
        '<div class="flip-card-inner">' +
            '<div class="flip-card-front">' +
                '<img src="https://www.w3schools.com/w3images/p6.jpg" style="width:100%">' +
                '<p>Other</p>' +
            '</div>' +
            '<div class="flip-card-back">' +
              '<img src="https://www.w3schools.com/w3images/p6.jpg" style="width:100%">' +
              '<p>Other</p>' +
            '</div>' +
        '</div>' +
          '</div>' +
    '</div>' +
    
    '</div>'
    '</div>';
    
    return diveInHtmlBlob;
}

export function createCustomSocialMediaComponent() {
    const socialMediaHtmlBlob = 
      '<h1>Stay Connected</h1>' +
      '<div class="w3-xlarge w3-section">' +
        '<div class="triangle"></div>' +
        '<p>Let\'s connect and share and love and have.</p>' +
        '<div class="icons">' +
        '<a href="https://www.instagram.com/candicehallsett/" aria-lable="go to franky\'s facebook" target="_blank"><i class="icon_facebook"><?xml version="1.0" ?><svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g id="Facebook"><path d="M25,50 C38.8071194,50 50,38.8071194 50,25 C50,11.1928806 38.8071194,0 25,0 C11.1928806,0 0,11.1928806 0,25 C0,38.8071194 11.1928806,50 25,50 Z M25,47 C37.1502651,47 47,37.1502651 47,25 C47,12.8497349 37.1502651,3 25,3 C12.8497349,3 3,12.8497349 3,25 C3,37.1502651 12.8497349,47 25,47 Z M26.8145197,36 L26.8145197,24.998712 L30.0687449,24.998712 L30.5,21.2076072 L26.8145197,21.2076072 L26.8200486,19.3101227 C26.8200486,18.3213442 26.9207209,17.7915341 28.4425538,17.7915341 L30.4769629,17.7915341 L30.4769629,14 L27.2222769,14 C23.3128757,14 21.9368678,15.8390937 21.9368678,18.9318709 L21.9368678,21.2080366 L19.5,21.2080366 L19.5,24.9991413 L21.9368678,24.9991413 L21.9368678,36 L26.8145197,36 Z M26.8145197,36" id="Oval-1"/></g></g></svg></i></a>' +
        '<a href="https://www.instagram.com/candicehallsett/" aria-lable="go to franky\'s linked in" target="_blank"><i class="icon_linkedin"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" xml:space="preserve"><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g id="LinkedIn"><path d="M25,50 C38.8071194,50 50,38.8071194 50,25 C50,11.1928806 38.8071194,0 25,0 C11.1928806,0 0,11.1928806 0,25 C0,38.8071194 11.1928806,50 25,50 Z M25,47 C37.1502651,47 47,37.1502651 47,25 C47,12.8497349 37.1502651,3 25,3 C12.8497349,3 3,12.8497349 3,25 C3,37.1502651 12.8497349,47 25,47 Z M14,20.1180479 L14,34.6581834 L18.7100851,34.6581834 L18.7100851,20.1180479 L14,20.1180479 Z M16.6646962,13 C15.0534058,13 14,14.0858611 14,15.5115122 C14,16.9076331 15.0222711,18.0247614 16.6035556,18.0247614 L16.6336556,18.0247614 C18.2759867,18.0247614 19.2988222,16.9076331 19.2988222,15.5115122 C19.2682519,14.0858611 18.2759867,13 16.6646962,13 Z M30.5769213,20.1180479 C28.076176,20.1180479 26.9565501,21.5293199 26.3314108,22.5193527 L26.3314108,20.4598644 L21.6207614,20.4598644 C21.6828427,21.8242356 21.6207614,35 21.6207614,35 L26.3314108,35 L26.3314108,26.8795887 C26.3314108,26.445032 26.3619812,26.0115368 26.4865199,25.7004084 C26.826932,24.83226 27.6020069,23.9334233 28.9032674,23.9334233 C30.6083381,23.9334233 31.2899149,25.2667202 31.2899149,27.2206333 L31.2899149,34.999614 L35.9998119,34.999614 L36,26.6627446 C36,22.1966439 33.6763743,20.1180479 30.5769213,20.1180479 Z M30.5769213,20.1180479" id="Oval-1"/></g></g></svg></i></a>' +
        '<a href="https://www.instagram.com/candicehallsett/" aria-lable="go to franky\'s youtube channel" target="_blank"><i class="icon_youtube"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" xml:space="preserve"><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g id="YouTube"><path d="M50,25 C50,11.1928806 38.8071194,0 25,0 C11.1928806,0 0,11.1928806 0,25 C0,38.8071194 11.1928806,50 25,50 C38.8071194,50 50,38.8071194 50,25 Z M47,25 C47,12.8497349 37.1502651,3 25,3 C12.8497349,3 3,12.8497349 3,25 C3,37.1502651 12.8497349,47 25,47 C37.1502651,47 47,37.1502651 47,25 Z M36.768327,30.7654774 C36.4698281,32.0627028 35.4087162,33.0191862 34.1319129,33.1618614 C31.1074781,33.4998058 28.0463955,33.5014844 24.9984613,33.4998058 C21.9508068,33.5014844 18.8894444,33.4998058 15.8652894,33.1618614 C14.5882064,33.0191862 13.5276539,32.0627028 13.2294348,30.7654774 C12.8047662,28.9179732 12.8047662,26.9020564 12.8047662,25.0002798 C12.8047662,23.0982233 12.8098018,21.0820268 13.2341906,19.2345226 C13.5326895,17.9372972 14.5932419,16.980534 15.8700452,16.8381386 C18.89448,16.5001942 21.9555627,16.4985156 25.0034969,16.5001942 C28.0511513,16.4985156 31.1125137,16.5001942 34.1366687,16.8381386 C35.4137518,16.980534 36.4748637,17.9372972 36.7730829,19.2345226 C37.1977514,21.0820268 37.1952336,23.0982233 37.1952336,25.0002798 C37.1952336,26.9020564 37.1927158,28.9179732 36.768327,30.7654774 Z M22.8047662,20.5 L29.5547662,24.3971143 L22.8047662,28.2942286 L22.8047662,20.5 Z M22.8047662,20.5" id="Oval-1"/></g></g></svg></i></a>' +
        '<a href="https://www.instagram.com/candicehallsett/" aria-lable="go to franky\'s instagram" target="_blank"><i class="icon_instagram"><?xml version="1.0" ?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g id="Intsagram"><path d="M25,0 C11.1928806,0 0,11.1928806 0,25 C0,38.8071194 11.1928806,50 25,50 C38.8071194,50 50,38.8071194 50,25 C50,11.1928806 38.8071194,0 25,0 Z M25,3 C12.8497349,3 3,12.8497349 3,25 C3,37.1502651 12.8497349,47 25,47 C37.1502651,47 47,37.1502651 47,25 C47,12.8497349 37.1502651,3 25,3 Z M35.9513128,34.5096659 C35.9701595,34.4075385 35.9839804,34.3037693 36,34.2013135 L36,15.7986865 C35.9846086,15.6978726 35.9714159,15.5967304 35.9525693,15.496245 C35.7600194,14.4654483 34.9467868,13.6655054 33.9482288,13.5226585 C33.9067662,13.517076 33.8662459,13.5075528 33.8254116,13.5 L16.1745884,13.5 C16.0681049,13.5200314 15.9609932,13.5351371 15.8560802,13.5600942 C14.8813947,13.7922616 14.1601965,14.6128926 14.0213595,15.6453312 C14.0157055,15.6883495 14.0072245,15.7310394 14,15.7740577 L14,34.2269275 C14.0201031,34.3438321 14.0361227,34.4617219 14.0612516,34.5779697 C14.2767315,35.5742861 15.0902783,36.3466448 16.0580534,36.4766848 C16.1048559,36.4825957 16.1519725,36.4921188 16.198775,36.5 L33.801225,36.5 C33.9155613,36.4796402 34.0302117,36.4628926 34.1432916,36.4372787 C35.0416482,36.2379497 35.775725,35.454426 35.9513128,34.5096659 Z M16.380331,33.0989292 C16.380331,33.5885494 16.7858479,34.0095374 17.254187,34.0095374 C22.4169106,34.0098658 27.5793201,34.0098658 32.7420437,34.0095374 C33.2147803,34.0095374 33.6180985,33.5892062 33.6180985,33.0959737 C33.6184126,29.6962164 33.6180985,26.2967875 33.6180985,22.8973587 L33.6180985,22.8267561 L31.5179543,22.8267561 C31.8144748,23.81749 31.9055669,24.8252998 31.7893459,25.8524843 C31.6724968,26.8799971 31.3558732,27.8362507 30.8401034,28.7192747 C30.3240195,29.6032838 29.6549637,30.3355797 28.8357629,30.9184609 C26.7123745,32.4303398 23.9167892,32.5633352 21.6636731,31.2412621 C20.5247077,30.5736579 19.6304345,29.6426899 19.0069247,28.4431039 C18.0768429,26.653084 17.9282685,24.7744003 18.4738788,22.8251142 C17.7771813,22.825771 17.0833107,22.825771 16.3800168,22.825771 L16.3800168,22.8878355 C16.3800168,26.2915334 16.3797027,29.6952313 16.380331,33.0989292 Z M24.897757,29.6581239 C27.3886549,29.7139492 29.403361,27.6333095 29.4558175,25.1027841 C29.5095304,22.4931182 27.4960808,20.3376071 25.0001571,20.339249 C22.5601451,20.3376071 20.5765359,22.3900057 20.5422979,24.9293975 C20.5071175,27.5370931 22.5039192,29.604269 24.897757,29.6581239 Z M33.6177844,18.481582 C33.6180985,17.7555254 33.6180985,17.0291405 33.6177844,16.303084 C33.6177844,15.7822673 33.2235754,15.3678469 32.7260241,15.3675186 C32.03341,15.3671902 31.3407958,15.3668618 30.6478676,15.3675186 C30.1515727,15.3681753 29.7561073,15.7835808 29.7557932,16.3043975 C29.7554791,17.0242147 29.7535944,17.744032 29.7583061,18.4641776 C29.7589343,18.5715591 29.7784092,18.6832096 29.8110767,18.7850086 C29.9354645,19.1682324 30.2712489,19.4033552 30.6824198,19.4053255 C31.0166336,19.4059823 31.3508474,19.4049971 31.6853753,19.4049971 C32.0472308,19.4007282 32.4103428,19.4079526 32.7725125,19.3987579 C33.2383386,19.3866077 33.6177844,18.9692319 33.6177844,18.481582 Z M33.6177844,18.481582" id="Oval-1"/></g></g></svg></i></a>' +
        '</div>' +
      '</div>' +
      '<div class="gradient"></div>';
    
    return socialMediaHtmlBlob;
}

export function createCarouselComponent(slides) {
    const innercontrols = '<fieldset class="controls"><legend class="visually-hidden">Carousel controls</legend><div class="control"><button class="button_stop_play" aria-pressed="true" data-carousel-autoplay="" data-carousel-id="carousel"></button></div><div class="control"><button class="button_previous" aria-label="previous" data-carousel-direction="previous" data-carousel-id="carousel"></button></div><div class="control"><input checked="" class="visually-hidden" id="carousel_slide_1" name="carousel" type="radio" value="carousel_slide_1" /><label for="carousel_slide_1"><span class="visually-hidden">Show slide 1</span></label></div><div class="control"><input class="visually-hidden" id="carousel_slide_2" name="carousel" type="radio" value="carousel_slide_2" /><label for="carousel_slide_2"><span class="visually-hidden">Show slide 2</span></label></div><div class="control"><input class="visually-hidden" id="carousel_slide_3" name="carousel" type="radio" value="carousel_slide_3" /><label for="carousel_slide_3"><span class="visually-hidden">Show slide 3</span></label></div><div class="control"><button class="button_next" data-carousel-direction="next" aria-label="next" data-carousel-id="carousel"></button></div></fieldset><div class="visually-hidden" id="alerts"></div>'
   
    const carousel = document.createElement('div');
   
    carousel.classList.add('carousel');
    
    if (Object.keys(slides).length > 1) {
        carousel.innerHTML = innercontrols;
    }
   
    let num = 0;
   
    for (const i in slides){
       
        const slide = document.createElement('div');
        const innerwrapper = document.createElement('div');
        const sectionClasses = ['w3-display-container'];
        const innerwrapperClasses = ['w3-display-middle'];
        const slideCurtain = document.createElement('div');
        const slideCurtainClasses = ['slide_curtain', 'editable']
        
        num = num + 1;
       
        slide.id = 'carousel_slide_' + num + '_slide';
        slide.classList.add('slide');
        innerwrapper.classList.add('innerwrapper');

        slide.appendChild(createImageComponent(slides[i].imagesources));    
        innerwrapper.appendChild(createHeadingComponent(slides[i].headingType, slides[i].headingText));
        innerwrapper.appendChild(createParagraphComponent(slides[i].paragraph));
        if(slides[i].linkText != null && slides[i].href){
            innerwrapper.appendChild(createLinkComponent(slides[i].href, slides[i].linkText, slides[i].linkTargetDescription));
        }
        slide.appendChild(innerwrapper);
        slide.appendChild(slideCurtain);
        addClasses(slide, sectionClasses);
        addClasses(innerwrapper, innerwrapperClasses);
        addClasses(innerwrapper, slides[i].textClasses);
        
        const slideChildren = slide.querySelectorAll('.editable');
        
        for (let i = 0; i < slideChildren.length; i++){
            slideChildren[i].classList.remove('editable');
        }
        
        addClasses(slideCurtain, slideCurtainClasses); 
        
        carousel.appendChild(slide);
        
        if (innerwrapper.classList.contains('light')){
            innerwrapper.parentElement.style.backgroundColor = '#000';
        }
                  
    }
   
    return carousel;
}
