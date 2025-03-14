import { getCar } from '@/app/utils/service';
import React from 'react'

interface Props {
    params: Promise<{ id: string }>
}

const Page = async ({ params }: Props) => {

    // Url den id parametrelerini alır
    const { id } = await params;

    // api'dan araç detaylarını alır
    const { car } = await getCar(id)

    return (
        <div>Page</div>
    )
}

export default Page