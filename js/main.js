let map;
let marker;
let myPos = { lat: 44.786568, lng: 20.448921 };

//Google maps
function initMap() {
  map = new google.maps.Map(document.querySelector('.map'), {
    center: myPos,
    zoom: 11,
  });

  marker = new google.maps.Marker({
    position: myPos,
    map,
    title: 'Hello World!',
  });

  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
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
