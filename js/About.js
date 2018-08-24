class About extends React.Component {
	render(){
		return(
			<div className="container">
				<a href="javascript:;" onClick={()=> this.props.toggleState('aboutIsVisible', 'landingPageIsVisible')}>Back</a>
				<br /><br /><br />
				<a href="https://github.com/samlikezham">Github Account</a><br />
				<a href="https://www.linkedin.com/in/samuel-s-chung/">LinkedIn</a>
				<div className="resume">
					<img className="center" src="https://i.imgur.com/5iUarDG.png" />
				</div>
			</div>
		)
	}
}