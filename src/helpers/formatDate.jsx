import { formatDistanceToNow } from 'date-fns';

export default function formatDateToNow(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}
