var foo = 'foo';
const myObject = { foo: 'I am myObject.foo' };

const sayFoo = function() {
  console.log(this['foo']);
};
myObject.sayFoo = sayFoo;

myObject.sayFoo();
sayFoo();