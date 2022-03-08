export default function Photo(props) {
  return (
    <img
      className="cuerpo--photo"
      style={{
        width: '317px',
        height: '55%',
        objectFit: 'cover',
        borderRadius: '15px 15px 0 0',
      }}
      src={props.link}
    />
  );
}
