import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://dsamc.com/wp-json/mobile-app/v1',
});

const {get} = apiClient;

export const EndPoints = {
  homeBanners: () => get('/home-banners'),
  services: () => get('/services'),
  doctors: () => get('/doctors'),
  branches: () => get('/branches'),
  offers: () => get('/offers'),
  departments: () => get('/departments'),
  doctorsByDepartment: deptId => get(`/departments/${deptId}`),
  serviceDetail: params => {
    let {queryKey} = params;
    let serviceId = queryKey[1];
    return get(`/services/${serviceId}`);
  },
};
