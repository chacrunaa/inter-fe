import { FormItem } from '@components/castomForm/GetEditor/type';
import { AuthParams } from '@network/models/user.model';

export const inputsDefs: FormItem<AuthParams>[] = [
  { id: 'email', header: 'Email', type: 'text' },
  { id: 'password', header: 'Пароль', type: 'password' },
];
