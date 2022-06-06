import { Career, career } from 'data/work/career';
import { HiLightningBolt } from 'react-icons/hi';
import { ExternalLink } from './Footer';
import { Labels } from './Label';

type Props = {
  career: Career;
  last: boolean;
};

const CareerCard = ({
  career: { title, description, time, type, url, logo },
  last
}: Props) => {
  return (
    <li className=" border border-gray-200 my-5 dark:border-gray-800 p-4 rounded-lg animate-scale">
      <div className="relative">
        {!last && (
          <span
            className="hidden md:block absolute top-4 left-3 md:left-5 h-full w-0.5 bg-accent"
            aria-hidden="true"
          />
        )}
        <div className="relative flex items-start md:space-x-3">
          <img
            className="items-center justify-center hidden w-6 h-6 rounded-full md:flex md:w-10 md:h-10"
            src={logo}
            alt="career"
          />
          <div className="w-full">
            <div className="flex items-center justify-between">
              <ExternalLink
                href={url}
                className="flex flex-col md:flex-row space-y-1 md:space-y-0"
              >
                <span className="text-lg font-medium text-gray-900 dark:text-gray-200">
                  {type}
                </span>
              </ExternalLink>
              <p className="text-sm text-secondary text-gray-500">{time}</p>
            </div>
            <p className="text-gray-500 text-sm mt-1 md:mt-0">{title}</p>
            <p className="mb-1.5 mt-2 prose text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CareerCard;
