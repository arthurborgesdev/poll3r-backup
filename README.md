# poll3r-backup (App para fazer requests ao Rasp3)

## Pra que serve?

Se comunica com o RPI3 para acessar os dados de medição e gravá-los no banco de dados.


## Como funciona?

Faz requests ao raspberry PI 3 (contendo resin.io) passando como parâmetro a tag, que possui os registradores a serem buscados na memória do webserver do PM5560 (conectado ao raspberry pi). Faz o tratamento do resultado dessa requisição retirando os espaços vazios e com asteriscos e depois grava no banco de dados. 


## Arquivos principais e suas funções

**/poll3r/poll3r.js**

Inicializa o banco de dados e faz a chamada da função principal a cada 60 000ms (1 minuto). Essa função faz a requisição ao Raspberry PI 3 (que está conectado ao medidor de energia) recebe os dados de medição, faz o tratamento, e os grava no banco de dados.

**/js/tag.js**

Esse arquivo contém as tags contendo os registradores do que deve ser buscado na memória do webserver do PM5560 (medidor de energia). Contém também as funções para formatar os campos em formato JSON.


## Built With

- ESP8266
- WS2812b LED strips
- Arduino C/C++
- VSCode
- Ubuntu 20.04.3


## Setup

- Get the link of the repository: `git@github.com:arthurborgesdev/colete-matchvision.git`
- Clone it as `git@github.com:arthurborgesdev/colete-matchvision.git` on a Terminal

## Usage

- This project runs on physical devices that does not exist anymore. But the codebase is a reference for future Arduino embedded projects.


## Author

👤 **Arthur Borges**

- GitHub: [@arthuborgesdev](https://github.com/arthurborgesdev)
- Twitter: [@arthurmoises](https://twitter.com/arthurmoises)
- LinkedIn: [Arthur Borges](https://linkedin.com/in/arthurmoises)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- RYD Engenharia and all the people related
- Lots and lots of Stack Overflow questions and answers