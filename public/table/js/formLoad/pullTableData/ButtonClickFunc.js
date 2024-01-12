import { StartFunc as StartFuncCheckBeforeFetch } from "./CheckBeforeFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

let StartFunc = async () => {
    let jVarLocalFetchData = await LocalFetchFiles();
    StartFuncAfterFetch({ inFromFetch: jVarLocalFetchData });
};

let LocalFetchFiles = async () => {
    let jVarLocalTableName = LocalFuncForQueryParams({ inKey: "fileName" });
    let jVarLocalHeadingId = document.getElementById("HeadingId");
    jVarLocalHeadingId.innerHTML = jVarLocalTableName;

    let jVarLocalFetchUrl = `/bin/${jVarLocalTableName.split(".")[0]}`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return data;
};

let LocalFuncForQueryParams = ({ inKey }) => {
    let jVarLocalKey = inKey;

    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const parameterValue = params.get(jVarLocalKey);

    return parameterValue;
};

export { StartFunc };