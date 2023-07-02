import Copyright from '@/components/common/footer/copyright';
import FooterMain from '@/components/common/footer/footer-main';
import MailSubscribe from '@/components/common/footer/mail-subscribe';

const footerStyle = { backgroundColor: '#cfcecce' };

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <FooterMain />
      <MailSubscribe />
      <Copyright />
    </footer>
  );
};

export default Footer;
