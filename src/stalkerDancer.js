var StalkerDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.lineOffset = "600px";
  this.$node= $('<img src="img/andy.png"></img>');
  this.$node.addClass('dancer stalker');
  this.setPosition(top, left);
  this.offSetX = Math.random() * 50;
  this.offSetY = Math.random() * 50;
  $(window).mousemove(function(event){
    this.$node.css('left', '' + (event.pageX + this.offSetX) + 'px');
    this.$node.css('top', '' + (event.pageY + this.offSetY) +'px');
  }.bind(this));

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
  StalkerDancer.prototype = Object.create(Dancer.prototype);

  StalkerDancer.prototype.constructor = StalkerDancer;

  StalkerDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    //Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  };

  StalkerDancer.prototype.lineUp = function(pos) {
    var topPos = 50 + (pos * ($('body').height()/$('.stalker').length));
    this.$node.animate({
      top: ""+topPos+"px",
      left: this.lineOffset
    });
  };
