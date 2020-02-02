function getContents(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () { 
    callback(this.responseText) 
  };
  xhr.open('GET', url, true);
  xhr.send();
}

export function getUsefulJSON(url, callback) {
  getContents(url, data => callback(JSON.parse(data)));
}

export function getUsefulContents(url, callback) {
  getContents(url, data => callback(data));
}

export function getAuthUrl() {  
    return 'http://127.0.0.1:49702/testdata/test-auth.html'; 
}

export function getBlobUrl() {  
    return 'http://127.0.0.1:49702/testdata/test-json.html'; 
}

export function getLatestBlog() {  
    return 'http://127.0.0.1:49702/testdata/latest-blog.html'; 
}



