let encodearea = document.createElement("textarea");
encodearea.value = "select 123 as &#039;test&#039;from dual;";

const regex = /&(amp|lt|gt|quot|#39);/g;
const chars = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
}  

function unescape(str) {
    if(regex.test(str)) {
        return str.replace(regex, (matched) => chars[matched] || matched);
    } 
}

console.log(typeof(encodearea.value));
console.log(unescape("select 123 as &#039;test&#039;from dual;"));

document.body.appendChild(encodearea);

