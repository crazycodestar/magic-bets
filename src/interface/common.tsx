export type options = "success" | "failed" | "unactivated";

export type ArbInit = {
  bookmaker: string;
  value: string;
  name: string;
  link: string;
  league: string;
  odds_type: string;
}

export type ArbData = {
  initiator: ArbInit;
  regular: ArbInit;
  sport: string;
  time: string;
  lifetime: string;
  redirects?: string;
  id?: string;
}

export interface returnData {
  status: options;
  message?: string;
}