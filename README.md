# EngEase - Grammar Exercise Generator

<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS Logo" />
</p>

<p align="center">
  <b>EngEase</b> is a cutting-edge web application designed to help students improve their English grammar skills through AI-generated exercises. Built with the <a href="https://nestjs.com/" target="_blank">NestJS</a> framework, this project demonstrates my ability to create scalable, efficient, and user-friendly server-side applications.
</p>

---

## 🚀 Features

- **AI-Powered Grammar Exercises**: Automatically generate grammar exercises using OpenAI's GPT-4 API.
- **User Authentication**: Secure user authentication with JWT (JSON Web Tokens).
- **Personalized Content**: Each user can create, view, and manage their own grammar exercises.
- **RESTful API**: Well-structured and documented API endpoints for seamless integration.
- **Scalable Architecture**: Built with modularity and scalability in mind using NestJS.

---

## 🛠️ Technologies Used

- **Backend Framework**: [NestJS](https://nestjs.com) - A progressive Node.js framework for building efficient server-side applications.
- **Database**: [TypeORM](https://typeorm.io) with PostgreSQL for relational data management.
- **Authentication**: JWT-based authentication for secure access.
- **AI Integration**: OpenAI's GPT-4 API for generating grammar exercises.
- **Documentation**: Swagger for API documentation.
- **Deployment**: Ready for deployment on cloud platforms like AWS.

---

## 📚 Project Overview

EngEase is designed to assist students in mastering English grammar by providing personalized, AI-generated exercises. Users can:

1. **Create Exercises**: Generate grammar exercises by specifying a topic and the number of questions.
2. **View Exercises**: Retrieve a list of exercises tailored to their account.
3. **Delete Exercises**: Manage their exercises by deleting specific ones or individual questions.

This project showcases my ability to integrate AI services, implement secure authentication, and design scalable APIs.

---

## 🏗️ Project Setup

### Prerequisites
- Node.js (v16+)
- PostgreSQL database
- OpenAI API Key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/XuanPhuc269/eng-ease.git
   cd eng-ease
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USER=your-db-user
   DATABASE_PASSWORD=your-db-password
   DATABASE_NAME=eng-ease
   OPENAI_API_KEY=your-openai-api-key
   JWT_SECRET=your-jwt-secret
   ```

4. Run database migrations:
   ```bash
   npm run typeorm migration:run
   ```

5. Start the application:
   ```bash
   # Development mode
   npm run start:dev
   ```

---

## 📖 API Documentation

The API is documented using Swagger. Once the application is running, you can access the API documentation at:

```
http://localhost:3000/api
```

### Key Endpoints

#### User Authentication
- **POST** `/auth/login` - Authenticate and retrieve a JWT token.

#### Grammar Exercises
- **POST** `/grammar-exercise/create` - Create a new grammar exercise.
- **GET** `/grammar-exercise/get` - Retrieve all exercises for the logged-in user.
- **DELETE** `/grammar-exercise/:id` - Delete a grammar exercise by ID.
- **DELETE** `/grammar-exercise/:exerciseId/question/:questionId` - Delete a specific question from an exercise.

---

## 🧪 Testing

Run the following commands to test the application:

```bash
# Unit tests
npm run test

# End-to-end tests
npm run test:e2e

# Test coverage
npm run test:cov
```

---

## 🌐 Deployment

This application is ready for deployment on cloud platforms like AWS, Heroku, or Vercel. Follow these steps for deployment:

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your cloud platform of choice.

For detailed deployment instructions, refer to the [NestJS Deployment Guide](https://docs.nestjs.com/deployment).

---

## 📂 Folder Structure

```
src/
├── auth/                  # Authentication module
├── grammar-exercise/      # Grammar exercise module
│   ├── dto/               # Data Transfer Objects
│   ├── entity/            # Database entities
│   ├── grammar-exercise.controller.ts
│   ├── grammar-exercise.service.ts
├── users/                 # User module
├── main.ts                # Application entry point
```

---

## 📌 Key Learnings

- **AI Integration**: Leveraged OpenAI's GPT-4 API to generate dynamic grammar exercises.
- **Secure Authentication**: Implemented JWT-based authentication for secure access control.
- **Database Design**: Designed relational database schemas using TypeORM.
- **API Design**: Built RESTful APIs with proper documentation using Swagger.
- **Scalability**: Followed modular design principles to ensure scalability and maintainability.

---

## 🤝 Acknowledgments

- [NestJS](https://nestjs.com) for the amazing framework.
- [OpenAI](https://openai.com) for the GPT-4 API.
- [TypeORM](https://typeorm.io) for simplifying database interactions.

---

## 📬 Contact

Feel free to reach out if you have any questions or feedback about this project:

- **Email**: xuanphuctran269@gmail.com
- **LinkedIn**: [My LinkedIn Profile](https://www.linkedin.com/in/xu%C3%A2n-ph%C3%BAc-tr%E1%BA%A7n-2456701ba/)
- **GitHub**: [My GitHub Profile](https://github.com/XuanPhuc269)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
