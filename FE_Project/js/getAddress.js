// 맵 정보
let mapLocation = document.querySelector("#p-address");

// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();

// 편의상을 위해 따로 빼둔 콜백 함수
let myCallBack = function (result,status)
{
    if (status === kakao.maps.services.Status.OK) {
        mapLocation.innerHTML = result[0].address.address_name;

    }
}

function searchDetailAddrFromCoords(coords, callback) {
    // 좌표로 법정동 상세 주소 정보를 요청합니다
    geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
}

// 처음 시작 시 맵의 좌표로 주소를 불러옵니다
searchDetailAddrFromCoords(markerPosition,myCallBack);