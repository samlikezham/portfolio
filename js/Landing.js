class Landing extends React.Component {
	render() {
		return(
			<div>
			<nav className="navbar navbar-default">
		    <div className="navbar-header">
		        <span className="sr-only">Toggle navigation</span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		      <a href="javascript:;" class="navbar-brand">Sam Chung</a>
		    </div>

		      <ul class="nav navbar-nav navbar-right">
		        <li><a href="javascript:;" onClick={()=> this.props.toggleState('portfolioIsVisible', 'landingPageIsVisible')}>Portfolio</a></li>
		        <li><a href="javascript:;" onClick={()=> this.props.toggleState('aboutIsVisible', 'landingPageIsVisible')}>About</a></li>
		        <li><a href="javascript:;" onClick={()=> this.props.toggleState('contactIsVisible', 'landingPageIsVisible')}>Contact</a></li>
		      </ul>
		   </nav>
		  

			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div id="content">
			       			 <img className="mainImg" src="https://i.imgur.com/ClSVGOF.jpg" />
							<h1>Sam Chung</h1>
							<h3>Full Stack Web Developer</h3>
							<button className="btn btn-default btn-lg" onClick={()=> this.props.toggleState('portfolioIsVisible', 'landingPageIsVisible')}><a href="javascript:;">Check Out Some of My Projects</a></button>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
	}
}