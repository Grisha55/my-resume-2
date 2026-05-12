// (редирект на дефолтный язык)
import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/ru');
}