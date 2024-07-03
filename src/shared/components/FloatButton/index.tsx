'use client';

import { FaArrowUp } from 'react-icons/fa';
import * as S from './styles';

export default function FloatButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <S.FloatButton onClick={scrollToTop}>
      <FaArrowUp />
    </S.FloatButton>
  );
}
