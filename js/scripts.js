function interface(){    
    $('#content').append('<aside id="title"><a id="mail" href="mailto:info@cnfsn.biz"></a></aside><a id="interfacebutton" href="/zib.nsfnc" class="ajax" ajax-insert="fadeInsert" ajax-target="#content" ajax-content="#content"><!--<button type="button">BUTTON</button>--></a>');
    
    var title = Raphael("mail",60,40);
    Raphael.fn.writeText = function(xloc, yloc, word, font, color, fontsize, mode) {
        if (mode == "outline"){
            this.text(xloc, yloc, word).attr({'font-family':font,'font-size': fontsize, 'fill-opacity':0, 'stroke-width': 1, 'stroke':color,'text-anchor':'start'});
        }
        else if (mode == "fill"){
            this.text(xloc, yloc, word).attr({'font-family':font,'font-size': fontsize, 'fill':color,'text-anchor':'start'});
        }
    }
    // mode: "outline" or "fill"
    title.writeText(10,20,"☺ ☻", "Verdana", "white",18, "fill")
    
    $('#interfacebutton').Place();
    $(window).resize(function(){
        $('#interfacebutton').Place();
    })
}

function appendStylesheet(stylesheet) {
  // Setup a flag to toggle if we find the stylesheet
  var bStylesheetExists = false;
  $('link').each( function(){ 
    if ( $(this).attr('href') === '/css/'+stylesheet) {
       bStylesheetExists = true;
    }
  })

  // If we don't find it, add it.
  if(bStylesheetExists === false) {
    $('head').append('<link rel="stylesheet" href="/css/'+stylesheet+'" type="text/css" />');
  }
}

function addMeta(info,color){
    $('#content').append('<aside id="meta" style="color:'+color+'">'+info+'</aside>');
    $('a').css('color',color);
}