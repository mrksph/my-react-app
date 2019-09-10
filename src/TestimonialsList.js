import React, {Component} from 'react';
import TestimonyItem from "./TestimonyItem";

class TestimonialsList extends Component {
    render() {
        const testimonials = this.props.testimonials;
        const testimonialItems = testimonials.map((testimony, index) => {
            return <TestimonyItem key={index} testimony={testimony}/>
        });
        return <div className="testimonialsList">
            {testimonialItems}
        </div>;
    }
}

export default TestimonialsList;