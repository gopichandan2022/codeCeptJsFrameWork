// const patientTestData = require("../../testData/patientTestData");

// const { I } = inject();
// module.exports={

// async postDetails(){
//     const res = await I.sendPostRequest('https://arcadiasof.xyramsoft.com/arcadia-sof-direct-problem-integration/kafka/send', form);
// await I.assertEqual(res.status, 200);
// }

// Scenario('Post Request', async ({
//     I
// }) => {
//     let data = await I.sendPostRequest(`https://arcadiasof.xyramsoft.com/arcadia-sof-direct-problem-integration/kafka/send`, {
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }, {
//         'Content-type': 'application/json; charset=UTF-8',
//     })
//     I.assertEqual(data.status, 201)
//     I.assertEqual(data.statusText, 'Created')
// });

// }