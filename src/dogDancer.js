var SnoopDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, 100);
  this.lineOffset = "220px";
  var random = Math.floor(Math.random()*2);
  var name = ['michelle', 'pira'];
  this.$node= $('<div><div><img class="' + name[random] +'" src="img/'+name[random]+'.png"</div></div>');
  this.$node.addClass('dancer snoop');
  this.setPosition(top, left);
  this.time = 0;
  this.$node.css('z-index', Math.floor(top));

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
  SnoopDancer.prototype = Object.create(Dancer.prototype);

  SnoopDancer.prototype.constructor = SnoopDancer;

  SnoopDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.toggle();
    this.angle = Math.sin(this.time*0.315)*7;
    this.$node.find('img').css('transform', 'translateX(' + this.angle + "px)");
    this.time++;
  };

  SnoopDancer.prototype.lineUp = function(pos) {
    var sidePos = (pos * ($('body').width()/$('.snoop').length));
    this.$node.animate({
      left: ""+sidePos+"px",
      top: this.lineOffset,
      "z-index": this.lineOffset.substr(0,this.lineOffset.indexOf('p'))
    });
  };
