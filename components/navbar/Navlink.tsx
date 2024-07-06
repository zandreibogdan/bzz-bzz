import Link from "next/link";

interface NavLinkProps {
  href: string;
  text: string;
  mobile?: boolean;
}
const Navlink: React.FC<NavLinkProps> = ({ href, text, mobile }) => {
  return (
    <Link href={href}>
      <div
        className={`${
          mobile ? "block" : "inline-block"
        } text-offWhite hover:bg-lightAmber px-3 py-2 rounded-md text-sm font-medium transition duration-300`}
      >
        {text}
      </div>
    </Link>
  );
};

export default Navlink;
