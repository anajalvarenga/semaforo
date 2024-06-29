import mqtt from "mqtt"

import { useState, useEffect } from 'react';

export function useMQTT() {
    const protocol = 'mqtt'
    const host = 'test.mosquitto.org'
    const port = '8081'
    const clientId = `mqtt_${Math.random().toString(16).slice(3)}`
    const connectUrl = `${protocol}://${host}:${port}`
    const topic = '/semaforo/ecos02/qty'

    const client = mqtt.connect(connectUrl, {
        clientId,
        clean: true,
    })
    
    const [data, setData] = useState('');

    useEffect(() => {
        client.on('connect', () => {
            console.log('Connected')
            client.subscribe([topic], () => {
                console.log(`Subscribe to topic '${topic}'`)
            })
        })
        client.on('message', (topic: string, payload: { toString: () => any }) => {
            console.log(payload.toString())
            setData(payload.toString())
        })
    }, []);

    return { data }
}