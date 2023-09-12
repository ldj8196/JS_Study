function test() {

    var testField = document.querySelector("#Field_F1");
    console.log(testField)
    testField.textContent = 'abc';
    console.log(testField.value);

}

function cssCtrl() {
    $('#Field_F1').css({
        'display':'none'
    });
}