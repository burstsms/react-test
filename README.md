## Kudosity React Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Here is a test of your understanding of React components, async API calls and state management. You are required to complete the missing parts of this repository such that the page displays a form component on the left for submitting SMS messages and a list of sent messages to the right.

The test code will be run from the root of the repository and the Kudosity API key will be provided to you. Copy the _.env_ file to _.env.local_ and update `REACT_APP_API_KEY` with the provided API key.

Intall dependencies and run the app in development mode.

```
npm install
npm start
```

### Criteria

- **MessageForm.tsx** should contain a form with 3 inputs: Sender, Recipient, Message.

- The form should validate that the message length is a maximum of 3 SMS worth of text.

- The Sender on the form should be a read-only field with the value of `61481074860` as this is the valid sender enabled for use in the Kudosity account.

- A **service.ts** file has been created which needs completion, this is where the implementation of the Kudosity SMS API call goes. Use the [API docs](https://developer.transmitmessage.com) to submit an SMS from the service. The API key provided to you is passed in as the environment variable `REACT_APP_API_KEY` as shown above.

- Use `fetch` rather than installing any extra npm packages

- Use your own mobile number as the recipient for testing

- **MessageDisplay.tsx** should display a list of messages that have been sent with the following data: Recipient, Message, Number of Messages. These are returned by the Kudosity API.

- You are not required to restore the list of sent messages between sessions. A page refresh can lose all state.

### Advice

- When you're thinking about your approach, please consider that we want others to be able to easily extend it in the future.
- You have the freedom to work at your own pace, but please remember to prioritize simplicity and not let the task take too long.

### How to submit

Clone this and push to a private github repository and then add [@bkbooth](https://github.com/bkbooth) as a collaborator when completed.
