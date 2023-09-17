import { Home, Products, Users } from "@/pages";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Footer, Menu, Navbar } from "@/components";
import "@/styles/global.scss";

function App() {
	const Layout = () => (
		<div className="main">
			<Navbar />
			<div className="container">
				<div className="menuContainer">
					<Menu />
				</div>
				<div className="contentContainer">
					<Outlet />
				</div>
			</div>
			<Footer />
		</div>
	);

	// // sample auth layout
	// // doesn't contain the menu and the footer
	// const AuthLayout = () => (
	// 	<div className="main">
	// 		<Navbar />
	// 		<div className="container">
	// 			<div className="contentContainer">
	// 				<Outlet />
	// 			</div>
	// 		</div>
	// 	</div>
	// )

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "users",
					element: <Users />,
				},
				{
					path: "products",
					element: <Products />,
				},
			],
		},
		// // add as many layouts as we want
		// {
		// 	path: "/auth",
		// 	element: <AuthLayout />,
		// 	children: [
		// 		{
		// 			path: "login",
		// 			element: <Login />
		// 		},
		// 		{
		// 			path: "register",
		// 			element: <Register />
		// 		},
		// 		{
		// 			path: "twofactor",
		// 			element: <TwoFactor />
		// 		},
		// 		{
		// 			path: "forgot-password",
		// 			element: <ForgotPassword />
		// 		}
		// 	]
		// }
	]);

	return <RouterProvider router={router} />;
}

export default App;
