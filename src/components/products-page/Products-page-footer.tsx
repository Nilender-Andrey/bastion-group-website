import React from 'react';
import styled from 'styled-components/macro';
import { OptionsButton } from '../components';
import arrowDownIcon from '../../assets/icon/arrow-down.svg';

const ProductsPageFooter = () => {
  return (
    <ProductsPageFooterContainer>
      <ProductsPageFooterTitle>
        Опоры трубопроводов от Бастион Груп - производитель металлических
        изделий №1
      </ProductsPageFooterTitle>

      <ProductsPageFooterText>
        Надежность работы трубопровода в значительной мере зависит от
        правильности и прочности его крепления. Основные средства крепления
        трубопроводов — это опора, подвеска, кронштейны, скобы и другие части
        опорных конструкций. <br /> Мы изготавливаем типовые опоры трубопроводов
        по нижеперечисленным существующим нормативным документам, а также
        изготовим любые нестандартные опоры трубопроводов по чертежам заказчика.
      </ProductsPageFooterText>
      <ProductsPageFooterText>
        Жесткие и пружинные подвески рассчитаны на вертикальную нагрузку
        горизонтальных и вертикальных участков трубопровода. Основным материалом
        деталей является сталь 17гс-12, 17г1с-12, 14г2-12, 09г2с-14, 20, 20к и
        пр.
      </ProductsPageFooterText>
      <ProductsPageFooterText>
        Марка стали выбирается исходя от параметров окружающей среды, опоры
        могут использоваться при температуре от -60°C. Конструкции опор,
        представленные на сайте, отличаются между собой методом крепления с
        трубопроводом и несущей способностью.
      </ProductsPageFooterText>
      <ProductsPageFooterText>
        Подвески являются сборными устройствами, соединяются при помощи сварки.
        Сварные швы отвечают требованиям СНиП III-18-75, СНиП II-23-81.
        Резьбовые части опор обрабатываются антикоррозионной смазкой ПВК по ГОСТ
        19537-83 или ее аналогом.
      </ProductsPageFooterText>

      <ProductsPageFooterShowButton>
        Скрыть описание
      </ProductsPageFooterShowButton>
    </ProductsPageFooterContainer>
  );
};

export default ProductsPageFooter;

const ProductsPageFooterContainer = styled.div`
  padding: 30px 0 0 0;
`;

const ProductsPageFooterTitle = styled.h3`
  margin-bottom: 20px;

  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.009em;
  color: #000000;
`;

const ProductsPageFooterText = styled.p`
  margin-bottom: 18px;

  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.009em;
  color: #000000;
`;

const ProductsPageFooterShowButton = styled(OptionsButton)`
  height: fit-content;
  width: fit-content;
  padding: 0;

  font-weight: 400;
  font-size: 15px;
  color: #c93e33;

  &:before {
    display: none;
  }
  &:after {
    content: '';
    width: 8px;
    height: 8px;
    margin-left: 5px;
    transform: rotate(180deg);

    background: url(${arrowDownIcon}) center no-repeat;
  }
`;
