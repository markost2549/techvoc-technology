let map;
let marker;
let myPos = { lat: 44.231165, lng: 22.528514 };

//Google maps
function initMap() {
  map = new google.maps.Map(document.querySelector('.map'), {
    center: myPos,
    zoom: 14,
  });

  marker = new google.maps.Marker({
    position: myPos,
    map,
    title: 'Negotin',
  });
}

//Sticky menu background
window.addEventListener('scroll', function () {
  if (window.scrollY > 80) {
    document.querySelector('#navbar').style.opacity = 0.85;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// Smooth scrolling
$('#navbar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 80,
      },
      800
    );
  }
});
