$(document).ready(function(){
    var apibase = "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=";
    function randomNum(num){ return Math.floor(Math.random()*num) }
    
    function imageSearch(query,size,type,start){
        var searchurl = apibase+query+"&imgsz="+size+"&imgtype="+type+"&start="+start+"&rsz=8&callback=?";
         $.ajax({
            url: searchurl,
            dataType: "jsonp",
            success: getArray})
    }
    
    function getArray(data){
        var imageArray = [];
        for (var i = 0; i < data.responseData.results.length; i++) {
            imageArray.push(data.responseData.results[i].url);
            $('#strobe').append('<img class="back" src="'+data.responseData.results[i].url+'"/>')
        };
        $('#strobe').css("background-image","url("+imageArray[randomNum(imageArray.length)]+")");
        
        strobe(imageArray, '#strobe');   
    }
    
    function strobe(imagearray, selector){
        $(document).mousemove(function(){
            $(selector).css("background-image","url("+imagearray[randomNum(imagearray.length)]+")");
        })
    }
    /*
    imagesSearch(query, size, type, arraytopopulate)
    SIZE: 
        icon
        small
        medium
        large
        xlarge
        xxlarge
        huge
    
    TYPE:
        face
        photo
        clipart
        lineart
    
    START:
        2
        4
        8
        12
        */
    var queries = ['critical%20design','dima%20dima','confusing%20book','internet%20mon%20amour','meta','business%20opportunity','black%20phone','dark%20net','confused%20ego','role%20model','design%20practice','dirty%20money','hot%20stuff']
    var size = ['medium','large'];
    var type = ['face','photo','clipart']
    var start = [2,4,8,12];
    imageSearch(queries[randomNum(queries.length)],size[randomNum(size.length)],type[randomNum(type.length)], start[randomNum(start.length)]);
})