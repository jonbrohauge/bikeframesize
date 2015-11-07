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

function updateForm() {
    var frameSizeSelect = document.getElementById("frameSizeSelect");

    var frameSizeArray = [
        {framesize:65, cityFrameSize:"15.3", mtbFrameSize:"13.7", raceFrameSize:"16.9"},
        {framesize:66, cityFrameSize:"15.6", mtbFrameSize:"14.0", raceFrameSize:"17.1"},
        {framesize:67, cityFrameSize:"15.8", mtbFrameSize:"14.3", raceFrameSize:"17.4"},
        {framesize:68, cityFrameSize:"16.1", mtbFrameSize:"14.5", raceFrameSize:"17.7"},
        {framesize:69, cityFrameSize:"16.4", mtbFrameSize:"14.8", raceFrameSize:"17.9"},
        {framesize:70, cityFrameSize:"16.6", mtbFrameSize:"15.0", raceFrameSize:"18.2"},
        {framesize:71, cityFrameSize:"16.9", mtbFrameSize:"15.3", raceFrameSize:"18.4"},
        {framesize:72, cityFrameSize:"17.1", mtbFrameSize:"15.6", raceFrameSize:"18.7"},
/*
        {framesize:73, cityFrameSize:"15.6", mtbFrameSize:"14.0", raceFrameSize:"17.1"},
        {framesize:74, cityFrameSize:"15.6", mtbFrameSize:"14.0", raceFrameSize:"17.1"},
        {framesize:75, cityFrameSize:"15.6", mtbFrameSize:"14.0", raceFrameSize:"17.1"},
        {framesize:76, cityFrameSize:"15.6", mtbFrameSize:"14.0", raceFrameSize:"17.1"},
        {framesize:77, cityFrameSize:"15.6", mtbFrameSize:"14.0", raceFrameSize:"17.1"},
        {framesize:78, cityFrameSize:"15.6", mtbFrameSize:"14.0", raceFrameSize:"17.1"},
        {framesize:79, cityFrameSize:"15.6", mtbFrameSize:"14.0", raceFrameSize:"17.1"},
        {framesize:80, cityFrameSize:"15.6", mtbFrameSize:"14.0", raceFrameSize:"17.1"},
        {framesize:81, cityFrameSize:"15.6", mtbFrameSize:"14.0", raceFrameSize:"17.1"},
        {framesize:82, cityFrameSize:"15.6", mtbFrameSize:"14.0", raceFrameSize:"17.1"},
        {framesize:83, cityFrameSize:"15.6", mtbFrameSize:"14.0", raceFrameSize:"17.1"},
        {framesize:84, cityFrameSize:"15.6", mtbFrameSize:"14.0", raceFrameSize:"17.1"},
        {framesize:85, cityFrameSize:"15.6", mtbFrameSize:"14.0", raceFrameSize:"17.1"},
        {framesize:86, cityFrameSize:"15.6", mtbFrameSize:"14.0", raceFrameSize:"17.1"},
        {framesize:87, cityFrameSize:"15.6", mtbFrameSize:"14.0", raceFrameSize:"17.1"},
        {framesize:88, cityFrameSize:"15.6", mtbFrameSize:"14.0", raceFrameSize:"17.1"},
        {framesize:89, cityFrameSize:"15.6", mtbFrameSize:"14.0", raceFrameSize:"17.1"},
  */
        {framesize:90, cityFrameSize:"21.8", mtbFrameSize:"20.2", raceFrameSize:"23.4"}
    ];

        for	(index = 0; index < frameSizeArray.length; index++) {
            if (frameSizeArray[index]["framesize"] == frameSizeSelect.value) {
                document.getElementById("cityFrameSizeDiv").innerHTML = frameSizeArray[index]["cityFrameSize"];
                document.getElementById("mtbFrameSizeDiv").innerHTML = frameSizeArray[index]["mtbFrameSize"];
                document.getElementById("raceFrameSizeDiv").innerHTML = frameSizeArray[index]["raceFrameSize"];
            }
        }

    alert(returnValue);
    /*
    var adultFrameSizeDiv = document.getElementById("adultFrameSizeDiv");
    var childFrameSizeDiv = document.getElementById("childFrameSizeDiv");
    adultFrameSizeDiv.setAttribute("value", 66);
*/
}
