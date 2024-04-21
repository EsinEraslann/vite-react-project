function Header() {
    return (
        <div className="text-center bg-light m-5 p-5">
            <h1>A warm welcome!</h1>
            <p>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
            <button className="btn btn-primary">Call to action</button>
        </div>
    );
}

export default Header;