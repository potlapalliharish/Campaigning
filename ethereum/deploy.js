const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
const provider = new HDWalletProvider(
    'focus juice solution middle mammal unlock uniform gospel blade when brief gasp',
    'https://rinkeby.infura.io/v3/eaf1c63901484eeab802d6a039b3532c'

);

const web3= new Web3(provider);
let accounts;
const deploy = async () => {
    //console.log('af')
    accounts = await web3.eth.getAccounts();
    //console.log("bf")
    console.log('Attempting to deploy contract',accounts[0]);
    const result = await  new web3.eth.Contract(JSON.parse(compiledFactory.interface))
         .deploy({ data : compiledFactory.bytecode })
         .send({ from: accounts[0], gas : '1000000' });
    console.log("Address", result.options.address)
};
deploy();
console.log('last')