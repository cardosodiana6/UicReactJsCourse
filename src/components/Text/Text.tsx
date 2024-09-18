import './Text.css'

type TextProps = {
    text: string;
    isTitle?: boolean;
    tooltip? : string;
    isImportant?: boolean;
    fontSize?:number;
};

const Text: React.FC<TextProps> = ({
  text,
  isTitle,
  tooltip,
  isImportant,
  fontSize,
}) => {
  return (
    <p
      className={isTitle ? "title" : ""}
      title={tooltip}
      style={{
        fontWeight: isImportant ? "bolder" : "normal",
        fontSize:fontSize
      }}
    >
      {text}
    </p>
  );
};

export default Text;