describe('set', function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add string values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should not add duplicate string values to a set', function(){
    set.add("Mel Gibson");
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it('should remove string values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it('should add number values to a set', function(){
    set.add(3);
    set.add(4);
    expect(set.contains(4)).to.equal(true);
    expect(set.contains(3)).to.equal(true);
  });

  it('should not add duplicate number values to a set', function(){
    set.add(3);
    set.add(3);
    set.remove(3);
    expect(set.contains(3)).to.equal(false);
  });

  it('should remove number values from a set', function(){
    set.add(3);
    set.remove(3);
    expect(set.contains(3)).to.equal(false);
  });

    it('should add objects to a set', function(){
    set.add({test: 4, otherTest: 5});
    set.add({finalTest: 6});
    expect(set.contains({finalTest: 6})).to.equal(true);
    expect(set.contains({test: 4, otherTest: 5})).to.equal(true);
  });

  it('should not add duplicate objects to a set', function(){
    set.add({test: 4, otherTest: 5});
    set.add({test: 4, otherTest: 5});
    set.remove({test: 4, otherTest: 5});
    expect(set.contains({test: 4, otherTest: 5})).to.equal(false);
  });

  it('should remove objects from a set', function(){
    set.add({test: 4, otherTest: 5});
    set.remove({test: 4, otherTest: 5});
    expect(set.contains({test: 4, otherTest: 5})).to.equal(false);
  });
});
