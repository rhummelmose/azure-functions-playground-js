module.exports = function(context) {
    console.log("Vanilla function successfully triggered..");
    var result = {
        "foo"  : context.req.params.foo,
        "bar"  : context.req.params.bar
    }
    context.bindings.res = { status: 200, body: result };
    context.done();
};
