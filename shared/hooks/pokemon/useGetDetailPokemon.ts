import { POKEMON_URL } from '@/shared/constants/urls.constant';
import axiosIntance from '@/shared/utils/axios';
import { useQuery } from '@tanstack/react-query';

const useGetDetailPokemon = ({ id }: { id: number }) => {
    return useQuery({
        queryKey: [POKEMON_URL.DETAIL, id],
        queryFn: async () =>
            await axiosIntance.get(`${POKEMON_URL.DETAIL}/${id}`),
    });
};

export default useGetDetailPokemon;
