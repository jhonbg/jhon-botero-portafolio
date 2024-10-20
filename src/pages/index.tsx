import LetfPage from '@/components/organisms/LetfPage';
import MiddlePage from '@/components/organisms/MiddlePage';
import Links from '@/components/molecules/Links'

// En esta parte se hace la importacion de todos los elementos necesarios para ver en la pagina.
export default function Home() {
  return (
    <div className="flex w-full justify-center bg-gray-100">
      <LetfPage />
      <MiddlePage />
      <Links/>
    </div>
  );
}
