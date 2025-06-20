import myContact from "../assets/my contact.json";
export default function Footer() {
  const getLink = (url: string,name:string) => {
    if (name === "email") {
      return `https://mail.google.com/mail/?view=cm&to=${url}`;
    }else if (name === "phone") {
      return `tel:${url}`;
    }else if (name === "whatsapp") {
      return `https://wa.me/${url}`;  
    }
    return url;
  };
  //this contain my formal contact githup linkedin phone number email etc
  return (
    <footer>
      <div className="footer-content">
        <p>© {2025} Yosef El Desoky. All rights reserved.</p>
        <p>
          {myContact.contacts.map((contact, index) => (
            <a
              key={contact.name + index}
              href={getLink(contact.url,contact.name)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img key={contact.name + index} src={contact.icon} alt="icon"></img>
            </a>
          ))}
        </p>
      </div>
    </footer>
  );
}
