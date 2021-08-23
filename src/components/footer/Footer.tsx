import React, { FC } from 'react';
import { } from 'antd';
import { useTranslation } from 'react-i18next'

export const Footer: FC = () => {
  const { t } = useTranslation()
  return (
    <div style={{ textAlign: 'center' }}>
      {t('footer.detail')}
    </div>
  )
}

export default Footer;