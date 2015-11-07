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

function calculateFrameSize() {
    var frameSize = document.getElementById('frameSizeSelect');
    if(frameSize.value != 0) {
        document.getElementById("cityFrameSize").innerHTML = (Math.round(((((frameSize.value * 0.66) - 4) / 2.54) * 10)) / 10) + '"';
        document.getElementById("mtbFrameSize").innerHTML = (Math.round(((((frameSize.value * 0.66) - 8) / 2.54) * 10)) / 10) + '"';
        document.getElementById("raceFrameSize").innerHTML = (Math.round((((frameSize.value * 0.66) / 2.54) * 10)) / 10) + '"';
    }
}

