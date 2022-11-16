const {
	I
} = inject();
const postDetails = require('../../src/page-objects/webElements');
const createCustomerPage = require('../page-objects/webElements');


let state = {};

Before(() => {
	state = {};
});

// Given("Application is launched", async ( {
//  //I.amOnPage("https://app.keka.com/Account/Login?ReturnUrl=%2F");  
//  //postDetails.postDetails();
// }) => {
// 	let data = await I.sendPostRequest(`https://arcadiasof.xyramsoft.com/arcadia-sof-direct-problem-integration/kafka/send`, {
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }, {
//         'Content-type': 'application/json; charset=UTF-8',
//     })
//     I.assertEqual(data.status, 201)
//     I.assertEqual(data.statusText, 'Created')
// 	I.amOnPage("https://app.keka.com/Account/Login?ReturnUrl=%2F"); 
// });
Given("Application is launched",()=>{
    I.amOnPage("https://app.keka.com/Account/Login?ReturnUrl=%2F");  
})

// Then("entered Email", () => {
// I.fillField('session_key',"Test")  // "session_key" is the name of the locater
// });

// When("entered password", () => {
//     I.fillField('session_password',"Test")
// });

// When("I click on dign in", () => {
// 	I.click('Sign in')
   
// });

Then("user Enters E mali and Password", () => {
	I.fillField(`input[name='Email']`,"Test");
	//I.fillField(`//input[@type='password']`,"Test");
});



When("I click on LOGIN", () => {
	I.click(`//button[text()='Login']`)
});


