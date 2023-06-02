$(document).ready(function() {
    // 기본 설정
    var apiKey =  "a0fe4b649d353a27a301be4b66d4173c"; // 여기에 발급받은 API Key를 입력하세요.
    var city = "seoul"; // 기본값은 서울입니다.
  



    
    // 날씨 정보 업데이트 함수
    function updateWeather() {
      // OpenWeatherMap API 호출 URL
      var apiURL =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        apiKey;
  
      // API 호출 및 날씨 정보 업데이트
      $.getJSON(apiURL, function(data) {
        var temperature = data.main.temp;
        var description = data.weather[0].description;
  
        $("#temperature").html(temperature + "°C");
        $("#description").html(description);
      });
    }

    

  
  
    // 페이지 로드 시 날씨 정보 업데이트
    updateWeather();
  
    // 도시 선택 메뉴 이벤트 핸들러
    $("#city-selector").on("change", function() {
      city = $(this).val();
      updateWeather();
    });

   
    
  

});