// The API base URL is configured as an environment variable in the .env file
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL!;

type SendSMSResponse = void;

export const sendSMS = (
  sender: string,
  recipient: string,
  message: string
): SendSMSResponse => {};
