import crypto from "crypto";
interface ICrypto {
  secret: string;
  body: string;
}
export const createCryptoSignature = (obj: ICrypto) => {
  const { secret, body } = obj;
  return crypto.createHmac("sha256", secret).update(body).digest("hex");
};
