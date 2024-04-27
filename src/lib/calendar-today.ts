export const highlightToday = ({
  date,
  view,
}: {
  date: Date;
  view: string;
}) => {
  if (view === 'month' && date.getDate() === new Date().getDate()) {
    return 'highlight-today';
  }
  return '';
};
