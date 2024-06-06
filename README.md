## Kudosity React Test

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Here is a test of your understanding of React components, async API calls and state management. You are required to complete the missing parts of this repository such that the page displays a form component on the left for submitting SMS messages and a list of sent messages to the right.

The test code will be run from the root of the repository and the Kudosity API key will be provided to you. Copy the _.env_ file to _.env.local_ and update `NEXT_PUBLIC_API_KEY` with the provided API key.

Install dependencies and run the app in development mode.

```
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing by looking at `pages/index.tsx`. The page auto-updates as you edit the file and/or components.

### Criteria

- `components/MessageForm.tsx` should contain a form with 3 inputs: Sender, Recipient, Message.

- The form should validate that the message length is a maximum of 3 SMS worth of text.

- The Sender on the form should be a read-only field with the value of `61481074860` as this is a valid sender enabled for use in the Kudosity account.

- A `utils/service.ts` file has been created which needs completion, this is where the implementation of the Kudosity SMS API call goes. Use the [API docs](https://developer.transmitmessage.com) to submit an SMS from the service. The API key provided to you is passed in as the environment variable `NEXT_PUBLIC_API_KEY` as shown above.

- Use `fetch` rather than installing any extra npm packages.

- Use your own mobile number as the recipient for testing.

- `components/MessageDisplay.tsx` should display a list of messages that have been sent with the following data: Recipient, Message, Number of Messages. These are returned by the Kudosity API.

- You are not required to restore the list of sent messages between sessions. A page refresh can lose all state.

### Advice

- When you're thinking about your approach, please consider that we want others to be able to easily extend it in the future.
- You have the freedom to work at your own pace, but please remember to prioritize simplicity and not let the task take too long.

### How to submit

Clone this and push to a private GitHub repository and then add [@bkbooth](https://github.com/bkbooth) as a collaborator when completed.
