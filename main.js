let model = [];

function displayUnsorted() {
    let input = document.getElementById("textInput");
    model.push(input.value);
    document.getElementById("originalArray").innerHTML = model.join(', ');
}

function addP(text) {
    let p = document.createElement("P");
    let textNode = document.createTextNode(text);
    p.appendChild(textNode);
    document.body.appendChild(p);
}

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
           [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

function quicksort(arr, low, high) {
    if (low < high) { 
        addP(arr.join(', '));
        let partitionIndex = partition(arr, low, high);
        quicksort(arr, low, partitionIndex - 1);
        quicksort(arr, partitionIndex + 1, high);
    }
}


function sort() {
    quicksort(model, 0, model.length)
    addP(model.join(', '));
}
