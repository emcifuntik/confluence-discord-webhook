import express from 'express';
import bodyParser from 'body-parser';
import got from 'got';
import 'dotenv/config';

const app = express();

app.use(bodyParser.json());

const routeSecret = process.env.WEBHOOK_ROUTE_SECRET;

app.post('/webhook-conf/' + routeSecret, async (req, res) => {
  const confluencePayload = req.body;
  if (confluencePayload.test) {
    console.log('Test event received from Confluence');
    return res.sendStatus(200);
  }

  console.log(confluencePayload);
  const message = {
    username: 'Confluence Bot',
    embeds: [
      {
        title: 'Confluence',
        description: `Event type: ${confluencePayload.event}`,
        fields: [
          {
            name: 'Page URL',
            value: `${process.env.CONFLUENCE_URL}pages/viewpage.action?pageId=${confluencePayload.page.id}`,
          },
        ],
      },
    ],
  };

  try {
    await got.post(process.env.DISCORD_WEBHOOK_URL, {
      json: message,
      responseType: 'json',
    });
  } catch (error) {
    console.error('Error sending message to Discord', error);
  }

  res.sendStatus(200);
});

const port = +process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
