// Navigate through a single array of square strip images.
function StripCollection(images, imgId) {
  this.images = images;
  this.img = document.getElementById(imgId);
  this.i = 0;

  // Swap the visible image, with a quick fade for polish.
  this.show = function (index) {
    var el = this.img;
    el.classList.add('is-changing');
    window.setTimeout(function () {
      el.setAttribute('src', images[index]);
      el.classList.remove('is-changing');
    }, 120);
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
    '20250228_Winners.png',
    '20250225_online.png',
	'20250221_Pete.png'
  ],
  'stripImg'
);
