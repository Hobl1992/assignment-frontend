import {
  es5,
  es6
} from '../../src/features/promises'

export default function() {
  it('should wait for result in ES5', (done) => {
    es5(function(err, val) {
      if (err) {
        done(err)
      }
      val.should.eql(10)
      done()
    })
  })

  it('should show Promise behavior in ES6', () => {
    let p1 = es6();
    p1.then(function (val) {
      val.should.eql(10)
    });
  });

}
