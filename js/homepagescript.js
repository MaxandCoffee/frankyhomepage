
import * as components from './components.js';
import * as ajax from './ajax.js';
//import * as carousel from './carousel.js';
//import('./carousel.js').then((carousel) => {carousel.init()});

let jsonBlob = {};
const body = document.getElementById('home');
const url = ajax.getBlobUrl();

function createSections() {

    let num = 0

    for (const i in jsonBlob) {
        if (jsonBlob[i] !== jsonBlob["version"] ){
            
        
             const section = document.createElement('section');

            num = num + 1;
            section.id = 'section' + num;
            body.appendChild(section);

            switch(jsonBlob[i].sectionType) {
              case 'carousel':
                section.appendChild(
                    components.createCarouselComponent(jsonBlob[i].slides)
                );
                break;
              default:
                 section.appendChild(
                    components.createHeadingComponent(jsonBlob[i].headingType, jsonBlob[i].headingText, jsonBlob[i].headingClasses)
                );
            }
            
        }
    }
}

function blobIsUpdated(data) {
    if (!localStorage.getItem('jsonBlob')){
        return true;
    }
    
    const oldData = JSON.parse(localStorage.getItem('jsonBlob'));
    
    if (oldData.version !== data.version) {
        return true;
    }
}

function updateLocalData(blob) {
    localStorage.setItem('jsonBlob', blob);
}

ajax.getUsefulContents( url, data => { updateBlob(data); });

export function updateBlob(data, force){
    if (data) {

        if (blobIsUpdated(data) || force){
            jsonBlob = data;
            updateLocalData(JSON.stringify(data));
        }else{
            jsonBlob = JSON.parse(localStorage.getItem('jsonBlob'));
        }

        createSections();
        
        import('./editPage.js').then((edit) => {edit.init()});
        import('./carousel.js').then((carousel) => {carousel.addEventListeners()});;
        
    }

}
  



