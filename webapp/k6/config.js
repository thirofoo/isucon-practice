export const BaseUrl = "http://localhost:80";
export const Username = "thiro";
export const Password = "thirothiro";

export const getRandomAccount = () => {
  const accounts = ["mary", "jordan", "lula", "mai", "julia"];
  const name = accounts[Math.floor(Math.random() * accounts.length)];
  return [name, name + name];
}