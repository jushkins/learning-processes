export type SessionData = {
  phone?: string;
  user_id?: string;
  name?: string;
  lang?: "uz" | "ru";
};

export function initial(): SessionData {
  return {};
}
