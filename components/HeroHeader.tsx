export default function HeroHeader() {
  return (
    <div className="relative h-2/3 w-full overflow-hidden">
        <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
        >
            <source src="/videos/test_video.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo HTML5.
        </video>

        <div className="relative z-10 flex flex-col items-center justify-center h-full p-10 gap-5">
            <h1 className="font-unbounded uppercase text-primary text-4xl font-bold">Karl Duponchel - Télépilote Professionnel</h1>
            <hr className="w-1/3 border-primary" />
            <h1 className="font-unbounded uppercase text-primary text-2xl font-bold italic">Prenez de la hauteur sur vos projets</h1>
            <h1 className="font-unbounded uppercase text-primary text-2xl font-bold italic">Contact à faire + lenis scroll</h1>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0" />
    </div>
  )
}