export default function FileInput({ accept, id }) {
  return (
    <>
      <label htmlFor={id}>Click Me</label>
      <input type="file" accept={accept} id={id} style={{ display: "none" }} />
    </>
  );
}
