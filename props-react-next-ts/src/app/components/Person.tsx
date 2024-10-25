import { Properties } from "../types/Properties";

export const Person = ({
  name = "Indefinido",
  avatar = "Indefinido",
  eyes = ["Indefinido", "Indefinido"],
  position = "Indefinido",
}: Properties) => {
  return (
    <div
      className="flex justify-center items-center gap-4 p-[10px]
     bg-gradient-to-r from-blue-500 to-purple-500 
     border-b-[3px] border-gray-500"
    >
      <div>
        <img
          src={avatar}
          alt={avatar}
          className="rounded-full w-[100px] h-[100px] object-contain border-[3px] border-white shadow-2xl"
        />
      </div>
      <div className="flex flex-col text-white">
        <div className="flex-1">
          <b>Nome do Individuo: </b>
          {name}
        </div>
        <div className="w-[300px]">
          <ul>
            <li>
              <b>Olho esquerdo: </b>
              {eyes[0]}
            </li>
            <li>
              <b>Posição: </b> {position}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
