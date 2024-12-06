import { headers } from 'next/headers';
import { userAgent } from 'next/server';
import { v4 as uuid } from 'uuid';

export interface BaseContext {
  reqId: string;
  isBot: boolean;
  ua: string;
  timestamp: string;
  device?: string;
  os?: string;
  browser?: string;
  ipAddress: string | null;
}

export interface ApiContext extends BaseContext {
  userId: string;
  userEmail: string;
  userName: string;
}

export const getApiContext = (): BaseContext => {
  const headersList = headers();
  const reqId = uuid();

  const userAgentStructure = { headers: headersList };
  const { isBot, browser, device, os, ua } = userAgent(userAgentStructure);

  const ipAddress =
    headersList.get('x-real-ip') || headersList.get('x-forwarded-for');

  const timestamp = new Date().toISOString();

  return {
    reqId,
    isBot,
    timestamp,
    browser: browser.name,
    device: device.type,
    os: os.name,
    ua,
    ipAddress,
  };
};

export const createAppContext = async (opts: { headers: Headers }) => {};
