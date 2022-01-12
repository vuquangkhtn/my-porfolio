import { download } from 'utils/download';

export const downloadResume = async () => {
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/download-resume`, {
    method: 'GET',
  })
    .then(res => res.blob())
    .then(blob => {
      download(blob, 'CV_QuangVuNguyen');
      return true;
    });
  return result;
};
