import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { WingBlank, WhiteSpace, Card } from 'antd-mobile'
import "../componets.css";

export default class ItemList extends Component {

    static propTypes = {
        list: PropTypes.array.isRequired
    }

    render() {

        const { list } = this.props;
        return (
            <WingBlank>
                {
                    list.map(item => (
                        <div className="test" key={item.userid}>
                            <WhiteSpace />
                            <Card>
                                <Card.Header
                                    extra='yiki'
                                    thumb={require(`../../assets/imgs/1.jpeg`)}
                                >
                                </Card.Header>
                                <Card.Body>
                                    <div>1</div>
                                    <div>2</div>
                                    <div>2</div>
                                </Card.Body>
                            </Card>


                        </div>

                    ))
                }



            </WingBlank>

        )
    }

}