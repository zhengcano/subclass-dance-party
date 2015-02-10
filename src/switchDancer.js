var SwitchDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, 2000);
  this.lineOffset = "400px";
  this.$node= $('<img src="img/djRoomba.png"></img>');
  this.$node.addClass('dancer switch');
  this.$node.css('border-color', 'yellow');
  this.setPosition(top, left);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
  SwitchDancer.prototype = Object.create(Dancer.prototype);

  SwitchDancer.prototype.constructor = SwitchDancer;

  SwitchDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    var other;
    var dancers = $('.dancer');
    for (var i = 0; i < dancers.length; i++){
      var dancer = $(dancers[i]);
      var otherX = dancer.css('left').substring(0, dancer.css('left').indexOf('p'));
      var otherY = dancer.css('top').substring(0, dancer.css('top').indexOf('p'));
      var thisX = this.$node.css('left').substring(0, this.$node.css('left').indexOf('p'));
      var thisY = this.$node.css('top').substring(0, this.$node.css('top').indexOf('p'));

      if (Math.abs(otherX - thisX) < 100 &&
        Math.abs(otherY - thisY) < 100 && this.$node !== dancer){
        this.switch(dancers[i]);
        break;
      }
    }

  };

  SwitchDancer.prototype.lineUp = function(pos) {
    var topPos = 50 + (pos * ($('body').height()/$('.switch').length));
    this.$node.animate({
      top: ""+topPos+"px",
      left: this.lineOffset
    });
  };

  SwitchDancer.prototype.switch = function(node){
    var other = $(node);
    var newX = $(node).css('left');
    var newY = $(node).css('top');
    other.css('left', this.$node.css('left'));
    other.css('top', this.$node.css('top'));
    this.$node.css('left', newX);
    this.$node.css('top', newY);
  };
