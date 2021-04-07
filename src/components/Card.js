import React, {Component} from 'react';

class Card extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return <div>
				<figure>
					<img src={this.props.img} alt="Lorem ipsum" />
				</figure>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>;
	}
}

export default Card;