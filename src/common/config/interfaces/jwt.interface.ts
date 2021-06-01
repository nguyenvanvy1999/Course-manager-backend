export interface JwtConfigInterface {
  secret: string;
  signOptions: {
    expiresIn: string;
  };
}
