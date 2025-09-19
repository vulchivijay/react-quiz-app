
export default function Question({ question, questionId }) {
  return (
    <>
      <h2 key={questionId}>{question}</h2>
      <progress />
    </>

  );
};