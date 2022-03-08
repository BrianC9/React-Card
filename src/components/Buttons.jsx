export default function Buttons() {
  const styleButtons = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <div style={styleButtons}>
      <button>📧 E-Mail</button>
      <button>🌐 LinkedIn</button>
    </div>
  );
}
