'use client';

import useGetDetailPokemon from '@/shared/hooks/pokemon/useGetDetailPokemon';

const PokemonCard = ({ id }: { id: number }) => {
    const { data: poke, isSuccess, isLoading } = useGetDetailPokemon({ id });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="border rounded-lg p-3 flex justify-between items-center">
            <div className="capitalize text-lg font-semibold">{poke.name}</div>
            <img src={poke.sprites?.front_default} alt="" />
        </div>
    );
};

export default PokemonCard;
