export interface IProduct{
  id?: number,
  name: string,
  price: number,
  description: string,
  category: string,
  image: string
}
export interface IAuth{
  id?: number,
  email: string,
  password: number,
  confirmPassword?: string,
}