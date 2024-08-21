import axios, { AxiosResponse } from 'axios';

const ID = '139958';
const BASIC_URL = `http://185.244.172.108:8081/v1/outlay-rows/entity/`;

interface Row {
  child: (null | any)[];
  equipmentCosts: number;
  estimatedProfit: number;
  id: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  rowName: string;
  salary: number;
  supportCosts: number;
  total: number;
}

async function getRows(): Promise<Row> {
  try {
    const response: AxiosResponse<Row> = await axios.get<Row>(
      `${BASIC_URL}${ID}/row/list`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
}

// interface PostRow {
//   id: 0;
//   rowName: string;
// }

// async function createUser(user: {
//   name: string;
//   email: string;
// }): Promise<PostRow> {
//   try {
//     const response: AxiosResponse<PostRow> = await axios.post<PostRow>(
//       `${BASIC_URL}row/list`
//     );
//     return response.data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       // Обработка ошибки от axios
//       console.error('Axios error:', error.message);
//     } else {
//       // Обработка других типов ошибок
//       console.error('Unexpected error:', error);
//     }
//     throw error;
//   }
// }

export default getRows;
