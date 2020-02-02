
import * as ajax from './ajax.js';
import * as helpers from './helpers.js';
import * as components from './components.js';
import * as home from './homepagescript.js';

export function init() {
    const url = ajax.getAuthUrl();
    const editButton = components.createButtonComponent('Edit', 'editButton', ['button-main', 'button', 'w3-button']);
    const pageState = localStorage.getItem('state');
    
    ajax.getUsefulJSON( url, data => { isUserAuthorized(data); });

    function isUserAuthorized(data){
        if (data.auth) {

            if (pageState === 'editMode') { 
                handleEditButtonClick(editButton);
            }

            document.getElementById('edit').innerHTML += editButton.outerHTML;
        }
    }
    window.addEventListener('keydown', handleClicks);
    window.addEventListener('click', handleClicks);
}

function handleClicks(e){
    if (e.type === 'click' || e.keyCode === 13) {
        switch(e.target.id) {
          case 'editButton':
            handleEditButtonClick(e.target);
            break;
          case 'editorSave':
            handleEditSaveButtonClick(e.target);
            break;
          case 'publishButton':
            handlePublish(e.target);
            break;
          case 'cancelEditButton':
            handleCancelEditButtonClick(e.target);
            break;
        }

        if(e.target.getAttribute('data-contenteditable') === 'true' ) {
            e.preventDefault();
            handleEditable(e.target);
        }

        if(e.target.classList.contains('js-closeEditor')) {
            closeEditor();
        }
    }
}

function addCancelButton() {
    document.getElementById('edit').innerHTML += components.createButtonComponent('Cancel', 'cancelEditButton', ['button-secondary', 'button', 'w3-button']).outerHTML;
}

function handleEditButtonClick(button){
    highlightEditableElms(); 
    
    document.querySelector('.button_stop_play').click();
    
    button.innerHTML = 'Publish';
    button.id = 'publishButton';
    
    addCancelButton();
    
    localStorage.setItem('state', 'editMode');
}

function highlightEditableElms() {
    
    const main = document.getElementById('home');
    const elm = main.getElementsByClassName('editable');
    
    if(elm){
        for (let i = 0; i < elm.length; i++){
            
            let num = 0;
            
            if (num == 0) {
                const int = setInterval(frame, 10);
                function frame() {
                  if (num >= 75) {
                    clearInterval(int);
                    num = 0;
                  } else {
                    num++;
                    elm[i].style.background = 'rgba(0,255,255, 0.' + num +')';
                  }
                }
            }
            elm[i].setAttribute('data-contenteditable', 'true');
            elm[i].style.padding = '12px';
            elm[i].style.borderRadius = '4px';
            elm[i].style.border = '1px dotted #000';
            elm[i].style.cursor = 'pointer';
            elm[i].setAttribute('tabindex', '0');
            
            if (elm[i].classList.contains('slide_curtain')){
                elm[i].style.position = 'absolute';
                elm[i].style.zIndex = '8';
                elm[i].style.top = '0';
                elm[i].style.left = '0';
                
                const elmParentSlide = elm[i].offsetParent;
                
                elm[i].style.width = '100vw';
                elm[i].style.height = '90vh';
                
            }
            
        }
    }
  
}

function handleEditable(elm) {
    const editor = document.getElementById('editor');
    let textarea = editor.querySelector('textarea');
    let saveButton;
    let form = '';
    
    if (elm.classList.contains('slide_curtain')){
        handleSlideEditInit(elm.parentElement);
        form = document.getElementById('editSlide');
        saveButton = form.querySelector('#editorSave');
        elm.id = helpers.randomId();
        saveButton.setAttribute('data-ElementEditing', elm.parentElement.id);
        
    } else if (elm.parentElement.classList.contains('latest_insta')){
        form = document.getElementById('editInsta');
        textarea = form.querySelector('textarea');
        saveButton = form.querySelector('#editorSave');
        
        const iframe = elm.nextElementSibling.querySelector('iframe');
        const input = form.querySelector('input');
        
        textarea.value = elm.innerHTML;
        input.value = iframe.src;
        elm.id = helpers.randomId();
        saveButton.setAttribute('data-ElementEditing', elm.id);
        
    } else { 
        textarea.value = elm.innerHTML;
        form = document.getElementById('editText'); 
        saveButton = form.querySelector('#editorSave');
        elm.id = helpers.randomId();
        saveButton.setAttribute('data-ElementEditing', elm.id);
    }
    
    openEditor(elm, form);
}

