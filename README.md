# Aura Narratives

[cloudflarebutton]

Aura Narratives is a sophisticated and elegant web presence for a premier media engagement and storytelling consultancy. The platform is designed to establish authority, showcase a range of high-value services, and attract high-caliber clients. The core of the application is a beautifully designed content-driven website featuring sections for services, a company background, a thought-leadership blog, and a client contact portal. The visual identity is built on a warm, professional palette of browns and beiges, paired with a classic serif font for body text and a modern sans-serif for headlines, creating an atmosphere of trust, elegance, and expertise.

## Key Features

-   **Stunning Visual Design:** A minimalist, warm, and sophisticated aesthetic using an earthy color palette and elegant typography.
-   **Comprehensive Service Showcase:** Detailed pages for Media Engagement, Client Management, Storytelling, and more.
-   **Thought Leadership Blog:** A content hub to establish industry authority with beautifully formatted articles.
-   **Client Engagement Portal:** A streamlined contact page and form for new client inquiries.
-   **Responsive & Modern UI:** Built with shadcn/ui and Tailwind CSS for a flawless experience on all devices.
-   **Serverless Backend:** Powered by Cloudflare Workers and Durable Objects for a scalable, high-performance backend.

## Technology Stack

-   **Frontend:** React, React Router, Vite, TypeScript
-   **Backend:** Hono on Cloudflare Workers
-   **Storage:** Cloudflare Durable Objects
-   **Styling:** Tailwind CSS, shadcn/ui
-   **UI/Animation:** Framer Motion, Lucide React
-   **Form Handling:** React Hook Form, Zod

## Project Structure

The project is organized into three main directories:

-   `src/`: Contains the React frontend application, including pages, components, hooks, and utility functions.
-   `worker/`: Contains the Hono backend application running on Cloudflare Workers. All API logic and Durable Object entity definitions reside here.
-   `shared/`: Contains TypeScript types and interfaces shared between the frontend and backend to ensure type safety.

## Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

You need to have [Bun](https://bun.sh/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone <repository-url>
    cd aura_narratives
    ```

2.  **Install dependencies:**
    ```sh
    bun install
    ```

### Running in Development Mode

To start the development server, which includes the Vite frontend and the Wrangler server for the backend worker, run:

```sh
bun run dev
```

This will start the application, typically on `http://localhost:3000`. The frontend will hot-reload on changes, and the worker will automatically restart.

## Development

### Frontend

-   **Pages:** New pages can be added in the `src/pages` directory.
-   **Components:** Reusable components are located in `src/components`. We heavily utilize `shadcn/ui` components, which can be imported from `@/components/ui/...`.
-   **API Calls:** Use the pre-configured `api` client in `src/lib/api-client.ts` to make type-safe requests to the backend.

### Backend

-   **API Routes:** To add or modify API endpoints, edit the `worker/user-routes.ts` file. The Hono router is configured here.
-   **Data Entities:** The application uses a single Durable Object for persistence. To define new data structures (entities), see the examples in `worker/entities.ts` and follow the `IndexedEntity` pattern.
-   **DO NOT** modify `worker/core-utils.ts` or `worker/index.ts` as this can break the core storage and routing functionality.

## Deployment

This project is designed for seamless deployment to Cloudflare Pages.

1.  **Build the application:**
    ```sh
    bun run build
    ```

2.  **Deploy to Cloudflare:**
    Make sure you have the Wrangler CLI installed and configured. Then, run the deploy script:
    ```sh
    bun run deploy
    ```
    This command builds the frontend and deploys both the static assets and the worker function to your Cloudflare account.

Alternatively, you can connect your GitHub repository to Cloudflare Pages for automatic deployments on every push.

[cloudflarebutton]