class About extends React.Component {
	render(){
		return(
			<div className="container">
				<a href="javascript:;" onClick={()=> this.props.toggleState('aboutIsVisible', 'landingPageIsVisible')}>Back</a>
				<br /><br /><br />
				<a href="https://github.com/samlikezham" target="_blank">Github Account</a><br />
				<a href="https://www.linkedin.com/in/samuel-s-chung/" target="_blank">LinkedIn</a>
				<div className="resume">
					<iframe className="center" src="https://docs.google.com/document/d/e/2PACX-1vRADCePsk6lGxTNh4SZRfTxHnY4cRDzl_yxPylq-wNDap-96s8r_hvRMMrtiwF6KrHNMw8qmsI6t8pM/pub?embedded=true"></iframe>
				</div>
			</div>
		)
	}
}