import Link from 'next/link';
import {
  ADDRESS,
  CENTER_LINKS,
  COMPANY,
  HELP,
  JOIN_BTN,
  LEFT_LINKS,
  PAYMENT_METHOD,
  PROMOTIONS,
  RIGHT_LINKS,
  SECURE,
  SHOP,
  SOCIAL_MEDIA_ICONS,
  STORE_EMAIL,
  STORE_NAME,
  STORE_NUMBER,
  SUBSCRIBE,
} from '../../../constants/footer';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-2">
      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* right */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-6">
          <Link href="/">
            <h2 className="tracking-wider text-2xl">{STORE_NAME}</h2>
          </Link>

          <p>{ADDRESS}</p>
          <span className="font-semibold">{STORE_EMAIL}</span>
          <span className="font-semibold">{STORE_NUMBER}</span>
          <div className="flex gap-6">
            {SOCIAL_MEDIA_ICONS.map((icon) => (
              <Image
                key={icon.key}
                src={icon.imgSrc}
                width={16}
                height={16}
                alt={icon.alt}
              />
            ))}
          </div>
        </div>
        {/* center */}
        <div className="hidden lg:flex justify-between w-1/2 ">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">{COMPANY}</h1>
            <div className="flex flex-col gap-6">
              {LEFT_LINKS.map((item) => (
                <Link
                  href={item.link}
                  key={item.key}
                  className="hover:text-pinkColor"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">{SHOP}</h1>
            <div className="flex flex-col gap-6">
              {CENTER_LINKS.map((item) => (
                <Link
                  href={item.link}
                  key={item.key}
                  className="hover:text-pinkColor"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">{HELP}</h1>
            <div className="flex flex-col gap-6">
              {RIGHT_LINKS.map((item) => (
                <Link
                  href={item.link}
                  key={item.key}
                  className="hover:text-pinkColor"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* left */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-6">
          <h2 className="font-semibold text-xl tracking-wide">{SUBSCRIBE}</h2>
          <p>{PROMOTIONS}</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-pinkColor text-white">
              {JOIN_BTN}
            </button>
          </div>
          <span className="font-semibold">{SECURE}</span>
          <div className="flex gap-6">
            {PAYMENT_METHOD.map((icon) => (
              <Image
                key={icon.key}
                src={icon.imgSrc}
                width={40}
                height={20}
                alt={icon.alt}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div>
        <span></span>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
