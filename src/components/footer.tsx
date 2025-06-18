import myContact from "../assets/my contact.json";
export default function Footer() {
  const year = new Date().getFullYear();
  //this contain my formal contact githup linkedin phone number email etc
  return (
    <footer>
      <div className="footer-content">
        <p>© {2025} Yosef El Desoky. All rights reserved.</p>
        <p>
          {myContact.contacts.map((contact, index) => (
            <a
              key={contact.name + index}
              href={contact.url.includes("@") ? `https://mail.google.com/mail/?view=cm&to=${contact.url}` : contact.url}
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
