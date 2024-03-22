export function Introduction() {
  return (
    <>
      <h1 className="font-roboto font-extrabold text-6xl italic hover:underline opacity-80 hover:opacity-100 select-none text-shortTx md:text-largeTx ">
        <div>Abangan, </div>
        <div className="flex flex-col md:flex-row md:gap-10">
          <div>Jilian </div> <div>Garette</div>
        </div>
      </h1>
      <h3 className="md:font-mono md:text-3xl word-spacing-2 italic md:mt-3 opacity-70 select-none">
        Poblacion, Pinamungajan, Cebu
      </h3>
    </>
  );
}

export default Introduction;
