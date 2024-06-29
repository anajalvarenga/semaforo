const Semaforo = () => {
  return (
    <div className="h-60 bg-gray-800 rounded-2xl p-3 flex flex-col justify-between items-center">
      <div className={`w-14 h-14 rounded-full ${'vermelho' === 'vermelho' ? 'bg-red-500' : 'bg-gray-500'}`} />
      <div className={`w-14 h-14 rounded-full ${'amarelo' === 'amarelo' ? 'bg-yellow-500' : 'bg-gray-500'}`} />
      <div className={`w-14 h-14 rounded-full ${'verde' === 'verde' ? 'bg-green-500' : 'bg-gray-500'}`} />
    </div>
  );
}

export default Semaforo;

