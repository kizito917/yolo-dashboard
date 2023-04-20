// External imports
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

// Internal imports
import AddGame from './pages/dashboard/games/AddGame';
import AddUser from './pages/dashboard/users/Adduser';
import Dashboard from './pages/dashboard/Index';
import EditGame from './pages/dashboard/games/EditGame';
import EditUser from './pages/dashboard/users/EditUser'
import Games from './pages/dashboard/games/Games';
import GameDetails from './pages/dashboard/games/GameDetails';
import Index from './pages/auth/Index';
import Users from './pages/dashboard/users/Users';
import UserDetails from './pages/dashboard/users/UserDetails';

function App() {
    return (
        <main>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Index />}></Route>
                    <Route path="/dashboard" exact element={<Dashboard />}></Route>
                    <Route path="/games" exact element={<Games />}></Route>
                    <Route path="/add-game" exact element={<AddGame />}></Route>
                    <Route path="/edit-game/:id" exact element={<EditGame />}></Route>
                    <Route path="/game/:id" exact element={<GameDetails />}></Route>
                    <Route path="/users" exact element={<Users />}></Route>
                    <Route path="/add-user" exact element={<AddUser />}></Route>
                    <Route path="/edit-user/:id" exact element={<EditUser />}></Route>
                    <Route path="/user/:id" exact element={<UserDetails />}></Route>
                </Routes>
            </Router>
        </main>
    );
}

export default App;
