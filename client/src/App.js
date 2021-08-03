import React, { Component } from 'react';
import logo from './sendgrid_project.png';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            to: '',
            name: '',
            template: ''
        };

        this.handleChangeTo = this.handleChangeTo.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeTemplate = this.handleChangeTemplate.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleChangeTo(event) {
        this.setState({ to: event.target.value });
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }

    handleChangeTemplate(event) {
        this.setState({ template: event.target.value });
    }

    async handleClick(event) {

        const reqPOST = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                to: this.state.to,
                name: this.state.name,
                template: this.state.template,
            })
        };

        await fetch("http://localhost:8081/sendMail", reqPOST)
            .then(response => response.text()
                .then(bodyJSON => alert(JSON.parse(bodyJSON).message)));

        event.preventDefault();

    }

    render() {
        return (
            <div class="h-screen w-screen bg-blue-200 bg-opacity-75 md:bg-opacity-50">
                <header class="container mx-auto flex justify-center items-center ">
                    <div class="justify-center rounded-md p-2 w-1/6" >
                        <img src={logo} alt='Logo' />
                    </div>
                </header>
                <div class="container mx-auto flex justify-center items-center p-2 md:p-10">
                    <div class="border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-2xl rounded-lg items-center">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="grid grid-cols-2 gap-2 border border-gray-200 p-2 rounded items-center">
                                <div class="flex border rounded bg-gray-300 items-center p-2">
                                    <svg class="fill-current text-gray-800 mr-2 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path class="heroicon-ui"
                                            d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z" />
                                    </svg>
                                    <input type="text" placeholder="Digite o seu nome..." value={this.state.name} onChange={this.handleChangeName}
                                        class="bg-gray-300 max-w-full focus:outline-none text-gray-700" />
                                </div>
                                <div class="flex border rounded bg-gray-300 items-center p-2">
                                    <svg class="fill-current text-gray-800 mr-2 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path class="heroicon-ui"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <input type="text" placeholder="Digite o seu e-mail..." value={this.state.to} onChange={this.handleChangeTo}
                                        class="bg-gray-300 max-w-full focus:outline-none text-gray-700" />
                                </div>
                            </div>
                            <select value={this.state.template} onChange={this.handleChangeTemplate} class="border p-2 rounded text-center">
                                <option value="welcome">Boas vindas</option>
                                <option value="contratacao">Contratação</option>
                                <option value="aniversario">Feliz Aniversário</option>
                            </select>
                        </div>
                        <div class="flex justify-center"><button type="submit" onClick={this.handleClick} class="p-2 border w-1/4 rounded-md bg-gray-800 text-white">Enviar</button></div>
                    </div>

                </div>
            </div >
        );
    }
}

export default App;