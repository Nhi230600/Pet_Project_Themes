import petcare  from 'images/petcare.png';
import pettrain from 'images/pettrain.png';
import petspa from 'images/petspa.png';

export interface service {
    src: string;
    title: string;
    main: string;
}
export const serviceData: service[] = [
    {
        src: petcare, title: "PET CARE", 
        main: "Cung cấp dịch vụ khám bệnh và chữa bệnh cho thú cưng với đầy đủ máy móc hiện đại và đội ngũ bác sĩ chuyên khoa sâu, giàu kinh nghiệm, được thực hiện bởi các Bác Sĩ nhiều năm kinh nghiệm"
    },
    {
        src: pettrain, title: "PET TRAIN", 
        main: "Huấn luyện thú cưng đi vệ sinh đúng chỗ, nghe lời cơ bản, huấn luyện ăn uống đúng chất, đúng bữa có khoa học,..."
    },
    {
                src: petspa, title: "PET SPA", 
        main: "Giúp làm sạch lông, tai, móng, răng miệng; khử mùi; giúp dưỡng lông mềm mượt; tránh các bệnh, vi khuẩn về da, lông... giúp bé cưng luôn xinh xắn, khỏe mạnh"
    }
];

