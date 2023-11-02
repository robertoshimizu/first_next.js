import Image from 'next/image'

function Pizza() {
  return (
    <div>
      <Image
        src="/focaccia.jpg"
        width={400}
        height={400}
        alt="focaccia"
        />
      <h2>Pizza Focaccia</h2>
      <p>Tomato, mozarella and Focaccia</p>
    </div>
  )
}

export default function Menu() {
  return (
    <div>
      <h1>Menu</h1>     
      <Pizza />
    </div>
  );
};

