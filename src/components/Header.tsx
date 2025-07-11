import Link from "next/link";

import { Notebook } from "lucide-react";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <Notebook className="h-6 w-6" />
        <span className="sr-only">AI Notes</span>
      </Link>
    </header>
  );
};

export default Header;
