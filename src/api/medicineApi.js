import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:9090', // ✔ 여기가 삭제 포함 모든 API의 기본 주소
  headers: {
    'Content-Type': 'application/json',
  },
});

// 👉 약품 등록
export const addMedicine = async (medicine) => {
  return await API.post('/api/medicines', medicine);
};

// 👉 약품 목록 조회
export const getMedicineList = async () => {
  return await API.get('/api/medicines');
};

// ⭐👉 약품 삭제 (추가)
export const deleteMedicine = async (id) => {
  return await API.delete(`/api/medicines/${id}`);
};
