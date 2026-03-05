import { useState, useEffect, useRef } from 'react'

export default function useCountUp(target, decimal = false) {
    const [value, setValue] = useState(0)
    const ref = useRef(null)
    const started = useRef(false)

    useEffect(() => {
        const el = ref.current
        const observer = new IntersectionObserver(entries => {
            if (entries[0]?.isIntersecting && !started.current) {
                started.current = true
                const start = performance.now()
                const duration = 1800
                function update(now) {
                    const p = Math.min((now - start) / duration, 1)
                    const e = 1 - Math.pow(1 - p, 3)
                    setValue(decimal ? parseFloat((e * target).toFixed(2)) : Math.floor(e * target))
                    if (p < 1) requestAnimationFrame(update)
                    else setValue(target)
                }
                requestAnimationFrame(update)
            }
        }, { threshold: 0.5 })

        // Use a small timeout to ensure DOM element is mounted
        const timer = setTimeout(() => {
            // We need to find the element in the DOM since we can't use ref directly in the hook
            // The component using this hook should have a data attribute
        }, 0)

        return () => { observer.disconnect(); clearTimeout(timer) }
    }, [target, decimal])

    // For simplicity, just start the animation after a delay
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!started.current) {
                started.current = true
                const start = performance.now()
                const duration = 1800
                function update(now) {
                    const p = Math.min((now - start) / duration, 1)
                    const e = 1 - Math.pow(1 - p, 3)
                    setValue(decimal ? parseFloat((e * target).toFixed(2)) : Math.floor(e * target))
                    if (p < 1) requestAnimationFrame(update)
                    else setValue(target)
                }
                requestAnimationFrame(update)
            }
        }, 800)
        return () => clearTimeout(timer)
    }, [target, decimal])

    return decimal ? value.toFixed(2) : value
}
