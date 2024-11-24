// RELOADS WEBPAGE WHEN MOBILE ORIENTATION CHANGES
//window.onorientationchange = function() { window.location.reload(); };

 // Navigate through strip array
function StripCollection(strips) {
     this.strips = strips;
     this.i = 0;

	 //function for next image
     this.next = function(imgId) {
		window.scrollTo(0, 0);		
		var img = document.getElementById(imgId);
		this.i++;
		

	 //reset to start if pass end of array
     if (this.i == strips.length)
         this.i = 0;
     img.setAttribute("srcset", strips[this.i]);
		 }

	 //function for previous image
     this.prev = function(imgId) {
	window.scrollTo(0, 0);     
	var img = document.getElementById(imgId);
     	this.i--;
     

	 //reset to end if pass start of array
     if (this.i < 0)
         this.i = strips.length -1;
     img.setAttribute("srcset", strips[this.i]);
     }
 
    //Reset to start, instead of home button
     this.home = function(imgId) {
	window.scrollTo(0, 0);         
	var img = document.getElementById(imgId);
         this.i = 0;
         img.setAttribute("srcset", strips[this.i]);
     }

 }

// Strip array horizontal images
var hsh = new StripCollection(["negativeH.png","bassH.png","bubbleH.png","thoughtsH.png","telepathyH.png","curseH.png","blinkH.png","toothpasteH.png","notcomingH.png","lateH.png","tangledH.png","cuteH.png", "biteH.png", "eyeH.png", "alligatorH.png", "toeH.png", "cupcakeH.png", "whaleH.png", "hatH.png", "VoiceH.png", "switchH.png", "sunbrellaH.png", "badlyDrawnH.png", "ispyH.png", "winnersH.png"]);
// Strip array vertical images
var hsv = new StripCollection(["negativeV.png","bassV.png","bubbleV.png","thoughtsV.png","telepathyV.png","curseV.png","blinkV.png","toothpasteV.png","notcomingV.png","lateV.png","tangledV.png","cuteV.png", "biteV.png", "eyeV.png", "alligatorV.png", "toeV.png", "cupcakeV.png", "whaleV.png", "hatV.png", "VoiceV.png", "switchV.png", "sunbrellaV.png", "badlyDrawnV.png", "ispyV.png", "winnersV.png"]);
