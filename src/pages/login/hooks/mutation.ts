import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

import api from '@/lib/axios';
import useMutationToast from '@/hooks/toast/useMutationToast';

import useAuthStore from '@/store/useAuthStore';

import { ApiResponse } from '@/types/api';
import { User } from '@/types/entities/user';

export type LoginFormType = {
  username: string;
  password: string;
};

export const useLoginMutation = () => {
  const router = useRouter();
  const { login } = useAuthStore();
  const {
    mutateAsync: handleLogin,
    isLoading,
    isSuccess,
  } = useMutationToast<void, LoginFormType>(
    useMutation({
      mutationFn: async (data: LoginFormType) => {
        const response = await api.post('/login', data);
        const accessToken = response.data.data.Token;

        const user = await api.get<ApiResponse<User>>('/me');
        if (!user.data.data) {
          throw new Error('Sesi login tidak valid');
        }

        login({ ...user.data.data, Token: accessToken });
      },
      onSuccess: () => {
        toast.success('Akun berhasil login');
        router.push('/dashboard');
      },
    }),
  );
  return { handleLogin, isLoading, isSuccess };
};
