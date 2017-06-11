import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class ServiceComponent extends React.Component {
    render() {
        const children = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child);
        });

        let props = Object.assign({}, this.props);
        props.className = classNames('card', this.props.className);

        return (
            <section id="service">
                <Grid>

                </Grid>
            </section>
        )
    }
}