const button = document.getElementById('send');
const form = document.getElementById('form');

form.addEventListener('submit', postRequest);

//NEW METHOD WITH async await
async function postRequest(e) {
  e.preventDefault();
  button.setAttribute('disabled', 'disabled');
  const fd = new FormData(form);
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: fd.get('firstname'),
      body: fd.get('message'),
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  console.log(response);
  if (response.ok) {
    button.removeAttribute('disabled');
  } else {
    button.classList.replace('btn-primary', 'btn-danger');
  }
  const json = await response.json();
  console.log(json);
}

//OLD METHOD WITH .then
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: fd.get('firstname'),
//     body: fd.get('message'),
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => {
//     console.log(response);
//     if (response.ok) {
//       button.removeAttribute('disabled');
//     } else {
//       button.classList.replace('btn-primary', 'btn-danger');
//     }
//     return response.json();
//   })
//   .then((json) => {
//     console.log(json);
//   });
