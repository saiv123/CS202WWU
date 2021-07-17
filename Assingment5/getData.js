function getAstro(){
    $.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
        document.getElementById("list").innerHTML = '';
        var text = "There are currently "+ data['number'] +" people in space.";
        document.getElementById("textBox").innerHTML = text;

        data['people'].forEach(function (d) {
            $('#list').append('<li>' + d['name']+ '</li>');
        });
    });
}

function getCraft(){
    $.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
        document.getElementById("list").innerHTML = '';
        console.log(data)
        var notunique = [];
        data['people'].forEach(function (e){
            notunique.push(e['craft']);
        });

        var unique = notunique.filter(onlyUnique);
        var text = "There are currently "+ unique.length +" space crafts in space.";
        document.getElementById("textBox").innerHTML = text;

        unique.forEach(function (c){
            $('#list').append('<li>' +c+ " With "+countCraft(notunique,c)+" People. "+'</li>');
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
