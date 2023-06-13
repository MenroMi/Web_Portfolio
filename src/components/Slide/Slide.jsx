import Image from 'next/image';

const Slide = ({ id, pic, tech }) => {
  return (
    <div
      key={id}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
      }}
    >
      <Image src={pic} width={80} height={80} alt={tech} draggable={false} />
      <h3>{tech}</h3>
    </div>
  );
};

export default Slide;
