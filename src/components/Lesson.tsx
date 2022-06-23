import { CheckCircle } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Link } from 'react-router-dom';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE '•' d 'de' MMMM '•' k'h'mm",
    {
      locale: ptBR,
    }
  );

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div className="border border-gray-500 rounded p-4 mt-2 group-hover:border-green-500">
        <header className="flex justify-between items-center">
          {isLessonAvailable ? (
            <span className="text-sm text-blue-500 flex items-center gap-2">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 flex items-center gap-2">
              <CheckCircle size={20} />
              Em Breve
            </span>
          )}

          <span className="text-xs text-white border border-green-400 rounded px-2 py-[0.125rem]">
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">
          Abertura do evento Ignite labs
        </strong>
      </div>
    </Link>
  );
}
