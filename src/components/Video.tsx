import { DefaultUi, Player, Youtube } from '@vime/react';
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from 'phosphor-react';

import '@vime/core/themes/default.css';
import { Footer } from './Footer';
import { useGetLessonBySlugQuery } from '../graphql/generated';

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[68vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-6 lg:p-8 pb-0 max-w-[1100px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          <div className="flex-1">
            <h1 className="text-lg lg:text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="text-sm lg:text-base mt-4 text-gray-200">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center mt-6 gap-4">
                <img
                  className="w-16 h-16 rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher.avatarURL}
                  alt={data.lesson.teacher.name}
                />

                <div className="leading-relaxed">
                  <strong className="font-bold text-lg lg:text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4 w-full lg:w-auto">
            <a
              href="/"
              className="p-4 text-sm bg-green-500 flex items-center justify-center rounded font-bold uppercase gap-2 hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>

            <a
              href="/"
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center justify-center rounded font-bold uppercase gap-2 hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 mb-16">
          <a
            href="/"
            className="bg-gray-700 row-span-2 rounded overflow-hidden flex justify-between items-stretch gap-4 lg:gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-4 lg:p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-4 lg:py-6 leading-relaxed flex-1">
              <strong className="text-lg lg:text-2xl">
                Material complementar
              </strong>
              <p className="text-gray-200 text-xs lg:text-sm mt-2">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="h-full p-4 lg:p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href="/"
            className="bg-gray-700 row-span-2 rounded overflow-hidden flex items-stretch justify-between gap-4 lg:gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-4 lg:p-6 flex items-center">
              <Image size={40} />
            </div>
            <div className="py-4 lg:py-6 leading-relaxed flex-1">
              <strong className="text-lg lg:text-2xl">
                Wallpapers exclusivos
              </strong>
              <p className="text-gray-200 text-xs lg:text-sm mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div className="h-full p-4 lg:p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
