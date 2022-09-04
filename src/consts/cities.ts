export const mockCities = (n: number) => {
    const items = new Array(n).fill("").map((_, i) => {
        return {
            item: {
                intro: !i,
                subtitle: "",
                title: "",
                src: "",
                description: ""
            },
            grid: {
                col: 12,
                md: !!i ? (i % 3 ? 6 : 3) : 12
            }
        }
    })
    return items
}