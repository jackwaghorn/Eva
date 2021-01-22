// Email subcription
const scriptURL = 'https://script.google.com/macros/s/AKfycbwZYjwzclIAb2fmltUQI-HDYaMlirv9GB1P3pHoLqcMWt_byR0/exec'
    const form = document.forms['submit-to-google-sheet']
    const loading = document.querySelector('.js-loading')
    const successMessage = document.querySelector('.js-success-message')
    const errorMessage = document.querySelector('.js-error-message')

    form.addEventListener('submit', e => {
      e.preventDefault()
      showLoadingIndicator()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => showSuccessMessage(response))
        .catch(error => showErrorMessage(error))
    })

    function showLoadingIndicator () {
      form.classList.add('is-hidden')
      loading.classList.remove('is-hidden')
    }

    function showSuccessMessage (response) {
      console.log('Success!', response)
      setTimeout(() => {
        successMessage.classList.remove('is-hidden')
        loading.classList.add('is-hidden')
      }, 500)
    }

    function showErrorMessage (error) {
      console.error('Error!', error.message)
      setTimeout(() => {
        errorMessage.classList.remove('is-hidden')
        loading.classList.add('is-hidden')
      }, 500)
    }

// Inital loading page
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('contents').style.visibility="hidden";
       document.getElementById('contents').style.opacity="0";
       document.getElementById('nav-open-btn').style.opacity="0";
  } else if (state == 'complete') {
      setTimeout(function(){
        document.getElementById('load').style.visibility="hidden";
         document.getElementById('nav-open-btn').style.opacity="1";
         document.getElementById('interactive');
         document.getElementById('contents').style.visibility="visible";
         document.getElementById('contents').style.opacity="1";
         
      },100);
  }
}
