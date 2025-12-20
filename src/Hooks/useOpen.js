import { useCallback, useState } from "react"

const useOpen = () => {
    const [open , setOpen] = useState(false)

    const toggle = useCallback(() => {
        setOpen(prev => !prev)
    }, [])

    return {open , setOpen , toggle}
}

export default useOpen