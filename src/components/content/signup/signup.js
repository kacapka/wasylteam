import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class SignUp extends Component {
    render() {
        return(
            <section className="section-signup">
                <div className="login-container">
                    <div className="section-name name-login">
                        ZALOGUJ SIĘ NA SWOJE KONTO
                    </div>
                    <Link to='/user' className="btn-log-in btn-fb">
                        <i className="ion-social-facebook"></i>
                        <span>Kontynuuj prze Facebook</span>
                    </Link>
                    <Link to='/user' className="btn-log-in btn-google">
                        <i className="ion-social-googleplus"></i>
                        <span>Kontynuuj prze Google</span>
                    </Link>
                    <div className="login-info">
                        Jeśli nie jesteś uzytkownikiem serwisu wybierz jedną z powyższych opcji abu utworzyć konto. Rejestracja oznacza akceptację Warunków użytkowania i Polityki w zakresie ochrony prywatności.
                    </div>
                </div>
            </section>
        );
    }
}

export default SignUp;