interface ErrorMessageProps {
  message: string;
}

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div style={{ color: "red", textAlign: "center" }}>
      {message}
    </div>
  );
}

export default ErrorMessage;
