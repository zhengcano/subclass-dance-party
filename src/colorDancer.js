var ColorDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('color');
  this.lineOffset = ""+($('body').width()/2)+"px";
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;

ColorDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  var randomColors = ["#88A825", "#35203B", "#911146", "#CF4A30", "#ED8C2B"];
  var randomColor = randomColors[Math.floor(Math.random() * randomColors.length)];
  this.$node.css("border-color", randomColor);
};

  ColorDancer.prototype.lineUp = function(pos) {
    var topPos = 50 + (pos * ($('body').height()/$('.color').length));
    this.$node.animate({
      top: ""+topPos+"px",
      left: this.lineOffset
    });
  };
