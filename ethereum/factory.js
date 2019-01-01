import web3 from './web3';
import CampaignFactory from './build/CampaignFactory';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x30aB881Cf90E4F9a33624d504e94459c780e5415'
    );
export default instance;