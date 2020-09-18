import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" href="#">TODO</Link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <Link class="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="#">Features</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="#">Pricing</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                </li>
                </ul>
            </div>
            
        </nav>
    )
}
