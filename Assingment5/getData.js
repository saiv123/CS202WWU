function getAstro(){
    $.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
        document.getElementById("tableA").innerHTML = '';
        var text = "There are currently "+ data['number'] +" people in space.";
        document.getElementById("textBox").innerHTML = text;

        $('#tableA').append('<tr> <th>People</th> <th>Craft</th> </tr>');
        data['people'].forEach(function (d) {
            $('#tableA').append('<tr> <td>' +d['name']+ '</td><td>'+d['craft']+'</td></tr>');
        });
    });
}

function getCraft(){
    $.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
        document.getElementById("tableA").innerHTML = '';
        console.log(data)
        var notunique = [];
        data['people'].forEach(function (e){
            notunique.push(e['craft']);
        });

        var unique = notunique.filter(onlyUnique);
        var text = "There are currently "+ unique.length +" space crafts in space.";
        document.getElementById("textBox").innerHTML = text;

        $('#tableA').append('<tr> <th>Craft</th> <th>Number of Poeple</th> </tr>');
        unique.forEach(function (c){
            $('#tableA').append('<tr> <td>' +c+ '</td><td>'+countCraft(notunique,c)+'</td></tr>');
        });
    });
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function countCraft(arr, craft){
    var num = 0;
    arr.forEach(function (e){
        if(e == craft){
            num++;
        }
    });
    return num;
}
