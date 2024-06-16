import "./styles.css"

export default function Button({ text, onClick }) {
  return <div onClick={onClick}>{text}</div>;
}
