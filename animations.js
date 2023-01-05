export const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: .5,
            staggerChildren: .2
        }
    }
}

export const item = {
    hidden: { y: '100%' },
    show: { y: '0%', transition: { duration: .5 } }
}