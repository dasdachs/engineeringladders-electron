import { PerssistantStore } from "../db";
import { useEffect, useState } from "react";

export function useInitDb() {
    const [ isLoading, setIsLoading ] = useState(true)
    const [ error, setError ] = useState<Error | null>(null)
    const [ dbService, setDbService ] = useState<PerssistantStore | null>(null)

    useEffect(() => {
        try {
            setDbService(new PerssistantStore())
        } catch (e) {
            setError(e as Error)
        } finally {
            setIsLoading(false)
        }
    }, [ setDbService, setError, setIsLoading, PerssistantStore ])

    return {
        isLoading,
        error,
        dbService,
    }
}