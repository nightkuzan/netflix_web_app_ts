# Netflix Web App

A Netflix-inspired web application built with Next.js and TypeScript, following clean architecture principles.

## 1. Installation

### Prerequisites

- Node.js (v18 or later)
- npm, yarn, pnpm, or bun

### Setup Instructions

1. Clone the repository

   ```bash
   git clone https://github.com/nightkuzan/netflix_web_app_ts.git
   cd netflix_web_app_ts
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Copy the environment variables template

   ```bash
   cp env.example .env.local
   ```

4. Configure your environment variables in `.env.local`

   ```
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```

5. Start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. Open [http://localhost:8081](http://localhost:8081) in your browser

## 2. Architecture

This application follows **Clean Architecture** principles, separating concerns into distinct layers:

### Domain Layer

The core of the application, containing business logic and entities.

- **Entities**: Core business models like `Show` (movies and series)
- **Repositories**: Interfaces that define data access methods

### Application Layer

Contains application-specific business rules and use cases.

- **Use Cases**: Orchestrates the flow of data between entities and the interface

### Infrastructure Layer

Implements technical details and adapters for external services.

- **Repositories Implementation**: Concrete implementations of repository interfaces

### Interface Layer (Presentation)

The user interface and API endpoints.

- **Pages**: Next.js pages and components
- **API Routes**: REST endpoints
- **Components**: Reusable UI components

### Key Architectural Features

- **Dependency Inversion**: Higher-level modules don't depend on lower-level modules
- **Separation of Concerns**: Clear boundaries between layers
- **Testability**: Business logic can be tested independently
- **Flexibility**: External frameworks and tools can be replaced without affecting core business logic

### Folder Structure Overview

```
src/
  domain/           # Domain layer
    entities/       # Business entities
    repositories/   # Repository interfaces

  application/      # Application layer
    useCases/       # Business use cases

  infrastructure/   # Infrastructure layer
    config/         # Configuration
    repositories/   # Repository implementations

  app/              # Interface layer (Next.js app router)
    api/            # API endpoints
    [lang]/         # Internationalized routes

  components/       # UI components
  utils/            # Utility functions
```

## 3. Features

### Content Browsing

- **Show Catalog**: Browse movies and TV series
- **Show Details**: View detailed information about shows
- **Hero Section**: Featured content with promotional material

### Internationalization

- **Multi-language Support**: Easily switch between languages
- **Translation Management**: External translation files
- **Language Selection**: Language switcher component

### Responsive Design

- **Mobile-First Approach**: Optimized for all device sizes
- **Responsive Navigation**: Adaptive navigation based on device size

### Performance Optimization

- **Image Optimization**: Next.js image optimization
- **Loading Skeletons**: Smooth loading experience
- **Lazy Loading**: Components load as needed

### API Integration

- **External API Connection**: Connect with backend services
- **Clean Repository Pattern**: Separation between data sources and business logic
- **Error Handling**: Graceful handling of API failures

### Technical Implementation

- **TypeScript**: Strong typing for safer code
- **Next.js**: React framework for server-side rendering and routing
- **Tailwind CSS**: Utility-first CSS framework
- **Clean Architecture**: Modular, maintainable code structure

## Deployment

The application can be deployed on various platforms:

### Deploy on Vercel

```bash
npm run build
vercel
```

### Build for Production

```bash
npm run build
npm start
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
