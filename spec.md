# Exam Platform Technical Specification

## Overview
This document outlines the technical specifications for building an exam creation and management system. The platform will enable educational institutions, businesses and other organizations to create, distribute, monetize and analyze exams.

## Table of Contents
- [Exam Platform Technical Specification](#exam-platform-technical-specification)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Technologies](#technologies)
  - [Architecture](#architecture)
  - [Database Design](#database-design)
    - [Models](#models)
  - [API Design](#api-design)
  - [Frontend](#frontend)
  - [Testing](#testing)
  - [Deployment](#deployment)
  - [Bugs](#bugs)



## Requirements
- [x]  User account registration and authentication
- [x] Exam creation with various question types
- Payment processing for users attempting paid exams
- Exam scheduling and access control
- Result calculation and analytics
- Examination report generation
- Mobile and web access

## Technologies
- Frontend: React
- Backend: Ruby on Rails
- Database: PostgreSQL
- Payment: Stripe API
- Authentication: Devise
- Deployment: Heroku

## Architecture
The application will follow the typical Model-View-Controller (MVC) architecture provided by Rails framework, while the frontend will be built using React components and interactions.

## Database Design

### Models
- User:
    - id
    - email
    - password
    - created_at
    - updated_at
- Profile:
    - user_id (foreign key)
    - first_name
    - last_name
    - organization
    - role
    - phone
    - created_at
    - updated_at
- Exam:
    - id
    - title
    - description
    - creator_id (foreign key from User)
    - public
    - price
    - pass_percentage
    - time_limit
    - created_at
    - updated_at
- Question:
    - id
    - exam_id (foreign key)
    - text
    - question_type
    - options (JSON field)
    - correct_option
    - points
    - created_at
    - updated_at
- Attempt:
    - id
    - user_id (foreign key)
    - exam_id (foreign key)
    - start_time
    - end_time
    - score
    - result
    - created_at
    - updated_at
- Payment:
    - id
    - user_id (foreign key)
    - exam_id (foreign key)
    - amount
    - transaction_id
    - timestamp

## API Design
- Authentication:
    - POST /auth/register
    - POST /auth/login
    - POST /auth/logout
- User:
    - GET /user/<id>
    - PATCH /user/<id>/update
- Exam:
    - POST /exams/create
    - PATCH /exams/:id/edit
    - DELETE /exams/:id/delete
    - GET /exams/creator
    - GET /exams/public
    - GET /exams/:id
- Question:
    - POST /exams/:id/questions/create
    - PATCH /questions/:id/edit
    - DELETE /questions/:id/delete
- Attempts:
    - POST /exams/:id/attempts/start
    - PATCH /attempts/:id/submit
- Payment:
    - POST /exams/:id/payment

## Frontend
- Pages:
    - Landing
    - Registration
    - Login
    - Dashboard
    - Exam creation and editing
    - Exam taking
    - Exam and attempt reports
- Components:
    - Header
    - Alert
    - ExamCard
    - QuestionCard
    - ExamForm
    - QuestionForm
    - AttemptSummary

## Testing
- Unit tests:
    - Model validations and relationships
    - API routing and controllers
- Integration tests:
    - User authentication and registration
    - Exam creation, editing, and deletion
    - Attempt submission and result calculation
    - Payment processing
- E2E tests:
    - UI interactions and navigation

## Deployment
- Heroku will be used for deploying the application
- Separate environments for staging and production
- Use of continuous integration and continuous deployment tools (e.g., GitHub Actions)

## Bugs
- [ ] Fix bug in google auth not changing navbar links
- [ ]
