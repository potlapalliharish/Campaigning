import React,{Component} from 'react';
import {Table, Button} from 'semantic-ui-react';
import web3 from '../ethereum/web3'
import Campaign from '../ethereum/campaign'
class RequestRow extends Component{
    onApprove = async()=>{
        const campaign = Campaign(this.props.address);
        const accounts= await web3.eth.getAccounts();
        await campaign.methods.approveRequest(this.props.id).send({
            from: accounts[0]
        })
    }
    onFinalize= async()=>{
        const campaign = Campaign(this.props.address);
        const accounts= await web3.eth.getAccounts();
        await campaign.methods.finalizeRequest(this.props.id).send({
            from: accounts[0]
        })
    }
    render(){
        const {Row, Cell} = Table;
        return (
            <Row>
                <Cell>
                    {this.props.id}
                </Cell>
                <Cell>
                    {this.props.request.description}
                </Cell>
                <Cell>
                    {web3.utils.fromWei(this.props.request.value,'ether')}
                </Cell>
                <Cell>
                    {this.props.request.recipient}
                </Cell>
                <Cell>
                    {this.props.request.approvalCount}/{this.props.approversCount}
                </Cell>
                <Cell>
                    <Button color='green' basic onClick={this.onApprove}>Approve</Button>
                </Cell>
                <Cell>
                    <Button color='teal' basic onClick={this.onFinalize}>Finalize</Button>
                </Cell>
            </Row>
        )
    }
}
export default RequestRow;