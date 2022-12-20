window.addEventListener("DOMContentLoaded", function () {
    let b = document.getElementById("button1");
    b.addEventListener("click", count);
});

function count() {
    let f1 = document.getElementsByName("field1");
    let f2 = document.getElementsByName("field2");
    let r = document.getElementById("result");
    let regexp = /\D/;
    if (regexp.test(String(f1[0].value)) || regexp.test(String(f2[0].value))) {
        r.innerHTML = "Error";
    } else {
        r.innerHTML = f1[0].value * f2[0].value;
    }
    return false;
}
