"use client"

import { useEffect, useState } from "react";

import Header from "@/components/Header";
import Semaforo from "@/components/Semaforo";
import { useMQTT } from "@/hooks/useMQTT";
import Street from "@/components/Street";

export default function Home() {
    const { data } = useMQTT();
    
    const [time, setTime] = useState('');
    const [street1, setStreet1] = useState('');
    const [street2, setStreet2] = useState('');

    useEffect(() => {
        if(data) {
            const dataJson = JSON.parse(data)[0];
            setTime(dataJson.time)
            setStreet1(dataJson.street1)
            setStreet2(dataJson.street2)
        }
    }, [data])

  return (
    <main>
        <Header />
        <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
            <div className="flex justify-center">
                {time && (
                    <div
                        className="w-80 bg-gray-400 color-red-500 p-3 border-2 border-gray-500 rounded-2xl text-center text-xl"
                        style={{ marginBottom: '32px' }}
                    >
                        {time}
                    </div>
                )}
            </div>
            <div
                className="flex items-center justify-center"
                style={{ gap: '200px' }}
            >
                {street1 && (
                    <div>
                        <div
                            className="w-40 bg-gray-400 color-red-500 p-3 border-2 border-gray-500 rounded-2xl text-center text-xl"
                        >
                            {street1}
                        </div>
                        <Street numberOfCars={Number(street1)} />
                    </div>
                )}
                <Semaforo />
                {street2 && (
                    <div>
                        <div
                            className="w-40 bg-gray-400 color-red-500 p-3 border-2 border-gray-500 rounded-2xl text-center text-xl"
                        >
                            {street2}
                        </div>
                        <Street numberOfCars={Number(street2)} />
                    </div>
                )}
            </div>
        </div>
    </main>
  );
}
