// Email subcription
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwZYjwzclIAb2fmltUQI-HDYaMlirv9GB1P3pHoLqcMWt_byR0/exec";
const form = document.forms["submit-to-google-sheet"];
const loading = document.querySelector(".js-loading");
const successMessage = document.querySelector(".js-success-message");
const errorMessage = document.querySelector(".js-error-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  showLoadingIndicator();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => showSuccessMessage(response))
    .catch((error) => showErrorMessage(error));
});

function showLoadingIndicator() {
  form.classList.add("is-hidden");
  loading.classList.remove("is-hidden");
}

function showSuccessMessage(response) {
  console.log("Success!", response);
  setTimeout(() => {
    successMessage.classList.remove("is-hidden");
    loading.classList.add("is-hidden");
  }, 500);
}

function showErrorMessage(error) {
  console.error("Error!", error.message);
  setTimeout(() => {
    errorMessage.classList.remove("is-hidden");
    loading.classList.add("is-hidden");
  }, 500);
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


    document.getElementById("listening").innerHTML = `  <div class="row-wrap">



    <div class="title"><p><strong>Aflevering 8:</strong> Naar Zee
<br>
Vertolkt door Claron McFadden</p>
</div>

<div class="center">
<iframe class="spotify" loading="lazy" src="https://open.spotify.com/embed/episode/4NEDKn3QpJOqY5ScLSt2M1"  width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
<div class="eye-listen">
<img class="eye-listen" src="img/eva_lips_animation.gif" alt="Talking lips animation"/>

</div> 
</div>



    <div class="title"><p><strong>Aflevering 7:</strong> David
<br>
Vertolkt door Helen Kamperveen</p></div>
<div class="center">
<iframe class="spotify lazyload"  data-src="https://open.spotify.com/embed-podcast/episode/04sxkAT8JBDiC9iNIpyDxi"  width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
<div class="eye-listen">
<img class="eye-listen" src="img/eva_lips_animation.gif" alt="Talking lips animation"/></div>
</div>


    <div class="title"><p><strong>Aflevering 6:</strong> De Nacht  
<br>
Vertolkt door Mira Helmer</p></div>
<div class="center">
<iframe class="spotify lazyload" data-src="https://open.spotify.com/embed-podcast/episode/3NHItBLGKVyY7YekwQkYCx"  width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
<div class="eye-listen">
<img class="eye-listen" src="img/eva_lips_animation.gif" alt="Talking lips animation"/></div>
</div>



    <div class="title"><p><strong>Aflevering 5:</strong> Meidag  
<br>
Vertolkt door Funda Müjde</p></div>
<div class="center">
<iframe class="spotify lazyload" data-src="https://open.spotify.com/embed-podcast/episode/2NcFLdGUJrjqMTpJgQczVJ"  width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
<div class="eye-listen">
<img class="eye-listen" src="img/eva_lips_animation.gif" alt="Talking lips animation"/></div>
</div>


<div class="title"><p><strong>Aflevering 4:</strong> Ontmoeting  
<br>
Vertolkt door Stefanie Janssen</p></div>
<div class="center">
<iframe class="spotify lazyload" data-src="https://open.spotify.com/embed-podcast/episode/6U3lfrg8sh20oHwUkrPqPT"  width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
<div class="eye-listen">
<img class="eye-listen" src="img/eva_lips_animation.gif" alt="Talking lips animation"/></div>
</div>


<div class="title"><p><strong>Aflevering 3:</strong> Stemmen
<br>
Vertolkt door Nastaran Razawi Khorasani</p></div>
<div class="center">
<iframe class="spotify lazyload" data-src="https://open.spotify.com/embed-podcast/episode/7veDpE3QjGaNoteJ6Zye3X"  width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
<div class="eye-listen">
<img class="eye-listen" src="img/eva_lips_animation.gif" alt="Talking lips animation"/></div>
</div>


<div class="title"><p><strong>Aflevering 2:</strong> Naar Huis
<br>
Vertolkt door Jade Olieberg</p></div>
<div class="center">
<iframe class="spotify lazyload" data-src="https://open.spotify.com/embed-podcast/episode/7GeG7kDRkNsKkzxOYqeGs9"  width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
<div class="eye-listen">
<img class="eye-listen" src="img/eva_lips_animation.gif" alt="Talking lips animation"/></div>
</div>


<div class="title"><p><strong>Aflevering 1:</strong> De Nieuwe Eeuw
<br>
Vertolkt door Leny Breederveld</p></div>
<div class="center">
<iframe class="spotify lazyload" data-src="https://open.spotify.com/embed-podcast/episode/0qRugSiAguJEn8GsKlJ4zm"  width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
<div class="eye-listen">
<img class="eye-listen" src="img/eva_lips_animation.gif" alt="Talking lips animation"/></div>
</div>


<div class="title"><p><strong>In gesprek over Carry van Bruggen:</strong> Aflevering 5:<br>
Gaea Schoeters en Barber van de Pol in gesprek over de afkeer van Carry van Bruggen van alle Isme’s en vooral het Nationalisme</p></div>
<div class="center">
<iframe class="spotify lazyload" data-src="https://open.spotify.com/embed-podcast/episode/2n5QaEdB4EJxzawmxWe6DT"  width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
<div class="eye-listen">
<img class="eye-listen" src="img/eva_lips_animation.gif" alt="Talking lips animation"/></div>
</div>


<div class="title"><p><strong>In gesprek over Carry van Bruggen:</strong> Aflevering 4:<br>
Gaea Schoeters en Barber van de Pol in gesprek over de relatie tussen individu en collectief in het werk van Carry van Bruggen en het belang van Anders-zijn</p></div>
<div class="center">
<iframe class="spotify lazyload" data-src="https://open.spotify.com/embed-podcast/episode/5WNLfAkpYWNETvXZMqmFLU"  width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
<div class="eye-listen">
<img class="eye-listen" src="img/eva_lips_animation.gif" alt="Talking lips animation"/></div>
</div>


<div class="title"><p><strong>In gesprek over Carry van Bruggen:</strong> Aflevering 3:<br>
Gaea Schoeters en Barber van de Pol in gesprek over “de denkende vrouw” in het werk van Carry van Bruggen</p></div>
<div class="center">
<iframe class="spotify lazyload" data-src="https://open.spotify.com/embed-podcast/episode/3eOziDQsGxZCkt66elcRfr"  width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
<div class="eye-listen">
<img class="eye-listen" src="img/eva_lips_animation.gif" alt="Talking lips animation"/></div>
</div>


<div class="title"><p><strong>In gesprek over Carry van Bruggen:</strong> Aflevering 2:<br>
Gaea Schoeters en Barber van de Pol in gesprek over Carry van Bruggen en haar roman Eva</p></div>
<div class="center">
<iframe class="spotify lazyload" data-src="https://open.spotify.com/embed-podcast/episode/46E2HvdK1msyicCNTKZWGG"  width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

<div class="eye-listen">
<img class="eye-listen" src="img/eva_lips_animation.gif" alt="Talking lips animation"/></div>
</div>


<div class="title"><p><strong>In gesprek over Carry van Bruggen:</strong> Aflevering 1: <br>
Gaea Schoeters en Barber van de Pol in gesprek over Carry van Bruggen en haar belang voor de Nederlandse literatuur
</p></div>
<div class="center">
<iframe class="spotify lazyload" data-src="https://open.spotify.com/embed-podcast/episode/2Db3K7gFHoILKaMPmowVRn"  width="100%" height="232" frameborder="0" allowtransparency="false" allow="encrypted-media"></iframe>

<div class="eye-listen">
  <img class="eye-listen" src="img/eva_lips_animation.gif" alt="Talking lips animation"/>
</div>
</div>



</div>`
         
},100);
}
}
