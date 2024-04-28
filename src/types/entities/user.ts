export type User = {
  ID: string;
  Username: string;
  Email: string;
  Nama: string;
  Biodata: string;
  Notelpon: string;
  Role: 'ADMIN' | 'USER' | 'TEACHER';
};

export type WithToken = {
  Token: string;
};
