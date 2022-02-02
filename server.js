const express = require('express');

const app = express();

const PORT = 8000;

const lib = require('pipedrive');


const defaultClient = lib.ApiClient.instance;

// Configure API key authorization: apiToken
let apiToken = defaultClient.authentications.api_key;

apiToken.apiKey = 'f01877c55a521df16c8b138165a5833845c605d1';

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

const api = new lib.LeadsApi();

//home route
app.get('/', async (req, res) => {

    res.send("Welcome");

});

//we can get all the leads data present
app.get('/getleads', async (req, res) => {
    
    const deals = await api.getLeads();
    console.log("all data ")
    console.log(deals)
    res.send("you are in get leads route");

});

//we can get a specific lead data based on the id
app.get('/getlead', async (req, res) => {

    const deal = await api.getLead("c0d98d50-83f2-11ec-8383-cf03f374a356");
    console.log("single data")
    console.log(deal)
    res.send("you are in get lead route");

});

//we can add our own lead data
app.get("/delete", async(req, res)=>{

    const lead = await api.deleteLead("84eadf80-8409-11ec-b14a-5bc0c9db708d");
    res.send("you are in delete route")
})
