import { Career, career } from 'data/work/career';
import { ExternalLink } from './Footer';
import { Labels } from './Label';

type Props = {
  career: Career;
  last: boolean;
};

const CareerCard = ({
  career: { title, description, time, type, tech, url, logo },
  last
}: Props) => {
  return (
    <li className="py-2">
      <div className="relative">
        {!last && (
          <span
            className="hidden md:block absolute top-4 left-3 md:left-5 h-full w-0.5 bg-accent"
            aria-hidden="true"
          />
        )}
        <div className="relative flex items-start md:space-x-3">
          <img
            className="items-center justify-center hidden w-6 h-6 rounded-full md:flex md:w-10 md:h-10 ring-2 ring-offset-blue-800"
            src={logo}
            alt="career"
          />
          <div className="w-full">
            <div className="flex items-center justify-between">
              <ExternalLink href={url}>
                <span className="text-lg font-medium">{title}</span>
              </ExternalLink>
              <p className="text-sm text-secondary">{time}</p>
            </div>
            <p className="mb-1.5 prose ">{description}</p>
            <Labels labels={tech} variant="15" max={5} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CareerCard;
