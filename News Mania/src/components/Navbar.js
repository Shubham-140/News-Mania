import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default class Navbar extends Component {
    handleNavLinkClick = () => {
        const navbarCollapse = document.getElementById('navbarNavDropdown');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, { toggle: false });
            bsCollapse.hide();
        }
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-4" to="/">{this.props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" to="/bussiness" onClick={this.handleNavLinkClick}>{this.props.type2}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" to="/technology" onClick={this.handleNavLinkClick}>{this.props.type3}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" to="/health" onClick={this.handleNavLinkClick}>{this.props.type4}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" to="/science" onClick={this.handleNavLinkClick}>{this.props.type5}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" to="/entertainment" onClick={this.handleNavLinkClick}>{this.props.type6}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" to="/sports" onClick={this.handleNavLinkClick}>{this.props.type7}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
