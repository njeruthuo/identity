import items from "../data";
import { IconButton } from "./IconButton";

const ContactsList = () => {
  return (
    <div className="socials">
      {items.map((item) => (
        <IconButton icon={item.icon} label={item.label} href={item.href} />
      ))}
    </div>
  );
}
export default ContactsList