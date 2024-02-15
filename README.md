# NodeJS Confluence to Discord Webhook

This project is a simple NodeJS application that listens for webhook events from Confluence and forwards them to a specified Discord channel using Discord webhooks. It's built with Express and uses Got for HTTP requests.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v20 or later)
- npm (usually comes with Node.js)
- A Confluence instance that you can set up webhooks on
- A Discord server where you can add custom webhooks

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/emcifuntik/confluence-discord-webhook.git
```

2. Navigate to the project directory:

```bash
cd confluence-discord-webhook
```

3. Install the required dependencies:

```bash
npm install
```

4. Set up the environment variables. You need to create a `.env` file in the root of your project directory with the following variables:

```
CONFLUENCE_URL=Your_Confluence_Instance_URL
DISCORD_WEBHOOK_URL=Your_Discord_Webhook_URL
PORT=8067
```

5. Run the application:

```bash
npm start
```

The server should start, and you will see a message indicating that it's running on a specific port.

## Usage

To use this application, you need to set up a webhook in your Confluence instance that targets `http://localhost:8067/webhook-conf` (adjust the port if necessary). Whenever Confluence sends a webhook event to this endpoint, the application will process the event and forward a formatted message to the specified Discord channel.

## Contributing

Feel free to fork this repository and submit pull requests to contribute to this project. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open source and available under the [MIT License](LICENSE).
