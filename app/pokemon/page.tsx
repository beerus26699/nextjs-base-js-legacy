'use client';

import Button from '@/components/atoms/Button';
import { ArrowRotateIcon } from '@/components/atoms/Icons';
import PokemonCard from '@/components/organisms/PokemonCard';
import NumberHelper from '@/shared/helpers/number.helper';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Pokemon() {
    const router = useRouter();
    const [ids, setIds] = useState<number[]>([]);

    const getRandomPokeIds = () => {
        const _ids = [];
        for (let i = 1; i <= 16; i++) {
            _ids.push(NumberHelper.random(1, 100));
        }

        setIds(_ids);
    };

    useEffect(() => {
        getRandomPokeIds();
    }, []);
    return (
        <div>
            <div className="text-center text-3xl font-bold">
                This is Pokemon Pages
            </div>
            <div className="my-10 mx-24">
                <div className="flex justify-between mb-4">
                    <Button text="Back" onClick={() => router.push('/')} />
                    <Button
                        text="Random"
                        variant="gradient"
                        Icon={<ArrowRotateIcon className="h-4 w-4 mr-1" />}
                        onClick={() => getRandomPokeIds()}
                    />
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {ids.map((id, index) => (
                        <PokemonCard key={index} id={id} />
                    ))}
                </div>
            </div>
        </div>
    );
}
