import React, {Component} from 'react'

class TestimonialsList extends Component {
    render() {
        const testimonials = this.props.testimonials;
        const testimonialItems = testimonials.map((testimony, index) => {
            return <div className="testimony" key={index}>
                <p className="quote">{testimony.quote}</p>
                <div className="author-container">
                    <img src={testimony.logo} alt="meaningful text"/>
                    <p className="author">{testimony.author}</p>
                </div>
            </div>;
        });
        return <div className="testimonialsList">
            {testimonialItems}
        </div>;
    }
}

export default TestimonialsList