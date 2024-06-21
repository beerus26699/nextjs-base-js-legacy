import { ArrowIcon } from '@/components/atoms/Icons';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="p-24">
            <div className="text-center text-3xl font-bold">
                This is Nextjs Base
            </div>
            <div className="text-center mt-5">
                <Link
                    href="/pokemon"
                    className="flex justify-center items-center hover:underline cursor-pointer group"
                >
                    <span>Pokemon Page</span>
                    <ArrowIcon className="w-4 h-4 ml-2 group-hover:translate-x-1/2 transition duration-300" />
                </Link>
            </div>
        </main>
    );
}
