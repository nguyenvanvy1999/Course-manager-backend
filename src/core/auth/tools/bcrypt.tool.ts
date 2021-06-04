import bcrypt from 'bcrypt';

export async function hashPassword(rawPass: string): Promise<string> {
  try {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(rawPass, salt);
    return hash;
  } catch (error) {
    throw error;
  }
}

export async function isMatch(
  password: string,
  hash: string,
): Promise<boolean> {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    throw error;
  }
}
