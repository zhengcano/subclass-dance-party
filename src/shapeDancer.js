var ShapeDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('shape');
  this.lineOffset = ""+($('body').width()-50)+"px";

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

ShapeDancer.prototype = Object.create(Dancer.prototype);
ShapeDancer.prototype.constructor = ShapeDancer;

ShapeDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  var size = Math.round(Math.random()*10);

  this.$node.animate({"border-radius" : ""+size+"px"}, "fast");
};

  ShapeDancer.prototype.lineUp = function(pos) {
    var topPos = 50 + (pos * ($('body').height()/$('.shape').length));
    this.$node.animate({
      top: ""+topPos+"px",
      left: this.lineOffset
    });
  };
