import { useState, useEffect } from "react"

export const useIntersectionObserver = (
    refs,
    { threshold, root, rootMargin }
) => {
    // configure the state
    const [state, setState] = useState({
        activeSection: undefined
    })

    const observer = new IntersectionObserver(
        (entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setState({
                        activeSection: entry.target,
                    })
                }
            })
            return
        },
        {
            threshold: threshold || 0,
            root: root || null,
            rootMargin: rootMargin || "0%",
        }
    )

    useEffect(() => {
        // check that the element exists, and has not already been triggered
        if ( refs.length === 0 ) return;
        refs.forEach(ref => {
            if (ref.current && !state.triggered) {
                // observer.observe(ref.current)
            }
        })
    })

    return state.activeSection;
}
