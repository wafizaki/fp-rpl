import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

import api from '@/lib/axios';
import useMutationToast from '@/hooks/toast/useMutationToast';

export type RegisterFormType = {
  username: string;
  password: string;
  email: string;
  nama: string;
  biodata: string;
  notelpon: string;
};

export const useRegisterMutation = () => {
  const router = useRouter();
  const { mutateAsync: handleRegister, isLoading } = useMutationToast<
    void,
    RegisterFormType
  >(
    useMutation({
      mutationFn: async (data: RegisterFormType) => {
        await api.post('/register', data);
      },
      onSuccess: () => {
        toast.success('Pendaftaran akun berhasil');
        router.push('/login');
      },
    }),
  );
  return { handleRegister, isLoading };
};
