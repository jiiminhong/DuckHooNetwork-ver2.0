import KCISA_API_KEY from "./apikey.js";

$(document).ready(function () {
  getScheduleData()
    .then(function (responseText) {
      const items = $(responseText).find("item");
      const numOfRows = 10;
      displayScheduleItems(items.slice(0, numOfRows));
    })
    .catch(function (error) {
      console.error(error);
    });
});

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

function displayScheduleItems(items) {
  const listgroup = $(".listgroup");
  listgroup.empty();
  items.each(function (index) {
    const hrefurl = "detail.html?index=" + index;
    listgroup.append(
      `<li class="listgroup-item w-100"><a href="${hrefurl}" class="schedule-item">${$(
        this
      )
        .find("title")
        .text()}</a></li>`
    );
  });
}
