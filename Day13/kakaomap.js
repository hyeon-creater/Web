//지도를 보여줄 div 요소 찾기
var container= document.getElementById('map')

//지도의 위치니 즘레벨 정도를 옵션으로 미리 지정
var options= {
    center: new kakao.maps.LatLng(37.486868 , 126.929373),
    level: 4 //1~25
};

//지도객체를 만들고 보여주기
var map= new kakao.maps.Map(container, options);
//-----------------------------------------------------

var imageSrc = './image/mos.png';
      imageSize = new kakao.maps.Size(64, 64); // 정사각형 규격에 맞게 64x64로 조정
      imageOption = {offset: new kakao.maps.Point(32, 64)};

//var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
var sharedmarkerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [
    { title: '카카오', latlng: new kakao.maps.LatLng(33.450705, 126.570677) },
    { title: '생태연못', latlng: new kakao.maps.LatLng(33.450936, 126.569477) },
    { title: '텃밭', latlng: new kakao.maps.LatLng(33.450879, 126.569940) },
    { title: '근린공원', latlng: new kakao.maps.LatLng(33.451393, 126.570738) }
];

for (var i = 0; i < positions.length; i++) {
    var otherMarker = new kakao.maps.Marker({
          map: map,                      // 마커를 표시할 지도 객체 지정
          position: positions[i].latlng, // 마커를 표시할 좌표
          title: positions[i].title,      // 마커의 타이틀 (마우스 오버 시 노출)
          image: sharedmarkerImage
    });
}

//내 위치에 마커 표시하기
// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.486868 , 126.929373); 
//---------------------------------------

      // 마커를 생성합니다
var marker = new kakao.maps.Marker({
      position: markerPosition,
      image: sharedmarkerImage
});










//-------------------------------------------

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// ------------------------------------------

