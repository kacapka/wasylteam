import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <ul className="footer-nav">
                    <li>Mateusz Wasilewski</li>
                    <li>
                        <a href="https://www.facebook.com/wasyl.crossfit/" target="_blank">
                            <i className="ion-social-facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/wasylteam/" target="_blank">
                            <i className="ion-social-instagram" />
                        </a>
                    </li>
                </ul>
                <div className="footer-sponsors">
                    <a href="http://www.salco.pl/eng/" target="_blank">
                        salco
                    </a>
                    <a href="https://www.bodypak.pl/en/" target="_blank">
                        bodypack
                    </a>
                </div>
                <div className="footer-copyrights">
                    copyrights 2018
                </div>
            </footer>
        );
    }
}

export default Footer