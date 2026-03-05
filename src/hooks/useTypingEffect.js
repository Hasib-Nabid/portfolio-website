import { useState, useEffect, useRef } from 'react'

export default function useTypingEffect(roles) {
    const [text, setText] = useState('')
    const ref = useRef({ ri: 0, ci: 0, del: false })

    useEffect(() => {
        let timeout
        function type() {
            const { ri, ci, del } = ref.current
            const role = roles[ri]
            let speed

            if (del) {
                ref.current.ci--
                setText(role.substring(0, ref.current.ci))
                speed = 35
            } else {
                ref.current.ci++
                setText(role.substring(0, ref.current.ci))
                speed = 70
            }

            if (!del && ref.current.ci === role.length) {
                ref.current.del = true
                speed = 2200
            } else if (del && ref.current.ci === 0) {
                ref.current.del = false
                ref.current.ri = (ri + 1) % roles.length
                speed = 400
            }

            timeout = setTimeout(type, speed)
        }
        type()
        return () => clearTimeout(timeout)
    }, [])

    return text
}
