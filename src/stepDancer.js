var StepDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, 100);
  this.lineOffset = "310px";
  var random = Math.floor(Math.random()*2);
  var name = ['sunny', 'alex'];
  this.$node= $('<div><div><img class="' + name[random] +'" src="img/'+name[random]+'.png"</div></div>');
  this.$node.addClass('dancer step');
  this.setPosition(top, left);
  this.time = 0;
  this.$node.css('z-index', Math.floor(top));

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
  StepDancer.prototype = Object.create(Dancer.prototype);

  StepDancer.prototype.constructor = StepDancer;

  StepDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.toggle();
    this.angle = Math.sin(this.time*0.335)*6;
    this.$node.find('img').css('transform', 'translateX(' + this.angle + "px)");
    this.time++;
  };

  StepDancer.prototype.lineUp = function(pos) {
    var sidePos = (pos * ($('body').width()/$('.step').length));
    this.$node.animate({
      left: ""+sidePos+"px",
      top: this.lineOffset,
      "z-index": this.lineOffset.substr(0,this.lineOffset.indexOf('p'))
    });
  };
