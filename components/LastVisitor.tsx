import Image from 'next/image';

const LastUserLocation = (props: { country: string; city: string }) => {
  if (props?.country === 'Unknown' || props?.city === 'Unknown') {
    return null;
  }

  return (
    <div className="flex items-center space-x-2">
      <Image
        alt={`${props.country} flag`}
        className="rounded-full"
        src={`https://flagcdn.com/96x72/${props?.country?.toLowerCase()}.png`}
        width={16}
        height={16}
      />
      <p className="text-gray-500 inline-flex items-center">
        Last visit from {props.city}, {props.country}
      </p>
    </div>
  );
};

export default LastUserLocation;
