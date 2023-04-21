export interface RequestLogin{
  email: string
  password: string
}

export class RequestUser{
  email!: string
  password!: string
  token!: string
}