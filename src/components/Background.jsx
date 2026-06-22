const Background = () => {
  return (
    <section className="absolute inset-0 bg-black/40">
          <div className="relative h-screen overflow-y-hidden">
               <div className="absolute inset-0 w-full h-screen -z-50"
               style={{
                    backgroundImage: "url(/assets/herobg.webp)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
               }}
          /> 
          </div>
    </section>
  )
}

export default Background