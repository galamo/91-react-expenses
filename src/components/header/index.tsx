interface IHeaderProps {
  text: string;
  color?: string;
}

export default function Header(props: IHeaderProps) {
  const { text, color = "green" } = props;
  return <h1 style={{ color }}> {text} </h1>;
}
