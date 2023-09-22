import petcare from '../../images/petcare.png'
import pettrain from '../../images/pettrain.png'
import petspa from '../../images/petspa.png'


export interface service {
    src: string;
    title: string;
    main: string;
}

export const serviceData: service[] = [
    {
        src: petcare, title: "pet care", main: "chăm sóc con pet"
    },
    {
        src: pettrain, title: "pet train", main: "chăm sóc con pet"
    },
    {
        src: petspa, title: "pet care", main: "chăm sóc con pet"
    }
];

