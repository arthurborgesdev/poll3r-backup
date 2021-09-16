# poll3r-backup (App to request Raspberry PI 3 for PM)

## What it is for?

App to request Raspberry PI 3 for PM5560 electrical measurements and save them into a MongoDB 


## How it works?

Make requests to the Raspberry PI 3 (containing resin.io OS) passing as a parameter the tag, which has the registers to be searched into the memory of the PM5560's webserver (connected to the Raspberry PI through a Ethernet cable). Then it handle the result of request, filtering "*" and blank spaces and them stores into the MongoDB database.


## Main files and its functionalities

**/poll3r/poll3r.js**

Starts the database and make the call to the main function each 60 000 ms (1 minute). This function make a request to the Raspberry PI 3 (which is connected to the energy meter), receive the measurement data, validates it and store into the database.


**/js/tag.js**

This file contains the tags containing the registers of what should be searched into the memory of the webserver of PM5560 (energy meter). Also contains the functions to format the fields into JSON.


## Built With

- PM5560
- Raspberry PI 3
- Resin.io/Balena
- JavaScript/Node.js
- VSCode
- Ubuntu 20.04.3
- MongoDB


## Setup

- Get the link of the repository: `git@github.com:arthurborgesdev/poll3r-backup.git`
- Clone it as `git@github.com:arthurborgesdev/poll3r-backup.git` on a Terminal

## Usage

- This project runs on physical devices that does not exists anymore. But the codebase is a reference for future resin.io/balena/PM5560 projects.


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

- Energizei Engenharia and all the people related
- Lots and lots of Stack Overflow questions and answers