// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.



//import comments to html page and print on console
function getComments() {
  fetch('/data').then(response => response.json()).then((comments) => {

    const commentsListElement = document.getElementById('comment-container');
    commentsListElement.innerHTML = '';
    var i = 0;
    for (i = 0; i < comments.length; i++){
        commentsListElement.appendChild(
        createListElement('Comment: ' + comments[i]));
        console.log(comments[i]);
    }
  });
}

//create list element
function createListElement(comment) {
  const liElement = document.createElement('li');
  liElement.innerText = comment;
  return liElement;
}
