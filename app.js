var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/yoda.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
console.log("error occured", error);
alert("Something wrong, try again after some time");
}

function clickHandler(){
    //outputDiv.innerText="Asgaurdian Translate" + txtInput.value
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
};

window.onload=function(){

btnTranslate.addEventListener("click", clickHandler)
}

