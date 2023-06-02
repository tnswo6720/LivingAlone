

  $(document).ready(function() {
    // 기본 설정
    var apiKey =  "a0fe4b649d353a27a301be4b66d4173c";
    var city = "seoul";

    // 날씨 정보 업데이트 함수
    function updateWeather() {
      var apiURL =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        apiKey;

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

  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelector(".dots");
  const slider = document.querySelector(".slider");
  let currentIndex = 0;

  function changeSlide(index) {
    document.querySelector(".slides").style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll(".dot").forEach(dot => dot.classList.remove("active"));
    dots.children[index].classList.add("active");
    currentIndex = index;
  }

  function createDots() {
    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.addEventListener("click", () => changeSlide(i));
      dots.append(dot);
    }
    dots.children[0].classList.add("active");
  }

  function autoPlaySlider() {
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      changeSlide(currentIndex);
    }, 3000);
  }

  window.addEventListener("DOMContentLoaded", () => {
    createDots();
    autoPlaySlider();
  });
