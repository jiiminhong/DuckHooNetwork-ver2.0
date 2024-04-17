import KCISA_API_KEY from "./apikey.js";

$(document).ready(function () {
  const queryParams = new URLSearchParams(window.location.search);
  const index = queryParams.get("index");
  if (index !== null) {
    loadItemDetails(index);
  } else {
    console.error("Index not found in URL.");
  }
});

function loadItemDetails(index) {
  getScheduleData()
    .then(function (responseText) {
      const items = $(responseText).find("item");
      const item = items.eq(index);
      if (item.length > 0) {
        $(".title").append(item.find("title").text());
        $(".main-content").append(
          "<div class='detail-notice'>" +
            "<p class='detail-content d-flex align-items-center'><span>기간</span>" +
            item.find("period").text() +
            "</p>" +
            "<p class='detail-content d-flex align-items-center'><span>문의</span>" +
            item.find("contactPoint").text() +
            "</p>" +
            "<p class='detail-content d-flex align-items-center'><span>바로가기</span><a href='" +
            item.find("url").text() +
            "' target='_blank'>자세한 사항 확인하러 가기</a><p>" +
            "</div>" +
            "<div class='detail-box'><p>" +
            item.find("description").text() +
            "</p></div>"
        );
      } else {
        console.error("Item not found at index:", index);
      }
    })
    .catch(function (error) {
      console.error("Failed to fetch items.");
    });
}

function getScheduleData() {
  const url = "http://api.kcisa.kr/openapi/CNV_060/request";
  const queryParams = {
    serviceKey: KCISA_API_KEY,
    numOfRows: 10,
    pageNo: 1,
  };
  return $.ajax({
    url: url,
    method: "GET",
    data: queryParams,
  });
}
