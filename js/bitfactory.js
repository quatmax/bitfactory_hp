function initMap() {
  var bitfactory = {lat: 48.043894, lng: 14.425321};
  var map = new google.maps.Map(
  document.getElementById('smallmap'), {zoom: 14, center: bitfactory});
  var marker = new google.maps.Marker({position: bitfactory, map: map});
}
