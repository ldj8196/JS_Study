let encodearea = document.createElement("textarea");
encodearea.value = "select 123 as &#039;test&#039;from dual;"

const regex = /&(amp|lt|gt|quot|#039);/g;
const chars = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#039;': "'"
}  

function unescape(str) {
    if(regex.test(str)) {
        return str.replace(regex, (matched) => '&'+chars[matched] || matched);
    } 
}

console.log(typeof(encodearea.value));
console.log(unescape(encodearea.value));

document.body.appendChild(encodearea);