import { Properties } from "../types/Properties";

export const Person = ({name}:Properties) => {
    return (
        <div>
            <div className="bg-pink-700">Nome do Individuo: {name}</div>
            <div className="bg-pink-700">Descrição</div>
        </div>
    );
}