import { AdjustmentsHorizontalIcon } from "lib/@heroicons";
import PopMenu from "components/PopMenu";

export default function SearchFilter() {
  const links = [
    { href: "/All", label: "All" },
    { href: "/Pending", label: "Pending" },
    { href: "/Ready", label: "Ready" },
    { href: "/Sent", label: "Sent" },
    { href: "/Completed", label: "Completed" },
    { href: "/Canceled", label: "Canceled" },
  ];

  return (
    <div>
      <PopMenu
        links={links}
        menuButton={<AdjustmentsHorizontalIcon height={24} width={24} />}
      />
    </div>
  );
}
