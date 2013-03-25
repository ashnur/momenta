# momentum

Basic vector operations over the rational numbers.

# Support
[![browser support](https://ci.testling.com/ashnur/momentum.png)](https://ci.testling.com/ashnur/momentum)

# Examples
where `m.r` is the [rationals](https://github.com/ashnur/rationals/) used by momentum
```
var m = require('momentum');
m([1])[0] === m.r(1); // true
```

while in the case of *rationals* it made sense to keep direct equality between the
created objects, I think this is not the case with momentum.
However this might change some time in the future.

```
var m = require('momentum');
var equal = require('deep-equal');
var r = m.r;
equal(m([1,4,7,9,16]).disperse(12), m([r(1,12),r(1,3),r(7,12),r(3,4),r(4,3)])); // true
```

# API
all methods on momentum objects  will return an array of rationals
with the exception of `.dot`, which will return a single rational


#### Scaling up
##### `scale`
```
m([1,3,5]).scale(7)  // [7,21,35]
```

#### Scaling down
##### `disperse`
```
m([1,3,5]).disperse(9) // [1/9,1/3,5/9]
```

#### Addition
##### `add`
```
m([1,3,5]).add(m([2,4,6])) // [3,7,11]
```

#### Subtraction
##### `sub`
```
m([3,7,11]).add(m([2,4,6])) // [1,3,5]
```

#### Dot product
##### `dot`
```
m([1,3,5]).dot(m([7,11,13])) // 105
```
# Good to know
the above examples are true only in browsers with support of \_\_proto\_\_

`momentum` works in some other browsers too, but this means, that you have
to recast `momentum()` on every return value, so that the methods are added.

I know this is slow as hell, and I might change this in the future, if it's
going to be an issue.


# Install
```
npm install momentum
```


**You can use it in the browser with [browserify](http://browserify.org/)**

