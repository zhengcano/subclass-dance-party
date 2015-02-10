var SizeDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="img/Leslie.png"></img>');
  this.$node.addClass('size');
  this.lineOffset = ""+($('body').width()-300)+"px";
  this.setPosition(top, left);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

SizeDancer.prototype = Object.create(Dancer.prototype);
SizeDancer.prototype.constructor = SizeDancer;

SizeDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  var size = Math.round(Math.random()*100 + 40);

  this.$node.animate({"height" : ""+size+"px"}, "fast");
};

  SizeDancer.prototype.lineUp = function(pos) {
    var topPos = 50 + (pos * ($('body').height()/$('.size').length));
    this.$node.animate({
      top: ""+topPos+"px",
      left: this.lineOffset
    });
  };
