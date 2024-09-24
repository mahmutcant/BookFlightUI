export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  console.log(date.toISOString().split(".")[0]);

  return date.toISOString().split(".")[0];
};

export const getTodayAndTomorrow = () => {
  const now = new Date();
  const endDate = new Date(now);
  endDate.setDate(now.getDate() + 1);

  return {
    fromDateTime: formatDate(now.toString()),
    toDateTime: formatDate(endDate.toString()),
  };
};

export const timeFormatter = (timeString: string) => {
  const [hours, minutes] = timeString.split(':');
  let hour = parseInt(hours);
  const period = hour >= 12 ? 'PM' : 'AM';

  if (hour === 0) {
    hour = 12;
  } else if (hour > 12) {
    hour = hour - 12;
  }

  return `${hour}:${minutes} ${period}`;
}
