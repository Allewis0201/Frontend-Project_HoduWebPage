var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(33.4423379727783, 126.571449734542), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
        mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
    };

// 지도를 생성한다
var map = new kakao.maps.Map(mapContainer, mapOption);

// 지도 타입 변경 컨트롤을 생성한다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도의 상단 우측에 지도 타입 변경 컨트롤을 추가한다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도에 확대 축소 컨트롤을 생성한다
var zoomControl = new kakao.maps.ZoomControl();

// 지도의 우측에 확대 축소 컨트롤을 추가한다
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 마커가 표시될 위치를 선정함.
var startPosition  = new kakao.maps.LatLng(33.4423379727783, 126.571449734542);
// 마커를 생성함.
var marker = new kakao.maps.Marker({
    position: startPosition
});
// 마커가 지도 위에 표시되도록 설정함.
marker.setMap(map);


// 맵 정보
let mapLocation = document.querySelector("#p-address");
// 주소-좌표 변환 객체 생성
var geocoder = new kakao.maps.services.Geocoder();

// 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
kakao.maps.event.addListener(map, "click", function (mouseEvent) {
    searchDetailAddrFromCoords(mouseEvent.latLng, function(result, status) {
        if(status === kakao.maps.services.Status.OK) {
            mapLocation.innerHTML = result[0].address.address_name;

            marker.setPosition(mouseEvent.latLng);
            marker.setMap(map);
        }
    });
})


function searchDetailAddrFromCoords(coords, callback) {
    // geocoder 객체의 coord2Address()로 해당 좌표의 지번을 얻는다.
    geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
}
