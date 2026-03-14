function Navbar(props){

    return(
        <nav className="navbar navbar-dark bg-dark px-4">
            <h3 className="text-white">Organika Store</h3>

            <div className="text-white">
                🛒 Cart: {props.cartCount}
            </div>
        </nav>
    );
}

export default Navbar;
