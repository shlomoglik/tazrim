export default function withDisplayValue({ value }) {
    switch (true) {
        case (value === null || value === undefined):
            return <>{"---"}</>
        default:
            return <>{value}</>
    }
}