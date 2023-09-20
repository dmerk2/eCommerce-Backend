# eCommerce-Backend

<div align="center">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" width="100">
</div>

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Walkthrough Video](#walkthrough-video)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description

The eCommerce-Backend project is a fully functional Express.js API designed to serve as the backend for an e-commerce website. It leverages the power of Sequelize to interact with a MySQL database, providing a robust foundation for managing products, categories, and tags.

### Key Features:

- **Database Initialization:** Easily set up and seed the database with test data using provided scripts.
- **API Routes:** Utilize intuitive API routes to retrieve, create, update, and delete data for categories, products, and tags.
- **Seamless Integration:** Connect to your database using environment variables, ensuring a secure and efficient interaction.
- **Testing with Insomnia:** Effortlessly test API routes in Insomnia to verify functionality and data integrity.

Follow the installation instructions below to get started with the eCommerce-Backend project.

## Installation

### Clone the repository to your local machine

```sh
git clone https://github.com/dmerk2/eCommerce-Backend.git
```

### Create an environment variable file (.env) in the root directory of the project and add the following information:

```
DB_NAME="ecommerce_db"
DB_USER="your_mysql_username"
DB_PASSWORD="your_mysql_password"
```

### Enter password for mysql db folder


```sh
mysql -u root -p
```

### Add the schema.sql to create the database structure

```sh
SOURCE schema.sql
```

### Install dependencies

```sh
npm i
```

### Add the seeds to populate the database from root folder

```sh
npm run seed
```

### Start the server with nodemon

```sh
npm run watch
```

## Walkthrough Video

Click the lightning bolt [⚡]() to view the eCommerce Backend in action!

## Usage

## License

This project is licensed under the terms of the **[MIT License](https://opensource.org/licenses/MIT)**

## Contributing

Daniel Merkin

## Tests

Use Insomnia or any API testing tool to interact with the routes.

## Questions

If you have any questions or suggestions about this project, please feel free to contact me:

- GitHub: [@dmerk2](https://github.com/dmerk2)
- Email: dan.merkin@gmail.com
