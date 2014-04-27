$(document).ready(function(){
    var confusing = ["fusing",
                    "fsuing",
                    "sfuing",
                    "ufsing",
                    "usfing",
                    "sufing"];

    var business = ["sin",
                    "nis",
                    "sin",
                    "isn",
                    "ins"];

    var confusion = ["fusion",
                    "fsuion",
                    "fiuson",
                    "fuison",
                    "fusoin",
                    "sufion"];
    var base = "con"; //l'origine du monde

    function randomWurd(wordArray){
        return wordArray[Math.floor(Math.random()*wordArray.length)]
    }
    function randomTime(seconds){
        return Math.random()*(seconds*1000);
    }
    function anagramme(arrayBusiness,arrayConfusion,arrayConfusing){
        setInterval(function(){
            $("#word1").text("confusing bu"+randomWurd(arrayBusiness)+"ess with ");
        },randomTime(5));

        setInterval(function(){
            $("#word2").text(base+randomWurd(arrayConfusion));
        },randomTime(5));

        setInterval(function(){
            $('title').text(base+randomWurd(arrayConfusing)+" bu"+randomWurd(arrayBusiness)+"ess")
        },randomTime(5));
    }
    anagramme(business,confusion,confusing)
})