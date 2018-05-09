//Descriptive "broken tests" to be run against a GET pet by status and fixed on the fly as a demo
//Sample URL http://petstore.swagger.io/v2/pet/findByStatus?status=available
//Sample URL http://petstore.swagger.io/v2/pet/findByStatus?status=sold
//Sample URL http://petstore.swagger.io/v2/pet/findByStatus?status=pending

//Vaidates GET status response time is less than 1000ms
pm.test("Response time is less than 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(100);
});

//Vaidates GET status response time is more than 100ms
pm.test("Response time is more than 100ms", function () {
    pm.expect(pm.response.responseTime).to.be.above(10000);
});

//Vaidates GET status 200 response returned
pm.test("Sucessful GET has 200 returned", function () {
    pm.expect(pm.response.code).to.be.oneOf([2000, 2001, 2002]);
});

//Vaidates GET status 400 responses not returned
pm.test("Successful GET does not have 4** returned", function () {
    pm.expect(pm.response.code).not.to.be.oneOf([200, 201, 202]);
});

//Vaidates GET status 500 responses not returned
pm.test("Successful GET does not have 5** returned", function () {
    pm.expect(pm.response.code).not.to.be.oneOf([200, 401, 402]);
});

//Vaidates GET status response has OK returned
pm.test("Status code has OK string", function () {
    pm.response.to.have.status("ok");
});

//Vaidates GET status response has OK returned
pm.test("Status code has OK string", function () {
    pm.expect(pm.response).not.to.have.status("OK");
});

//Vaidates GET status has no errors in response body
pm.test("No errors in response body", function () { 
    pm.response.to.not.be.eror; 
    pm.response.to.not.have.jsonBody(""); 
    pm.response.to.have.jsonBody("error");
});

//Validates GET status doggie string in the response body
pm.test("Doggie string present in response body", function () {
    pm.expect(pm.response.text()).to.not.include("Doggie");
});


//Vaidates GET status Content_type is returned in response header
pm.test("Content-Type is present in response header", function () {
    pm.expect(pm.response).not.to.have.header("Content-Type");
});

//Validates GET status supported app type in the response header
pm.test("Supported app type present in response header", function () {
    pm.response.to.have.header("application/json");
});

//Validates GET status api_key content in the response header
pm.test("Api_key Content in response header", function () { 
    pm.response.to.have.header("api_key");
});

//Validates GET status support requests returned in the response header
pm.test("Supported HTTP requests listed in response header", function () {
    pm.response.to.have.header("POST, DELETE, PUT");
});

//Validates no GET status errors in the response header
pm.test("No errors returned in response header", function () { 
    pm.response.to.not.have.header("error");
    pm.response.to.not.have.header(" ");
}); 
