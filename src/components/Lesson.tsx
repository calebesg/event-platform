import { CheckCircle } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams();
  const isActiveLesson = slug === props.slug;

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

      <div
        className={classNames(
          'border border-gray-500 rounded p-4 mt-2 group-hover:border-green-500 relative',
          {
            'bg-green-500 before:absolute before:bg-green-500 before:clip-triangle before:w-6 before:h-6 before:-left-3 before:top-1/2 before:-translate-y-1/2':
              isActiveLesson,
          }
        )}
      >
        <header className="flex justify-between items-center">
          {isLessonAvailable ? (
            <span
              className={classNames('text-sm flex items-center gap-2', {
                'text-white': isActiveLesson,
                'text-blue-500': !isActiveLesson,
              })}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 flex items-center gap-2">
              <CheckCircle size={20} />
              Em Breve
            </span>
          )}

          <span
            className={classNames(
              'text-xs text-white border rounded px-2 py-[0.125rem]',
              {
                'border-white': isActiveLesson,
                'border-green-400': !isActiveLesson,
              }
            )}
          >
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong
          className={classNames('mt-5 block', {
            'text-gray-200': !isActiveLesson,
            'text-white': isActiveLesson,
          })}
        >
          Abertura do evento Ignite labs
        </strong>
      </div>
    </Link>
  );
}
