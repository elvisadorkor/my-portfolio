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


function getFunFactsUsingArrowFunctions() {
  fetch('/data').then(response => response.text()).then((funFact) => {
    document.getElementById('fun-fact-container').innerText = funFact;
  });
}

function getFacts() {
  fetch('/data').then(response => response.json()).then((funFacts) => {

    const funFactsListElement = document.getElementById('fun-fact-container');
    funFactsListElement.innerHTML = '';
    funFactsListElement.appendChild(
        createListElement('Fact 1: ' + funFacts[0]));
        console.log(funFacts[0]);
    funFactsListElement.appendChild(
        createListElement('Fact 2: ' + funFacts[1]));
        console.log(funFacts[1]);
    funFactsListElement.appendChild(
        createListElement('Fact 3: ' + funFacts[2]));
        console.log(funFacts[2]);
  });
}

function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
