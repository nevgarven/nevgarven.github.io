// Navigate through a single array of square strip images.
function StripCollection(images, imgId) {
  this.images = images;
  this.img = document.getElementById(imgId);
  this.i = 0;

  // Quietly warm the browser cache for every strip so switching feels
  // instant even the first time a strip hasn't been viewed yet.
  images.forEach(function (src) {
    var preload = new Image();
    preload.src = src;
  });

  // Swap the visible image. Fades out immediately, but only fades back
  // in once the new image has actually finished loading - so on a slow
  // connection you get a clean fade rather than a blank frame followed
  // by the image popping in late.
  this.show = function (index) {
    var el = this.img;
    var src = this.images[index];
    el.classList.add('is-changing');

    var loader = new Image();
    var swapped = false;

    var reveal = function () {
      if (swapped) {
        return;
      }
      swapped = true;
      el.setAttribute('src', src);
      // Let the browser paint the (already-decoded) image before fading in.
      window.requestAnimationFrame(function () {
        el.classList.remove('is-changing');
      });
    };

    loader.onload = reveal;
    loader.onerror = reveal; // don't get stuck fading out if a file 404s
    loader.src = src;

    // Already cached images report "complete" right away.
    if (loader.complete) {
      reveal();
    }
  };

  // Go to the next image, wrapping to the start at the end.
  this.next = function () {
    this.i++;
    if (this.i >= this.images.length) {
      this.i = 0;
    }
    this.show(this.i);
  };

  // Go to the previous image, wrapping to the end at the start.
  this.prev = function () {
    this.i--;
    if (this.i < 0) {
      this.i = this.images.length - 1;
    }
    this.show(this.i);
  };

  // Jump back to the first image (used by clicking the header).
  this.home = function () {
    this.i = 0;
    this.show(this.i);
  };

  // Jump to a random image, avoiding an immediate repeat when possible.
  this.random = function () {
    if (this.images.length <= 1) {
      return;
    }
    var next;
    do {
      next = Math.floor(Math.random() * this.images.length);
    } while (next === this.i);
    this.i = next;
    this.show(this.i);
  };
}

// List your square (1080x1080) strip images here, in order.
// Add as many as you like - just keep adding filenames to this array.
var strip = new StripCollection(
  [
    '20260820_AIUsses.png',
	'20251121_MoodRing.png',
	'20250319_deadWorm.png',
	'20250318_tshirt.png',
	'20250317_voice.png',
	'20250317_potato.png',
	'20250313_nobody.png',
	'20250313_badlyDrawn.png',
	'20250310_Cookie.png',
	'20250308_tomorrow.png',
	'20250308_ispy.png',
	'20250301_Fibre.png',
	'20250228_Winners.png',
    '20250225_online.png',
	'20250221_Pete.png'
  ],
  'stripImg'
);
