export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <video 
        className="w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
        controls
      >
        <source src="/videos/strom-comingsoon.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
