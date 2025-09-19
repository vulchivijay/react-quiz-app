import Button from "./Button";

export default function Answers({ answers }) {
  return answers && answers.map((answer, index) => <Button key={index}>{answer}</Button>)
}
