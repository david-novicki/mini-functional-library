# Mini Functional Programming Library
This library was created for simple functional programming functions and was built to be a lightweight approach to using some common paradigms of FP on an existing codebase without bringing on the bloat of a large and robust library. If you feel like something important is missing here, please create an issue to open a discussion.

*This library is at it's infancy and still very much under construction.*

## FP.compose(function 2, function 1, ...)(initialInput)
### returns output of left more function
This is a compose function where you can add as many input/output functions as you please. It will read **right-to-left** taking the output of each function and inputing it as an argument/arguments to the next function.

## FP.pipe(function 1, function 2, ...)(initialInput) 
### returns output of right-most function
This is a compose function where you can add as many input/output functions as you please. It will read **left-to-right** taking the output of each function and inputing it as an argument/arguments to the next function.

## FP.unary(function() {}) 
### returns function with only 1 argument allowed
The unary function is a wrapper to allow you to wrap a function that only allows one argument

## FP.binary(function() {}) 
### returns function with only 2 arguments allowed
The binary function is a wrapper to allow you to wrap a function that only allows two arguments

## FP.partial(function() {}, firstValue) 
### returns function
The partial function allows you to use closure with the firstValue passed so that later invocation can use the firstValue.

## FP.trampoline(function() {}) 
### returns any value you supply in the initial function once recursive-like calls are finished
The partial function allows you to execute something with a similiar affect to *Proper Tail Calls* and should be used for browsers that do not support this feature. It keeps your call stack clean and prevents exceeding call stack. A for the function passed is that it returns a itself if recursive or returns anything other than a function to drop out of recursion.