import { useEffect, useState } from "react"

const useTShirts = () => {
    const [tShirts, setTShirts] = useState([]);
    useEffect(() => {
        fetch('tshirts.json')
            .then(response => response.json())
            .then(json => setTShirts(json))
        
    }, [])
    return [tShirts, setTShirts];
}

export default useTShirts;