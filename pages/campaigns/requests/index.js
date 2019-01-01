import React,{Component} from 'react';
import Layout from '../../../components/Layout';
import {Button, Table, Tab} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Campaign from '../../../ethereum/campaign'
import campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow'
class RequestIndex extends Component{
    static async getInitialProps(props){
        const {address} = props.query;
        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getRequestsCount().call();
        const requests = await Promise.all(
            Array(requestCount).fill().map((element,index) =>{
                return campaign.methods.requests(index).call();
            })
        );
        const approversCount= await campaign.methods.approversCount().call();
        console.log(requests)
        return {address, requests, requestCount, approversCount}
    }
    renderRow(){
        return this.props.requests.map((request, index) =>{
            return <RequestRow request={request}
            key={index}
            id={index}
            address={this.props.address}
            approversCount={this.props.approversCount}
            />;
        })
    }
    render(){
        const {Header, Row, HeaderCell, Body} =Table;
        return(
            <Layout>
            <h3>Requests list</h3>
            <Link route={`/campaigns/${this.props.address}/requests/new`}>
            <a>
                <Button primary>
                    Add Request
                </Button>
            </a>
            </Link>
            <Table>
                <Header>
                    <Row>
                        <HeaderCell>Id</HeaderCell>
                        <HeaderCell>Description</HeaderCell>
                        <HeaderCell>Amount</HeaderCell>
                        <HeaderCell>Receipient</HeaderCell>
                        <HeaderCell>Approval Count</HeaderCell>
                        <HeaderCell>Approve</HeaderCell>
                        <HeaderCell>Finalize</HeaderCell>
                    </Row>
                </Header>
                <Body>
                    {this.renderRow()}
                </Body>
            </Table>
            </Layout>
        )
    }
}
export default RequestIndex;