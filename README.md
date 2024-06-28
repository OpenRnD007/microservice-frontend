# MicroService Series Frontend

## [Part of Microsevices Architecture](https://github.com/OpenRnD007/microservices/)

## Introduction
This TypeScript-React-NextJS based application interfaces with Search and Product Microservices, offering capabilities for search operations and listing displays.

## Prerequisites
Before you begin, ensure you have met the following requirements:
* You have installed Node.js and npm.
* You have installed TypeScript.

## Installation
To install the project, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/OpenRnD007/microservice-frontend.git
```

2. Navigate to the project directory:
```bash
cd microservice-frontend
```

3. Install the dependencies:
```bash
npm install
```

## Usage
To use the search and autocomplete services in the project, you need to set up the following environment variables:
* `NEXT_PUBLIC_SEARCH_API` - Search api endpoint.
* `NEXT_PUBLIC_PRODUCT_API` - Product api endpoint.
* `NEXT_PUBLIC_MYAPIFILMS` - Myapifilms api endpoint for imdb images.
* `NEXT_PUBLIC_OMDBAPI` - Myomdb api endpoint for imdb images.

Here's how you can start the application:
```bash
npm start
```

The application exposes two main functionalities:
* [**Search**]: Acquires data via the Search API.
* [**Product**]: Gathers product details through the Product API.

## Contributing
Contributions to this project are welcome. To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License
This project is licensed under the [MIT License](LICENSE).

## TODO
- Testing
- Micro-Frontend 