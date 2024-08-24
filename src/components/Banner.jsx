import { useState } from "react";

export const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center font-mono opacity-90 text-center">
      <div className="w-1/4 h-1/4 dark:bg-gray-100 bg-gray-700 dark:text-gray-700 text-gray-100 dark:fill-slate-100 fill-gray-800 dark:hover:fill-gray-800 p-4 flex flex-col justify-center items-center rounded-2xl">
        <span className="text-md mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque exercitationem corporis in aliquid magni asperiores, labore distinctio natus reiciendis reprehenderit ad totam, consequatur sed inventore voluptas perferendis blanditiis. Obcaecati, excepturi.</span>
        <button className="bg-red-400 p-2 rounded" onClick={() => setIsVisible(false)}>Cerrar</button>
      </div>
    </div>
  );
};
