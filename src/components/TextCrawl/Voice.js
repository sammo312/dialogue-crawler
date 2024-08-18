import { useEffect, useState } from "react"

export const Voice = ({ audio }) => {

    const [audio, setAudio] = useState(new Audio(audio))
    const [play, setPlay] = useState(false)

    useEffect(() => {

        audio.addEventListener('ended', () => setPlay(false));

        return () => {
            audio.addEventListener('ended', () => setPlay(false));

        }
    }, [])

    return <div />
}