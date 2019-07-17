'use strict';

function getRepos(userHandle) {
  const searchURL = `https://api.github.com/users/${userHandle}/repos`;
  fetch(searchURL)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => console.log(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const userHandle = $('#js-user-handle').val();
    getRepos(userHandle);
  });
}

$(watchForm);