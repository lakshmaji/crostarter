import { PageProps } from '@inertiajs/inertia';
import { User } from './models/auth';

export interface Props {
  title: string;
}

interface IFlash {
  message: string;
  alert: string;
}

interface IAuth {
  user: User;
}

export interface UsePageProps extends PageProps {
  flash: IFlash;
  auth: IAuth;
}
