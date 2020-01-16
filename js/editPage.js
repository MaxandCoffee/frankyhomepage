
import * as ajax from './ajax.js';
import * as helpers from './helpers.js';
import * as components from './components.js';
import * as home from './homepagescript.js';

export function init() {
    const url = ajax.getAuthUrl();
    const editButton = components.createButtonComponent('Edit', 'editButton', ['button-main']);
    const pageState = localStorage.getItem('state');
    
    ajax.getUsefulContents( url, data => { isUserAuthorized(data); });

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
            //TODO: handlePublishButtonClick(e.target);
            break;
          case 'cancelEditButton':
            handleCancelEditButtonClick(e.target);
            break;
        }

        if(e.target.contenteditable) {
            handleEditable(e.target);
        }

        if(e.target.classList.contains('js-closeEditor')) {
            closeEditor();
        }
    }
}

function addCancelButton() {
    document.getElementById('edit').innerHTML += components.createButtonComponent('Cancel', 'cancelEditButton', ['button-secondary']).outerHTML;
}

function handleEditButtonClick(button){
    const editableElms = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'A', 'IMG'];
    
    editableElms.forEach(highlightEditableElms); 
    
    button.innerHTML = 'Publish';
    button.id = 'publishButton';
    
    addCancelButton();
    
    localStorage.setItem('state', 'editMode');
}

function highlightEditableElms(item) {
    
    const main = document.getElementById('home');
    const elm = main.getElementsByTagName(item);
    
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
            elm[i].contenteditable = 'true';
            elm[i].style.padding = '12px';
            elm[i].style.borderRadius = '4px';
            elm[i].style.border = '1px dotted #000';
            elm[i].style.cursor = 'pointer';
            elm[i].setAttribute('tabindex', '0');
            
        }
    }
  
}

function handleEditable(elm) {
    const editor = document.getElementById('editor');
    const textarea = editor.querySelector('textarea');
    const saveButton = editor.querySelector('#editorSave');
    
    elm.id = helpers.randomId();
    textarea.value = elm.innerHTML;
    saveButton.setAttribute('data-ElementEditing', elm.id);
    
    openEditor(elm);
}

function handleEditSaveButtonClick(button) { 
    const editor = document.getElementById('editor');
    const textarea = editor.querySelector('textarea');
    const newText = textarea.value;
    const elm = document.getElementById(button.getAttribute('data-ElementEditing'));
    
    if(elm.innerHTML !== newText){
        updatePage(elm, newText);
        updateLocalData(elm, newText);
    }
   
    closeEditor();
    
}

function updatePage(elm, text) {   
    elm.innerHTML = text;
}

function getElmType(elm){
    const headings = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];

    if(headings.find(isHeading)){
        return 'heading';
    }  
    

    function isHeading(heading){
        if (heading == elm.tagName) {
             return true;
         }
    }
}

function updateLocalData(elm, text) {
    const section = elm.closest('section').id;
    const blob = JSON.parse(localStorage.getItem('jsonBlob'));
    
    switch(getElmType(elm)) {
      case 'heading':
         blob[section].headingText = text;
        break;
      case 'paragraph':
        //TODO
        break;
      case 'link':
        //TODO
        break;
      case 'image':
        //TODO
        break;
    }
    
    blob[section].edited = true;
    //blob["version"] += 1;
    localStorage.setItem('jsonBlob', JSON.stringify(blob));
}

function closeEditor() {
    document.getElementById('editor').style.display = 'none';
}

function openEditor(elm) {
    document.getElementById('editor').style.display = 'block';
    helpers.trapFocus(document.getElementById('editor'), elm)
}

function handleCancelEditButtonClick(button){
    const url = ajax.getBlobUrl();
    const body = document.getElementById('home');
    const publish = document.getElementById('publishButton');
    
    localStorage.setItem('state', '');
    button.remove();
    publish.remove();
    body.innerHTML = '';
    ajax.getUsefulContents( url, data => { home.updateBlob(data, true); });
}



