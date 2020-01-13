$(document).ready(function () {
    $("#click").click(function () {
        let a = $("#area1").val();
        $("ul").append("<li>" + "Imie: " + a + "</li>");

        let b = $("#area2").val();
        $("ul").append("<li>" + "Nazwisko: " + b + "</li>");

        let c = $("#area3").val();
        $("ul").append("<li>" + "Zarobki: " + c + "</li>");
    });
})

function setItem(name, value, storage) {

    storage.setItem(name, value);
}

function getItem(name, storage) {

    return storage.getItem(name);
}
