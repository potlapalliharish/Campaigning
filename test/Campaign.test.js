const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compildCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async() =>{
    accounts= await web3.eth.getAccounts();
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
                .deploy({data: compiledFactory.bytecode})
                .send({from: accounts[0], gas:'1000000'});
    await factory.methods.createCampaign('100').send({from: accounts[0], gas:'1000000'});
    const addresses= await factory.methods.getDeployedCampaigns().call();
    campaignAddress=addresses[0];
    campaign = await new web3.eth.Contract(JSON.parse(compildCampaign.interface),campaignAddress)
});
describe('Campaign',() =>{
    it('deploys a factory and a campaign', ()=>{
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });

    it('marks caller as a manager of contract', async()=>{
        const manager=await campaign.methods.manager().call();
        assert.equal(manager, accounts[0]);
        
    });

    it('Allows user to contribute and marks them as approvers', async()=>{
        await campaign.methods.contribute().send({
            value:'200',
            from: accounts[1]
        });
        assert.ok(await campaign.methods.approvers(accounts[1]).call());
    });
    it('requires minimul contribution', async()=>{
        try{
            await campaign.methods.contribute().send({
                value:'9',
                from: accounts[2]
            });
            assert(false);
        }
        catch(error){
            assert(error);
        }
    });
    it('Allows manager to create a new payment request', async()=>{
        await campaign.methods.createRequest('Buy Mobile', 100, accounts[1]).send({
            from: accounts[0],
            gas: '1000000'
        });
        const request= await campaign.methods.requests(0).call();
        assert.equal('Buy Mobile', request.description)
    });
    it('Processes requests', async() =>{
        await campaign.methods.contribute().send({
            from:accounts[0],
            value: web3.utils.toWei('10', 'ether')
        });
        await campaign.methods.createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1]).send({
            from: accounts[0],
            gas: '1000000'
        });
        await campaign.methods.approveRequest(0).send({
            from:accounts[0],
            gas: '1000000'
        });
        await campaign.methods.finalizeRequest(0).send({
            from:accounts[0],
            gas: '1000000'
        });

        let balance= await web3.eth.getBalance(accounts[1]);
        balance = web3.utils.fromWei(balance,'ether');
        balance=parseFloat(balance);
        console.log(balance);
        assert(balance > 104)
    });
})
