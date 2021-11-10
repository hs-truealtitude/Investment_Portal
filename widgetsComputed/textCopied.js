return function  (id) {
    document.getElementById("textCopied").innerText = "Link Copied";

    var str = document.getElementById(id);
    window.getSelection().selectAllChildren(str);
    document.execCommand("Copy")

}