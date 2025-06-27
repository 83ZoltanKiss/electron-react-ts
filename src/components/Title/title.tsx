import './title.css';

interface TitleProps {
    /** Html tag which will be used for the title */
    tag?: 'h1' | 'h2' | 'h3' | 'h4'
    /** The text of the title */
    text: string;
}

/** Component for section titles or subtitles */
export const Title = ({ text, tag: Tag = 'h1'}: TitleProps) => {
    return <Tag className={Tag === 'h1' ? 'primary' : 'secondary'}>{text}</Tag>
}