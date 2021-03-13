import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Drawer.css';

function Drawer() {
    return (
        <div class="container">
            <div class="card">
                <div class="face face1">
                    <div class="content">
                        {/* <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" /> */}
                        <h3>COLLEGE/SCHOOL</h3>
                    </div>
                </div>
                <div class="face face2">
                    <div class="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <Link to="/mid-way">Open</Link>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="face face1">
                    <div class="content">
                        {/* <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" /> */}
                        <h3>PERSONAL</h3>
                    </div>
                </div>
                <div class="face face2">
                    <div class="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="/personaldrawer">Open</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drawer
