export default function Buttons() {
  const styleButtons = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <div style={styleButtons}>
      <a href="mailto:brianocm9@gmail.com" target="_blank"><button>📧 E-Mail</button></a>
      <a href="https://www.linkedin.com/in/bryan-cusme/" target="_blank" ><button>🌐 LinkedIn</button></a>
    </div>
  );
}
