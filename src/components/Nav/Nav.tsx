import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Upload from '../Upload/Upload';
import Home from '../CatsList/Home';

function Nav() {
    return (
        <Router>
            <div>
                <nav className="bg-gray-800">
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="ml-6">
                                    <div className="flex space-x-4">
                                        <Link to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</Link>
                                        <Link to="/upload" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Upload image</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/upload">
                        <Upload />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Nav;