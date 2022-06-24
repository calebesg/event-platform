import { gql, useQuery } from '@apollo/client';
import classNames from 'classnames';
import { Lesson } from './Lesson';

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      availableAt
      id
      lessonType
      slug
      title
    }
  }
`;

interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: 'live' | 'class';
  }[];
}

interface SidebarProps {
  visible: boolean;
}

export function Sidebar({ visible }: SidebarProps) {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

  return (
    <aside
      className={classNames(
        'max-w-[600px] w-full h-full lg:h-auto lg:w-[348px] bg-gray-700 border-l p-6 border-gray-600 absolute z-50 right-0 lg:static transition-all',
        {
          'translate-x-full lg:translate-x-0': !visible,
          'translate-x-0': visible,
        }
      )}
    >
      <span className="font-bold text-2xl border-b border-gray-600 pb-6 mb-6 block">
        Cronograma das aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  );
}
