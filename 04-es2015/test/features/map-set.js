import {
  es5,
  es6
} from '../../src/features/map-set'

export default function() {
  it('should emulate Map/Set behavior in ES5', () => {
    var klasses = es5()
    var mySet = new klasses.MySet()
    mySet
      .add(1)
      .add(2)
      .add(3)

    mySet.has(1).should.be.true
    mySet.has(2).should.be.true
    mySet.has(3).should.be.true
    mySet.has(4).should.be.false

    var myMap = new klasses.MyMap()
    myMap.set('Hello', 'World!')
    myMap.set('second', 2);
    (function() {
      myMap.set(1, 2)
    }).should.throw()
    myMap.get('Hello').should.eql('World!')
    myMap.get('second').should.eql(2)
  })

  it('should show Map/Set behavior in ES6', () => {
    let set = new Set;

    set
      .add(1)
      .add(2)
      .add(3);

    set.has(1).should.be.true;
    set.has(2).should.be.true;
    set.has(3).should.be.true;
    set.has(4).should.be.false;

    let map = new Map;

    map
      .set('Hello', 'World!')
      .set('second', 2);
    map.get('Hello').should.eql('World!');
    map.get('second').should.eql(2);
  })
}
