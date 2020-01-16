function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () { 
    callback(this.responseText) 
  };
  xhr.open('GET', url, true);
  xhr.send();
}

export function getUsefulContents(url, callback) {
  getJSON(url, data => callback(JSON.parse(data)));
}

export function getAuthUrl() {  
    return 'http://127.0.0.1:60723/testdata/test-auth.html'; 
}

export function getBlobUrl() {  
    return 'http://127.0.0.1:60723/testdata/test-json.html'; 
}



