export default {
    emailHTML: `
        <!DOCTYPE html>
            <html lang="pt-BR">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Confirmação de Agendamento</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            line-height: 1.6;
                            color: #127e71;
                            margin: 0;
                            padding: 0;
                        }
                        .container {
                            max-width: 600px;
                            margin: 20px auto;
                            padding: 20px;
                            border: 1px solid #ddd;
                            border-radius: 8px;
                            background-color: #f9f9f9;
                            text-align: center;
                        }
                        .header {
                            text-align: center;
                            margin-bottom: 20px;
                            line-height: 0.4;
                        }
                        .header h1 {
                            font-size: 24px;
                            color: #127e71;
                        }
                        .details {
                            margin-bottom: 20px;
                        }
                        .details p {
                            margin: 5px 0;
                        }
                        .sub {
                            font-size: small;
                        }
                        .header > .sub {
                            font-size: 16px;
                        }
                        .header > .sub:first-child {
                            font-weight: bold;
                        }

                        .header > h1 {
                            padding-top: 8px;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <p class="sub">Agenda Fácil - NAF</p>
                            <p class="sub">Centro Universitário Serra dos Órgãos</p>
                            <h1>Confirmação de Agendamento</h1>
                        </div>
                        <div class="details">
                            <p><strong>Nome:</strong> <span class="name"></span</p>
                            <p><strong>Data:</strong> <span class="date"></span</p>
                            <p><strong>Hora:</strong> <span class="time"></span</p>
                        </div>
                        <div>
                            <p class="sub">
                                *Lembre-se de chegar com alguns minutos de antecedência.
                            </p>
                        </div>
                    </div>
                </body>
            </html>
`,
};
