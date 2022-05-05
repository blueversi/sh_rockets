interface ErrorDisplayProps {
  message: string;
}
const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => (
  <div style={{ marginTop: '50vh', color: 'red' }}>
    <h2>Error Occurred</h2>
    {message}
  </div>
);

export default ErrorDisplay;
