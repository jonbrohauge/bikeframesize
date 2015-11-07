function loadForm() {
    var minFrameSize = 65,
        maxFrameSize = 105;

    var frameSizeDiv = document.getElementById("frameSizeDiv");

//Create and append select list
    var selectList = document.createElement("select");
    selectList.setAttribute("id", "mySelect");
    frameSizeDiv.appendChild(selectList);

//Create and append the options
    for (var i = minFrameSize; i < maxFrameSize; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", i);
        option.text = i;
        selectList.appendChild(option);
    }

}
