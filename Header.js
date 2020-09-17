import React, { Component } from 'react';

export default class Header extends Component {
    render(){
        return(
            <div className="Heaer">
                
                <ul>
                    <li><a href='#Home'>Home</a></li>
                    <h1>Home Page</h1>
                    <background><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtd6I6dyFBQxoPBVFu4jcQm9Nx2yOwcn6Neg&amp;usqp=CAU" alt="Plumbing Services in Austin &amp; Bastrop, TX | Austen Plumbing Company"/></background>
                    <li><a href='#Contact'>Contact</a></li>
                    <h1>We are Plumbing Service </h1>
                    <h1>#1-866-Plumbing!</h1>
                    <li><a href='#About'>About</a></li>
                    <h1>Our Company are here to Help</h1>
                    <h1>We clean gutters and fix other water problems as well.</h1>
                    
                    <li><a className="active" href="#Enter">Enter</a></li>
                    <background><img src="https://quailservice.com/wp-content/uploads/2019/06/plumbing_services-300x200.jpg" alt="Auburn Plumber | Plumbing Repair, Water Heaters &amp; More | Quail Services"/></background>
                </ul>

          

<span>
<input type="text" placeholder="Email" name="email"/>
<input type="text" placeholder="Password" name="password"/>
<input type="submit"/>
</span>
            </div>
        )
    }
}