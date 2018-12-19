import * as AzureFunctions from "@azure/functions";

const index: AzureFunctions.IFunction = async function (context: AzureFunctions.IContext, req: AzureFunctions.IRequest) {
    context.log("TypeScript function successfully triggered...");
    let body = { 
        "foo": req.params["foo"],
        "bar": req.params["bar"]
    }
    context.res = {
        "status": "200",
        "body": body 
    }
}

export { index };
