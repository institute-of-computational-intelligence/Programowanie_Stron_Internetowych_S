function addLinkToList(event) {
    event.preventDefault();
    var LinkParameter = document.getElementById("parameter1");
    var DescriptionParameter = document.getElementById("parameter2");

    var a = document.createElement("a");
    var linkText = document.createTextNode(DescriptionParameter.value);
    a.appendChild(linkText);
    a.href = LinkParameter.value;
    a.target = "_blank";

    var UnorderListOfLinks = document.getElementById("UnorderListOfLinks");
    var li = document.createElement("li");
    li.appendChild(a);

    UnorderListOfLinks.insertBefore(li, UnorderListOfLinks.childNodes[0]);
}

var addNewLink = document.querySelector(".addNewLink");
addNewLink.addEventListener("click", addLinkToList);