function handleSlideEditInit(elm) {
    
    const editableItems = ['h1', 'p', 'a'];
    const inputs = ['#heading', '#paragraph', '#buttontext', '#buttonlink'];
    
    editableItems.forEach(function(item, index) {
        const editableElm = elm.querySelector(item);
        const inputElm = editor.querySelector(inputs[index]);
        
        editableElm.id = helpers.randomId();
        
        inputElm.setAttribute('data-ElementEditing', editableElm.id)
            
    });
    
    inputs.forEach(function(input){
        let inputElm = editor.querySelector(input);
        let elmToFind = elm.querySelector('#' + inputElm.getAttribute('data-ElementEditing'));
        
        if (input === '#buttonlink') {
            inputElm = editor.querySelector('#buttontext');
            elmToFind = elm.querySelector('#' + inputElm.getAttribute('data-ElementEditing'));
            editor.querySelector(input).value = elmToFind.href;
        } else {
             inputElm.value = elmToFind.innerHTML;
        }
        
    });
    
    const textLocations = editor.querySelectorAll('input[name="text_location"]');
    const textThemes = editor.querySelectorAll('input[name="text_theme"]');
    const innerWrapperClasses = elm.querySelector('.innerwrapper').classList;
    
    for (let i = 0; i < textLocations.length; i++) {
        
        if (innerWrapperClasses.contains(textLocations[i].id)){
            textLocations[i].checked = true;
        }
    }
    
    for (let i = 0; i < textThemes.length; i++) {
        
        if (innerWrapperClasses.contains(textThemes[i].id)){
            textThemes[i].checked = true;
        }
    }
     
}

function handleEditSaveButtonClick(button) { 
    const editor = document.getElementById('editor');
    let textarea = editor.querySelector('textarea');
    const newText = textarea.value;
    const elm = document.getElementById(button.getAttribute('data-ElementEditing'));
    let form;
    
    if (elm.classList.contains('slide')){
        form = document.getElementById('editSlide');
        handleSlideEditSave(form, elm);
        
    } else if (elm.parentElement.classList.contains('latest_insta')){
        form = document.getElementById('editInsta');
        textarea = form.querySelector('textarea');
        
        const iframe = elm.nextElementSibling.querySelector('iframe');
        const input = form.querySelector('input');
        
        elm.innerHTML = textarea.value;
        iframe.src = input.value;
        
        updateLocalDataInsta(elm, textarea.value, input.value);
        
    } else if (elm.innerHTML !== newText) {
        updatePageText(elm, newText);
        if (elm.parentElement.classList.contains('latest_blog')) {
            updateLocalDataBlog(elm, newText);
        } else {
            updateLocalData(elm, newText);
        }
        
    }
    

    closeEditor();
    
}

function handleSlideEditSave(form, elm){
    const inputs = ['#heading', '#paragraph', '#buttontext', '#buttonlink']; 
    const location = form.querySelector('input[name="text_location"]:checked');
    const theme = form.querySelector('input[name="text_theme"]:checked');
    const innerWrapper = elm.querySelector('.innerwrapper');
    
    inputs.forEach(function(input){
        let inputElm = editor.querySelector(input);
        let elmToFind = elm.querySelector('#' + inputElm.getAttribute('data-ElementEditing'));
        
        if (input === '#buttonlink') {
            inputElm = form.querySelector('#buttontext');
            elmToFind = elm.querySelector('#' + inputElm.getAttribute('data-ElementEditing'));
            elmToFind.href = form.querySelector(input).value;
            updateLocalDataSlide(elmToFind, inputElm.value, form.querySelector(input).value);
        } else {
             elmToFind.innerHTML = inputElm.value;
             updateLocalDataSlide(elmToFind, inputElm.value);
        }
        
    });
    
    
    updatePageTextLocationAndTheme(innerWrapper, location.value, theme.value);
   
}

function updatePageText(elm, text) {   
    elm.innerHTML = text;
}

function updatePageTextLocationAndTheme(elm, location, theme) {
    elm.className = "innerwrapper w3-display-middle " + location + ' ' + theme;
    updateLocalDataSlide(elm, location, theme);
    
}

