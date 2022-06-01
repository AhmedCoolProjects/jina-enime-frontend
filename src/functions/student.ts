import { appAxios } from "../axios";

type studentLoginProps = {
  email: string;
  password: string;
};
type studentRegisterProps = {
  first_name: string;
  last_name: string;
  email: string;
  room_number: string;
  password: string;
};
