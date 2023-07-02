import 'twin.macro';

import { FooterMainLi } from '@/components/common/footer/footer-main/index';

import { EnglishIcon } from '@/assets/images/icon';

const FooterLang = () => {
  return (
    <FooterMainLi>
      Languages
      <button tw={'my-2 ml-3 block'}>
        <EnglishIcon width={60} />
      </button>
    </FooterMainLi>
  );
};

export default FooterLang;
