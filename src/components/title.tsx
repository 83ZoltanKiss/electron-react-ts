interface TitleProps {
    text: string;
}
export const Title = ({text}: TitleProps) => {
    return <h2>{text}</h2>
}