class Portfolio extends React.Component {
	render(){
		return(
			<div className="container">
			   <a href="javascript:;" onClick={()=> this.props.toggleState('landingPageIsVisible', 'portfolioIsVisible')}>Back</a>

				<div className="portfolio container">
					<h2>Current Projects</h2>
					<div className="row justify-content-center">
						<div className="col-4">
							<img className="img" src="https://i.imgur.com/jPBM0rv.png" />
						</div>
						<div className="col-4">
						<a href="https://samlikezham.github.io/">Blackjack</a>
						</div>
					</div><br />

					<div className="row justify-content-center">
						<div className="col-4">
							<img className="img" src="https://i.imgur.com/6OVFXN1.png" />
						</div>
						<div className="col-4">
						<a href="https://secret-chamber-85731.herokuapp.com/">MongoDB/Node/Express  E-commerce project</a>
						</div>
					</div><br />

					<div className="row justify-content-center">
						<div className="col-4">
							<img className="img" src="https://i.imgur.com/mtdoL3H.png" />
						</div>
						<div className="col-4">
						<a href="https://cocktail-adi.herokuapp.com/">MEAN stack app with 3rd party API</a>
						</div>
					</div><br />

					<div className="row justify-content-center">
						<div className="col-4">
							<img className="img" src="https://i.imgur.com/amKbLxT.png" />
						</div>
						<div className="col-4">
						<a href="https://i.imgur.com/amKbLxT.png">Jeopardy API game built on React with Rails</a>
						</div><br />
					</div>
				</div>			
			</div>
		)
	}
}