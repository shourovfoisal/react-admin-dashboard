import "./navbar.scss";

export const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo">
				<img src="logo.svg" alt="Logo" />
				<span>lamadmin</span>
			</div>
			<div className="icons">
				<img src="search.svg" alt="" className="icon" />
				<img src="app.svg" alt="" className="icon" />
				<img src="expand.svg" alt="" className="icon" />
				<div className="notification">
					<img src="notifications.svg" alt="" />
					<span>1</span>
				</div>
				<div className="user">
					<img
						src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&fm=jpg&w=640&h=959&lazy=load"
						alt=""
					/>
					<span>Shourov</span>
				</div>
				<img src="settings.svg" alt="" className="icon" />
			</div>
		</div>
	);
};
