const navbar = document.querySelector("#navbar");
const header = document.querySelector("#tophead");
const loginbtn = document.querySelector("login-btn");
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  headerHeight < scrollY
    ? navbar.classList.add("navbar-sticky")
    : navbar.classList.remove("navbar-sticky");
});

// 지도 api
var mapOptions = {
  center: new naver.maps.LatLng(37.4723085472631, 126.886110038559),
  zoom: 10,
};

// 지도 표시
var HOME_PATH = window.HOME_PATH || ".";

var map = new naver.maps.Map(document.getElementById("map"), {
  zoom: 15,
  center: new naver.maps.LatLng(37.479970085901, 126.882507193785),
});

var latlngs = [
  new naver.maps.LatLng(37.477043450667, 126.879222554896),
  new naver.maps.LatLng(37.4814249861909, 126.880393604209),
  new naver.maps.LatLng(37.4716606034832, 126.883585441951),
];

var markerList = [];

for (var i = 0, ii = latlngs.length; i < ii; i++) {
  var icon = {
      url: HOME_PATH + "/img/example/sp_pins_spot_v3.png",
      size: new naver.maps.Size(24, 37),
      anchor: new naver.maps.Point(12, 37),
      origin: new naver.maps.Point(i * 29, 0),
    },
    marker = new naver.maps.Marker({
      position: latlngs[i],
      map: map,
      icon: icon,
    });

  marker.set("seq", i);

  markerList.push(marker);

  marker.addListener("mouseover", onMouseOver);
  marker.addListener("mouseout", onMouseOut);

  icon = null;
  marker = null;
}

function onMouseOver(e) {
  var marker = e.overlay,
    seq = marker.get("seq");

  marker.setIcon({
    url: HOME_PATH + "/img/example/sp_pins_spot_v3_over.png",
    size: new naver.maps.Size(24, 37),
    anchor: new naver.maps.Point(12, 37),
    origin: new naver.maps.Point(seq * 29, 50),
  });
}

function onMouseOut(e) {
  var marker = e.overlay,
    seq = marker.get("seq");

  marker.setIcon({
    url: HOME_PATH + "/img/example/sp_pins_spot_v3.png",
    size: new naver.maps.Size(24, 37),
    anchor: new naver.maps.Point(12, 37),
    origin: new naver.maps.Point(seq * 29, 0),
  });
}

window.navermap_authFailure = function () {
  alert("지도 인증에 실패하였습니다.");
};
