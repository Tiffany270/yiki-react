import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { WingBlank, WhiteSpace, Card } from 'antd-mobile'
import "../componets.css";
import { withRouter } from 'react-router-dom'
class ItemList extends Component {

    static propTypes = {
        list: PropTypes.array.isRequired
    }

    render() {
        const { list } = this.props;
        return (
            <WingBlank>
                {
                    list.map((item, index) => (
                        <div className="test" key={item.userid}>
                            <WhiteSpace />
                            <Card>
                                <Card.Header
                                    extra={item.username}
                                    thumb={require(`../../assets/imgs/${item.userheader ? item.userheader : index + 1}.jpeg`)}
                                    onClick={() => this.props.history.push(`/chat/${item.userid}`)}
                                >
                                </Card.Header>
                                <Card.Body>
                                    <div>{item.company}</div>
                                    <div>{item.intro}</div>
                                    <div>SALARY:{item.salary}K</div>
                                </Card.Body>
                            </Card>


                        </div>

                    ))
                }



            </WingBlank>

        )
    }

}

export default withRouter(ItemList)