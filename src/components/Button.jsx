export default function Button({ buttonAction, children }) {
  return <button onClick={buttonAction}>{children}</button>
}