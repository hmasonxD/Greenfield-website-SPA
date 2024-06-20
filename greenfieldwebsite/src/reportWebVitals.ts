import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

type ReportHandler = (data: {
  name: string;
  value: number;
  id: string;
}) => void;

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && typeof window !== 'undefined') {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
