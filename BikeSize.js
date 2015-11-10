function loadForm() {
    var minFrameSize = 65,
        maxFrameSize = 105;

    var frameSizeDiv = document.getElementById("frameSizeDiv");

//Create and append select list
    var selectList = document.createElement("select");
    selectList.setAttribute("id", "frameSizeSelect");
    frameSizeDiv.appendChild(selectList);

//Create and append the options
    for (var i = minFrameSize; i < maxFrameSize; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", i);
        option.text = i;
        selectList.appendChild(option);
    }
}

function updateFrameSize() {
    var frameSize = document.getElementById('frameSizeSelect');
    if(frameSize.value != 0) {
        document.getElementById("cityFrameSize").innerHTML = calculateFrameSize(frameSize.value, 4) + '"';
        document.getElementById("mtbFrameSize").innerHTML = calculateFrameSize(frameSize.value, 8) + '"';
        document.getElementById("raceFrameSize").innerHTML = calculateFrameSize(frameSize.value, 0) + '"';
    }
}

function calculateFrameSize(frameSize, seed) {
    return (Math.round(((((frameSize * 0.66) - seed) / 2.54) * 10)) / 10);
}

