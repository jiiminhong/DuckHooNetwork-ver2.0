// api key
import config from "../key.js";

const NAVERMAP_API_KEY = config.navermapapi;
const mapScript = document.createElement("script");
mapScript.type = "text/javascript";
mapScript.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVERMAP_API_KEY}`;
document.head.appendChild(mapScript);

const KCISA_API_KEY = config.kcisaapi;

export default KCISA_API_KEY;