function getElmType(elm){
    const headings = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];

    if(headings.find(isHeading)){
        return 'heading';
    }  
    
    function isHeading(heading){
        if(heading == elm.tagName) {
             return true;
         }
    }
    
    if(elm.tagName == 'P') {
        return 'paragraph';
    }
    
    if(elm.tagName == 'A') {
        return 'link';
    }
    
    if(elm.tagName == 'IMG') {
        return 'image';
    }
}

function whichChild(elem){
    var  i= 0;
    while((elem=elem.previousElementSibling)!=null) ++i;
    return i;
}

function updateLocalDataSlide(elm, val, val2) {
    const blob = JSON.parse(localStorage.getItem('jsonBlob'));
    const slide = elm.closest('.slide');
    const num = whichChild(slide) - 1;
 
    
    switch(getElmType(elm)) {
      case 'heading':
        blob['section1'].slides['slide' + num].headingText = val; 
        
        break;
      case 'paragraph':
        blob['section1'].slides['slide' + num].paragraph = val; 
            
        break;
      case 'link':
         blob['section1'].slides['slide' + num].linkText = val; 
            
        break;
      case 'image':
        handleImage(elm);
        break;
    
      default:
        blob['section1'].slides['slide' + num].textClasses = [val, val2, 'editable'];
            
    }
    
    //blob[section].edited = true;
    //blob["version"] += 1;
    localStorage.setItem('jsonBlob', JSON.stringify(blob));
}

function updateLocalDataBlog(elm, val) {
    const blob = JSON.parse(localStorage.getItem('jsonBlob'));
    blob['section3'].blog.headingText = val;
    
    localStorage.setItem('jsonBlob', JSON.stringify(blob));
}

function updateLocalDataInsta(elm, val, val2) {
    const blob = JSON.parse(localStorage.getItem('jsonBlob'));
    blob['section3'].instagram.headingText = val;
    blob['section3'].instagram.href = val2;
    
    localStorage.setItem('jsonBlob', JSON.stringify(blob));
}

function updateLocalData(elm, val, val2) {
    const section = elm.closest('section').id;
    const blob = JSON.parse(localStorage.getItem('jsonBlob'));

    
    switch(getElmType(elm)) {
      case 'heading':
        blob[section].headingText = val;
    
        break;
      case 'paragraph':
        blob[section].paragraph = val;
            
        break;
      case 'link':
        blob[section].linkText = val;  
            
        break;
      case 'image':
        handleImage(elm);
        break;
            
    }
    
    //blob[section].edited = true;
    //blob["version"] += 1;
    localStorage.setItem('jsonBlob', JSON.stringify(blob));
}

function closeEditor() {
    const editor = document.getElementById('editor');
    const theCSSprop = window.getComputedStyle(editor, null).getPropertyValue('display');
    
    if (theCSSprop !== 'none') {
        editor.style.display = 'none';
        editor.querySelector('.show').classList.remove('show');
    }
    
}

function openEditor(elm, form) {
    form.classList.add('show');
    document.getElementById('editor').style.display = 'block';
    helpers.trapFocus(document.getElementById('editor'), elm)
}

function handleCancelEditButtonClick(button) {
    const url = ajax.getBlobUrl();
    const body = document.getElementById('home');
    const publish = document.getElementById('publishButton');
    
    closeEditor();
    localStorage.setItem('state', '');
    button.remove();
    publish.remove();
    body.innerHTML = '';
    ajax.getUsefulJSON( url, data => { home.updateBlob(data, true); });
}

function handlePublish(button) {
    const body = document.getElementById('home');
    const cancel = document.getElementById('cancelEditButton');
    const newDoc = document.implementation.createHTMLDocument();
    newDoc.documentElement.innerHTML= localStorage.getItem('jsonBlob');
    
    closeEditor();
    localStorage.setItem('state', '');
    button.remove();
    cancel.remove();
    body.innerHTML = '';
    home.updateBlob(JSON.parse(localStorage.getItem('jsonBlob')), false)
    
//    fetch('http://127.0.0.1:54315/testdata/test-json.html', {
//        method: 'POST',
//        body: newDoc,
//      }).then(response => {
//        console.log(response)
//      });
}



