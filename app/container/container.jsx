import React from 'react';
import Hello from '../component/hello/Hello.jsx';
import Item from '../component/Item/Item.jsx';
import Card from '../component/card/Card.jsx';

//import img from '../../public/img/sample/sample.jpg';


/**
 * A container is non-reusable and contain the model-view logic
 */
export default class Container extends React.Component {
    constructor() {
        super();
    }

    render() {

        let items = this.props.items.map((item, id)=> {
            return (
                <Item key={ id } hello={ item } url={ item }/>
            );
        });

        return (
            <div className="container" id="container">
                <div className="row">
                    <div className="col-md-12">
                        <Hello hello={ this.props.hello }/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-group">
                            { items }
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <Card img={img} title="Sample" text="Lorem ipsum"/>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <Card img={img} title="Sample" text="Lorem ipsum"/>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <Card img={img} title="Sample" text="Lorem ipsum"/>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <Card img={img} title="Sample" text="Lorem ipsum"/>
                    </div>
                </div>
            </div>
        )
    }
}
