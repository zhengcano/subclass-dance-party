var CarltonDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, 100);
  this.lineOffset = "600px";
  this.$node= $('<div><div><img class="allen" src="img/allen.png"</div></div>');
  this.$node.addClass('dancer carlton');
  this.setPosition(top, left);
  this.time = 0;
  this.$node.css('z-index', Math.floor(top));

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
  CarltonDancer.prototype = Object.create(Dancer.prototype);

  CarltonDancer.prototype.constructor = CarltonDancer;

  CarltonDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.toggle();
    this.angle = Math.sin(this.time)*5;
    this.$node.find('img').css('transform', 'translateY(' + this.angle + "px)");
    this.time++;
  };

  CarltonDancer.prototype.lineUp = function(pos) {
    var topPos = 50 + (pos * ($('body').height()/$('.destiny').length));
    this.$node.animate({
      top: ""+topPos+"px",
      left: this.lineOffset
    });
  };
