import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import './styles.css'

function Login() {
    return (

        <div id="page-login-form" className="container">
        <PageHeader title="Fazer login."/>
            <main>
                <form>
                <fieldset>
                        <legend>Dados de acesso</legend>

                        <Input 
                        name="email" 
                        label="Email" 
                        required
                        // onChange={(e) => { setName(e.target.value) }}
                        />

                        <Input 
                        name="password" 
                        label="Senha" 
                        required
                        // onChange={(e) => { setName(e.target.value) }}
                        />

                </fieldset>    

                <footer>
                        <p>
                        Esqueci a senha
                        </p>
                        <button type="submit">
                        Entrar
                        </button>
                    </footer>
                </form>

            </main>

      </div>
    )
}


export default Login;

