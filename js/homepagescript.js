import * as components from './components.js';
import * as ajax from './ajax.js';
import * as helpers from './helpers.js';


let jsonBlob = {};
const body = document.getElementById('home');
const url = ajax.getBlobUrl();

function createSections() {

    let num = 0

    for (const i in jsonBlob) {
        if (jsonBlob[i] !== jsonBlob["version"] ){
           
       
            const section = document.createElement('section');
            const innerwrapper = document.createElement('div');
            const sectionClasses = ['w3-display-container'];

            num = num + 1;
            section.id = 'section' + num;
            body.appendChild(section);
            innerwrapper.classList.add('innerwrapper');

            switch(jsonBlob[i].sectionType) {
              case 'carousel':
                    section.appendChild(components.createCarouselComponent(jsonBlob[i].slides));
                break;
            case 'quote':
                    const logo = document.createElement('div');
                    logo.classList.add('logo_name');
                    
                    innerwrapper.appendChild(components.createHeadingComponent(jsonBlob[i].headingType, jsonBlob[i].headingText));
                    innerwrapper.appendChild(components.createParagraphComponent(jsonBlob[i].paragraph));
                    innerwrapper.appendChild(logo);
                    section.appendChild(innerwrapper);
                    components.addClasses(section, sectionClasses);
                    
                break;
            case 'latest':
                    const latestBlog = document.createElement('div');
                    const insta = document.createElement('div');
                    const latestBlogClasses = ['latest_item', 'latest_blog', 'maxcan_animate-opacity-slideLeft'];
                    const instaClasses = ['latest_item', 'latest_insta', 'maxcan_animate-opacity-slideRight'];
                    components.addClasses(latestBlog, latestBlogClasses);
                    components.addClasses(insta, instaClasses);
                    
                    innerwrapper.classList.add('maxcan_animate-opacity-slideLeft');
                    innerwrapper.appendChild(components.createHeadingComponent(jsonBlob[i].headingType, jsonBlob[i].headingText));
                   
                    insta.appendChild(components.createHeadingComponent(jsonBlob[i].instagram.headingType, jsonBlob[i].instagram.headingText));
                    
                    // latest blog
                    const blogURL = ajax.getLatestBlog();
                    const blogwrapper = document.createElement('div');
                    ajax.getUsefulContents( blogURL, data => { 
                        blogwrapper.innerHTML = data;
                        latestBlog.appendChild(blogwrapper);
                        latestBlog.appendChild(components.createHeadingComponent(jsonBlob[i].blog.headingType, jsonBlob[i].blog.headingText));
                    });
                    
                    //latest insta
                    const instawrapper = document.createElement('div');  
                    const instaURL = jsonBlob[i].instagram.href;
                    const instaPost = '<iframe src="' + instaURL + '" width="320" height="400" frameborder="0" scrolling="no" allowtransparency="true"></iframe>' 
                    
                   
                    instawrapper.innerHTML = instaPost;
                    insta.appendChild(instawrapper); 
                    section.appendChild(innerwrapper);
                    section.appendChild(latestBlog);
                    section.appendChild(insta);
                    components.addClasses(section, sectionClasses);
                    
                      
                    
                break;
            case 'view_more':
                    const viewMoreHtml = components.createCustomDiveInComponent();
                    section.innerHTML = viewMoreHtml;
                    
                break;  
            case 'social_media':
                    const socialMediaHtml = components.createCustomSocialMediaComponent();
                    section.innerHTML = socialMediaHtml;
                
                break;
                    
            }
           
        }
    }
}

function blobIsUpdated(data) {
    if (localStorage.getItem('jsonBlob') === null){
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

ajax.getUsefulJSON( url, data => { updateBlob(data); });

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
        import('./animateonscroll.js').then((animate) => {animate.reinit()});
        import('./carousel.js').then((carousel) => {carousel.addEventListeners()});;
       
    }

}
