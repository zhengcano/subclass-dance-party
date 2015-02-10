describe("shapeDancer", function() {

  var shapeDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shapeDancer = new ShapeDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(shapeDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node change shape", function() {
    sinon.spy(shapeDancer.$node, 'animate');
    shapeDancer.step();
    expect(shapeDancer.$node.animate.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(shapeDancer, "step");
      expect(shapeDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(shapeDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(shapeDancer.step.callCount).to.be.equal(2);
    });
  });
});
