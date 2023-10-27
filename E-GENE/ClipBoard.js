let textarea = document.createElement("textarea");
let copyBtn = document.createElement("button");

document.body.appendChild(textarea);
document.body.appendChild(copyBtn);

document.querySelector('textarea').setAttribute('style', 'width:300px; height:100px');

document.querySelector('button').setAttribute('style','width:50px; height:50px');
document.querySelector('button').innerText = '복사';

document.querySelector('button').onclick = function() {
    console.log('복사버튼');
    var text = textarea.value;
 
    navigator.clipboard.writeText(text)
    .then(() => {
        console.log('Text copied to clipboard');
    })
    .catch(err => {
        console.error('Error in copying text: ', err);
    });
}
