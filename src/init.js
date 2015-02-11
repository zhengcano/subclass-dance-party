$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var bodyHeight = $('body').height();
    var bodyWidth = $('body').width();
    var dancer = new dancerMakerFunction(
      bodyHeight/4*Math.random() + bodyHeight/3,
      bodyWidth*0.7*Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $(".lineUpButton").on("click",function(){
    var types = [/*SizeDancer, SpinDancer, SwitchDancer, */DestinyDancer, /*StalkerDancer,*/ CarltonDancer, SnoopDancer, StepDancer];
    types.forEach(function(type) {
      var group = this.dancers.filter(function(dancer) {
        return dancer instanceof type;
      });
      for (var i = 0; i < group.length; i++) {
        group[i].lineUp(i);
        group[i].twirl();
      }
    });
  }.bind(window));

  $(".lightUpButton").on("click", function(){
    var $light = $('<span class="light"></span>');
    $('body').append($light);
    $light.css('left',$('body').width()/2);
    $light.css('z-index', '291');
    setTimeout(function(){
      $light.toggle();
    },500);
    setTimeout(function(){
      $light.toggle();
    },1000);
    setTimeout(function(){
      $light.toggle();
    },1500);
    setTimeout(function(){
      $light.toggle();
    },2000);
    setTimeout(function(){
      $light.remove();
    },2500);

    var $light2 = $('<span class="light2"></span>');
    setTimeout(function(){
    $('body').append($light2);
    $light2.css('left',$('body').width()/8);
    $light2.css('z-index', '291');
    },250)

    setTimeout(function(){
      $light2.toggle();
    },750);
    setTimeout(function(){
      $light2.toggle();
    },1250);
    setTimeout(function(){
      $light2.toggle();
    },1750);
    setTimeout(function(){
      $light2.toggle();
    },2270);
    setTimeout(function(){
      $light2.remove();
    },2750);
  })

});

