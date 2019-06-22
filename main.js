let model = [];

function addText() {
    let input = document.getElementById("textInput");
    let p = document.createElement("P");
    let text = input.value;
    let textNode = document.createTextNode(text);
    p.appendChild(textNode);
    document.body.appendChild(p);
    model.push(text);
}

addText();

function sort() {
    model.sort();
    let paras = document.getElementsByTagName("P");
    for (let i = 0; i < model.length; i++) {
        paras[i].innerText = model[i];
    }
}
