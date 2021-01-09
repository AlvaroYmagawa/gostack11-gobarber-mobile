import { AxiosResponse } from 'axios';

//* CUSTOM IMPORTS
import api from '../../services/api';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

interface SignUpResponse {
  name: string;
  email: string;
  id: string;
}

export const signUp = (
  data: SignUpFormData,
): Promise<AxiosResponse<SignUpResponse>> =>
  Promise.resolve(api.post('/users', { ...data }));
