class App extends React.Component {
	constructor(props){
		super(props)
		this.toggleState = this.toggleState.bind(this)
		this.state = {
			landingPageIsVisible: true,
			portfolioIsVisible: false,
			aboutIsVisible: false,
			contactIsVisible: false
		}
	}
	toggleState(st1, st2) {
		this.setState({
			[st1]: !this.state[st1],
			[st2]: !this.state[st2]
		})
	}

	render() {
		return(
			<div>
				{(this.state.landingPageIsVisible) ? 
				<Landing 
					inheritedState={this.state}
					toggleState={this.toggleState} /> 
				: '' }

				{(this.state.portfolioIsVisible) ? 
				<Portfolio 
					toggleState={this.toggleState} /> 
			   	: '' }

			   	{(this.state.aboutIsVisible) ?
			    <About toggleState={this.toggleState} /> 
				: '' }

				{(this.state.contactIsVisible) ?
				<Contact toggleState={this.toggleState} /> 
				: '' }
			</div>
	  )	
	}
}



ReactDOM.render(
	<App />,
	document.querySelector('main')
);