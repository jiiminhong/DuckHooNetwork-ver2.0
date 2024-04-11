import KCISA_API_KEY from "./apikey.js";

var xhr = new XMLHttpRequest();
var url = "http://api.kcisa.kr/openapi/CNV_060/request"; /*URL*/
var queryParams =
  "?" + encodeURIComponent("serviceKey") + "=" + KCISA_API_KEY; /*서비스키*/
queryParams +=
  "&" +
  encodeURIComponent("numOfRows") +
  "=" +
  encodeURIComponent("10"); /*세션당 요청레코드수*/
queryParams +=
  "&" +
  encodeURIComponent("pageNo") +
  "=" +
  encodeURIComponent("1"); /*페이지수*/

// console.log(url + queryParams);
xhr.open("GET", url + queryParams);
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    // 요청이 완료되었을 때만 처리
    console.log("status: " + xhr.status);
    //console.log("response: " + xhr.responseText); // 응답 데이터 확인

    // 여기에 응답 데이터를 처리하는 코드를 추가하십시오.
    // 예를 들어, JSON 형식의 응답 데이터를 처리하려면 다음과 같이 할 수 있습니다:
    // var responseData = JSON.parse(xhr.responseText);
    // console.log("resultCode: " + responseData.resultCode);
    // console.log("resultMsg: " + responseData.resultMsg);
    // 나머지 데이터에 대한 처리를 추가하세요.

    var item = $(this.responseText).find("item");
    $(item).each(function () {
      $(".listgroup").append(
        '<li class="listgroup-item w-100">' +
          $(this).find("title").text() +
          "</li>"
      );
      // console.log("title" + $(this).find("title").text());
      // $("body").append("<p><span>" + $(this).text() + "</span>");
      // console.log("-> 다음");
      // console.log("type" + $(this).find("type").text());
      // console.log("period" + $(this).find("period").text());
      // console.log("eventPeriod" + $(this).find("eventPeriod").text());
      // console.log("eventSite" + $(this).find("eventSite").text());
      // console.log("charge" + $(this).find("charge").text());
      // console.log("contactPoint" + $(this).find("contactPoint").text());
      // console.log("url" + $(this).find("url").text());
      //console.log("imageObject" + $(this).find("imageObject").text());
      // console.log("description" + $(this).find("description").text());
      // console.log("viewCount" + $(this).find("viewCount").text());
    });
  }
};

xhr.send(); // 요청 보내기
