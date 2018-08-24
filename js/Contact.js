class Contact extends React.Component{
	render(){
		return(
			<div className="container">
				<a href="javascript:;" onClick={()=> this.props.toggleState('contactIsVisible', 'landingPageIsVisible')}>Back</a>
			<div className="contact">
				<a href="https://www.linkedin.com/in/samuel-s-chung/">Contact me on LinkedIn</a>
				<p>Email: schung015@gmail.com</p>
			</div>
			</div>
		)
	}
}