export class User {
  Claims: Array<any> = null;
  Logins: Array<any> = null;
  Posts: Array<any> = null;
  Roles: Array<any> = null;
  Hometown: string = null;
  Email: string = null;
  EmailConfirmed: boolean = null;
  PasswordHash: string = null;
  SecurityStamp: string = null;
  PhoneNumber: string = null;
  PhoneNumberConfirmed: boolean = null;
  TwoFactorEnabled: boolean = null;
  LockoutEndDateUtc: Date = null;
  LockoutEnabled: boolean = null;
  AccessFailedCount: number = null;
  Id: string = null;
  UserName: string = null;

  //Supress index signature 'any' type error
  [key: string]: string | Array<any> | boolean | Date | number;
}
