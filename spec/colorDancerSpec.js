describe("colorDancer", function() {

  var colorDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    colorDancer = new ColorDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(colorDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node change color", function() {
    sinon.spy(colorDancer.$node, 'css');
    colorDancer.step();
    expect(colorDancer.$node.css.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(colorDancer, "step");
      expect(colorDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(colorDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(colorDancer.step.callCount).to.be.equal(2);
    });
  });
});
