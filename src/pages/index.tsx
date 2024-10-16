import LetfPage from '@/components/organisms/LetfPage';
import MiddlePage from '@/components/organisms/MiddlePage';
import Links from '@/components/molecules/Links'

export default function Home() {
  return (
    <div className="flex w-full justify-center bg-gray-100">
      <LetfPage />
      <MiddlePage />
      <Links/>
    </div>
  );
}
