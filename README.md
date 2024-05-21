This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Run the development server:

```bash
vercel dev --listen 3001
```

Simultaneously also run the email bot by pulling the latest from https://github.com/ravi-patel20/email-bot:
```bash
vercel dev
```

1. Open [http://localhost:3000](http://localhost:3000) with your browser to submit a quote.
2. Visit [http://localhost:3000/quotes](http://localhost:3000/quotes) to view all the generated quotes.

To visit the already built and deployed app:

1. Open [https://email-bot-client.vercel.app/](https://email-bot-client.vercel.app/) with your browser to submit a quote.
2. Visit [https://email-bot-client.vercel.app/quotes](hhttps://email-bot-client.vercel.app/quotes) to view all the generated quotes.

Note: Considering a free version of Mail gun is being used; the emails are being sent to only a certain list of recipients. You might have to use [cloudforge-test@mailinator.com](https://www.mailinator.com/v4/public/inboxes.jsp?to=cloudforge-test) and monitor the received emails in this list. Please email me at r_v218@yahoo.com to add your email to the list of valid emails.
