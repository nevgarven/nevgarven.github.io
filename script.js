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
var hsh = new StripCollection(["20250221_Pete.png","20250225_online.png","20250228_Winners.png"]);
// Strip array vertical images
var hsv = new StripCollection(["20250221_Pete.png","20250225_online.png","20250228_Winners.png"]);
